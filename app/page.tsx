const topics = [
  "Classification",
  "Feature Engineering",
  "Threshold Optimization",
  "Ensemble Learning",
  "Model Evaluation",
];

function ExternalLinkIcon() {
  return (
    <span className="external-link-icon" aria-hidden="true">
      ↗
    </span>
  );
}

function LinkedInIcon() {
  return (
    <span className="linkedin-icon" aria-hidden="true">
      in
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Cooper portfolio home">
          <span className="wordmark-mark" aria-hidden="true">
            CP
          </span>
          <span>Cooper Portfolio</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="page-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span aria-hidden="true" />
            Academic work
          </p>
          <h1 id="page-title">
            Projects built through
            <br />
            <em>analysis &amp; inquiry.</em>
          </h1>
        </div>
        <div className="hero-note">
          <span className="project-count">02</span>
          <p>
            Academic projects spanning machine learning and interactive data
            visualization.
          </p>
        </div>
      </section>

      <section
        className="about-section"
        id="about"
        aria-labelledby="about-title"
      >
        <div className="section-heading">
          <p>About</p>
          <h2 id="about-title">Cooper</h2>
        </div>
        <div className="description about-copy">
          <p>
            Master of IT in Business student at SMU and Data Analyst Intern at
            Versuni.
          </p>
          <p>
            Interested in Data Analytics, Business Intelligence and Machine
            Learning.
          </p>
        </div>
      </section>

      <section
        className="projects-section"
        id="projects"
        aria-labelledby="projects-title"
      >
        <div className="section-heading">
          <p>Academic Projects</p>
          <h2 id="projects-title">The work</h2>
        </div>

        <div className="projects-grid">
          <article className="project-card">
            <div className="card-topline">
              <span>01</span>
              <span>Category · Machine Learning</span>
            </div>

            <div className="card-content">
              <h3>Retail Customer Churn Prediction</h3>
              <div className="description">
                <p>
                  Developed and evaluated machine learning models for customer
                  churn prediction and coupon allocation.
                </p>
                <p>
                  Compared multiple classification algorithms using a
                  business-oriented financial loss evaluation framework.
                </p>
              </div>
            </div>

            <div className="card-footer">
              <p className="footer-label">Topics</p>
              <ul className="topic-list" aria-label="Project topics">
                {topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </div>
          </article>

          <article className="project-card">
            <div className="card-topline">
              <span>02</span>
              <span>Course · ISSS608</span>
            </div>

            <div className="card-content">
              <h3>Interactive Data Visualization Website</h3>
              <div className="description">
                <p>
                  Designed and deployed an interactive website for university
                  coursework focusing on data visualization and storytelling.
                </p>
              </div>
            </div>

            <div className="card-footer">
              <p className="footer-label">Project link</p>
              <a
                className="button button-project"
                href="https://isss608-ay2025-t1ss.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <span>View Live Website</span>
                <ExternalLinkIcon />
              </a>
            </div>
          </article>
        </div>
      </section>

      <section
        className="contact-section"
        id="contact"
        aria-labelledby="contact-title"
      >
        <div className="contact-copy">
          <p className="eyebrow">
            <span aria-hidden="true" />
            Contact
          </p>
          <h2 id="contact-title">Connect on LinkedIn.</h2>
        </div>
        <a
          className="button button-linkedin"
          href="https://www.linkedin.com/in/coopers0401"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
          <span>View LinkedIn Profile</span>
          <ExternalLinkIcon />
        </a>
      </section>

      <footer>
        <span>Cooper Portfolio</span>
        <span>Projects &amp; coursework</span>
      </footer>
    </main>
  );
}
