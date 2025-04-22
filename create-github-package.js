import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const OUTPUT_DIR = 'github-pages-package';
const GITHUB_USERNAME = 'alqamahsayeed12';
const GITHUB_REPO = 'alqamahsayeed.github.io';

console.log('=== CREATING GITHUB PAGES DEPLOYMENT PACKAGE ===');

// Step 1: Build the static version first
try {
  console.log('\nStep 1: Building static version of the site...');
  execSync('node static-deploy.js', { stdio: 'inherit' });
} catch (error) {
  console.error('Static build failed:', error);
  process.exit(1);
}

// Step 2: Create output directory
console.log('\nStep 2: Creating deployment package...');
if (fs.existsSync(OUTPUT_DIR)) {
  fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
}
fs.mkdirSync(OUTPUT_DIR);

// Step 3: Copy all files from dist to output directory
console.log('Copying all static files...');
execSync(`cp -r dist/* ${OUTPUT_DIR}/`);

// Step 4: Create package.json for GitHub Pages deployment
console.log('Creating package.json for GitHub Pages deployment...');
const packageJson = {
  "name": "alqamahsayeed-portfolio",
  "version": "1.0.0",
  "private": true,
  "homepage": "https://alqamahsayeed.github.io",
  "scripts": {
    "predeploy": "echo 'Ready to deploy to GitHub Pages'",
    "deploy": `gh-pages -d . -b main -r https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO}.git`
  },
  "devDependencies": {
    "gh-pages": "^6.1.1"
  }
};

fs.writeFileSync(
  path.join(OUTPUT_DIR, 'package.json'),
  JSON.stringify(packageJson, null, 2)
);

// Step 5: Create README with instructions
console.log('Creating README with deployment instructions...');
const readmeContent = `# Alqamah Sayeed Portfolio - GitHub Pages Deployment

This package contains all the files needed to deploy your portfolio to GitHub Pages.

## Deployment Instructions

1. Create a GitHub repository named exactly: \`${GITHUB_REPO}\` under username \`${GITHUB_USERNAME}\`

2. Install dependencies:
   \`\`\`
   npm install
   \`\`\`

3. Deploy to GitHub Pages:
   \`\`\`
   npm run deploy
   \`\`\`

4. Configure GitHub Pages:
   - Go to your repository settings
   - Navigate to Pages in the sidebar
   - Make sure the branch is set to \`main\`

Your site will be published at: https://${GITHUB_REPO}
`;

fs.writeFileSync(
  path.join(OUTPUT_DIR, 'README.md'),
  readmeContent
);

// Step 6: Create ZIP archive for easy download
console.log('\nStep 3: Creating ZIP archive for download...');
try {
  execSync(`zip -r ${OUTPUT_DIR}.zip ${OUTPUT_DIR}`, { stdio: 'inherit' });
  console.log(`\nCreated ${OUTPUT_DIR}.zip successfully!`);
} catch (error) {
  console.error('Failed to create ZIP archive:', error);
  console.log('Package directory was still created successfully at:', OUTPUT_DIR);
}

console.log('\n=== GITHUB PAGES PACKAGE CREATED SUCCESSFULLY ===');
console.log(`
You can now:
1. Download the ${OUTPUT_DIR}.zip file from this Replit
2. Extract it on your local machine
3. Follow the instructions in the README.md file to deploy to GitHub Pages

Your portfolio will be published at: https://${GITHUB_REPO}
`);