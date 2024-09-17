const fs = require('fs');
const execSync = require('child_process').execSync;

// File path of the README file
const filePath = 'README.md';

// Get the current date to append it
const date = new Date().toLocaleDateString();

// Read the current README file
let readmeContent = fs.readFileSync(filePath, 'utf-8');

// Add new content to the file
const newContent = `\n\nDaily update: ${date}`;
readmeContent += newContent;

// Write the new content back to the README file
fs.writeFileSync(filePath, readmeContent);

// Git commit and push commands
execSync('git add README.md');
execSync('git commit -m "Daily update"');
execSync('git push');
