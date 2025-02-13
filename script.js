// Adiciona efeito de scroll suave na navegação
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

const translations = {
  "pt": {
    "name": "Diego Vilella Rodrigues",
    "title": "Analista de Sistemas | Desenvolvedor Web",
    "menu-about": "Sobre",
    "menu-education": "Formação",
    "menu-experience": "Experiência",
    "menu-projects": "Projetos",
    "menu-contact": "Contato",
    "about-title": "Sobre Mim",
    "about-text": "Brasileiro, 27 anos. Apaixonado por tecnologia e desenvolvimento. Experiência em projetos web com HTML, CSS, JavaScript, .NET e outras tecnologias.",
    "education-title": "Formação",
    "education-university": "Universidade Tecnológica Federal do Paraná - UTFPR",
    "education-course": "Análise e Desenvolvimento de Sistemas (Concluído em 12/2018)",
    "experience-title": "Experiência Profissional",
    "job-1-title": "Freelancer - Desenvolvedor Web",
    "job-1-desc": "Manutenção e correção de bugs, otimização de desempenho e implementação de funcionalidades em sites.",
    "job-2-title": "Trucks Control - Analista Desenvolvedor WEB",
    "job-2-desc": "Criação de leitura de biometria via web e desenvolvimento de funcionalidades para aplicações de RH.",
    "job-3-title": "TCS - Analista Desenvolvedor",
    "job-3-desc": "Incidentes e Alertas do Banco Itaú e Seguradora Porto Seguro. Manutenção corretiva e metodologia ágil (Scrum).",
    "job-4-title": "InfoSolutions - Programador Júnior",
    "job-4-desc": "Gestão, implementação e documentação de sistemas. Desenvolvimento desktop e web na plataforma Windev.",
    "projects-title": "Projetos",
    "project-1-title": "Projeto X",
    "project-1-desc": "Descrição breve do projeto. Tecnologias utilizadas: HTML, CSS, JavaScript, .NET.",
    "view-project": "Ver Projeto",
    "contact-title": "Contato"
  },
  "en": {
    "name": "Diego Vilella Rodrigues",
    "title": "Systems Analyst | Web Developer",
    "menu-about": "About",
    "menu-education": "Education",
    "menu-experience": "Experience",
    "menu-projects": "Projects",
    "menu-contact": "Contact",
    "about-title": "About Me",
    "about-text": "Brazilian, 27 years old. Passionate about technology and development. Experience in web projects with HTML, CSS, JavaScript, .NET, and other technologies.",
    "education-title": "Education",
    "education-university": "Federal University of Technology - Paraná (UTFPR)",
    "education-course": "System Analysis and Development (Completed in 12/2018)",
    "experience-title": "Professional Experience",
    "job-1-title": "Freelancer - Web Developer",
    "job-1-desc": "Maintenance and bug fixes, performance optimization, and feature implementation in websites.",
    "job-2-title": "Trucks Control - Web Developer",
    "job-2-desc": "Development of biometric reading via web and implementation of HR functionalities.",
    "job-3-title": "TCS - Software Developer",
    "job-3-desc": "Incident and alert handling for Banco Itaú and Porto Seguro Insurance. Corrective maintenance and Agile methodology (Scrum).",
    "job-4-title": "InfoSolutions - Junior Programmer",
    "job-4-desc": "System management, implementation, and documentation. Desktop and web development using Windev.",
    "projects-title": "Projects",
    "project-1-title": "Project X",
    "project-1-desc": "Brief project description. Technologies used: HTML, CSS, JavaScript, .NET.",
    "view-project": "View Project",
    "contact-title": "Contact"
  }
};

// Detecta o idioma do navegador
const userLang = navigator.language.startsWith("pt") ? "pt" : "en";
let currentLang = userLang;

// Atualiza o idioma na página
function updateLanguage(lang) {
  document.querySelectorAll("[data-lang]").forEach(element => {
    const key = element.getAttribute("data-lang");
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Atualiza o texto do botão
  document.getElementById("toggle-lang").textContent = lang === "pt" ? "🇺🇸 English" : "🇧🇷 Português";
}

// Evento de clique para trocar o idioma
document.getElementById("toggle-lang").addEventListener("click", () => {
  currentLang = currentLang === "pt" ? "en" : "pt";
  updateLanguage(currentLang);
});

// Define o idioma inicial
updateLanguage(currentLang);
