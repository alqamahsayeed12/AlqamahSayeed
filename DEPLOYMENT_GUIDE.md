# Deployment Guide for GitHub Pages

This guide will walk you through the process of deploying your portfolio website to GitHub Pages at `alqamahsayeed.github.io`.

## Prerequisites

Before you begin, make sure you have:

1. A GitHub account
2. Git installed on your computer
3. Node.js and npm installed

## Step 1: Create a GitHub Repository

1. Log in to your GitHub account
2. Create a new repository named exactly `alqamahsayeed.github.io`
   - This special repository name will tell GitHub to publish your site at that domain
   - Make sure the repository is public
   - Do not initialize it with any files (no README, .gitignore, or license)

## Step 2: Prepare Your Project for Deployment

The project includes several scripts to help with deployment:

- `static-deploy.js` - Creates a static build suitable for GitHub Pages
- `deploy-gh-pages.js` - Deploys the build to GitHub Pages

### Option 1: Automated Deployment (Recommended)

1. Run the static build generator:
   ```bash
   node static-deploy.js
   ```

2. Deploy to GitHub Pages:
   ```bash
   node deploy-gh-pages.js
   ```

3. If prompted, enter your GitHub credentials

4. Wait a few minutes for GitHub Pages to build and publish your site

### Option 2: Manual Deployment

If the automated script doesn't work, you can deploy manually:

1. Create a static build:
   ```bash
   node static-deploy.js
   ```

2. Navigate to the build directory:
   ```bash
   cd dist
   ```

3. Initialize a Git repository:
   ```bash
   git init
   git add -A
   git commit -m "Deploy to GitHub Pages"
   ```

4. Add your GitHub repository as remote and push:
   ```bash
   git remote add origin https://github.com/alqamahsayeed/alqamahsayeed.github.io.git
   git push -f origin main
   ```

## Step 3: Verify Your Deployment

1. Visit `https://alqamahsayeed.github.io` in your browser
2. Your site should be live within a few minutes
3. If you see a 404 error, wait a bit longer or check the GitHub Pages settings in your repository

## Troubleshooting

### 404 Error

If you see a 404 error after deployment:

1. Go to your GitHub repository
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. Make sure the source is set to the "main" branch

### Custom Domain

If you want to use a custom domain:

1. Add a file named `CNAME` to your repository with your domain name:
   ```
   yourdomain.com
   ```

2. Update your DNS settings with your domain registrar:
   - Add an A record pointing to GitHub's IP addresses:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Or add a CNAME record pointing to `alqamahsayeed.github.io`

### Updating Your Site

To update your site after making changes:

1. Make your changes locally
2. Run the deployment script again:
   ```bash
   node static-deploy.js
   node deploy-gh-pages.js
   ```

## Additional Configuration

### Environment Variables

For production builds, add a `.env.production` file with any environment-specific values:

```
VITE_API_URL=https://api.example.com
```

### Base URL

If you're not using a custom domain, you might need to update the base URL in `vite.config.static.ts`:

```js
base: '/', // Change to '/your-repo-name/' if not using custom domain
```