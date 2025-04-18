// static-deploy.js
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a simple deploy script
console.log("📦 Preparing for GitHub Pages deployment...");

// Create temporary build directory if it doesn't exist
if (!fs.existsSync('build')) {
  fs.mkdirSync('build');
}

// Copy client files to build directory
console.log("📂 Copying client files...");
fs.cpSync(path.join(__dirname, 'client'), path.join(__dirname, 'build', 'client'), { recursive: true });

// Copy necessary assets
console.log("📂 Copying assets...");
if (fs.existsSync(path.join(__dirname, 'attached_assets'))) {
  fs.cpSync(path.join(__dirname, 'attached_assets'), path.join(__dirname, 'build', 'attached_assets'), { recursive: true });
}

// Copy shared folder for types
console.log("📂 Copying shared files...");
fs.cpSync(path.join(__dirname, 'shared'), path.join(__dirname, 'build', 'shared'), { recursive: true });

// Copy static vite config
console.log("📄 Copying build configuration...");
fs.copyFileSync(path.join(__dirname, 'vite.config.static.ts'), path.join(__dirname, 'build', 'vite.config.ts'));

// Copy package.json and modify for static build
console.log("📄 Creating package.json for static build...");
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

// Create a simplified version for GitHub Pages
const staticPackageJson = {
  name: "alqamah-sayeed-portfolio",
  version: packageJson.version,
  type: "module",
  private: true,
  homepage: "https://alqamah-sayeed.github.io",
  scripts: {
    "dev": "vite",
    "build": "vite build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  dependencies: {},
  devDependencies: {}
};

// Copy over only the necessary dependencies
const clientDeps = [
  'react', 'react-dom', 'react-hook-form', '@hookform/resolvers', 'react-icons',
  'framer-motion', 'wouter', '@tanstack/react-query', 'clsx', 'class-variance-authority',
  'lucide-react', 'tailwind-merge', 'tailwindcss-animate', 'zod', 'date-fns',
  'cmdk', 'embla-carousel-react', 'next-themes', 'react-day-picker', 'zod-validation-error'
];

const uiDeps = [
  '@radix-ui/react-accordion', '@radix-ui/react-alert-dialog', '@radix-ui/react-aspect-ratio',
  '@radix-ui/react-avatar', '@radix-ui/react-checkbox', '@radix-ui/react-collapsible',
  '@radix-ui/react-context-menu', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu',
  '@radix-ui/react-hover-card', '@radix-ui/react-label', '@radix-ui/react-menubar',
  '@radix-ui/react-navigation-menu', '@radix-ui/react-popover', '@radix-ui/react-progress',
  '@radix-ui/react-radio-group', '@radix-ui/react-scroll-area', '@radix-ui/react-select',
  '@radix-ui/react-separator', '@radix-ui/react-slider', '@radix-ui/react-slot',
  '@radix-ui/react-switch', '@radix-ui/react-tabs', '@radix-ui/react-toast',
  '@radix-ui/react-toggle', '@radix-ui/react-toggle-group', '@radix-ui/react-tooltip'
];

// Add client dependencies
for (const dep of [...clientDeps, ...uiDeps]) {
  if (packageJson.dependencies[dep]) {
    staticPackageJson.dependencies[dep] = packageJson.dependencies[dep];
  }
}

// Add dev dependencies
const devDeps = [
  'vite', '@vitejs/plugin-react', 'gh-pages', 'tailwindcss', 'postcss',
  'autoprefixer', '@types/react', '@types/react-dom', 'typescript',
  '@tailwindcss/typography', '@tailwindcss/vite'
];

for (const dep of devDeps) {
  if (packageJson.devDependencies[dep]) {
    staticPackageJson.devDependencies[dep] = packageJson.devDependencies[dep];
  }
}

// Add gh-pages if not present
if (!staticPackageJson.devDependencies['gh-pages']) {
  staticPackageJson.devDependencies['gh-pages'] = "^6.0.0";
}

// Write the static package.json
fs.writeFileSync(path.join(__dirname, 'build', 'package.json'), JSON.stringify(staticPackageJson, null, 2));

// Create index.html in the root for GitHub Pages
console.log("📄 Creating index.html...");
fs.copyFileSync(path.join(__dirname, 'client', 'index.html'), path.join(__dirname, 'build', 'index.html'));

// Create a .nojekyll file to prevent GitHub Pages from ignoring files that begin with an underscore
fs.writeFileSync(path.join(__dirname, 'build', '.nojekyll'), '');

// Create README.md with deployment instructions
console.log("📄 Creating README.md with deployment instructions...");
const readmeContent = `# Alqamah Sayeed Portfolio

This is the portfolio website for Alqamah Sayeed, showcasing research, publications, and professional experience.

## Deployment Instructions

To deploy this site to GitHub Pages:

1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Build and deploy:
   \`\`\`bash
   npm run deploy
   \`\`\`

Your site will be deployed to [https://alqamah-sayeed.github.io](https://alqamah-sayeed.github.io)

## Local Development

To run locally:
\`\`\`bash
npm run dev
\`\`\`
`;

fs.writeFileSync(path.join(__dirname, 'build', 'README.md'), readmeContent);

console.log("✅ Build directory prepared!");
console.log("🔍 Next steps:");
console.log("1. Copy the contents of the 'build' directory to your GitHub repository");
console.log("2. Run 'npm install' in the repository");
console.log("3. Run 'npm run deploy' to publish to GitHub Pages");
console.log("Your portfolio will be available at https://alqamah-sayeed.github.io");