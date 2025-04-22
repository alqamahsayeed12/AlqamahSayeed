import { execSync } from 'child_process';
import fs from 'fs';

// Run both static build and deployment scripts in sequence
console.log('=== GITHUB PAGES DEPLOYMENT PROCESS ===');
console.log('');
console.log('Step 1: Generate static build');
console.log('-------------------------------');

try {
  // First run the static build
  execSync('node static-deploy.js', { stdio: 'inherit' });
  
  console.log('');
  console.log('Step 2: Deploy to GitHub Pages');
  console.log('-------------------------------');
  
  // Then run the deployment
  execSync('node deploy-gh-pages.js', { stdio: 'inherit' });
  
  console.log('');
  console.log('=== DEPLOYMENT COMPLETED SUCCESSFULLY ===');
  console.log('Your portfolio should be available at: https://alqamahsayeed.github.io');
  console.log('Note: It might take a few minutes for changes to appear.');
  console.log('');
  console.log('If you encounter any issues, refer to the GITHUB_PAGES_DEPLOYMENT_GUIDE.md file');
  
} catch (error) {
  console.error('Deployment process failed:', error);
  console.log('');
  console.log('Please check the error message above and refer to GITHUB_PAGES_DEPLOYMENT_GUIDE.md for troubleshooting.');
  process.exit(1);
}