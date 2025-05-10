# Alqamah Sayeed - Professional Portfolio

A professional portfolio website for Alqamah Sayeed showcasing research experience, publications, and contact information.

## Tech Stack

- React.js (TypeScript)
- Tailwind CSS
- Framer Motion for animations
- GitHub Pages for hosting

## Local Development

### Prerequisites

- Node.js 20.x or later
- npm 10.x or later

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Deployment to GitHub Pages

### Automatic Deployment

The website will automatically deploy to GitHub Pages when you push to the main branch, thanks to the GitHub Actions workflow set up in `.github/workflows/deploy.yml`.

### Manual Deployment

If you want to deploy manually:

1. Build the project for GitHub Pages
   ```bash
   node deploy-github-pages.js
   ```

2. The build will be generated in the `dist` directory

3. You can deploy this to GitHub Pages manually by pushing the contents of the `dist` directory to the `gh-pages` branch

### Setting Up GitHub Pages

1. Go to your repository settings on GitHub
2. Scroll down to the "GitHub Pages" section
3. Select "gh-pages" as the source branch
4. Your site will be published at `https://your-username.github.io/your-repo-name/`

## Customization

- Edit content in the `client/src/components/sections/` directory
- Update data in the `client/src/data/` directory
- Modify styles in the `theme.json` file or using Tailwind CSS classes directly

## License

[MIT](LICENSE)