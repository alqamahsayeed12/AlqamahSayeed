// GitHub Pages Deployment Script
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Copy 404.html to dist folder
function copy404Page() {
  console.log('Copying 404.html to dist folder...');
  fs.copyFileSync('./client/public/404.html', './dist/404.html');
  console.log('404.html copied successfully.');
}

// Build the React app with GitHub Pages configuration
function buildForGitHubPages() {
  console.log('Building React app for GitHub Pages...');
  try {
    execSync('npx vite build --config vite.config.gh-pages.js', { stdio: 'inherit' });
    console.log('Build completed successfully.');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

// Main function
async function main() {
  console.log('Starting GitHub Pages deployment build...');
  
  // Build the app with GitHub Pages config
  buildForGitHubPages();
  
  // Copy 404.html to the dist folder
  copy404Page();
  
  console.log('GitHub Pages deployment build complete!');
  console.log('Your app is ready to be deployed to GitHub Pages.');
  console.log('Next steps:');
  console.log('1. Push your code to GitHub');
  console.log('2. Go to your repository settings');
  console.log('3. Under "GitHub Pages", select the "gh-pages" branch as the source');
  console.log('4. Your site will be published at https://your-username.github.io/your-repo-name/');
}

main();