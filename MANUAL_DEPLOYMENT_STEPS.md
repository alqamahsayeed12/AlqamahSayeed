# Manual Deployment Instructions for GitHub Pages

Since downloading the entire `deploy` directory may not be possible directly from Replit, I'll provide detailed instructions on how to manually create the essential files for deployment to GitHub Pages.

## Step 1: Create Your GitHub Repository

1. Go to [GitHub.com](https://github.com/new)
2. Sign in to your GitHub account
3. Create a new repository with the following settings:
   - Repository name: **exactly** `alqamah-sayeed.github.io` (this specific name is required for GitHub Pages)
   - Description: "Alqamah Sayeed's Portfolio Website"
   - Visibility: Public
   - Initialize with a README: Yes
   - Click "Create repository"

## Step 2: Set Up the Basic Structure Locally

1. Clone your new repository:
   ```bash
   git clone https://github.com/Alqamah-Sayeed/alqamah-sayeed.github.io.git
   cd alqamah-sayeed.github.io
   ```

2. Create the following folder structure:
   ```
   alqamah-sayeed.github.io/
   ├── public/
   │   └── assets/  (create this for your assets)
   ├── src/
   │   ├── components/
   │   ├── data/
   │   ├── hooks/
   │   ├── lib/
   │   ├── pages/
   │   └── assets/
   ├── .nojekyll
   ├── index.html
   ├── package.json
   ├── vite.config.js
   └── README.md
   ```

## Step 3: Create Essential Files

### Create index.html
```html
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
```

### Create vite.config.js
```javascript
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
      '@assets': path.resolve(__dirname, './public/assets'),
      '@shared': path.resolve(__dirname, './shared'),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
```

### Create package.json
```json
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
```

### Create .nojekyll file
This should be an empty file. Its presence tells GitHub Pages not to process your site with Jekyll.
```bash
touch .nojekyll
```

## Step 4: Copy Your Source Files

1. Copy the content from the Replit project to your local repository:
   - **From Replit**: Copy the code from each component file in the `client/src` directory
   - **To Local**: Create corresponding files in your `src` directory

2. Key files to copy:
   - `src/App.tsx`
   - `src/main.tsx`
   - `src/index.css`
   - All the files in the `src/components` folders
   - All the files in the `src/pages` folders
   - All the files in the `src/data` folders
   - All the files in the `src/hooks` folders
   - All the files in the `src/lib` folders

3. Update the import paths in your files:
   - Change `@assets/` to `/assets/`
   - Change `@shared/` to `../shared/` (if needed)
   - Change `@/` to `./`

4. Copy your assets:
   - Copy images and other assets from `attached_assets` directory in Replit to `public/assets` in your local repo

## Step 5: Create GitHub Workflow (Optional)

Create a file at `.github/workflows/deploy.yml` for automated deployment:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies 📦
        run: npm install

      - name: Build 🔧
        run: npm run build
        env:
          NODE_ENV: production

      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist
          branch: gh-pages
```

## Step 6: Push Your Code and Deploy

1. Commit all your changes:
   ```bash
   git add .
   git commit -m "Initial portfolio website"
   git push -u origin main
   ```

2. Install dependencies and deploy:
   ```bash
   npm install
   npm run deploy
   ```

3. Configure GitHub Pages:
   - Go to your GitHub repository settings
   - Navigate to Pages in the sidebar
   - Ensure the branch is set to `gh-pages`
   - Your site will be published at https://alqamah-sayeed.github.io

## Important Notes

1. Make sure to create the `.nojekyll` file (it must be empty)
2. The repository name must be exactly `alqamah-sayeed.github.io` for GitHub Pages to work correctly
3. If you encounter issues with paths, double-check your import statements and make sure they use the correct relative paths
4. For troubleshooting deployment issues, see the GitHub Pages documentation

I recommend copying each source file individually if you can't download the entire project. Focus on getting the structure correct, and then work on copying the content file by file.