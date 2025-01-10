const fs = require('fs');
const execSync = require('child_process').execSync;

// Set Git identity
execSync('git config --local user.name "Zakirhassan"');
execSync('git config --local user.email "zakirhassan114@gmail.com"');

// Get the current date and time
const date = new Date();
const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
  .toString()
  .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ` +
  `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes()
    .toString()
    .padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;

// Define the file path
const filePath = 'DailyUpdate.txt';

// Generate random text
const randomText = `Here's a random thought for ${formattedDate}: Stay curious and keep learning!\n`;

// Append to the file, or create it if it doesn't exist
fs.appendFileSync(filePath, `${randomText}\n`);

// Git commit and push commands
execSync(`git add ${filePath}`);
execSync(`git commit -m "Daily update for ${formattedDate}"`);
execSync(`git push https://Zakirhassan:${process.env.PAT_TOKEN}@github.com/Zakirhassan/Daily-Update.git`);
