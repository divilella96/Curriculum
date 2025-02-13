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
    "contact-title": "Contact"
  }
};

document.querySelector("#toggle-lang").addEventListener("click", () => {
  const lang = document.documentElement.lang === "pt" ? "en" : "pt";
  document.documentElement.lang = lang;
  updateLanguage(lang);
});

function updateLanguage(lang) {
  document.querySelectorAll("[data-lang]").forEach(el => {
    el.textContent = translations[lang][el.dataset.lang];
  });
}

updateLanguage("pt");
