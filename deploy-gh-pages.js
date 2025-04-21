import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Create a deployment directory
console.log('Creating deployment directory...');
if (fs.existsSync('gh-pages-deploy')) {
  fs.rmSync('gh-pages-deploy', { recursive: true, force: true });
}
fs.mkdirSync('gh-pages-deploy');
fs.mkdirSync('gh-pages-deploy/assets', { recursive: true });

// Copy the static HTML files
console.log('Creating static HTML structure...');
// Create basic index.html
const indexHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Alqamah Sayeed | Atmospheric Science</title>
    <meta name="description" content="Professional portfolio for Alqamah Sayeed, a research scientist specializing in atmospheric science.">
    <link rel="stylesheet" href="./assets/style.css">
    <script src="./assets/script.js" defer></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`;

fs.writeFileSync('gh-pages-deploy/index.html', indexHtml);

// Create .nojekyll file (required for GitHub Pages)
fs.writeFileSync('gh-pages-deploy/.nojekyll', '');

// Copy assets
console.log('Copying assets...');
try {
  execSync('cp -r attached_assets/* gh-pages-deploy/assets/', { stdio: 'inherit' });
} catch (error) {
  console.warn('Some assets may not have copied correctly.');
}

// Create a style.css
const styleCSS = `
/* This is a minimal CSS file for the static version */
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
  padding: 0;
  color: #2D3436;
  background-color: #ffffff;
}

#root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
}

a {
  color: #0984E3;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Static site message */
.static-message {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #0984E3;
}

h2 {
  font-size: 1.5rem;
  color: #2D3436;
  margin-top: 40px;
}

.profile-img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin: 20px 0;
  border: 3px solid #0984E3;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 30px 0;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #0984E3;
  color: white;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background-color: #0672c5;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.download-btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #0984E3;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  margin-top: 20px;
}

.download-btn:hover {
  background-color: #0672c5;
  text-decoration: none;
}

footer {
  margin-top: auto;
  width: 100%;
  background-color: #f8f9fa;
  padding: 20px 0;
  text-align: center;
}
`;

fs.writeFileSync('gh-pages-deploy/assets/style.css', styleCSS);

// Create the JavaScript file
const scriptJS = `
// This creates a simplified static version of the portfolio
document.addEventListener('DOMContentLoaded', function() {
  const root = document.getElementById('root');
  
  // Create header
  const header = document.createElement('header');
  header.innerHTML = \`
    <div class="static-message">
      <h1>Alqamah Sayeed</h1>
      <p>Atmospheric Science Researcher</p>
      <img src="./assets/image_1744990854831.png" alt="Alqamah Sayeed" class="profile-img">
      <p>Leading innovative research in atmospheric science with expertise in Machine Learning and Remote Sensing across United States, Central Americas, Southeast Asia and Africa.</p>
      <div class="social-links">
        <a href="https://linkedin.com/in/alqamah-sayeed-ph-d-3aa249172" target="_blank" title="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
        <a href="https://github.com/Alqamah-Sayeed" target="_blank" title="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
        <a href="https://twitter.com/AlqamahSayeed89" target="_blank" title="Twitter">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
        </a>
      </div>
      <p>Please note: This is a simplified static version of my portfolio. For the full interactive experience, please visit my GitHub repository.</p>
      <a href="https://github.com/Alqamah-Sayeed" class="download-btn">View on GitHub</a>
    </div>
  \`;
  
  root.appendChild(header);
  
  // Create footer
  const footer = document.createElement('footer');
  footer.innerHTML = \`
    <p>© ${new Date().getFullYear()} Alqamah Sayeed. All rights reserved.</p>
    <p>This static page was deployed directly to GitHub Pages.</p>
  \`;
  
  root.appendChild(footer);
});
`;

fs.writeFileSync('gh-pages-deploy/assets/script.js', scriptJS);

// Create README.md with deployment instructions
const readmeContent = `# Alqamah Sayeed - Portfolio Website

This is a static version of Alqamah Sayeed's professional portfolio.

## About This Repository

This repository contains a simplified static version of the portfolio website for GitHub Pages deployment.

## GitHub Pages Deployment

This site is automatically deployed to: https://alqamah-sayeed.github.io

## Full Version

For the full interactive version with all features, please visit the main repository.

## Contact

- LinkedIn: [alqamah-sayeed-ph-d-3aa249172](https://linkedin.com/in/alqamah-sayeed-ph-d-3aa249172)
- GitHub: [Alqamah-Sayeed](https://github.com/Alqamah-Sayeed)
- Twitter: [@AlqamahSayeed89](https://twitter.com/AlqamahSayeed89)
`;

fs.writeFileSync('gh-pages-deploy/README.md', readmeContent);

// Create the tar.gz file for easy download
console.log('Creating deployment archive...');
try {
  execSync('tar -czf github-pages-static.tar.gz -C gh-pages-deploy .', { stdio: 'inherit' });
  console.log('Archive created: github-pages-static.tar.gz');
} catch (error) {
  console.error('Failed to create archive:', error);
}

console.log('\nDeployment preparation complete!');
console.log('\nGitHub Pages Deployment Instructions:');
console.log('1. Download the file: github-pages-static.tar.gz');
console.log('2. Create a repository named exactly: alqamah-sayeed.github.io');
console.log('3. Extract the archive and upload the files to your repository');
console.log('4. Your site will be live at https://alqamah-sayeed.github.io');
console.log('\nAlternatively, you can use the "gh-pages-deploy" folder directly.');