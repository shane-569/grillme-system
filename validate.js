const fs = require('fs');

const requiredFiles = [
  'docs/GRILLME.md',
  'docs/REQUIREMENTS.md',
  'docs/TASKS.md',
  'docs/CODE_STANDARDS.md'
];

let failed = false;

requiredFiles.forEach(file => {
  if (!fs.existsSync(file)) {
    console.error(`❌ Missing file: ${file}`);
    failed = true;
  }
});

if (failed) {
  console.error('Validation failed.');
  process.exit(1);
} else {
  console.log('✅ Structure valid');
}
