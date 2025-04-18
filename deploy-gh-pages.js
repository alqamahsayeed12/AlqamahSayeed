// deploy-gh-pages.js
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("🚀 Starting GitHub Pages deployment preparation...");

// Create necessary files for GitHub Pages deployment
const createDeploymentFiles = () => {
  // 1. Create a custom vite.config.static.js for GitHub Pages
  console.log("📝 Creating static Vite configuration...");
  const viteConfig = `
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, '../attached_assets'),
      '@shared': path.resolve(__dirname, '../shared'),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
`;

  // 2. Create a simplified index.html for the client
  console.log("📝 Creating client-only index.html...");
  const indexHtml = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/logo.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Professional portfolio for Alqamah Sayeed, a research scientist specializing in atmospheric science." />
    <title>Alqamah Sayeed | Atmospheric Science</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;

  // 3. Create a modified package.json with GitHub Pages settings
  console.log("📝 Creating GitHub Pages package.json...");
  const packageJson = `
{
  "name": "alqamah-sayeed-portfolio",
  "version": "1.0.0",
  "type": "module",
  "homepage": "https://alqamah-sayeed.github.io",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.10.0",
    "@radix-ui/react-accordion": "^1.2.4",
    "@radix-ui/react-alert-dialog": "^1.1.7",
    "@radix-ui/react-aspect-ratio": "^1.1.3",
    "@radix-ui/react-avatar": "^1.1.4",
    "@radix-ui/react-checkbox": "^1.1.5",
    "@radix-ui/react-collapsible": "^1.1.4",
    "@radix-ui/react-context-menu": "^2.2.7",
    "@radix-ui/react-dialog": "^1.1.7",
    "@radix-ui/react-dropdown-menu": "^2.1.7",
    "@radix-ui/react-hover-card": "^1.1.7",
    "@radix-ui/react-label": "^2.1.3",
    "@radix-ui/react-menubar": "^1.1.7",
    "@radix-ui/react-navigation-menu": "^1.2.6",
    "@radix-ui/react-popover": "^1.1.7",
    "@radix-ui/react-progress": "^1.1.3",
    "@radix-ui/react-radio-group": "^1.2.4",
    "@radix-ui/react-scroll-area": "^1.2.4",
    "@radix-ui/react-select": "^2.1.7",
    "@radix-ui/react-separator": "^1.1.3",
    "@radix-ui/react-slider": "^1.2.4",
    "@radix-ui/react-slot": "^1.2.0",
    "@radix-ui/react-switch": "^1.1.4",
    "@radix-ui/react-tabs": "^1.1.4",
    "@radix-ui/react-toast": "^1.2.7",
    "@radix-ui/react-toggle": "^1.1.3",
    "@radix-ui/react-toggle-group": "^1.1.3",
    "@radix-ui/react-tooltip": "^1.2.0",
    "@tanstack/react-query": "^5.60.5",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^3.6.0",
    "embla-carousel-react": "^8.6.0",
    "framer-motion": "^11.18.2",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.453.0",
    "next-themes": "^0.4.6",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.55.0",
    "react-icons": "^5.4.0",
    "react-resizable-panels": "^2.1.7",
    "tailwind-merge": "^2.6.0",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^1.1.2",
    "wouter": "^3.3.5",
    "zod": "^3.24.2",
    "zod-validation-error": "^3.4.0"
  },
  "devDependencies": {
    "@tailwindcss/typography": "^0.5.15",
    "@tailwindcss/vite": "^4.1.3",
    "@types/react": "^18.3.11",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.2",
    "autoprefixer": "^10.4.20",
    "gh-pages": "^6.1.1",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.17",
    "typescript": "5.6.3",
    "vite": "^5.4.14"
  }
}
`;

  // 4. Create README.md with instructions
  console.log("📝 Creating README.md...");
  const readmeContent = `
# Alqamah Sayeed Portfolio

Professional portfolio website for Alqamah Sayeed, a research scientist specializing in atmospheric science.

## Deployment

This site is deployed at [https://alqamah-sayeed.github.io](https://alqamah-sayeed.github.io)

## Local Development

To run this site locally:

\`\`\`bash
npm install
npm run dev
\`\`\`

## Deploy to GitHub Pages

To deploy updates:

\`\`\`bash
npm run deploy
\`\`\`
`;

  // 5. Create .nojekyll file (needed for GitHub Pages with files that have leading underscores)
  console.log("📝 Creating .nojekyll file...");

  // 6. Create directory structure for GitHub deployment
  console.log("📁 Creating directory structure for deployment...");
  
  // Create a 'deploy' directory if it doesn't exist
  if (!fs.existsSync('deploy')) {
    fs.mkdirSync('deploy');
  }
  
  // Create a 'deploy/src' directory for client source code
  if (!fs.existsSync('deploy/src')) {
    fs.mkdirSync('deploy/src', { recursive: true });
  }
  
  // Create a 'deploy/public' directory for static assets
  if (!fs.existsSync('deploy/public')) {
    fs.mkdirSync('deploy/public', { recursive: true });
  }
  
  // Write files to the deploy directory
  fs.writeFileSync('deploy/vite.config.js', viteConfig.trim());
  fs.writeFileSync('deploy/index.html', indexHtml.trim());
  fs.writeFileSync('deploy/package.json', packageJson.trim());
  fs.writeFileSync('deploy/README.md', readmeContent.trim());
  fs.writeFileSync('deploy/.nojekyll', '');
  
  console.log("✅ Deployment files created in the 'deploy' directory");
};

