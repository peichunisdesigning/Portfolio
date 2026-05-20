/* global React, PROJECTS, PortfolioCore */
const { Placeholder } = window.PortfolioCore;
const { useEffect: _ue, useState: _us, useRef: _ur } = React;

/* ============ HOME ============ */
function HomePage({ setRoute, setProject, tweaks }) {
  const t = tweaks || {};
  const featured = window.PROJECTS.filter(p => !p.hidden).slice(0, 3);
  const heroVariant = t.heroVariant || "split";
  const projectsVariant = t.projectsVariant || "alt";
  const showCollage = t.collage !== false;
  return (
    <main className="page" data-screen-label="01 Home">
      {/* Hero */}
      <section className="hero" data-variant={heroVariant}>
        <div className="hero-card">
          <div className="hero-grid">
            <div>
              <h1 className="hero-name">Kimberly designs and researches <em>experiences</em>.</h1>
              <p className="hero-sub">A soft spot for small moments. The second someone hesitates. The click they almost made.</p>
            </div>
          </div>
        </div>
      </section>

      {t.showTicker !== false && <Ticker />}

      {/* Featured projects */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title"><em>Selected</em> projects</h2>
          </div>

          <div className="projects-list" data-variant={projectsVariant}>
            {featured.map((p, i) => (
              <article key={p.id} className={`project ${i % 2 === 1 ? "reverse" : ""}`}>
                {projectsVariant === "indexed" && (
                  <div className="project-num"><span>{p.num}</span></div>
                )}
                <div className="project-text">
                  {projectsVariant !== "indexed" && (
                    <div className="project-num"><span>{p.num}</span><span>{p.year}</span></div>
                  )}
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-tagline">{p.tagline}</p>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-tags">
                    {p.tags.map((tg) => <span key={tg} className="tag">{tg}</span>)}
                  </div>
                  <button className="btn" data-cursor="open" onClick={() => { setProject(p.id); setRoute(p.detail ? "case" : "projects"); }}>
                    See detail <span className="arrow">→</span>
                  </button>
                </div>
                <div className={`project-cover swatch-${p.swatch}`} data-cursor="view" onClick={() => { setProject(p.id); setRoute(p.detail ? "case" : "projects"); }}>
                  {p.id === "asu-shuttle"
                    ? <img src="assets/shuttle-cover.jpeg" alt="ASU Shuttle Tracker" />
                    : p.id === "studio-site"
                    ? <img src="assets/wildbloom-cover.png" alt="Wildbloom Music Festival App" />
                    : <Placeholder label={p.cover || `${p.title} · cover`} swatch={p.swatch} />}
                </div>
              </article>
            ))}
          </div>

          <div className="projects-cta">
            <button className="btn ghost" data-cursor="all projects" onClick={() => setRoute("projects")}>
              View the full index <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

/* Ticker shortcut */
function Ticker() {
  return window.PortfolioCore.Ticker();
}

/* ============ PROJECTS index ============ */
function ProjectsPage({ setRoute }) {
  const [hover, setHover] = _us(null);
  const [pos, setPos] = _us({ x: 0, y: 0 });
  const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });

  return (
    <main className="page" data-screen-label="02 Projects" onMouseMove={onMove}>
      <section className="section">
        <div className="container">
          <div className="projects-page-header">
            <h1 className="hero-name projects-page-title">
              <em>Projects</em>
            </h1>
          </div>

          <div className="index-list">
            {window.PROJECTS.filter(p => !p.hidden).map((p) => (
              <div
                key={p.id}
                className="index-row"
                onMouseEnter={() => setHover(p)}
                onMouseLeave={() => setHover(null)}
                onClick={() => p.detail && (window.__setCase && window.__setCase(p.id))}
                style={{cursor: p.detail ? "pointer" : "default"}}
              >
                <span className="num">{p.num}</span>
                <span className="name"><em>{p.titleEm}</em>{p.title !== p.titleEm ? p.title.replace(p.titleEm, "") : ""}</span>
                <span className="meta">{p.role} · {p.tags[0]}</span>
                <span className="year">{p.year}</span>
                <span className="arr">→</span>
              </div>
            ))}
          </div>

          {hover && (
            <div className="index-preview show" style={{ left: pos.x + 200, top: pos.y }}>
              {hover.preview
                ? <img src={hover.preview} alt={hover.title} className="index-preview-img" />
                : <Placeholder label={`${hover.title}`} swatch={hover.swatch} />}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

/* ============ ABOUT ============ */
function AboutPage() {
  return (
    <main className="page" data-screen-label="03 About">
      <section className="section">
        <div className="container">
          <div className="section-head section-head--lg">
            <h1 className="section-title"><em>About</em> me</h1>

          </div>

          <div className="about-grid">
            <div className="about-photo">
              <div className="about-photo-inner">
                <img src="assets/about-photo.jpeg" alt="Kimberly in a blue Cookie Monster hoodie in front of a pink wall" />
              </div>
              <span className="washi washi--tl" aria-hidden="true"></span>
              <span className="washi washi--br" aria-hidden="true"></span>
            </div>

            <div className="about-prose">
              <p>I came to UX sideways.</p>
              <p>In Taiwan, I studied library science, learning how to organize information so people could actually find it. <br/>
                I worked as a QA tester at a startup, where I kept flagging things that weren't bugs, just confusing.
                I worked at a hospital library, where I spent more time watching doctors get lost in the database than shelving books.<br/>
                Somewhere in there I realized the thing I kept doing, in all these different rooms, had a name.<br/>
                So I came to Arizona State to learn it properly. Graduating May 2026 with a Master's in User Experience.<br/>
                I'm drawn to user research and information architecture. I notice things. I write them down.</p>

              <div className="about-offscreen" style={{display:"none"}}>
                <span className="about-offscreen-label">Off-screen</span>
                <div className="about-interests">
                  {[
                    { label: "interest 1", svg: null },
                    { label: "interest 2", svg: null },
                    { label: "interest 3", svg: null },
                    { label: "interest 4", svg: null },
                    { label: "interest 5", svg: null },
                  ].map((item) => (
                    <div key={item.label} className="about-interest-chip">
                      <div className="about-interest-icon">
                        {item.svg}
                      </div>
                      <span className="about-interest-label">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ============ RESUME ============ */
function ResumePage() {
  return (
    <main className="page" data-screen-label="04 Resume">
      <section className="section">
        <div className="container">
          <div className="section-head section-head--sm section-head--no-line">
            <h1 className="section-title"><em>Resume</em></h1>
            <span className="section-tag">CV · last updated May 2026</span>
          </div>

          <div className="resume">
            <aside className="resume-side">
              <dl className="resume-meta">
                <div><dt>Name</dt><dd>Kimberly (Pei-Chun) Chen</dd></div>
                <div><dt>Role</dt><dd>UX Designer · Product Designer · UX Researcher</dd></div>
                <div><dt>Location</dt><dd>Tempe, AZ</dd></div>
                <div><dt>Phone</dt><dd>602-341-7456</dd></div>
                <div><dt>Email</dt><dd>kimberlychen122489@gmail.com</dd></div>
              </dl>
              <button className="btn solid" onClick={() => window.open('assets/Kimberly_Chen_Resume.pdf', '_blank')}>Download PDF <span className="arrow">↓</span></button>
            </aside>

            <div className="resume-body">
              <section>
                <h3>Summary</h3>
                <p className="resume-summary">
                  UX practitioner with a Master's in User Experience and a background spanning medical librarianship and startup QA. 
                  Drawn to user research and information architecture, with hands-on experience conducting usability studies and translating findings into interface decisions. 
                  Comfortable with HTML, CSS, and JavaScript for prototyping and engineering collaboration. 
                  Seeking full-time UX Research, Product Design, or UX roles in the U.S., with particular interest in healthcare, enterprise, and other information-rich domains.</p>
              </section>

              <section>
                <h3>Experience</h3>
                <div className="resume-entry">
                  <span className="when">Jul 2024 — Dec 2024</span>
                  <div>
                    <h4><em>Librarian</em></h4>
                    <p className="who">Taipei Veterans General Hospital · Taipei, Taiwan</p>
                    <ul>
                      <li>Redesigned the SSO login interface for a hospital database used daily by 50+ medical staff; surfaced login rules directly in the UI, reducing support inquiries from clinical users.</li>
                      <li>Restructured the medical library website's information architecture and taxonomies to improve findability of digital journals and clinical resources.</li>
                      <li>Drew on daily interactions at the circulation desk to identify recurring pain points across search, access, and resource borrowing workflows, documenting findings to inform website and service improvements.</li>
                    </ul>
                  </div>
                </div>
                <div className="resume-entry">
                  <span className="when">Jan 2023 — Mar 2024</span>
                  <div>
                    <h4><em>Manual QA Engineer</em></h4>
                    <p className="who">WRCD · New Taipei, Taiwan</p>
                    <ul>
                      <li>Performed manual testing for a consumer mobile app covering pet food subscription, health tracking, and e-commerce features; flagged usability issues across UI flows, interaction logic, and animations alongside functional bugs.</li>
                      <li>Authored test scenarios covering real user paths and edge cases, surfacing usability issues that purely functional testing would have missed.</li>
                      <li>Worked with PMs and engineers to communicate findings and prioritize fixes, helping reduce recurring bug tickets and user flow issues across releases.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3>Selected Projects</h3>
                <div className="resume-entry">
                  <span className="when">Sep 2025</span>
                  <div>
                    <h4><em>ASU Shuttle Tracking</em> Website Redesign</h4>
                    <ul>
                      <li>Conducted mixed-methods research (interviews, surveys, contextual inquiry) and delivered user flows, wireframes, and a high-fidelity Figma prototype.</li>
                      <li>Validated through usability testing, achieving a SUS score of 83.75; documented the process in a case study.</li>
                    </ul>
                  </div>
                </div>
                <div className="resume-entry">
                  <span className="when">2025</span>
                  <div>
                    <h4><em>Music Festival</em> App + Staff Admin Platform</h4>
                    <ul>
                      <li>Designed a dual-platform event management system: attendee app (promotion, ticketing, event details) and staff dashboard (managing vendors, acts, festival info).</li>
                      <li>Grounded decisions in personas, user journey maps, and competitive analysis across both audiences.</li>
                      <li>Built a design system (typography, color, components, interaction patterns) and delivered high-fidelity Figma prototypes for both platforms.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3>Education</h3>
                <div className="resume-entry">
                  <span className="when">Jan 2025 — May 2026</span>
                  <div>
                    <h4><em>M.S.</em>, User Experience</h4>
                    <p className="who">Arizona State University · GPA 4.0/ 4.0</p>
                    <p>Relevant coursework: User Experience, Human System Engineer, Wireframe and Prototype, Technical Communcation.</p>
                  </div>
                </div>
                <div className="resume-entry">
                  <span className="when">Sep 2019 — May 2023</span>
                  <div>
                    <h4><em>B.L.A.</em>, Library and Information Science</h4>
                    <p className="who">Tamkang University, Taiwan · GPA 3.77/4.0</p>
                    <p>Relevant coursework: Information Architecture, Needs Analysis, Information Storage and Retrieval, Information Visualization.</p>
                  </div>
                </div>
              </section>

              <section>
                <h3>Skills</h3>
                <div className="skill-grid">
                  <div className="skill">
                    <h5>Methods</h5>
                    <ul>
                      <li>User Research · Interviews · Surveys</li>
                      <li>Usability Testing</li>
                      <li>Information Architecture · Card Sorting</li>
                      <li>Competitive Analysis · Heuristic Evaluation </li>
                      <li>Affinity Mapping</li>
                      <li>Taxonomy Development · Metadata · Controlled Vocabularies</li>
                    </ul>
                  </div>
                  <div className="skill">
                    <h5>Front-end & Implementation</h5>
                    <ul>
                      <li>HTML · CSS · JavaScript</li>
                      <li>Claude Code (AI-assisted development)</li>
                      <li>Git / GitHub</li>
                    </ul>
                  </div>
                  <div className="skill">
                    <h5>Tools</h5>
                    <ul>
                      <li>Figma · FigJam</li>
                      <li>Notion(databases, project management)</li>
                    </ul>
                  </div>
                  <div className="skill">
                    <h5>Languages</h5>
                    <ul>
                      <li>English</li>
                      <li>Mandarin (Native)</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

window.Pages = { HomePage, ProjectsPage, AboutPage, ResumePage };
