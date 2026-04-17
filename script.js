// Frontend javascript w buttons
function toggleMenu() {
  const menu = document.querySelector(".mobile-menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Hardcoded projects data (no backend needed)
const projectsData = [
  {
    title: "SOC Lab — RDP Attack Detection",
    description: "Built a SOC monitoring lab to detect RDP brute-force attacks on Windows. Configured Sysmon for endpoint logging and forwarded logs to Splunk SIEM for real-time alerting.",
    image: "./assets/project1.png",
    link: "https://github.com/Samboujunior/SOC-Lab-RDP-Attack-Detection-with-Sysmon-and-Splunk"
  },
  {
    title: "TCP-IP Attack Lab",
    description: "Hands-on TCP/IP security lab demonstrating SYN flooding, TCP reset attacks, session hijacking, and reverse shell exploitation using Python and Scapy.",
    image: "./assets/project2.png",
    link: "https://github.com/Samboujunior/TCP-IP-attack-lab"
  },
  {
    title: "Ransomware Heuristic Analyzer",
    description: "Static ransomware detection using heuristic scoring and binary analysis (entropy, APIs, strings)",
    image: "./assets/project3.png",
    link: "https://github.com/Samboujunior/ransomware-heuristic-analyzer"
  }
];

// Loading projects from local data
function loadProjects() {
  const container = document.getElementById('projects-container');

  container.innerHTML = '';

  projectsData.forEach(project => {
    const cardHTML = `
      <div class="project-card">
        <div class="project-image-box">
          <img src="${project.image}" alt="${project.title}" class="project-img" />
        </div>
        <h2 class="project-title">${project.title}</h2>
        <p>${project.description}</p>
        <div class="button-container">
          <button class="btn button-outline"
            onclick="location.href='${project.link}'">
            GitHub
          </button>
        </div>
      </div>
    `;
    container.innerHTML += cardHTML;
  });
}

loadProjects();