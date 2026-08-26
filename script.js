const page = document.body.dataset.page || "home";

const links = {
  scholar: "https://scholar.google.com/citations?hl=en&view_op=list_works&user=PGcxp4AAAAAJ",
  linkedin: "https://www.linkedin.com/in/ashraful-alam-0064601b1/",
  orcid: "https://orcid.org/0009-0001-6062-3635",
  github: "https://github.com/ashraful024",
  researchGate: "https://www.researchgate.net/profile/Ashraful-Alam-37",
  email: "mailto:ashrafrakib09@gmail.com",
};

const projects = [
  {
    category: "agriculture",
    label: "Master’s thesis · SUST–BRRI collaboration · Ongoing",
    title: "Predicting Varietal Performance of Boro Rice Using an Integrated Genomic–Enviromic–Management–Remote Sensing Framework across Diverse Ecosystems of Bangladesh",
    description: "This study integrates BRRI multi-environment trial data with genomic, environmental, management, remote-sensing, and GIS information. It aims to predict varietal yield and ranking in tested and untested locations and support location-specific recommendations for Bangladesh.",
    summary: "Combining multi-environment trials with genomic, environmental, management, remote-sensing, and GIS data to improve varietal prediction.",
    methods: "Multi-environment mixed models · genomic prediction · factor-analytic G×E · G×E×M · enviromics · remote sensing · leave-location-out validation · spatial recommendation",
  },
  {
    category: "cancer",
    label: "Cancer genomics · Statistical analysis · Ongoing",
    title: "Geographic Variation in the TP53 Mutation Spectrum",
    description: "I lead the main statistical analysis of geographic differences in TP53 mutations. The work examines hotspot mutations and mutation types across regions while accounting for cancer type, age, and sex.",
    summary: "Leading the statistical analysis of regional differences in TP53 mutations, including adjusted comparisons by cancer type, age, and sex.",
    methods: "Categorical data analysis · regression · subgroup analysis · data visualization",
  },
  {
    category: "health",
    label: "Climate and health · 2025–2026",
    title: "Heat Exposure, Health, and Resilience",
    description: "A mixed-method study of 664 outdoor construction workers across nine heat-vulnerable urban environments. The project combines survey and remote-sensing data and contributes to a context-specific heat-resilience scale for Bangladesh.",
    summary: "Combining survey and remote-sensing data to study heat exposure and develop a heat-resilience scale for Bangladesh.",
    methods: "Remote sensing · urban heat mapping · heat-resilience scale development · reliability analysis · regression",
  },
  {
    category: "health",
    label: "Maternal health · 2024–2026",
    title: "Healthcare Services in Bangladesh’s Haor Region",
    description: "Household survey research across 40 rural clusters in six districts, examining antenatal care, facility delivery, skilled birth attendance, and postnatal care.",
    summary: "Studying access to maternal and newborn healthcare across rural communities in Bangladesh’s Haor region.",
    methods: "Cluster survey · regression modeling · mixed-method evidence synthesis",
  },
  {
    category: "forecasting",
    label: "Infectious disease surveillance",
    title: "Forecasting Respiratory Infections among Rohingya Refugees",
    description: "Multivariate time-series and deep-learning models for understanding and forecasting acute respiratory infection burden in Cox’s Bazar.",
    summary: "Using time-series and deep-learning models to forecast acute respiratory infections in Cox’s Bazar.",
    methods: "Time-series forecasting · deep learning · meteorological covariates",
  },
];

