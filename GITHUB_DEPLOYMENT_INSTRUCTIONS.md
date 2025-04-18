
# GitHub Pages Deployment Instructions

Follow these steps to deploy your portfolio site to GitHub Pages:

## Step 1: Create a GitHub Repository

1. Go to GitHub and create a new repository named exactly: `alqamah-sayeed.github.io`

## Step 2: Upload the Code

1. Download the entire 'deploy' directory from this Replit project
2. Extract the contents and push them to your GitHub repository:

```bash
git clone https://github.com/Alqamah-Sayeed/alqamah-sayeed.github.io.git
cd alqamah-sayeed.github.io
# Copy all files from the 'deploy' directory here
git add .
git commit -m "Initial portfolio website"
git push -u origin main
```

## Step 3: Install Dependencies and Deploy

Run these commands in your repository:

```bash
npm install
npm run deploy
```

## Step 4: Configure GitHub Pages

1. Go to your GitHub repository settings
2. Navigate to Pages in the sidebar
3. Ensure the branch is set to `gh-pages`
4. Your site will be published at https://alqamah-sayeed.github.io

## Making Future Updates

When you want to update your site:

1. Make your changes
2. Commit and push to main branch
3. Run `npm run deploy` again
