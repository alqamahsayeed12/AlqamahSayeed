# GitHub Pages Deployment Instructions

## Special Note
These instructions are specifically for deploying to a GitHub repository named `alqamahsayeed.github.io` when your GitHub username is `alqamahsayeed12`.

## Step 1: Create the Repository
1. Log in to your GitHub account (username: `alqamahsayeed12`)
2. Click the "+" icon in the top-right corner and select "New repository"
3. Name your repository exactly: `alqamahsayeed.github.io`
4. Make it public
5. Do NOT initialize with README, .gitignore, or license
6. Click "Create repository"

## Step 2: Prepare the Deployment Package
1. Download the `alqamahsayeed-portfolio-deploy.zip` file
2. Extract the contents to a folder on your computer
3. Open a terminal/command prompt
4. Navigate to the extracted folder: `cd path/to/extracted/folder`

## Step 3: Install Dependencies and Deploy
1. Run: `npm install`
2. Run: `npm run prepare`
   - This builds your site and prepares it for GitHub Pages
3. Run: `npm run deploy`
   - This pushes your site to GitHub

## Important Notes
- If using SSH for GitHub, make sure your SSH key is set up correctly
- If using HTTPS, you'll need to enter your GitHub credentials
- The deployment script is configured to use your specific GitHub username (`alqamahsayeed12`) and repository name (`alqamahsayeed.github.io`)

## Accessing Your Site
After successful deployment, your site will be available at:
https://alqamahsayeed.github.io

## Troubleshooting
If automatic deployment fails, follow the manual instructions shown in the terminal output.

## Need Help?
If you encounter any issues, please refer to the more detailed `DEPLOYMENT_GUIDE.md` or `MANUAL_DEPLOYMENT_STEPS.md` files included in the package.