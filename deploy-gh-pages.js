import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const BUILD_DIR = 'dist';
const GITHUB_PAGES_BRANCH = 'gh-pages';
const GITHUB_REPO = 'alqamahsayeed.github.io';

// Create a clean build
console.log('1. Building the project...');
try {
  execSync('npm run build', { stdio: 'inherit' });
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}

// Ensure .nojekyll file exists (prevents GitHub from processing your site with Jekyll)
console.log('2. Adding .nojekyll file...');
fs.writeFileSync(path.join(BUILD_DIR, '.nojekyll'), '');

// Copy CNAME file if needed for custom domain
// fs.writeFileSync(path.join(BUILD_DIR, 'CNAME'), 'yourdomain.com');

// Add a deployment script for GitHub Pages
console.log('3. Deploying to GitHub Pages...');
try {
  // Initialize a new git repository in the build directory
  process.chdir(BUILD_DIR);
  
  execSync('git init', { stdio: 'inherit' });
  execSync('git add -A', { stdio: 'inherit' });
  execSync('git commit -m "Deploy to GitHub Pages"', { stdio: 'inherit' });
  
  // Push to the gh-pages branch
  console.log(`Pushing to ${GITHUB_REPO} repository...`);
  execSync(`git push -f git@github.com:alqamahsayeed/${GITHUB_REPO}.git main:${GITHUB_PAGES_BRANCH}`, { stdio: 'inherit' });
  
  console.log('\nDeployment complete! Your site will be available at https://alqamahsayeed.github.io shortly.');
  
  process.chdir('..');
} catch (error) {
  console.error('Deployment failed:', error);
  console.log('\nManual deployment instructions:');
  console.log('1. Create a new GitHub repository named alqamahsayeed.github.io');
  console.log('2. Initialize git in the dist directory: cd dist && git init');
  console.log('3. Add files: git add -A');
  console.log('4. Commit: git commit -m "Deploy to GitHub Pages"');
  console.log('5. Add your GitHub repository as remote: git remote add origin https://github.com/alqamahsayeed/alqamahsayeed.github.io.git');
  console.log('6. Push to main: git push -f origin main');
  
  process.exit(1);
}