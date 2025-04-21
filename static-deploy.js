import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Create dist directory if it doesn't exist
if (!fs.existsSync(path.resolve('./dist'))) {
  fs.mkdirSync(path.resolve('./dist'));
}

// Create .nojekyll file (required for GitHub Pages)
fs.writeFileSync(path.resolve('./dist/.nojekyll'), '');

console.log('Building static site...');
execSync('npx vite build --config vite.config.static.ts', { stdio: 'inherit' });

console.log('Static site built successfully!');
console.log('Files are in the "dist" directory');
console.log('To deploy to GitHub Pages:');
console.log('1. Create a repository named "alqamah-sayeed.github.io"');
console.log('2. Push the contents of the dist folder to the main branch');
console.log('3. Your site will be live at https://alqamah-sayeed.github.io');