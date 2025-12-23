async function loadProjects() {
  try {
    const r = await fetch('projects.json');
    const projects = await r.json();
    const grid = document.getElementById('grid');

    projects.forEach(p => {
      const card = document.createElement('article');
      card.className = 'card';

      card.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center">
          <h3>${p.title}</h3>
          <span class="badge">${p.status}</span>
        </div>
        <p>${p.description}</p>

        <div class="links">
  ${p.links.mac ? `<a class="btn" href="${p.links.mac}" target="_blank" rel="noopener">Mac</a>` : ''}
  ${p.links.windows ? `<a class="btn ghost" href="${p.links.windows}" target="_blank" rel="noopener">Windows</a>` : ''}
  ${p.links.android ? `<a class="btn ghost" href="${p.links.android}" target="_blank" rel="noopener">Android</a>` : ''}
  ${p.links.ios ? `<a class="btn ghost" href="${p.links.ios}" target="_blank" rel="noopener">iOS</a>` : ''}

  ${p.links.tools ? `<a class="btn tools" href="${p.links.tools}" target="_blank">Open Tools</a>` : ''}
        </div>


        <p class="small">${p.notes || ''}</p>
      `;

      grid.appendChild(card);
    });

  } catch(err) {
    console.error('Could not load projects.json', err);
    document.getElementById('grid').textContent = 'Error loading projects.';
  }
}

loadProjects();
