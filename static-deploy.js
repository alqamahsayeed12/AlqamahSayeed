import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a clean build using the static config
console.log('Creating static build for GitHub Pages...');
try {
  execSync('npx vite build --config vite.config.static.ts', { stdio: 'inherit' });
  console.log('Static build created successfully in the dist directory');
} catch (error) {
  console.error('Static build failed:', error);
  process.exit(1);
}

// Create some additional files needed for GitHub Pages
console.log('Adding GitHub Pages specific files...');

// Create .nojekyll file (prevents GitHub from processing your site with Jekyll)
fs.writeFileSync(path.join('dist', '.nojekyll'), '');

// Create a simple 404 page that redirects to index.html
const notFoundHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Not Found</title>
  <script>
    // Single Page App redirection
    // https://github.com/rafgraph/spa-github-pages
    const pathSegmentsToKeep = 0; // Change to 1 if using repo name in path
    
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
`;

fs.writeFileSync(path.join('dist', '404.html'), notFoundHtml);

// Modify index.html to handle SPA redirects
const indexPath = path.join('dist', 'index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');

// Add SPA redirect script
const redirectScript = `
  <!-- Start Single Page Apps for GitHub Pages -->
  <script type="text/javascript">
    // Single Page Apps for GitHub Pages
    // https://github.com/rafgraph/spa-github-pages
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
  <!-- End Single Page Apps for GitHub Pages -->
`;

// Insert script before closing head tag
indexHtml = indexHtml.replace('</head>', redirectScript + '</head>');

fs.writeFileSync(indexPath, indexHtml);

console.log('GitHub Pages configuration completed. Your static files are ready in the dist directory.');
console.log('\nTo deploy:');
console.log('1. Create a GitHub repository named alqamahsayeed.github.io');
console.log('2. Use the deploy-gh-pages.js script: node deploy-gh-pages.js');
console.log('   OR');
console.log('3. Manually push the dist folder contents to the main branch of your repository');