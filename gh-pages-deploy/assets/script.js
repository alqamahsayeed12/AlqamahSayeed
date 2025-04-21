
// This creates a simplified static version of the portfolio
document.addEventListener('DOMContentLoaded', function() {
  const root = document.getElementById('root');
  
  // Create header
  const header = document.createElement('header');
  header.innerHTML = `
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
  `;
  
  root.appendChild(header);
  
  // Create footer
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <p>© 2025 Alqamah Sayeed. All rights reserved.</p>
    <p>This static page was deployed directly to GitHub Pages.</p>
  `;
  
  root.appendChild(footer);
});
