# GitHub Pages Deployment Instructions

I've created a complete `github-deploy.tar.gz` archive containing all the files you need to deploy your portfolio website to GitHub Pages. Follow these instructions to deploy your site.

## Step 1: Download the Archive

1. In the Replit file explorer, locate the file `github-deploy.tar.gz`
2. Right-click on it and select "Download" to save it to your computer

## Step 2: Create Your GitHub Repository

1. Go to [GitHub.com](https://github.com/new)
2. Create a new repository with these exact settings:
   - Repository name: **alqamah-sayeed.github.io** (this exact name is required for GitHub Pages)
   - Visibility: Public
   - Do NOT initialize with a README
   - Click "Create repository"

## Step 3: Extract and Upload Files

1. Extract the downloaded `github-deploy.tar.gz` file on your computer
   - On Windows: Use 7-Zip, WinRAR, or similar
   - On Mac: Double-click the file or use Terminal
   - On Linux: Use `tar -xzf github-deploy.tar.gz`

2. Open a terminal/command prompt and navigate to the extracted folder:
   ```bash
   cd path/to/github-deploy
   ```

3. Initialize Git and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio website"
   git branch -M main
   git remote add origin https://github.com/Alqamah-Sayeed/alqamah-sayeed.github.io.git
   git push -u origin main
   ```

## Step 4: Install Dependencies and Deploy

1. Make sure you have Node.js installed on your computer
   - Download from [nodejs.org](https://nodejs.org/) if needed

2. In the same terminal/directory, run:
   ```bash
   npm install
   npm run deploy
   ```

3. When prompted, enter your GitHub credentials

## Step 5: Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. Under "Source," select "Deploy from a branch"
4. For "Branch," select "gh-pages" and "/ (root)", then click "Save"
5. Wait a few minutes for your site to be published

Your site will be live at: https://alqamah-sayeed.github.io

## Alternative: GitHub Codespaces

If you prefer not to install tools locally, you can use GitHub Codespaces:

1. After creating your repository, click "Code" > "Codespaces" > "Create codespace on main"
2. Once the Codespace loads, open a terminal and run:
   ```bash
   npm install
   npm run deploy
   ```

## Troubleshooting

- **Issue**: Page shows a 404 error
  - **Solution**: Make sure the repository name is exactly `alqamah-sayeed.github.io` and the .nojekyll file exists
  
- **Issue**: Styles or components aren't loading
  - **Solution**: Check browser console for errors. Make sure all import paths are correct.
  
- **Issue**: Deployment fails
  - **Solution**: Try running deployment with verbose logging: `npm run deploy -- --verbose`

## Making Future Updates

To update your site in the future:

1. Make your changes locally
2. Commit and push them:
   ```bash
   git add .
   git commit -m "Update description"
   git push
   ```
3. Run the deployment command again:
   ```bash
   npm run deploy
   ```