const fs = require('node:fs');

const REGISTRY_FILE = 'registry.json';
const README_FILE = 'README.md';

const SECTION_START = '<!-- REGISTRY_TABLE_START -->';
const SECTION_END = '<!-- REGISTRY_TABLE_END -->';

console.log(`Reading ${REGISTRY_FILE}...`);

const registry = JSON.parse(fs.readFileSync(REGISTRY_FILE, 'utf8'));

// Sort alphabetically by name (A to Z), case-insensitive
const sorted = [...registry].sort((a, b) =>
  a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
);

console.log(`Building table for ${sorted.length} packages...`);

// Build the Markdown table
const header = '| Name | Full Name | Description | Stars |\n|------|-----------|-------------|------:|';

const rows = sorted.map(pkg => {
  const name = `[${escapeMarkdown(pkg.name)}](${pkg.url})`;
  const fullName = escapeMarkdown(pkg.fullName);
  const description = escapeMarkdown(pkg.description || '');
  const stars = pkg.stars.toLocaleString('en-US');
  return `| ${name} | ${fullName} | ${description} | ${stars} |`;
});

const table = [header, ...rows].join('\n');

const newSection = `${SECTION_START}\n\n${table}\n\n${SECTION_END}`;

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
console.log(`\nSuccess! README.md updated with ${sorted.length} packages.`);

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
