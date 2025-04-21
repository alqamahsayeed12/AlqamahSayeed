import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of files/directories to include in the distribution package
const filesToInclude = [
  'client/src',
  'shared',
  'deploy-gh-pages.js',
  'static-deploy.js',
  'vite.config.static.ts',
  'DEPLOYMENT_GUIDE.md',
  'DEPLOYMENT_CHECKLIST.md',
  'MANUAL_DEPLOYMENT_STEPS.md',
  'package.json',
  'tsconfig.json',
  'postcss.config.js',
  'tailwind.config.ts',
];

// Create a temporary directory for the package
const tempDir = path.join(__dirname, 'gh-pages-deploy');
const archiveName = 'alqamahsayeed-portfolio-deploy';

console.log('Creating deployment package...');

try {
  // Create or clean temp directory
  if (fs.existsSync(tempDir)) {
    console.log('Cleaning temporary directory...');
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
  
  fs.mkdirSync(tempDir, { recursive: true });
  
  // Copy files to the temporary directory
  console.log('Copying required files...');
  
  filesToInclude.forEach(file => {
    const sourcePath = path.join(__dirname, file);
    const destPath = path.join(tempDir, file);
    
    // Create directory structure if needed
    const destDir = path.dirname(destPath);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    
    if (fs.statSync(sourcePath).isDirectory()) {
      // Copy directory recursively using an external command
      execSync(`cp -r "${sourcePath}" "${destPath}"`);
    } else {
      // Copy file
      fs.copyFileSync(sourcePath, destPath);
    }
  });
  
  // Create a minimal package.json with only the necessary scripts and dependencies
  console.log('Creating simplified package.json...');
  
  const fullPackageJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
  const minimalPackageJson = {
    name: 'alqamahsayeed-portfolio',
    version: fullPackageJson.version || '1.0.0',
    private: true,
    scripts: {
      "build": "vite build --config vite.config.static.ts",
      "deploy": "node deploy-gh-pages.js",
      "prepare": "npm install && node static-deploy.js"
    },
    dependencies: {},
    devDependencies: {}
  };
  
  // Only include required dependencies
  const requiredDependencies = [
    'react', 
    'react-dom', 
    'framer-motion', 
    'lucide-react', 
    'react-icons', 
    'tailwindcss', 
    'wouter'
  ];
  
  const requiredDevDependencies = [
    '@types/react', 
    '@types/react-dom', 
    '@vitejs/plugin-react', 
    'typescript', 
    'vite'
  ];
  
  requiredDependencies.forEach(dep => {
    if (fullPackageJson.dependencies && fullPackageJson.dependencies[dep]) {
      minimalPackageJson.dependencies[dep] = fullPackageJson.dependencies[dep];
    }
  });
  
  requiredDevDependencies.forEach(dep => {
    if (fullPackageJson.devDependencies && fullPackageJson.devDependencies[dep]) {
      minimalPackageJson.devDependencies[dep] = fullPackageJson.devDependencies[dep];
    }
  });
  
  fs.writeFileSync(
    path.join(tempDir, 'package.json'), 
    JSON.stringify(minimalPackageJson, null, 2)
  );
  
  // Create a README file
  console.log('Creating README...');
  const readmeContent = `# Alqamah Sayeed Portfolio - Deployment Package

This package contains all the files needed to build and deploy your portfolio website to GitHub Pages.

## Quick Start

1. Extract this archive to a local directory
2. Open a terminal in that directory
3. Run the following commands:

\`\`\`bash
npm install
npm run prepare
npm run deploy
\`\`\`

For detailed instructions, please read the DEPLOYMENT_GUIDE.md file.
`;
  
  fs.writeFileSync(path.join(tempDir, 'README.md'), readmeContent);
  
  // Create the zip archive
  console.log('Creating zip archive...');
  execSync(`cd "${tempDir}" && zip -r ../${archiveName}.zip .`);
  
  console.log(`\nDeployment package created: ${archiveName}.zip`);
  console.log('You can download this file and follow the instructions in the README.md and DEPLOYMENT_GUIDE.md files to deploy your site.');
  
  // Clean up
  console.log('Cleaning up...');
  fs.rmSync(tempDir, { recursive: true, force: true });
  
} catch (error) {
  console.error('Error creating deployment package:', error);
  process.exit(1);
}