const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.resolve(__dirname, '..');
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), 'utf8');

test('README presents completed proof instead of a future roadmap', () => {
  const readme = read('README.md');

  assert.match(readme, /## Completed Public Proof/);
  assert.match(readme, /Problem.*Agentic Workflow.*Human Authorization Gate.*Safe Output.*Evidence/s);
  assert.doesNotMatch(readme, /## .*Next Steps/i);
  assert.doesNotMatch(readme, /## .*Suggested Agent Workflows/i);
  assert.doesNotMatch(readme, /Azure App Service/i);
});

test('public page exposes the approved authority path', () => {
  const page = read('public/index.html');

  assert.match(page, /Antonio Branch/);
  assert.match(page, /A\+ Enterprise LLC/);
  assert.match(page, /Cybersecurity \/ GRC/);
  assert.match(page, /BranchOS/);
  assert.match(page, /https:\/\/aplus-enterprise\.com/);
  assert.match(page, /antonio-branch-cyber-portfolio/);
  assert.match(page, /branchbot-agent-lab/);
});

test('repository metadata and workflow describe the public-safety control', () => {
  const packageJson = JSON.parse(read('package.json'));
  const workflow = read('.github/workflows/public-safety.yml');

  assert.equal(packageJson.name, 'branchbot-agent-lab');
  assert.match(packageJson.description, /public-safe agentic workflow proof/i);
  assert.match(workflow, /postgres\(ql\)\?/);
  assert.match(workflow, /hooks\\\.slack\\\.com/);
  assert.match(workflow, /npm test/);
});
