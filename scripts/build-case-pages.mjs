import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const site = {
  name: "Kimberly Chen Portfolio",
  author: "Kimberly Chen",
  baseUrl: "https://peichunisdesigning.github.io/Portfolio",
};

const projects = [
  {
    id: "asu-shuttle",
    title: "ASU Shuttle Tracking Website Redesign",
    shortTitle: "ASU Shuttle Tracker",
    description:
      "A UX research and product redesign case study for ASU's intercampus shuttle tracker, focused on live arrival clarity, mobile map interactions, and commuter confidence.",
    image: "assets/shuttle-cover.jpeg",
    date: "2025",
    role: "Solo UX/UI Designer and Researcher",
    tags: ["UX Research", "Product Redesign", "Mobile Web", "Usability Testing"],
    sections: [
      {
        title: "Overview",
        body: [
          "ASU's intercampus shuttles move thousands of students between four campuses every day. For cross-campus commuters, even small delays or unclear information can mean missed classes, late arrivals, and unnecessary stress.",
          "This redesign focused on solving user pain points in time-sensitive moments, optimizing map interactions on mobile, and surfacing real-time arrival information clearly.",
        ],
        bullets: [
          "Real-time shuttle arrival information is promoted instead of buried.",
          "Map interactions are redesigned around mobile commuter behavior.",
          "The experience supports quick decisions before riders leave for a stop.",
        ],
      },
      {
        title: "Research",
        body: [
          "I used heuristic markup, user interviews, and a usability survey to understand where the existing shuttle experience broke down. Riders described unreliable live tracking, hard-to-find nearby stops, and friction from repeatedly loading a website during routine commutes.",
          "The strongest pattern was not simply that users wanted a map. They wanted guidance: where the bus is, where they are, which stop is closest, and when they should leave.",
        ],
      },
      {
        title: "Definition",
        body: [
          "Interview findings became two commuter personas: Sammy, a Polytechnic undergraduate who lives in Tempe and commutes twice a week, and Foster, a Tempe graduate student who is new to other campuses.",
          "Mapping the journey showed a clear emotional dip during the moment when riders decide when to leave. Arrival times were technically present, but not visible or trustworthy enough to support action.",
        ],
      },
      {
        title: "Design Approach",
        body: [
          "The redesign separated rider intent into clearer areas: routes, live map context, nearby stops, and arrival details. This made the interface less dependent on users interpreting icons or panning around a dense map.",
          "Instead of treating tracking as the whole product, the new structure treats tracking as one part of guidance.",
        ],
      },
      {
        title: "Validation",
        body: [
          "To validate the redesign, I combined qualitative and quantitative testing. The five-second test captured first impressions, usability tasks evaluated real interaction paths, and SUS plus time-on-task provided performance benchmarks.",
          "Participants completed core tasks quickly and rated the redesigned experience with an average SUS score of 83.75, above the common benchmark of 68.",
        ],
      },
      {
        title: "Takeaways",
        body: [
          "Route and map tabs gave each user type a clearer space instead of forcing one view to serve every commuter. Real-time information needed to lead the interface, not sit underneath icons and hidden panels.",
          "The project also showed that minimalism has a clarity cost. Clean icons looked polished, but labels and visible hierarchy helped users move with more confidence.",
        ],
      },
    ],
  },
  {
    id: "studio-site",
    title: "Wildbloom Music Festival App and Admin Tool",
    shortTitle: "Wildbloom Music Festival",
    description:
      "A dual-platform UX case study for a music festival companion app and staff admin tool, designed to reduce publishing bottlenecks and help attendees plan faster.",
    image: "assets/wildbloom-cover.png",
    date: "2026",
    role: "Designer and Developer",
    tags: ["UX Research", "Mobile App", "Admin Dashboard", "Design System"],
    sections: [
      {
        title: "Overview",
        body: [
          "Wildbloom is a festival experience designed for both sides of the stage: attendees who need reliable event information, and staff who need a faster way to publish updates.",
          "The work includes a mobile-first companion app for lineup, map, tickets, and planning, alongside a desktop admin tool for managing events, acts, vendors, and publishing workflows.",
        ],
      },
      {
        title: "Problem",
        body: [
          "The event team had a slow publishing pipeline where one photo or content update could take days to move through the right people. Festival-goers, meanwhile, were screenshotting schedules and guessing because information was scattered or hard to trust on-site.",
          "The problem was not only visual design. It was operational: too many handoffs stood between new information and the people who needed it.",
        ],
      },
      {
        title: "Goals",
        body: [
          "The attendee app needed to make planning feel immediate and resilient, especially when cell service was unreliable. The admin tool needed to help staff move from event creation to publish without engineering support.",
          "The shared goal was to reduce the number of hands a piece of information had to pass through before it reached the public experience.",
        ],
      },
      {
        title: "Process",
        body: [
          "I synthesized stakeholder notes into three guiding principles: keep live information close to the surface, make publishing paths explicit, and design the attendee and admin sides as one connected system.",
          "The information architecture maps the attendee app around browsing live content: home, lineup, map, and plan. The admin tool maps around manageable entities: events, acts, vendors, and publish states.",
        ],
      },
      {
        title: "Solution",
        body: [
          "The final attendee app brings lineup, tickets, and event information into one mobile-first experience. The admin dashboard gives the event team a desktop-first workspace where content can be edited, cross-linked, and published independently.",
          "Together, the two surfaces create a tighter loop between staff updates and attendee decisions.",
        ],
      },
    ],
  },
];

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const absoluteUrl = (pathname) => `${site.baseUrl}/${pathname.replace(/^\/+/, "")}`;

