const fs = require('fs');
const execSync = require('child_process').execSync;

const filePath = 'README.md';
const date = new Date().toLocaleDateString();

let readmeContent = fs.readFileSync(filePath, 'utf-8');
const newContent = `\n\nDaily update: ${date}`;
readmeContent += newContent;

fs.writeFileSync(filePath, readmeContent);

execSync('git add README.md');
execSync('git commit -m "Daily update"');
execSync('git push');