const publications = [
  {
    year: "2026", type: "Journal article",
    title: "SWPER-Measured women’s empowerment and mental health in Bangladesh: A cross-sectional study from the 2022 Demographic and Health Survey",
    authors: "Alam, A., Prodhan, M. E., Akhter, T., et al.", venue: "BMC Women’s Health, 26, 119", doi: "https://doi.org/10.1186/s12905-026-04300-w",
  },
  {
    year: "2025", type: "Journal article",
    title: "The effects of household water, sanitation, and hygiene on early childhood education enrollment: Evidence from the 2022 Bangladesh Demographic and Health Survey",
    authors: "Alam, A., Prodhan, M. E., Islam, F., et al.", venue: "BMC Public Health, 25, 2732", doi: "https://doi.org/10.1186/s12889-025-23968-7",
  },
  {
    year: "2025", type: "Conference proceeding",
    title: "Deep learning-based multivariate time series forecasting of acute respiratory infections among Rohingya refugees in Cox’s Bazar, Bangladesh",
    authors: "Alam, A., Prodhan, M. E., Hasan, M. N., et al.", venue: "28th International Conference on Computer and Information Technology (ICCIT)", doi: "https://doi.org/10.1109/ICCIT68739.2025.11491162",
  },
  {
    year: "2024", type: "Conference proceeding",
    title: "A comparative study of machine learning algorithms in classifying and predicting exclusive breastfeeding infants in Bangladesh",
    authors: "Prodhan, M. E., Alam, A., Hasan, M. N., et al.", venue: "27th International Conference on Computer and Information Technology (ICCIT)", doi: "https://doi.org/10.1109/ICCIT64611.2024.11022563",
  },
  {
    year: "2024", type: "Conference proceeding",
    title: "A comparative study of machine learning algorithms in predicting acute respiratory infection of under-five children in Bangladesh using imbalanced data",
    authors: "Hasan, M. N., Prodhan, M. E., Alam, A., et al.", venue: "IEEE International Conference on Biomedical Engineering, Computer and Information Technology for Health", doi: "https://doi.org/10.1109/BECITHCON64160.2024.10962602",
  },
];

const manuscripts = [
  ["Under review · PLOS ONE", "Learning environment at home and primary school dropout status in Bangladesh"],
  ["Under review · Scientific Reports", "Prevalence and Determinants of Low Bone Mineral Density Among Adults in Sylhet, Bangladesh"],
  ["In preparation", "Heatwave vulnerability among construction workers in heat-prone areas of Bangladesh"],
  ["In preparation", "Prevalence and Risk Factors for Post-Flash Flood Psychological Morbidity"],
];

const nav = [
  ["home", "index.html", "Home"], ["about", "about.html", "About"],
  ["research", "research.html", "Research"], ["publications", "publications.html", "Publications"],
  ["teaching", "teaching.html", "Teaching"], ["contact", "contact.html", "Contact"],
];

function header() {
  return `<header class="site-header"><div class="nav-shell">
    <a class="brand" href="index.html" aria-label="Ashraful Alam, home"><span><strong>Ashraful Alam</strong><small>Statistics · Data science</small></span></a>
    <button class="menu-button" type="button" aria-expanded="false" aria-controls="primary-navigation"><span class="sr-only">Toggle navigation</span><span></span><span></span><span></span></button>
    <nav id="primary-navigation" class="primary-nav" aria-label="Main navigation">
      ${nav.map(([key, href, label]) => `<a href="${href}"${page === key ? ' class="active" aria-current="page"' : ""}>${label}</a>`).join("")}
      <a class="nav-cv" href="Ashraful-Alam-CV.pdf" target="_blank" rel="noreferrer">CV</a>
    </nav>
  </div></header>`;
}

function footer() {
  return `<footer class="site-footer"><div class="footer-shell"><div>
    <a class="footer-name" href="index.html">Ashraful Alam</a>
    <p>Statistician working across agriculture, genomics, public health, machine learning, and spatial research.</p>
  </div><div class="footer-links" aria-label="Academic profiles">
    <a href="${links.scholar}" target="_blank" rel="noreferrer">Scholar</a><a href="${links.orcid}" target="_blank" rel="noreferrer">ORCID</a><a href="${links.github}" target="_blank" rel="noreferrer">GitHub</a><a href="${links.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a>
  </div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Ashraful Alam</span><span>Research, publications, teaching, and collaboration.</span></div></footer>`;
}

