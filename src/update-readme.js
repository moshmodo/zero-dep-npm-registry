const fs = require('node:fs');

const REGISTRY_FILE = 'config/registry.json';
const README_FILE = 'README.md';

const SECTION_START = '<!-- REGISTRY_TABLE_START -->';
const SECTION_END = '<!-- REGISTRY_TABLE_END -->';

console.log(`Reading ${REGISTRY_FILE}...`);

const registry = JSON.parse(fs.readFileSync(REGISTRY_FILE, 'utf8'));

const sections = [
  {
    title: 'Heavy Hitters',
    packages: registry.filter(pkg => pkg.stars > 1000)
  },
  {
    title: 'Rising Stars',
    packages: registry.filter(pkg => pkg.stars > 100 && pkg.stars < 1000)
  },
  {
    title: 'The Wildcards',
    packages: registry.filter(pkg => pkg.stars > 5 && pkg.stars < 100)
  }
].map(section => ({
  ...section,
  packages: section.packages.sort((a, b) => b.stars - a.stars)
}));

const packageCount = sections.reduce((total, section) => total + section.packages.length, 0);
console.log(`Building tables for ${packageCount} packages...`);

const header = '| Name | Full Name | Description | ⭐ | npmjs.com |\n|------|-----------|-------------|------|------:|';

function buildTable(packages) {
  const rows = packages.map(pkg => {
    const name = `[${escapeMarkdown(pkg.name)}](${pkg.url})`;
    const fullName = escapeMarkdown(pkg.fullName);
    const description = escapeMarkdown(pkg.description || '');
    const stars = pkg.stars.toLocaleString('en-US');
    const npmjs = pkg.npmName ? '✅' : '⛔';
    return `| ${name} | ${fullName} | ${description} | ${stars} | ${npmjs} |`;
  });

  return [header, ...rows].join('\n');
}

const newSection = `${SECTION_START}\n\n${sections
  .map(section => `### ${section.title}\n\n${buildTable(section.packages)}`)
  .join('\n\n')}\n\n${SECTION_END}`;

// Read the current README
const readme = fs.readFileSync(README_FILE, 'utf8');

let updatedReadme;

if (readme.includes(SECTION_START) && readme.includes(SECTION_END)) {
  // Replace the existing section
  const startIndex = readme.indexOf(SECTION_START);
  const endIndex = readme.indexOf(SECTION_END) + SECTION_END.length;
  updatedReadme = readme.slice(0, startIndex) + newSection + readme.slice(endIndex);
  console.log('Existing registry table section replaced.');
} else {
  // Append the section at the end of the file
  updatedReadme = readme.trimEnd() + '\n\n---\n\n## Registry\n\n' + newSection + '\n';
  console.log('Registry table section appended to README.');
}

fs.writeFileSync(README_FILE, updatedReadme, 'utf8');
console.log(`\nSuccess! README.md updated with ${packageCount} packages.`);

/**
 * Escapes characters that would break the Markdown table or render as HTML:
 * - Pipe characters (|) → \|
 * - Newlines → space
 * - HTML tags (<...>) → &lt;...&gt;
 * @param {string} str
 * @returns {string}
 */
function escapeMarkdown(str) {
  return str
    .replace(/\|/g, '\\|')
    .replace(/\n/g, ' ')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