function jsonLd(project, pageUrl) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    headline: project.title,
    name: project.title,
    description: project.description,
    image: absoluteUrl(project.image),
    url: pageUrl,
    author: { "@type": "Person", name: site.author },
    creator: { "@type": "Person", name: site.author },
    dateCreated: project.date,
    keywords: project.tags.join(", "),
  };
}

function renderHead(project, pageUrl) {
  const title = `${project.title} | Kimberly Chen`;
  const image = absoluteUrl(project.image);
  return `<!doctype html>
<html lang="en" data-font="patrick-hand">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(project.description)}" />
<link rel="canonical" href="${escapeHtml(pageUrl)}" />
<meta property="og:type" content="article" />
<meta property="og:site_name" content="${escapeHtml(site.name)}" />
<meta property="og:title" content="${escapeHtml(project.title)}" />
<meta property="og:description" content="${escapeHtml(project.description)}" />
<meta property="og:image" content="${escapeHtml(image)}" />
<meta property="og:url" content="${escapeHtml(pageUrl)}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escapeHtml(project.title)}" />
<meta name="twitter:description" content="${escapeHtml(project.description)}" />
<meta name="twitter:image" content="${escapeHtml(image)}" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Quicksand:wght@300..700&display=swap" />
<link rel="stylesheet" href="../../styles.css?v=15" />
<link rel="stylesheet" href="../../case-study.css?v=3" />
<script type="application/ld+json">${JSON.stringify(jsonLd(project, pageUrl))}</script>
</head>`;
}

function renderProject(project) {
  const pageUrl = absoluteUrl(`project/${project.id}/`);
  const tags = project.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("");
  const sections = project.sections
    .map((section) => {
      const body = section.body.map((text) => `<p class="case-body">${escapeHtml(text)}</p>`).join("\n");
      const bullets = section.bullets
        ? `<ul>${section.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`
        : "";
      return `<section class="container case-section">
  <div class="case-h2"><h2>${escapeHtml(section.title)}</h2><span class="rule"></span></div>
  ${body}
  ${bullets}
</section>`;
    })
    .join("\n");

  return `${renderHead(project, pageUrl)}
<body>
<div class="app-shell">
  <header class="nav-bar">
    <a class="site-id" href="../../">Kimberly<em>.</em></a>
    <nav class="nav" aria-label="Primary">
      <div class="nav-inner">
        <div class="nav-links">
          <a class="nav-link" href="../../">Home</a>
          <a class="nav-link is-active" href="../../#projects">My Works</a>
          <a class="nav-link is-resume" href="../../#resume">Resume</a>
          <a class="nav-link" href="../../#about">About Me</a>
        </div>
      </div>
    </nav>
  </header>

  <main class="page case" data-screen-label="Project · ${escapeHtml(project.shortTitle)}">
    <article>
      <section class="case-cover">
        <a class="case-back" href="../../#projects" aria-label="Back to works">←</a>
        <h1>${escapeHtml(project.title)}</h1>
      </section>

      <section class="container case-section case-section--first">
        <div class="case-overview">
          <div>
            <h2>Project Summary</h2>
            <p>${escapeHtml(project.description)}</p>
            <p><strong>Role:</strong> ${escapeHtml(project.role)} · <strong>Year:</strong> ${escapeHtml(project.date)}</p>
            <div class="project-tags">${tags}</div>
          </div>
          <div class="overview-img">
            <img src="../../${escapeHtml(project.image)}" alt="${escapeHtml(project.shortTitle)} cover image" />
          </div>
        </div>
      </section>

      ${sections}
    </article>
  </main>

  <footer class="foot">
    <div class="container">
      <div class="foot-grid">
        <h2 class="foot-cta">Here is where library science<br/>meets <em>user experience.</em></h2>
        <div>
          <p class="foot-text">Graduating May 2026. Open to full-time UX, Product Design, or UX Research roles in the U.S.</p>
          <div class="foot-actions">
            <a href="../../assets/Kimberly_Chen_Resume.pdf" target="_blank" rel="noopener noreferrer" class="btn solid">Resume <span class="arrow">↗</span></a>
            <a href="https://www.linkedin.com/in/peichunchen" target="_blank" rel="noopener noreferrer" class="btn ghost">LinkedIn</a>
            <a href="mailto:kimberlychen122489@gmail.com" class="btn ghost">Email me</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>
</body>
</html>
`;
}

for (const project of projects) {
  const outputDir = path.join("project", project.id);
  await mkdir(outputDir, { recursive: true });
  await writeFile(path.join(outputDir, "index.html"), renderProject(project));
  console.log(`Generated ${path.join(outputDir, "index.html")}`);
}
