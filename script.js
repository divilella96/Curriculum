// Adiciona efeito de scroll suave na navegação
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

let translations = {};

// Função para buscar o arquivo de traduções
async function loadTranslations() {
  try {
    const response = await fetch('translations.json');
    translations = await response.json();
    initializeLanguage();
    // Fetch GitHub projects after translations are loaded
    fetchAndDisplayProjects('divilella96');
  } catch (error) {
    console.error('Erro ao carregar traduções:', error);
  }
}

// Detecta o idioma do navegador e inicializa
function initializeLanguage() {
  const userLang = navigator.language.startsWith("pt") ? "pt" : "en";
  updateLanguage(userLang);
}

// Atualiza o idioma na página
function updateLanguage(lang) {
  document.documentElement.lang = lang; // Set the lang attribute on the HTML element
  document.getElementById("toggle-lang").dataset.currentLang = lang; // Store current language

  document.querySelectorAll("[data-lang]").forEach(element => {
    const key = element.getAttribute("data-lang");
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  document.getElementById("toggle-lang").textContent = lang === "pt" ? "🇺🇸 English" : "🇧🇷 Português";
}

// Evento de clique para trocar o idioma
document.getElementById("toggle-lang").addEventListener("click", () => {
  const currentLang = document.getElementById("toggle-lang").dataset.currentLang;
  const newLang = currentLang === "pt" ? "en" : "pt";
  updateLanguage(newLang);
});

// Função para buscar projetos do GitHub e exibi-los
async function fetchAndDisplayProjects(username) {
  const projectsSection = document.getElementById('projetos');

  const staticCard = projectsSection.querySelector('.card');
  if (staticCard) {
    staticCard.remove();
  }

  const projectsGrid = document.createElement('div');
  projectsGrid.className = 'projects-grid';
  projectsSection.appendChild(projectsGrid);

  projectsGrid.innerHTML = '<p>Carregando projetos do GitHub...</p>';

  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc`);
    if (!response.ok) {
        throw new Error(`GitHub API error! status: ${response.status}`);
    }
    const repos = await response.json();

    const filteredRepos = repos.filter(repo => !repo.fork && repo.description).slice(0, 6);

    if (filteredRepos.length === 0) {
        projectsGrid.innerHTML = '<p>Nenhum projeto com descrição encontrado para exibir.</p>';
        return;
    }

    let projectCardsHTML = '';
    for (const repo of filteredRepos) {
      // Not fetching languages for now to simplify and speed up loading
      // const langResponse = await fetch(repo.languages_url);
      // const languages = await langResponse.json();
      // const mainLanguages = Object.keys(languages).slice(0, 3);

      projectCardsHTML += `
        <div class="card">
          <h3>${repo.name}</h3>
          <p>${repo.description}</p>
          ${repo.language ? `<div class="languages"><span>${repo.language}</span></div>` : ''}
          <a href="${repo.html_url}" class="btn" target="_blank" rel="noopener noreferrer" data-lang="view-project">Ver Projeto</a>
        </div>
      `;
    }
    projectsGrid.innerHTML = projectCardsHTML;

    const currentLang = document.getElementById("toggle-lang").dataset.currentLang || 'pt';
    updateLanguage(currentLang);

  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    projectsGrid.innerHTML = '<p>Não foi possível carregar os projetos do GitHub.</p>';
  }
}

// Carrega as traduções e define o idioma inicial
loadTranslations();