function pageHero(eyebrow, title, description) {
  return `<section class="page-hero"><div class="page-shell"><p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p class="page-lead">${description}</p></div></section>`;
}

function projectCard(project, index) {
  return `<article class="research-card"><span class="card-number">0${index + 1}</span><p class="card-label">${project.label}</p><h3>${project.title}</h3><p>${project.description}</p><div class="method-line">${project.methods}</div></article>`;
}

function publicationRow(item, heading = "h3") {
  return `<article class="publication-row"><div class="publication-meta"><span>${item.year}</span><span>${item.type}</span></div><div><${heading}>${item.title}</${heading}><p>${item.authors} · <em>${item.venue}</em></p></div><a class="doi-link" href="${item.doi}" target="_blank" rel="noreferrer" aria-label="Open DOI for ${item.title}">DOI ↗</a></article>`;
}

const pages = {
  home: `<main id="main-content">
    <section class="home-hero"><div class="hero-copy"><p class="eyebrow">Academic portfolio</p><h1><em>Ashraful Alam</em></h1><p class="role-line"><span class="rotating-role" data-role>Statistician</span></p><p class="hero-lead">I am a statistician and M.Sc. student at Shahjalal University of Science and Technology. I work with agricultural, genomic, public-health, and spatial data using statistical modeling and machine learning.</p><p class="affiliation-line">Department of Statistics · SUST, Bangladesh</p><div class="hero-actions"><a class="button primary" href="research.html">View research</a><a class="button secondary" href="Ashraful-Alam-CV.pdf" target="_blank" rel="noreferrer">View CV</a></div><div class="hero-links"><a href="${links.scholar}" target="_blank" rel="noreferrer">Google Scholar ↗</a><a href="${links.orcid}" target="_blank" rel="noreferrer">ORCID ↗</a><a href="${links.github}" target="_blank" rel="noreferrer">GitHub ↗</a></div></div>
    <aside class="profile-panel" aria-label="Academic profile summary"><img class="profile-photo" src="ashraful-alam-profile.jpeg" alt="Ashraful Alam"><p class="focus-kicker">Current focus</p><h2>Research areas</h2><ul class="focus-list"><li>Agricultural and genomic prediction</li><li>Biostatistics and public-health research</li><li>Spatial analysis and predictive modeling</li></ul><div class="profile-status"><span></span> Open to research collaboration</div><a class="focus-link" href="about.html">Read my profile <span>→</span></a></aside></section>
    <section class="metrics-strip" aria-label="Career highlights"><div><strong>5</strong><span>Peer-reviewed publications and proceedings</span></div><div><strong>5</strong><span>Research projects</span></div><div><strong>4</strong><span>Conference presentations</span></div><div><strong>2024–</strong><span>Research experience</span></div></section>
    <section class="section page-shell expertise-section reveal"><div class="section-heading"><div><p class="eyebrow">What I do</p><h2>Areas of expertise</h2></div></div><div class="expertise-grid"><article><span>01</span><h3>Genomic and agricultural research</h3><p>Genomic data analysis, multi-environment trials, G×E and G×E×M modeling, remote sensing, and varietal prediction.</p></article><article><span>02</span><h3>Biostatistics and public health</h3><p>Survey analysis, regression, epidemiological research, maternal and child health, cancer data, and scale development.</p></article><article><span>03</span><h3>Predictive and spatial analysis</h3><p>Machine learning, time-series forecasting, GIS, spatial statistics, model validation, and reproducible workflows.</p></article></div></section>
    <section class="section soft-section reveal"><div class="page-shell"><div class="section-heading"><div><p class="eyebrow">Current work</p><h2>Current research</h2></div><a class="text-link" href="research.html">View all research <span>→</span></a></div><div class="research-grid home-research-grid">${projects.slice(0, 3).map((project, index) => projectCard({ ...project, description: project.summary }, index)).join("")}</div></div></section>
    <section class="section page-shell reveal"><div class="section-heading"><div><p class="eyebrow">Selected work</p><h2>Recent publications</h2></div><a class="text-link" href="publications.html">Full publication list <span>→</span></a></div><div class="publication-list">${publications.slice(0, 3).map((item) => publicationRow(item)).join("")}</div></section>
    <section class="collaboration-band reveal"><div class="page-shell"><p class="eyebrow">Collaboration</p><h2>Research collaboration</h2><p>I welcome collaboration in applied statistics, data science, agriculture, genomics, public health, and spatial research.</p><a class="button light" href="contact.html">Contact me</a></div></section>
  </main>`,

  about: `<main id="main-content">${pageHero("About", "Academic profile", "I use careful statistical methods to answer practical research questions and communicate the results clearly.")}
    <section class="section page-shell about-profile"><aside class="about-summary"><p class="eyebrow">Academic profile</p><h2>Profile at a glance</h2><dl><div><dt>Degree</dt><dd>M.Sc. in Statistics</dd></div><div><dt>Institution</dt><dd>Shahjalal University of Science and Technology</dd></div><div><dt>Current focus</dt><dd>Applied statistics and data science</dd></div></dl></aside><div class="large-copy"><p>I am an M.Sc. student in Statistics at Shahjalal University of Science and Technology (SUST), Bangladesh. I completed my B.Sc. in Statistics with distinction and a CGPA of 3.82/4.00.</p><p>My research includes genomic data analysis, biostatistics, statistical learning, multi-environment prediction, time-series forecasting, spatial statistics, GIS, and remote sensing. I am particularly interested in combining genomic, environmental, management, field, and remote-sensing data to improve prediction and decision-making.</p><p>I also teach Python, statistical modeling, and data analysis. I value careful methods, reproducible analysis, clear writing, and collaborative research.</p></div></section>
    <section class="section soft-section"><div class="page-shell split-heading"><div><p class="eyebrow">Education</p><h2>Academic foundation</h2></div><div class="timeline compact"><article><span>2025–Expected 2026</span><div><h3>Master of Science in Statistics</h3><p>Shahjalal University of Science and Technology, Sylhet</p></div></article><article><span>2020–2025</span><div><h3>Bachelor of Science in Statistics</h3><p>Shahjalal University of Science and Technology · CGPA 3.82/4.00, with distinction</p></div></article></div></div></section>
    <section class="section page-shell"><div class="section-heading"><div><p class="eyebrow">Experience</p><h2>Research journey</h2></div></div><div class="timeline">
      <article><span>2025–Present</span><div><h3>Master’s Researcher</h3><strong>Department of Statistics, SUST · In collaboration with BRRI</strong><p>Developing an integrated GEM–RS framework to predict the yield and ranking of Boro rice varieties across tested and untested locations in Bangladesh.</p></div></article>
      <article><span>Ongoing</span><div><h3>Statistical Analyst</h3><strong>TP53 Mutation Spectrum Project</strong><p>Leading the main statistical analysis of geographic variation in TP53 mutations, including hotspot patterns and adjusted comparisons by cancer type, age, and sex.</p></div></article>
      <article><span>2024–Present</span><div><h3>Research Assistant</h3><strong>Department of Statistics, SUST</strong><p>Supporting faculty-led studies in maternal and newborn health, child malnutrition, randomized trials, and small-area estimation.</p></div></article>
      <article><span>2025–2026</span><div><h3>Research Associate</h3><strong>Heat Exposure, Health, and Resilience Project</strong><p>Analyzed survey and remote-sensing data from 664 outdoor construction workers and contributed to the development and internal validation of a context-specific heat-resilience scale.</p></div></article>
      <article><span>2024–2026</span><div><h3>Research Assistant</h3><strong>Maternal and Newborn Healthcare in the Haor Region</strong><p>Analyzed primary data from 800 households across 40 clusters and six districts.</p></div></article>
    </div></section>
    <section class="section dark-section"><div class="page-shell"><p class="eyebrow">Methods and tools</p><h2>Methods and analytical tools</h2><div class="skills-grid"><article><h3>Statistical methods</h3><p>Regression, generalized linear and mixed models, experimental design, randomized controlled trials, small-area estimation, factor-analytic mixed models, and panel methods.</p></article><article><h3>Genomic and predictive analysis</h3><p>Genomic marker quality control, genomic relationships, genomic prediction, G×E and G×E×M analysis, mutation-spectrum analysis, machine learning, and model validation.</p></article><article><h3>Spatial analysis</h3><p>Spatial statistics, GIS, spatial epidemiology, remote sensing, raster processing, land-surface temperature, and land cover.</p></article><article><h3>Programming and software</h3><p>R, Python, ArcGIS, Git/GitHub, SAS, Stata, SPSS, SQL, and reproducible research workflows.</p></article></div></div></section>
  </main>`,

  research: `<main id="main-content">${pageHero("Research", "Selected research projects", "My work covers agriculture, genomics, public health, climate, cancer data, forecasting, and spatial analysis.")}
    <section class="section page-shell"><div class="filter-bar" aria-label="Filter research projects"><button class="active" type="button" data-filter="all" aria-pressed="true">All</button><button type="button" data-filter="agriculture" aria-pressed="false">Agriculture & genomics</button><button type="button" data-filter="health" aria-pressed="false">Public health & climate</button><button type="button" data-filter="cancer" aria-pressed="false">Cancer genomics</button><button type="button" data-filter="forecasting" aria-pressed="false">Forecasting</button></div><div class="research-detail-list filtered-list">${projects.map((project, index) => `<article class="research-detail" data-category="${project.category}"><div class="research-index">0${index + 1}</div><div><p class="card-label">${project.label}</p><h2>${project.title}</h2><p class="research-description">${project.description}</p><div class="method-line">${project.methods}</div></div></article>`).join("")}</div></section>
    <section class="section soft-section"><div class="page-shell research-principles"><div><p class="eyebrow">Approach</p><h2>Research approach</h2></div><div class="principle-grid"><article><span>01</span><h3>Understand the context</h3><p>Understand the population, setting, measurement process, and decisions the evidence must support.</p></article><article><span>02</span><h3>Match method to question</h3><p>Use appropriate statistical, computational, or spatial methods instead of treating one model as a universal solution.</p></article><article><span>03</span><h3>Use realistic validation</h3><p>Test performance across locations, time, groups, and realistic deployment conditions.</p></article></div></div></section>
  </main>`,

  publications: `<main id="main-content">${pageHero("Publications", "Publications and manuscripts", "My published work covers population health, women’s empowerment, child health, infectious-disease forecasting, and applied machine learning.")}
    <section class="section page-shell"><div class="publication-toolbar"><p>${publications.length} peer-reviewed articles and proceedings</p><a class="button secondary" href="${links.scholar}" target="_blank" rel="noreferrer">View Google Scholar ↗</a></div><div class="publication-list full">${publications.map((item) => publicationRow(item, "h2")).join("")}</div></section>
    <section class="section soft-section"><div class="page-shell"><div class="section-heading"><div><p class="eyebrow">Pipeline</p><h2>Manuscripts</h2></div></div><div class="manuscript-grid">${manuscripts.map(([status, title]) => `<article><span>${status}</span><h3>${title}</h3></article>`).join("")}</div></div></section>
  </main>`,

  teaching: `<main id="main-content">${pageHero("Teaching", "Teaching and mentoring", "I use practical examples and live coding to explain both how a method works and why it is appropriate.")}
    <section class="section page-shell"><div class="teaching-list"><article><span class="teaching-number">01</span><div class="teaching-year">2026</div><div><h2>Hands-on Training on Data Analytics with Python</h2><strong>Department of Economics, Comilla University</strong><p>Two days of applied instruction covering Python, pandas, data cleaning, descriptive analysis, visualization, OLS regression, diagnostics, panel data, and time-series forecasting.</p></div></article><article><span class="teaching-number">02</span><div class="teaching-year">2025</div><div><h2>PyNEXT: 7-Day Python Learning Camp</h2><strong>SUST Data Science Club</strong><p>Designed and delivered a practical introduction to Python programming and data analysis for university students.</p></div></article><article><span class="teaching-number">03</span><div class="teaching-year">2022–Present</div><div><h2>Academic Mentoring</h2><strong>Statistics and programming</strong><p>Mentoring undergraduate and graduate students in Python, regression, experimental design, time series, econometrics, panel methods, and applied machine learning.</p></div></article></div></section>
    <section class="section dark-section"><div class="page-shell teaching-topics"><div><p class="eyebrow">Topics</p><h2>What I teach and mentor</h2></div><div class="topic-cloud">${["Python", "R", "Data cleaning", "Data visualization", "Regression", "Econometrics", "Panel data", "Time series", "Machine learning", "Experimental design", "Research methods", "Reproducible analysis"].map((topic) => `<span>${topic}</span>`).join("")}</div></div></section>
  </main>`,

  contact: `<main id="main-content">${pageHero("Contact", "Contact and collaboration", "I welcome collaboration and academic discussion in applied statistics, data science, agriculture, genomics, public health, and spatial research.")}
    <section class="section page-shell contact-grid"><div class="contact-primary"><p class="eyebrow">Email</p><h2>The best way to reach me</h2><a class="email-link" href="${links.email}">ashrafrakib09@gmail.com <span>↗</span></a><p>Please include a short description of your project, question, or proposed collaboration. I am based in Sylhet, Bangladesh.</p></div><div class="profile-list"><a href="${links.scholar}" target="_blank" rel="noreferrer"><span>Google Scholar</span><strong>Publications and citations</strong><b>↗</b></a><a href="${links.linkedin}" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>Professional profile</strong><b>↗</b></a><a href="${links.orcid}" target="_blank" rel="noreferrer"><span>ORCID</span><strong>0009-0001-6062-3635</strong><b>↗</b></a><a href="${links.github}" target="_blank" rel="noreferrer"><span>GitHub</span><strong>Code and projects</strong><b>↗</b></a><a href="${links.researchGate}" target="_blank" rel="noreferrer"><span>ResearchGate</span><strong>Research profile</strong><b>↗</b></a></div></section>
  </main>`,

  404: `<main id="main-content">${pageHero("404", "Page not found.", "The page may have moved or the address may be incorrect.")}<section class="section page-shell"><a class="button primary" href="index.html">Return to homepage</a></section></main>`,
};

document.getElementById("site").innerHTML = `${header()}${pages[page] || pages["404"]}${footer()}`;

const menuButton = document.querySelector(".menu-button");
const primaryNav = document.querySelector(".primary-nav");
menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  primaryNav?.classList.toggle("is-open", !open);
});

const roleElement = document.querySelector("[data-role]");
const roles = ["Statistician", "Applied Researcher", "Data Analyst", "Academic Educator"];
let roleIndex = 0;
if (roleElement && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  window.setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleElement.animate(
      [{ opacity: 0, transform: "translateY(4px)" }, { opacity: 1, transform: "translateY(0)" }],
      { duration: 350, easing: "ease-out" },
    );
    roleElement.textContent = roles[roleIndex];
  }, 2300);
}

const filterButtons = document.querySelectorAll("[data-filter]");
const researchItems = document.querySelectorAll("[data-category]");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    researchItems.forEach((item) => {
      const show = filter === "all" || item.dataset.category === filter;
      item.hidden = !show;
      if (show) item.animate(
        [{ opacity: 0, transform: "translateY(10px)" }, { opacity: 1, transform: "translateY(0)" }],
        { duration: 320, easing: "ease-out" },
      );
    });
  });
});

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
