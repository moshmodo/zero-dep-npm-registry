const fs = require('node:fs');
const https = require('node:https');

const REGISTRY_FILE = 'config/registry.json';
const NPM_SEARCH_URL = 'https://registry.npmjs.org/-/v1/search';
const REQUEST_DELAY_MS = Number(process.env.NPM_REQUEST_DELAY_MS || 6000);
const REQUEST_TIMEOUT_MS = 15000;
const MAX_RETRIES = 5;
const DEFAULT_PAGE_SIZE = 20;

const args = new Set(process.argv.slice(2));
const dryRun = args.has('--dry-run');
const limit = readLimit();

const registry = JSON.parse(fs.readFileSync(REGISTRY_FILE, 'utf8'));
if (!Array.isArray(registry)) throw new Error(`${REGISTRY_FILE} must contain an array.`);

const cache = new Map();
let matched = 0;
let missing = 0;
let ambiguous = 0;
let errors = 0;

run().catch(error => {
  console.error(`Fatal error: ${error.message}`);
  process.exitCode = 1;
});

async function run() {
  const packages = limit === null ? registry : registry.slice(0, limit);
  const updated = [...registry];

  for (let index = 0; index < packages.length; index += 1) {
    const entry = packages[index];
    const repository = parseGitHubRepository(entry.url);
    process.stdout.write(`[${index + 1}/${packages.length}] ${entry.name}: `);

    if (!repository) {
      updated[index] = { ...entry, npmName: null };
      missing += 1;
      console.log('invalid GitHub URL');
      continue;
    }

    if ((typeof entry.npmName === 'string' && entry.npmName.length > 0) ||
      (Array.isArray(entry.npmName) && entry.npmName.length > 0)) {
      console.log(Array.isArray(entry.npmName) ? entry.npmName.join(', ') : entry.npmName);
      continue;
    }

    try {
      const results = await searchNpm(repository);
      const exactMatches = results.filter(result =>
        result.repository && sameRepository(result.repository, repository)
      );

      if (exactMatches.length === 1) {
        updated[index] = { ...entry, npmName: exactMatches[0].name };
        matched += 1;
        console.log(exactMatches[0].name);
      } else if (exactMatches.length > 1) {
        const names = exactMatches.map(result => result.name);
        updated[index] = { ...entry, npmName: names };
        matched += 1;
        ambiguous += 1;
        console.log(`multiple matches (${names.join(', ')})`);
      } else {
        updated[index] = { ...entry, npmName: null };
        missing += 1;
        console.log('not found');
      }
    } catch (error) {
      updated[index] = { ...entry, npmName: null };
      errors += 1;
      console.log(`error (${error.message})`);
    }

    if (index < packages.length - 1) await sleep(REQUEST_DELAY_MS);
  }

  if (limit !== null) {
    console.log(`\nLimit enabled: only the first ${limit} entries were processed.`);
  }

  if (!dryRun) {
    fs.writeFileSync(REGISTRY_FILE, JSON.stringify(updated, null, 2) + '\n');
    console.log(`\nUpdated ${REGISTRY_FILE}.`);
  } else {
    console.log('\nDry run: no files were changed.');
  }

  console.log(`Matched: ${matched}; missing: ${missing}; ambiguous: ${ambiguous}; errors: ${errors}`);
}

function searchNpm(repository) {
  const key = `${repository.owner}/${repository.name}`.toLowerCase();
  if (cache.has(key)) return cache.get(key);

  const promise = requestJson(`${NPM_SEARCH_URL}?text=${encodeURIComponent(`repository:github.com/${key}`)}&size=${DEFAULT_PAGE_SIZE}`)
    .then(body => (body.objects || []).map(object => ({
      name: object.package?.name,
      repository: object.package?.links?.repository
    })).filter(result => result.name));
  cache.set(key, promise);
  return promise;
}

async function requestJson(url, attempt = 0) {
  try {
    return await requestJsonOnce(url);
  } catch (error) {
    if (attempt >= MAX_RETRIES || !error.retryAfterMs) throw error;
    const delay = Math.min(error.retryAfterMs * 2 ** attempt, 120000);
    console.warn(`\nRate limited; retrying in ${Math.ceil(delay / 1000)}s...`);
    await sleep(delay);
    return requestJson(url, attempt + 1);
  }
}

function requestJsonOnce(url) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, {
      headers: { 'User-Agent': 'Zero-Dep-Registry-Builder', Accept: 'application/json' }
    }, response => {
      let data = '';
      response.setEncoding('utf8');
      response.on('data', chunk => { data += chunk; });
      response.on('end', () => {
        if (response.statusCode !== 200) {
          const error = new Error(`npm API returned HTTP ${response.statusCode}`);
          if (response.statusCode === 429 || response.statusCode === 403) {
            const retryAfter = Number(response.headers['retry-after']);
            error.retryAfterMs = Number.isFinite(retryAfter) ? retryAfter * 1000 : 60000;
          }
          reject(error);
          return;
        }
        try { resolve(JSON.parse(data)); } catch { reject(new Error('invalid npm API response')); }
      });
    });
    request.setTimeout(REQUEST_TIMEOUT_MS, () => request.destroy(new Error('request timeout')));
    request.on('error', reject);
  });
}

function parseGitHubRepository(url) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.toLowerCase() !== 'github.com') return null;
    const parts = parsed.pathname.split('/').filter(Boolean);
    if (parts.length < 2) return null;
    return { owner: parts[0], name: parts[1].replace(/\.git$/, '') };
  } catch { return null; }
}

function sameRepository(url, expected) {
  const actual = parseRepositoryUrl(url);
  return actual && actual.owner.toLowerCase() === expected.owner.toLowerCase() &&
    actual.name.toLowerCase() === expected.name.toLowerCase();
}

function parseRepositoryUrl(value) {
  if (typeof value !== 'string') return null;
  const normalized = value.replace(/^git\+/, '').replace(/^git@github\.com:/i, 'https://github.com/');
  try {
    const parsed = new URL(normalized);
    if (parsed.hostname.toLowerCase() !== 'github.com') return null;
    const parts = parsed.pathname.split('/').filter(Boolean);
    if (parts.length < 2) return null;
    return { owner: parts[0], name: parts[1].replace(/\.git$/, '') };
  } catch { return null; }
}

function readLimit() {
  const value = process.argv.find(argument => argument.startsWith('--limit='))?.split('=')[1];
  if (value === undefined) return null;
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed < 1) throw new Error('--limit must be a positive integer.');
  return parsed;
}

function sleep(milliseconds) { return new Promise(resolve => setTimeout(resolve, milliseconds)); }