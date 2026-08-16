async function loadProjects() {
  try {
    const response = await fetch('projects.json');
    const config = await response.json();

    // Render Hero
    document.getElementById('company-name').textContent = config.companyName;
    document.getElementById('tagline').textContent = config.tagline;
    document.getElementById('developers').textContent = `Developers: ${config.developers.join(' • ')}`;

    // Render Apps
    const portfolioGrid = document.getElementById('portfolio-grid');
    portfolioGrid.innerHTML = ''; // Clear loading/placeholder

    config.apps.forEach(app => {
      const card = document.createElement('div');
      card.className = "p-8 bg-white border border-slate-200 rounded-xl transition-colors hover:border-slate-300";
      card.innerHTML = `
        <h3 class="text-lg font-semibold text-slate-950 mb-3">${app.title}</h3>
        <p class="text-slate-600 mb-6 text-sm leading-relaxed">${app.description}</p>
        <a href="${app.link}" class="inline-flex items-center text-slate-900 text-sm font-semibold hover:text-slate-600">
          View Details
        </a>
      `;
      portfolioGrid.appendChild(card);
    });
  } catch (error) {
    console.error('Error loading projects:', error);
  }
}

document.addEventListener('DOMContentLoaded', loadProjects);
