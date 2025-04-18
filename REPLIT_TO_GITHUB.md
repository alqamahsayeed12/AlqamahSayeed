# How to Export from Replit and Deploy to GitHub Pages

## Simple Method Using GitHub Source Import

Since directly downloading folders from Replit can be challenging, here's a simpler approach:

### Step 1: Export Your Replit Project to GitHub

1. Click the three dots (⋮) next to your Replit project name
2. Select "Export to GitHub"
3. If prompted, connect your GitHub account
4. Name your new repository: `alqamah-sayeed-portfolio-source` (or any name you prefer)
5. Click "Export to GitHub"

### Step 2: Create Your GitHub Pages Repository

1. Go to [GitHub.com](https://github.com/new)
2. Create a new repository with the following settings:
   - Repository name: **exactly** `alqamah-sayeed.github.io`
   - Make it Public
   - Initialize with a README
   - Click "Create repository"

### Step 3: Clone and Prepare the Repository

1. Clone your GitHub Pages repository locally:
   ```bash
   git clone https://github.com/Alqamah-Sayeed/alqamah-sayeed.github.io.git
   cd alqamah-sayeed.github.io
   ```

2. Create these essential files (content available in the `MANUAL_DEPLOYMENT_STEPS.md` guide):
   - `package.json` - Copy from the template
   - `vite.config.js` - Copy from the template
   - `index.html` - Copy from the template
   - `.nojekyll` (empty file) - Just create with `touch .nojekyll`

### Step 4: Copy Your Source Code

1. Clone your exported Replit repository:
   ```bash
   git clone https://github.com/Alqamah-Sayeed/alqamah-sayeed-portfolio-source.git
   ```

2. Copy the necessary directories:
   ```bash
   cp -r alqamah-sayeed-portfolio-source/client/src ./src
   mkdir -p public/assets
   cp -r alqamah-sayeed-portfolio-source/attached_assets/* ./public/assets/
   ```

3. Update import paths in your source files:
   ```bash
   find ./src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/@assets\//\/assets\//g'
   find ./src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/@shared\//..\/shared\//g'
   find ./src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/@\//.\//g'
   ```

### Step 5: Install Dependencies and Deploy

1. Install dependencies:
   ```bash
   npm install
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

3. Configure GitHub Pages:
   - Go to your repository settings
   - Navigate to Pages in the sidebar
   - Ensure the branch is set to `gh-pages`
   - Your site will be published at https://alqamah-sayeed.github.io

## Alternative: Use GitHub Codespaces

If you're having trouble with setting up the environment locally:

1. From your `alqamah-sayeed.github.io` repository on GitHub
2. Click "Code" > "Codespaces" > "Create codespace on main"
3. This opens a fully-functional VS Code environment in your browser
4. Follow steps 2-5 from above within the Codespace
5. Everything will work the same way, but you won't need to install anything on your local machine

## Notes

- The `gh-pages` package handles all the deployment complexity for you
- Remember to create the `.nojekyll` file to prevent GitHub Pages from using Jekyll processing
- Deployment may take a few minutes to complete and become visible
- If you make updates, simply repeat the `npm run deploy` step