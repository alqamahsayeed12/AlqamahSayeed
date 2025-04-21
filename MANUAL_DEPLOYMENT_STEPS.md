# Manual Deployment Steps for GitHub Pages

This document provides step-by-step instructions for manually deploying your portfolio website to GitHub Pages at `alqamahsayeed.github.io`.

## Step 1: Set Up a New Repository Locally

### Create a New Directory for Deployment

```bash
mkdir portfolio-deploy
cd portfolio-deploy
```

### Initialize npm and Create package.json

```bash
npm init -y
```

Edit the generated `package.json` to include:

```json
{
  "name": "alqamahsayeed-portfolio",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "framer-motion": "^11.0.8",
    "lucide-react": "^0.345.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^5.2.1",
    "wouter": "^3.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.61",
    "@types/react-dom": "^18.2.19",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.17",
    "postcss": "^8.4.35",
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

## Step 2: Copy Your Source Files

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
   - Copy images from `client/src/assets` to `src/assets`

## Step 3: Create Configuration Files

### Create vite.config.ts

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
});
```

### Create tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "paths": {
      "@/*": ["./src/*"],
      "@assets/*": ["./src/assets/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### Create tsconfig.node.json

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

### Create postcss.config.js

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### Create tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        "primary-foreground": "var(--primary-foreground)",
      },
    },
  },
  plugins: [],
};
```

## Step 4: Create a simple index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Alqamah Sayeed - Atmospheric Scientist and Machine Learning Researcher" />
    <title>Alqamah Sayeed | Portfolio</title>
    
    <!-- SPA Redirect for GitHub Pages -->
    <script type="text/javascript">
      (function(l) {
        if (l.search[1] === '/' ) {
          var decoded = l.search.slice(1).split('&').map(function(s) { 
            return s.replace(/~and~/g, '&')
          }).join('?');
          window.history.replaceState(null, null,
              l.pathname.slice(0, -1) + decoded + l.hash
          );
        }
      }(window.location))
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## Step 5: Build the Project

```bash
npm install
npm run build
```

## Step 6: Deploy to GitHub Pages

1. Create a GitHub repository named exactly `alqamahsayeed.github.io`

2. Initialize git in your local repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. Connect to GitHub and push:
   ```bash
   git remote add origin https://github.com/alqamahsayeed/alqamahsayeed.github.io.git
   git branch -M main
   git push -u origin main
   ```

4. Wait a few minutes for GitHub Pages to build and deploy your site

5. Visit `https://alqamahsayeed.github.io` to see your live site

## Step 7: Creating a 404.html Page for SPA Routing

Create a `404.html` file in the root of your repository:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Not Found</title>
  <script>
    // Single Page App redirection
    const pathSegmentsToKeep = 0;
    
    const l = window.location;
    l.replace(
      l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
      l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
      l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
      (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
      l.hash
    );
  </script>
</head>
<body>
  <h1>Page Not Found</h1>
  <p>Redirecting to homepage...</p>
</body>
</html>
```