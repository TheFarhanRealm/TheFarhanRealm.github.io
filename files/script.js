const CATS = {

  dev: {
    projects: [
      {
        title: "Game Library",
        desc: "Django & MySQL web app to manage game collections with full CRUD - built during the JUST IT bootcamp.",
        tech: ["Django", "MySQL", "Python"],
        github: "https://github.com/TheFarhanRealm/GameLibrary",
        live: null
      },
      {
        title: "Calculator",
        desc: "Clean JavaScript calculator for arithmetic. Responsive design with smooth, minimal UI.",
        tech: ["JavaScript", "CSS", "HTML"],
        github: "https://github.com/TheFarhanRealm/Calculator",
        live: "LiveProjects/Calculator/index.html"
      },
      {
        title: "Password Generator",
        desc: "Python CLI tool to generate cryptographically strong passwords.",
        tech: ["Python", "cryptography"],
        github: "https://github.com/TheFarhanRealm/PasswordGenerator-",
        live: "LiveProjects/PasswordGenPreview/index.html"
      },
      {
        title: "Task Manager",
        desc: "Feature-rich task manager with priorities, deadlines, and animated UI.",
        tech: ["JavaScript", "CSS", "LocalStorage"],
        github: "https://github.com/TheFarhanRealm/Task-Manager",
        live: "LiveProjects/TaskManager/index.html"
      },
      {
        title: "Weather App",
        desc: "Python app fetching real-time weather data via API, showing current conditions.",
        tech: ["Python", "REST API", "JSON"],
        github: "https://github.com/TheFarhanRealm/WeatherApp",
        live: null

      },
      {

        title: "Halo Wars RTS Randomizer",
        desc: "Randomizer app for the RTS Game Halo Wars Definitive Edition design to randomzie what difficulty and units you receive",
        tech: [ "C Win32 API", "mingw-w64 Compiler"],
        github: "https://github.com/TheFarhanRealm/HaloWarsDefinitiveEditionUnitRandomizerApp",
        live: null
      }
    ],
    skills: [
      { name: "HTML / CSS",   pct: 85, bar: "bar-accent" },
      { name: "JavaScript",   pct: 72, bar: "bar-accent" },
      { name: "Python",       pct: 80, bar: "bar-accent" },
      { name: "Django",       pct: 65, bar: "bar-accent" },
      { name: "SQL / MySQL",  pct: 60, bar: "bar-accent" },
      { name: "Git & GitHub", pct: 75, bar: "bar-accent" }
    ],
    certs: [
      {
        icon: "fas fa-university",
        name: "Harvard CS50x",
        sub: "Introduction to Computer Science",
        url: "https://certificates.cs50.io/5cc1290c-174f-4ecc-96ac-4b34af7f9774.pdf?size=letter"
      },
      {
        icon: "fas fa-rocket",
        name: "JUST IT Bootcamp",
        sub: "Software Development",
        url: "https://www.linkedin.com/in/farhan-saleem-a2556a222/overlay/Certifications/1949744832/treasury/?profileId=ACoAADf3yz0BfNfrDGOiNUEqujiC6XFtEyVdgqc"
      }
    ],
    stats: [
      { val: "5+",   label: "Projects built", desc: "Across web, Python & databases" },
      { val: "2",    label: "Certifications",  desc: "Harvard CS50x · JUST IT" },
      { val: "3+",   label: "Languages",       desc: "Python, JS, SQL" },
      { val: "100%", label: "Commitment",      desc: "Always Invested" }
    ]
  },


  cybersecurity: {
    projects: [
      {
        title: "Network Simulation (Cisco Packet Tracer)",
        desc: "Designed and simulated a multi-router/switch network topology including VLANs, subnetting, and basic routing configuration.",
        tech: ["Cisco Packet Tracer", "Networking", "VLANs"],
        github: "https://github.com/TheFarhanRealm/CiscoPacketTracer2026Project",
        live: "https://youtu.be/ePHUpnA6-t0"
      },
      {
        title: "SIEM Log Monitoring",
        desc: "Set up a SIEM to collect and correlate logs, then built alerts/dashboards to detect suspicious activity.",
        tech: ["Work In Progress","SIEM", "Log Analysis", "Threat Detection"],
        github: "https://github.com/TheFarhanRealm",
      },
      {
        title: "Honeypot Deployment",
        desc: "Deployed a honeypot to attract and log attacker activity, then analysed captured traffic and attack patterns.",
        tech: ["Work In Progress","Honeypot", "Linux", "Network Security"],
        github: "https://github.com/TheFarhanRealm",
      },
      {
        title: "Malware Analysis",
        desc: "Performed static and dynamic analysis of malware samples in an isolated sandbox environment to understand behaviour and IOCs.",
        tech: ["Work In Progress","Malware Analysis", "Sandboxing", "Reverse Engineering"],
        github: "https://github.com/TheFarhanRealm",
      }
    ],
    skills: [
      { name: "Networking basics", pct: 50, bar: "bar-dim" },
      { name: "Linux CLI",         pct: 55, bar: "bar-dim" },
      { name: "Wireshark",         pct: 35, bar: "bar-dim" },
      { name: "TryHackMe",         pct: 40, bar: "bar-dim" }
    ],
    certs: [
      {
        icon: "fas fa-shield-halved",
        name: "NCSC Cyber Essentials",
        sub: "Cyber Security Fundamentals",
        url: "#"
      }
    ],
    stats: [
      { val: "1",    label: "Certifications", desc: "National Cyber Security Centre - Cyber Essentials" },
      { val: "THM",  label: "Platform",    desc: "Active on TryHackMe" },
      { val: "2026", label: "Target",      desc: "First security project live" },
    ]
  }

};

