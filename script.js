/* Alexandre Tsumanuma — Tsumanuma Tech Solutions
   Interações: i18n PT/EN, relógio, nav, reveal, progresso, CV por idioma. */
(function () {
  "use strict";

  /* ----------------------------- i18n ----------------------------- */
  var I18N = {
    pt: {
      "doc.title": "Alexandre Tsumanuma — Arquiteto de Cibersegurança",
      "nav.expertise": "Expertise", "nav.experience": "Trajetória", "nav.work": "Projetos",
      "nav.stack": "Stack", "nav.contact": "Contato",
      "hero.eyebrow": "Arquiteto de Cibersegurança · IA · Cloud",
      "hero.title": "Desenho sistemas <span class='accent'>seguros</span>, inteligentes e <span class='accent'>escaláveis</span>.",
      "hero.lede": "Sou <strong>Alexandre Tsumanuma</strong> — Arquiteto de Cibersegurança e Engenheiro de Software com <strong>7+ anos</strong> desenhando arquiteturas em nuvem, integrando IA e protegendo o que importa. Fundador da <strong>Tsumanuma Tech Solutions</strong>.",
      "hero.cta1": "Vamos conversar", "hero.cta2": "Ver trajetória",
      "hero.stat1": "anos de experiência", "hero.stat2": "idiomas", "hero.stat3": "pós-graduações",
      "exp.tag": "EXPERTISE", "exp.h": "Do código à nuvem, com segurança em cada camada",
      "exp.c1t": "Engenharia de Software", "exp.c1p": "Aplicações e APIs robustas em Java, C#, Python e PHP/Laravel. Código limpo, testável e feito para durar.",
      "exp.c2t": "Arquitetura & Cloud", "exp.c2p": "Arquiteturas escaláveis e seguras em AWS, Azure e Google Cloud, com infraestrutura como código (Terraform) e automação de deploy.",
      "exp.c3t": "Inteligência Artificial", "exp.c3p": "LLMs, RAG e agentes em produção — com testes de BIAS para avaliar justiça e robustez dos modelos, e dados protegidos.",
      "exp.c4t": "Cibersegurança", "exp.c4p": "Desenvolvimento seguro, hardening de ambientes cloud e monitoramento contínuo com SIEM e SOC.",
      "xp.tag": "TRAJETÓRIA", "xp.h": "Experiência", "xp.sub": "Mais de 7 anos entre desenvolvimento, arquitetura de software e cibersegurança.",
      "xp.now": "Atual",
      "xp.j1r": "Engenheiro de Software", "xp.j1p": "Desenvolvimento de agentes de conversação para o setor automotivo em Python; planejamento de arquitetura, padrões de código e revisão de PRs. Features em PHP/Laravel com foco em performance e escalabilidade, infraestrutura em AWS, Azure e GCP, containerização (Docker), CI/CD e telemetria com OpenTelemetry.",
      "xp.j2note": "Trajetória de ~4 anos, com evolução de desenvolvedor a arquiteto de cibersegurança:",
      "xp.j2r1": "Arquiteto de Cibersegurança", "xp.j2p1": "— arquitetura de software em nuvem, requisitos de segurança, testes de BIAS em modelos de IA, SIEM/NOC e revisão de scripts Terraform e Azure.",
      "xp.j2r2": "Desenvolvedor Sênior — Java", "xp.j2p2": "— desenvolvimento de aplicações robustas e liderança técnica, com foco crescente em segurança.",
      "xp.j2r3": "Desenvolvedor Pleno", "xp.j2p3": "— desenvolvimento full stack e evolução de sistemas em produção.",
      "xp.j3r": "Desenvolvedor Júnior", "xp.j3p": "Aplicações web e testes automatizados com PHP e Laravel, APIs REST e manutenção de bancos SQL.",
      "xp.j4r": "Desenvolvedor Full Stack", "xp.j4p": "Aplicações web com PHP/Laravel, APIs REST, soluções IoT em Python para controle de acesso e quiosques interativos em C#.",
      "xp.edu": "Formação", "xp.cursando": "cursando",
      "xp.edu1": "Pós — Engenharia de Software em IA Aplicada", "xp.edu2": "Pós — Redes e Cibersegurança",
      "xp.edu3": "Pós — Arquitetura de Software, Data Science e Cibersegurança", "xp.edu4": "Bacharelado — Análise e Desenvolvimento de Sistemas",
      "xp.hobby": "Além do código", "xp.hobbyp": "Nas horas vagas, desenvolvo <strong>jogos e RPGs</strong> — um laboratório pessoal pra experimentar sistemas, narrativa e novas tecnologias.",
      "wk.tag": "PROJETOS", "wk.h": "Seleção de projetos", "wk.sub": "Uma amostra dos <strong>muitos projetos</strong> dos quais participei. Os repositórios são privados — aqui vai o que entreguei e a stack envolvida.",
      "wk.p1t": "Plataforma de IA com testes de BIAS", "wk.p1p": "Desenvolvimento e segurança de modelos de IA, com testes de BIAS para avaliar justiça e robustez, e proteção dos dados usados nas fases de teste.", "wk.p1tag": "Segurança de dados",
      "wk.p2t": "Arquitetura de Nuvem Segura", "wk.p2p": "Desenho de arquiteturas escaláveis e seguras, configuração de segurança de ambientes cloud e monitoramento contínuo com SIEM e NOC.",
      "wk.p3t": "Controle de Acesso IoT", "wk.p3p": "Solução IoT em Python para controle de acesso a ambientes via identificação digital, integrada a sistemas web e APIs REST.",
      "wk.p4t": "Quiosques Interativos", "wk.p4p": "Quiosques de automação de compras em C#, com interface interativa e integração a sistemas de pagamento.", "wk.p4tag": "Automação",
      "wk.more": "+ diversos outros projetos ao longo de 7+ anos de carreira.",
      "lg.tag": "IDIOMAS", "lg.h": "Construo para um mundo global", "lg.sub": "Seis idiomas — do português nativo ao japonês, chinês e coreano.",
      "lg.pt": "Português", "lg.native": "Nativo", "lg.en": "Inglês", "lg.es": "Espanhol", "lg.ja": "Japonês", "lg.zh": "Chinês", "lg.ko": "Coreano",
      "st.tag": "STACK", "st.h": "Tecnologias & ferramentas",
      "st.g1": "Linguagens", "st.g2": "Cloud & Infra", "st.g3": "IA", "st.g4": "Segurança", "st.g5": "Web & Dados",
      "pr.tag": "PROCESSO", "pr.h": "Como eu trabalho",
      "pr.s1t": "Descobrir", "pr.s1p": "Entendo o problema, o contexto e os requisitos — funcionais e de segurança — antes de escrever qualquer linha.",
      "pr.s2t": "Arquitetar", "pr.s2p": "Defino arquitetura, stack e um roadmap claro, priorizando escalabilidade, segurança e o que gera valor.",
      "pr.s3t": "Construir", "pr.s3p": "Desenvolvo com código limpo, testes e práticas de desenvolvimento seguro.",
      "pr.s4t": "Entregar", "pr.s4p": "Deploy automatizado, monitoramento contínuo e suporte em produção.",
      "ct.tag": "CONTATO", "ct.h": "Tem um desafio técnico em mente?", "ct.sub": "Arquitetura, IA ou segurança — vamos construir algo sólido juntos.",
      "ct.cta": "Vamos conversar", "ct.cv": "Baixar CV ↓",
      "footer.note": "Arquitetando software seguro e inteligente."
    },
    en: {
      "doc.title": "Alexandre Tsumanuma — Cybersecurity Architect",
      "nav.expertise": "Expertise", "nav.experience": "Experience", "nav.work": "Work",
      "nav.stack": "Stack", "nav.contact": "Contact",
      "hero.eyebrow": "Cybersecurity Architect · AI · Cloud",
      "hero.title": "I design <span class='accent'>secure</span>, intelligent and <span class='accent'>scalable</span> systems.",
      "hero.lede": "I'm <strong>Alexandre Tsumanuma</strong> — a Cybersecurity Architect and Software Engineer with <strong>7+ years</strong> designing cloud architectures, integrating AI and protecting what matters. Founder of <strong>Tsumanuma Tech Solutions</strong>.",
      "hero.cta1": "Let's talk", "hero.cta2": "See my journey",
      "hero.stat1": "years of experience", "hero.stat2": "languages", "hero.stat3": "postgrad degrees",
      "exp.tag": "EXPERTISE", "exp.h": "From code to cloud, with security at every layer",
      "exp.c1t": "Software Engineering", "exp.c1p": "Robust applications and APIs in Java, C#, Python and PHP/Laravel. Clean, testable code built to last.",
      "exp.c2t": "Architecture & Cloud", "exp.c2p": "Scalable, secure architectures on AWS, Azure and Google Cloud, with infrastructure as code (Terraform) and deploy automation.",
      "exp.c3t": "Artificial Intelligence", "exp.c3p": "LLMs, RAG and agents in production — with BIAS testing to assess model fairness and robustness, and protected data.",
      "exp.c4t": "Cybersecurity", "exp.c4p": "Secure development, cloud hardening and continuous monitoring with SIEM and SOC.",
      "xp.tag": "JOURNEY", "xp.h": "Experience", "xp.sub": "Over 7 years across software development, architecture and cybersecurity.",
      "xp.now": "Present",
      "xp.j1r": "Software Engineer", "xp.j1p": "Building conversational agents for the automotive sector in Python; architecture planning, code standards and PR reviews. Features in PHP/Laravel focused on performance and scalability, infrastructure across AWS, Azure and GCP, containerization (Docker), CI/CD and telemetry with OpenTelemetry.",
      "xp.j2note": "A ~4-year journey, growing from developer to cybersecurity architect:",
      "xp.j2r1": "Cybersecurity Architect", "xp.j2p1": "— cloud software architecture, security requirements, BIAS testing on AI models, SIEM/NOC and review of Terraform and Azure scripts.",
      "xp.j2r2": "Senior Developer — Java", "xp.j2p2": "— building robust applications and technical leadership, with a growing focus on security.",
      "xp.j2r3": "Mid-level Developer", "xp.j2p3": "— full stack development and evolution of production systems.",
      "xp.j3r": "Junior Developer", "xp.j3p": "Web applications and automated tests with PHP and Laravel, REST APIs and SQL database maintenance.",
      "xp.j4r": "Full Stack Developer", "xp.j4p": "Web apps with PHP/Laravel, REST APIs, Python IoT solutions for access control and interactive kiosks in C#.",
      "xp.edu": "Education", "xp.cursando": "in progress",
      "xp.edu1": "Postgrad — Software Engineering in Applied AI", "xp.edu2": "Postgrad — Networks and Cybersecurity",
      "xp.edu3": "Postgrad — Software Architecture, Data Science and Cybersecurity", "xp.edu4": "Bachelor's — Systems Analysis and Development",
      "xp.hobby": "Beyond the code", "xp.hobbyp": "In my free time, I build <strong>games and RPGs</strong> — a personal lab to experiment with systems, storytelling and new technologies.",
      "wk.tag": "WORK", "wk.h": "Selected projects", "wk.sub": "A sample of the <strong>many projects</strong> I've worked on. The repositories are private — here's what I delivered and the stack involved.",
      "wk.p1t": "AI Platform with BIAS testing", "wk.p1p": "Development and security of AI models, with BIAS testing to assess fairness and robustness, and protection of data used during testing.", "wk.p1tag": "Data security",
      "wk.p2t": "Secure Cloud Architecture", "wk.p2p": "Design of scalable, secure architectures, cloud environment security configuration and continuous monitoring with SIEM and NOC.",
      "wk.p3t": "IoT Access Control", "wk.p3p": "Python IoT solution for room access via digital identification, integrated with web systems and REST APIs.",
      "wk.p4t": "Interactive Kiosks", "wk.p4p": "Purchase-automation kiosks in C#, with an interactive interface and payment system integration.", "wk.p4tag": "Automation",
      "wk.more": "+ many other projects across 7+ years of career.",
      "lg.tag": "LANGUAGES", "lg.h": "I build for a global world", "lg.sub": "Six languages — from native Portuguese to Japanese, Chinese and Korean.",
      "lg.pt": "Portuguese", "lg.native": "Native", "lg.en": "English", "lg.es": "Spanish", "lg.ja": "Japanese", "lg.zh": "Chinese", "lg.ko": "Korean",
      "st.tag": "STACK", "st.h": "Technologies & tools",
      "st.g1": "Languages", "st.g2": "Cloud & Infra", "st.g3": "AI", "st.g4": "Security", "st.g5": "Web & Data",
      "pr.tag": "PROCESS", "pr.h": "How I work",
      "pr.s1t": "Discover", "pr.s1p": "I understand the problem, the context and the requirements — functional and security — before writing a single line.",
      "pr.s2t": "Architect", "pr.s2p": "I define architecture, stack and a clear roadmap, prioritizing scalability, security and what drives value.",
      "pr.s3t": "Build", "pr.s3p": "I develop with clean code, tests and secure development practices.",
      "pr.s4t": "Deliver", "pr.s4p": "Automated deploy, continuous monitoring and production support.",
      "ct.tag": "CONTACT", "ct.h": "Got a technical challenge in mind?", "ct.sub": "Architecture, AI or security — let's build something solid together.",
      "ct.cta": "Let's talk", "ct.cv": "Download CV ↓",
      "footer.note": "Architecting secure and intelligent software."
    }
  };

  var CV = {
    pt: { href: "assets/cv-pt.pdf", name: "Alexandre Tsumanuma - CV.pdf" },
    en: { href: "assets/cv-en.pdf", name: "Alexandre Tsumanuma - Resume.pdf" }
  };

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.pt;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.innerHTML = dict[key];
    });
    if (dict["doc.title"]) document.title = dict["doc.title"];
    document.documentElement.setAttribute("lang", lang === "en" ? "en" : "pt-BR");

    var cv = document.getElementById("cvLink");
    if (cv) { var c = CV[lang] || CV.pt; cv.setAttribute("href", c.href); cv.setAttribute("download", c.name); }

    document.querySelectorAll(".lang-opt").forEach(function (o) {
      o.classList.toggle("active", o.getAttribute("data-lang") === lang);
    });
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  var stored = null;
  try { stored = localStorage.getItem("lang"); } catch (e) {}
  var initial = stored || ((navigator.language || "pt").slice(0, 2) === "en" ? "en" : "pt");
  applyLang(initial);

  var langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("lang") === "en" ? "en" : "pt";
      applyLang(current === "en" ? "pt" : "en");
    });
  }

  /* ------------------- nav / progress / menu ---------------------- */
  var nav = document.getElementById("nav");
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.querySelector(".nav-links");
  var progress = document.getElementById("scrollProgress");

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  function onScroll() {
    var y = window.scrollY;
    nav.classList.toggle("scrolled", y > 40);
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    progress.style.width = max > 0 ? (y / max) * 100 + "%" : "0";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  function closeMenu() {
    navLinks.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
  navToggle.addEventListener("click", function () {
    var open = navLinks.classList.toggle("open");
    navToggle.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", String(open));
  });
  navLinks.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeMenu); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });

  /* --------------------------- reveal ----------------------------- */
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          setTimeout(function () { entry.target.classList.add("visible"); }, i * 70);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ------------------- terminal typewriter ------------------------ */
  var termLine = document.getElementById("termLine");
  if (termLine) {
    var msgs = ["monitoring systems…", "ci/cd: passing", "security scan: clean", "agents: online", "deploy: ok"];
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      termLine.textContent = "monitoring systems";
    } else {
      var mi = 0, ci = 0, deleting = false;
      (function type() {
        var m = msgs[mi];
        if (!deleting) {
          ci++;
          termLine.textContent = m.slice(0, ci);
          if (ci >= m.length) { deleting = true; setTimeout(type, 1700); return; }
          setTimeout(type, 55);
        } else {
          ci--;
          termLine.textContent = m.slice(0, ci);
          if (ci <= 0) { deleting = false; mi = (mi + 1) % msgs.length; setTimeout(type, 350); return; }
          setTimeout(type, 26);
        }
      })();
    }
  }
})();
