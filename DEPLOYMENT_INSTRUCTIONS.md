# Deployment Instructions for alqamah-sayeed.github.io

This document provides detailed instructions for deploying your portfolio site to GitHub Pages.

## Step 1: Set Up GitHub Repository

1. Create a new GitHub repository named exactly `alqamah-sayeed.github.io`
   - Go to https://github.com/new
   - Repository name: `alqamah-sayeed.github.io`
   - Make it Public
   - Click "Create repository"

## Step 2: Prepare Your Code

1. Download the `build` directory that was created by running the `static-deploy.js` script
   - This directory contains all the files needed for GitHub Pages deployment
   - If you can't download directly, compress the directory, download it, and extract it

2. Clone your new GitHub repository locally:
   ```bash
   git clone https://github.com/Alqamah-Sayeed/alqamah-sayeed.github.io.git
   cd alqamah-sayeed.github.io
   ```

3. Copy all files from the `build` directory into your cloned repository

## Step 3: Deploy to GitHub Pages

1. Initialize Git and make your first commit:
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
   - Go to your repository settings on GitHub
   - Navigate to "Pages" in the sidebar
   - Source: Select "gh-pages" branch
   - Click "Save"

## Step 4: Check Your Deployment

1. Your site will be published at: https://alqamah-sayeed.github.io
   - It might take a few minutes for the site to be published after deployment

2. Verify that all pages and features work correctly

## Step 5: Making Future Updates

To update your site in the future:

1. Make changes to your code in your local repository
2. Commit and push to the main branch:
   ```bash
   git add .
   git commit -m "Update description here"
   git push
   ```
3. Run the deployment command:
   ```bash
   npm run deploy
   ```

## Optional: Setting Up Automatic Deployment

The `.github/workflows/deploy.yml` file included in your repository sets up GitHub Actions to automatically deploy your site whenever you push to the main branch.

1. Go to your repository on GitHub
2. Click on the "Actions" tab
3. Ensure actions are enabled for your repository
4. Now whenever you push to the main branch, your site will automatically be deployed

## Troubleshooting

If you encounter any issues:

1. **Issue**: Pages don't load or show 404 errors
   - **Solution**: Make sure the `base` property in `vite.config.ts` is set to `/`

2. **Issue**: Images or assets don't load
   - **Solution**: Check the paths in your code, make sure they're using relative paths with the @assets alias

3. **Issue**: Deployment fails
   - **Solution**: Check GitHub Actions error logs and ensure all dependencies are correctly installed

For any other issues, refer to [GitHub Pages documentation](https://docs.github.com/en/pages).