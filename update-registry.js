const fs = require('node:fs');
const https = require('node:https');

// Search configuration
const TOPIC = 'zero-dependency';
const OUTPUT_FILE = 'registry.json';

// Date ranges to split the search and bypass GitHub's 1000-result limit per query.
// Each range covers a time window; adjust or add ranges as the registry grows over time.
const DATE_RANGES = [
  '2010-01-01..2018-12-31',
  '2019-01-01..2020-12-31',
  '2021-01-01..2021-12-31',
  '2022-01-01..2022-12-31',
  '2023-01-01..2023-12-31',
  '2024-01-01..2024-12-31',
  '2025-01-01..2025-12-31',
  '2026-01-01..2099-12-31',
];

console.log(`Fetching GitHub repos with topic "${TOPIC}"...`);

let allRepos = [];
let seenIds = new Set();

function fetchPage(dateRange, page) {
  const pageUrl = `https://api.github.com/search/repositories?q=topic:${TOPIC}+language:JavaScript+language:TypeScript+created:${dateRange}&per_page=100&page=${page}&sort=stars&order=desc`;

  console.log(`  [${dateRange}] Fetching page ${page}...`);

  https.get(pageUrl, {
    headers: { 'User-Agent': 'Zero-Dep-Registry-Builder' }
  }, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });

    res.on('end', () => {
      if (res.statusCode === 422) {
        // GitHub Search API hard limit: max 1000 results per query
        console.log(`  [${dateRange}] GitHub API limit reached at page ${page} (max 1000 results per query).`);
        fetchNextRange(dateRange);
        return;
      }

      if (res.statusCode === 403) {
        // Rate limit hit — wait and retry
        const retryAfter = parseInt(res.headers['retry-after'] || '60', 10);
        console.warn(`  [${dateRange}] Rate limit hit. Retrying in ${retryAfter}s...`);
        setTimeout(() => fetchPage(dateRange, page), retryAfter * 1000);
        return;
      }

      if (res.statusCode !== 200) {
        console.error(`  [${dateRange}] Failure (Status ${res.statusCode}) on page ${page}.`);
        fetchNextRange(dateRange);
        return;
      }

      const json = JSON.parse(data);
      const repos = json.items || [];

      // Deduplicate by repo id
      const newRepos = repos.filter(r => !seenIds.has(r.id));
      newRepos.forEach(r => seenIds.add(r.id));
      allRepos = allRepos.concat(newRepos);

      console.log(`  [${dateRange}] Page ${page}: ${repos.length} repos (${newRepos.length} new, ${allRepos.length} total)`);

      if (repos.length === 100) {
        fetchPage(dateRange, page + 1);
        return;
      }

      fetchNextRange(dateRange);
    });
  }).on('error', (err) => {
    console.error(`  [${dateRange}] Connection error on page ${page}:`, err.message);
    fetchNextRange(dateRange);
  });
}

function fetchNextRange(currentRange) {
  const currentIndex = DATE_RANGES.indexOf(currentRange);
  const nextIndex = currentIndex + 1;

  if (nextIndex < DATE_RANGES.length) {
    const nextRange = DATE_RANGES[nextIndex];
    console.log(`\nStarting range: ${nextRange}`);
    fetchPage(nextRange, 1);
  } else {
    // All ranges done
    processResults(allRepos);
  }
}

function processResults(allRepos) {
  // Format data to keep only relevant information for the registry
  // Filter npm ecosystem only (JavaScript / TypeScript)
  const registry = allRepos
    .filter(repo => repo.language === 'TypeScript' || repo.language === 'JavaScript')
    .map(repo => ({
      name: repo.name,
      fullName: repo.full_name,
      description: repo.description || '',
      url: repo.html_url,
      stars: repo.stargazers_count,
      ecosystem: 'npm',
      keywords: [repo.language?.toLowerCase(), ...(repo.topics || [])].filter(Boolean)
    }));

  // Sort packages from the most popular to the least popular
  registry.sort((a, b) => b.stars - a.stars);

  // Save file locally (overwrites existing file)
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(registry, null, 2), { flag: 'w' });
  console.log(`\nSuccess ! ${registry.length} npm packages saved to ${OUTPUT_FILE}`);
}

// Start with the first date range
const firstRange = DATE_RANGES[0];
console.log(`\nStarting range: ${firstRange}`);
fetchPage(firstRange, 1);