/*  2. RENDERING ─────────────────────────────────────────────
   builds HTML strings that get dropped into the page.
   ──────────────────────────────────────────────────────────── */

// One project card
function cardHTML(p) {
  const live = p.live ? `<a class="icon-link" href="${p.live}" target="_blank"><i class="fas fa-external-link-alt"></i> Live Preview</a>` : '';
  const note = p.note ? `<p style="margin-top:.65rem;font-size:.73rem;color:var(--ink-soft);">${p.note}</p>` : '';

  return `<div class="project-card"><h4>${p.title}</h4><p class="project-desc">${p.desc}</p><div class="tech-row">${p.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}</div><div class="project-links"><a class="icon-link" href="${p.github}" target="_blank"><i class="fab fa-github"></i> GitHub</a>${live}</div>${note}</div>`;
}

// Renders one whole category (projects + sidebar + stats) into the page
function render(cat) {
  const d = CATS[cat];
  const projectsEl = document.getElementById('projectsContainer');
  const sidebarEl  = document.getElementById('sidebar');
  const statsEl    = document.getElementById('statsRow');

  // --- main grid: either a "coming soon" placeholder or actual project cards ---
  if (d.placeholder) {
    projectsEl.innerHTML = `<div class="coming-soon fade-in"><div class="coming-soon-icon"><i class="${d.placeholder.icon}"></i></div><h3>${d.placeholder.title}</h3><p>${d.placeholder.body}</p><div class="tech-row">${d.placeholder.tags.map(t => `<span class="tech-badge">${t}</span>`).join('')}</div></div>`;
  } else {
    let html = d.projects.map(cardHTML).join('');
    if (d.extraCard) {
      html += `<div class="coming-soon fade-in" style="border-style:dashed;"><div class="coming-soon-icon"><i class="${d.extraCard.icon}"></i></div><h3>${d.extraCard.title}</h3><p>${d.extraCard.body}</p></div>`;
    }
    projectsEl.innerHTML = html;
  }

  // --- sidebar: skills panel ---
  const skillsPanel = `<div class="panel fade-in"><div class="panel-head">Skills</div><div class="panel-body"><ul class="skill-list">${d.skills.map(s => `<li class="skill-item"><span class="skill-name">${s.name}</span><div class="skill-bar-wrap"><div class="skill-bar ${s.bar}" style="width:0%" data-pct="${s.pct}"></div></div></li>`).join('')}</ul></div></div>`;

  // --- sidebar: certifications panel (or a "none yet" note for cybersecurity) ---
  let certsPanel = '';
  if (d.certs && d.certs.length) {
    certsPanel = `<div class="panel fade-in"><div class="panel-head">Certifications</div><div class="panel-body"><div class="cert-list">${d.certs.map(c => `<a href="${c.url}" target="_blank" class="cert-row"><div class="cert-icon"><i class="${c.icon}"></i></div><div><div class="cert-name">${c.name}</div><div class="cert-sub">${c.sub}</div></div></a>`).join('')}</div></div></div>`;
  } else if (cat === 'cybersecurity') {
    certsPanel = `<div class="panel fade-in"><div class="panel-head">Certifications</div><div class="panel-body"><p style="font-size:.8rem;color:var(--ink-soft);text-align:center;">None yet - working towards CompTIA Security+</p></div></div>`;
  }

  sidebarEl.innerHTML = skillsPanel + certsPanel;

  // --- stats row ---
  statsEl.innerHTML = d.stats.map(s => `<div class="stat-cell"><div class="stat-label">${s.label}</div><div class="stat-value">${s.val}</div><div class="stat-desc">${s.desc}</div></div>`).join('');

  // --- animate skill bars in after the DOM has updated ---
  requestAnimationFrame(() => {
    setTimeout(() => {
      sidebarEl.querySelectorAll('.skill-bar').forEach(bar => {
        bar.style.width = bar.dataset.pct + '%';
      });
    }, 100);
  });
}

/*  3. EVENT WIRING */

document.addEventListener('DOMContentLoaded', () => {

  // Cat tab buttons (Software Dev / Data Analyst / Cybersec)
  const catButtons = document.querySelectorAll('.cat-btn');
  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      catButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render(btn.dataset.category);
    });
  });
  render('dev'); // default tab shown on page load

  // Contact form 
  const sendBtn = document.getElementById('sendBtn');
  const successDiv = document.getElementById('formSuccess');

  sendBtn.addEventListener('click', () => {
    const name  = document.getElementById('cf-name').value.trim();
    const email = document.getElementById('cf-email').value.trim();
    const msg   = document.getElementById('cf-msg').value.trim();

    if (!name || !email || !msg) {
      sendBtn.style.background = '#ff4d4d';
      sendBtn.innerHTML = '<i class="fas fa-exclamation-circle"></i> Fill all fields';
      setTimeout(() => {
        sendBtn.style.background = '';
        sendBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send message';
      }, 2000);
      return;
    }

    sendBtn.disabled = true;
    sendBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';
    setTimeout(() => {
      sendBtn.style.display = 'none';
      successDiv.style.display = 'flex';
    }, 1000);
  });

});
