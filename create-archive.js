// create-archive.js
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

console.log("Creating TAR archive of the deploy folder...");

// Use Node.js to execute the tar command
exec('tar -czf deploy.tar.gz deploy/', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Warning: ${stderr}`);
  }
  
  // Check if the file was created
  if (fs.existsSync('deploy.tar.gz')) {
    console.log("✅ Archive created successfully: deploy.tar.gz");
    console.log("You can now download this file from the Replit file explorer.");
    
    // Get file size
    const stats = fs.statSync('deploy.tar.gz');
    const fileSizeInBytes = stats.size;
    const fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
    console.log(`File size: ${fileSizeInMegabytes.toFixed(2)} MB`);
  } else {
    console.error("❌ Failed to create archive.");
  }
});