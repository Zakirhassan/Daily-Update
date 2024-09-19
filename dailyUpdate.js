const fs = require('fs');
const execSync = require('child_process').execSync;

// Set Git identity
execSync('git config --local user.name "github-actions[bot]"');
execSync('git config --local user.email "github-actions[bot]@users.noreply.github.com"');

// Get the current date and time to append to the filename
const date = new Date();
const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
const formattedTime = `${date.getHours().toString().padStart(2, '0')}-${date.getMinutes().toString().padStart(2, '0')}`;

// Define the new file path with the date and time appended to the filename
const filePath = `DailyUpdate_${formattedDate}_${formattedTime}.txt`;

// Create the content for the new file
const newContent = `Bursting with imagery, motion, interaction and distraction though it is, today’s World Wide Web is still primarily a conduit for textual information...

\n\nDaily update: **${formattedDate} ${formattedTime}** \n\n`;

// Write the new content to the newly created file
fs.writeFileSync(filePath, newContent);

// Git commit and push commands
execSync(`git add ${filePath}`);
execSync(`git commit -m "Daily update for ${formattedDate} at ${formattedTime}"`);
execSync('git push');