const copyClientFiles = () => {
  console.log("📂 Copying client files to deployment directory...");
  
  // Copy contents of client/src to deploy/src
  console.log("  - Copying source files...");
  fs.cpSync('client/src', 'deploy/src', { recursive: true });
  
  // Copy attached_assets to deploy/public/assets
  console.log("  - Copying assets...");
  if (fs.existsSync('attached_assets')) {
    if (!fs.existsSync('deploy/public/assets')) {
      fs.mkdirSync('deploy/public/assets', { recursive: true });
    }
    fs.cpSync('attached_assets', 'deploy/public/assets', { recursive: true });
  }
  
  // Copy shared folder to deploy/shared for types
  console.log("  - Copying shared types...");
  if (!fs.existsSync('deploy/shared')) {
    fs.mkdirSync('deploy/shared', { recursive: true });
  }
  fs.cpSync('shared', 'deploy/shared', { recursive: true });
  
  // Create a logo.svg file in public
  console.log("  - Creating logo file...");
  const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <rect width="32" height="32" rx="16" fill="url(#paint0_linear_1201_2)" />
  <path d="M10.056 21V11.448H13.2C13.8107 11.448 14.336 11.5413 14.776 11.728C15.216 11.9147 15.552 12.1653 15.784 12.48C16.0267 12.7947 16.148 13.1467 16.148 13.536C16.148 13.856 16.0747 14.1493 15.928 14.416C15.7813 14.6827 15.58 14.9067 15.324 15.088C15.0787 15.2693 14.8067 15.3947 14.508 15.464V15.536C14.8493 15.5573 15.1693 15.6613 15.468 15.848C15.7667 16.0347 16.008 16.2853 16.192 16.6C16.3867 16.9147 16.484 17.2773 16.484 17.688C16.484 18.0987 16.3547 18.476 16.096 18.82C15.848 19.164 15.492 19.4373 15.028 19.64C14.564 19.8427 14.0213 19.944 13.4 19.944H10.056V21ZM11.544 18.468H13.092C13.7027 18.468 14.1507 18.3533 14.436 18.124C14.7213 17.8947 14.864 17.5907 14.864 17.212C14.864 16.9347 14.8013 16.684 14.676 16.46C14.5507 16.236 14.3667 16.0573 14.124 15.924C13.892 15.7907 13.608 15.724 13.272 15.724H11.544V18.468ZM11.544 14.472H12.96C13.232 14.472 13.476 14.416 13.692 14.304C13.9187 14.1813 14.096 14.0187 14.224 13.816C14.352 13.6133 14.416 13.3853 14.416 13.132C14.416 12.7853 14.284 12.4973 14.02 12.268C13.7667 12.0387 13.3933 11.924 12.9 11.924H11.544V14.472ZM18.1558 21V11.448H19.6438V20.524H24.4358V21H18.1558Z" fill="white" />
  <defs>
    <linearGradient id="paint0_linear_1201_2" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0984E3" />
      <stop offset="1" stop-color="#74B9FF" />
    </linearGradient>
  </defs>
</svg>`;
  
  fs.writeFileSync('deploy/public/logo.svg', logoSvg);
  
  console.log("✅ Client files copied to deployment directory");
};

const updateSourcePaths = () => {
  console.log("🔄 Updating import paths for deployment...");
  
  // Function to recursively process all TypeScript and JavaScript files
  const processDirectory = (directory) => {
    const entries = fs.readdirSync(directory, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name);
      
      if (entry.isDirectory()) {
        processDirectory(fullPath);
      } else if (entry.name.endsWith('.ts') || entry.name.endsWith('.tsx') || entry.name.endsWith('.js')) {
        let content = fs.readFileSync(fullPath, 'utf8');
        
        // Replace import paths
        content = content.replace(/@assets\//g, '/assets/');
        content = content.replace(/@shared\//g, '../shared/');
        content = content.replace(/@\//g, './');
        
        fs.writeFileSync(fullPath, content);
      }
    }
  };
  
  processDirectory('deploy/src');
  console.log("✅ Import paths updated");
};

const createDeploymentInstructions = () => {
  console.log("📝 Creating deployment instructions...");
  
  const instructions = `
# GitHub Pages Deployment Instructions

Follow these steps to deploy your portfolio site to GitHub Pages:

## Step 1: Create a GitHub Repository

1. Go to GitHub and create a new repository named exactly: \`alqamah-sayeed.github.io\`

## Step 2: Upload the Code

1. Download the entire 'deploy' directory from this Replit project
2. Extract the contents and push them to your GitHub repository:

\`\`\`bash
git clone https://github.com/Alqamah-Sayeed/alqamah-sayeed.github.io.git
cd alqamah-sayeed.github.io
# Copy all files from the 'deploy' directory here
git add .
git commit -m "Initial portfolio website"
git push -u origin main
\`\`\`

## Step 3: Install Dependencies and Deploy

Run these commands in your repository:

\`\`\`bash
npm install
npm run deploy
\`\`\`

## Step 4: Configure GitHub Pages

1. Go to your GitHub repository settings
2. Navigate to Pages in the sidebar
3. Ensure the branch is set to \`gh-pages\`
4. Your site will be published at https://alqamah-sayeed.github.io

## Making Future Updates

When you want to update your site:

1. Make your changes
2. Commit and push to main branch
3. Run \`npm run deploy\` again
`;

  fs.writeFileSync('GITHUB_DEPLOYMENT_INSTRUCTIONS.md', instructions);
  console.log("✅ Deployment instructions created: GITHUB_DEPLOYMENT_INSTRUCTIONS.md");
};

// Run all the deployment preparation steps
try {
  createDeploymentFiles();
  copyClientFiles();
  updateSourcePaths();
  createDeploymentInstructions();
  
  console.log("\n🎉 Deployment preparation complete!");
  console.log("📝 Detailed instructions are available in: GITHUB_DEPLOYMENT_INSTRUCTIONS.md");
  console.log("📁 Your deployment files are ready in the 'deploy' directory");
  console.log("\nNext steps:");
  console.log("1. Download the 'deploy' directory");
  console.log("2. Follow the instructions in GITHUB_DEPLOYMENT_INSTRUCTIONS.md");
} catch (error) {
  console.error("❌ Error during deployment preparation:", error);
}