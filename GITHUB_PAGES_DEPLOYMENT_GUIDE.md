# GitHub Pages Deployment Guide

This guide provides step-by-step instructions to deploy your portfolio website to GitHub Pages at `alqamahsayeed.github.io`.

## Prerequisites

Before you begin, make sure you have:

1. A GitHub account with the username `alqamahsayeed12`
2. Git installed on your computer
3. Node.js and npm installed

## Deployment Process

### Step 1: Create the GitHub Repository

1. Log in to your GitHub account (username: `alqamahsayeed12`)
2. Create a new repository with the exact name: `alqamahsayeed.github.io`
   - This name is crucial for GitHub Pages to work properly
   - Make the repository public
   - Do not initialize it with any files (no README, .gitignore, or license)

### Step 2: Generate the Static Build

Run the following command in this Replit project:

```bash
node static-deploy.js
```

This will:
- Create a static build of your website in the `dist` directory
- Add necessary files for GitHub Pages (.nojekyll, 404.html)
- Configure SPA routing for GitHub Pages

### Step 3: Deploy to GitHub Pages

You have two options for deployment:

#### Option 1: Automated Deployment (Recommended)

Run the deployment script:

```bash
node deploy-gh-pages.js
```

This script will:
- Initialize git in the dist directory
- Commit all files
- Push to your GitHub repository

During the process, you may be prompted to enter your GitHub credentials.

#### Option 2: Manual Deployment

If the automated deployment fails, follow these steps:

1. Download the `dist` directory from this Replit
2. Initialize git in the downloaded directory:
   ```bash
   cd path/to/dist
   git init
   git add -A
   git commit -m "Deploy to GitHub Pages"
   ```
3. Connect to your GitHub repository:
   ```bash
   git remote add origin https://github.com/alqamahsayeed12/alqamahsayeed.github.io.git
   ```
4. Push to GitHub:
   ```bash
   git push -f origin main
   ```

### Step 4: Configure GitHub Pages Settings

1. Go to your GitHub repository: https://github.com/alqamahsayeed12/alqamahsayeed.github.io
2. Navigate to Settings → Pages
3. Under "Source," ensure the branch is set to `main`
4. Click "Save"

### Step 5: Verify Deployment

After a few minutes, your site should be live at:
https://alqamahsayeed.github.io

## Troubleshooting

### Common Issues:

1. **404 errors on navigation**: Make sure the 404.html file is in the root directory and the SPA script is properly included in index.html

2. **SSH key issues**: If using SSH for deployment and seeing authentication errors:
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   cat ~/.ssh/id_ed25519.pub
   ```
   Add this key to your GitHub account settings

3. **Missing assets**: Ensure all asset paths are relative and properly aliased according to the Vite configuration

## Updating Your Site

To update your site after making changes:

1. Make your changes in Replit
2. Run the static deployment script again: `node static-deploy.js`
3. Run the deployment script again: `node deploy-gh-pages.js`