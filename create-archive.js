import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Build the static site
console.log('Building static site...');
try {
  execSync('npx vite build --config vite.config.static.ts', { stdio: 'inherit' });
} catch (error) {
  console.error('Error building static site:', error);
  process.exit(1);
}

// Create .nojekyll file (required for GitHub Pages)
fs.writeFileSync(path.resolve('./dist/.nojekyll'), '');

// Create index.html in the root for GitHub Pages
const indexContent = fs.readFileSync(path.resolve('./dist/index.html'), 'utf8');
fs.writeFileSync(path.resolve('./dist/index.html'), indexContent);

// Create a README.md file with deployment instructions
const readmeContent = `# Alqamah Sayeed Portfolio

This is the static website for Alqamah Sayeed's professional portfolio.

## Deployment

This site is deployed to GitHub Pages at: https://alqamah-sayeed.github.io

## Development

This site was built using:
- React
- TypeScript
- Tailwind CSS
`;

fs.writeFileSync(path.resolve('./dist/README.md'), readmeContent);

// Create the archive
console.log('Creating archive...');
execSync('tar -czf github-pages-deploy.tar.gz -C dist .', { stdio: 'inherit' });

console.log('\nStatic site archive created successfully!');
console.log('File: github-pages-deploy.tar.gz');
console.log('\nGitHub Pages Deployment Instructions:');
console.log('1. Create a repository named exactly: alqamah-sayeed.github.io');
console.log('2. Extract the contents of github-pages-deploy.tar.gz');
console.log('3. Push these files to the main branch of your repository');
console.log('4. Your site will be live at https://alqamah-sayeed.github.io');