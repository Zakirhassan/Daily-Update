const fs = require('fs');
const execSync = require('child_process').execSync;

// Set Git identity
execSync('git config --local user.name "Zakirhassan"');
execSync('git config --local user.email "zakirhassan114@gmail.com"');

// Get the current date and format it to append to the filename
const date = new Date();
const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
  .toString()
  .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}_` +
  `${date.getHours().toString().padStart(2, '0')}-${date.getMinutes().toString().padStart(2, '0')}-${date.getSeconds().toString().padStart(2, '0')}`;


// Define the new file path with the date appended to the filename
const filePath = `DailyUpdate_${formattedDate}.txt`;

// Create the content for the new file
const newContent = `Bursting with imagery, motion, interaction and distraction though it is, today’s World Wide Web is still primarily a conduit for textual information...

\n\nDaily update: **${formattedDate}** \n\n`;

// Write the new content to the newly created file
fs.writeFileSync(filePath, newContent);

// Git commit and push commands
execSync(`git add ${filePath}`);
execSync(`git commit -m "Daily update for ${formattedDate}"`);
execSync(`git push https://Zakirhassan:${process.env.PAT_TOKEN}@github.com/Zakirhassan/Daily-Update.git`);
