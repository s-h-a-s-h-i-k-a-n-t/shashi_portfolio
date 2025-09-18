export default function App() {
  return (
    <div className="site">
      {/* ===== HEADER ===== */}
      <header className="header">
        <div className="container header__inner">
          <div className="brand">Shashi Kant</div>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="container hero__inner">
          <img
            src="/profile.png"
            alt="Shashi Kant"
            className="profile-pic"
            width={160}
            height={160}
          />

          <h1>Data Quality & BI Consultant</h1>
          <p>
            I build parameterized IICS pipelines (CDI/CDQ), tune PL/SQL, and
            publish clean, governed data in Snowflake with SLAs and
            observability.
          </p>
          <a className="btn btn--primary" href="#projects">
            View My Work
          </a>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section__title">About Me</h2>
          <p className="lead">
            Hi, I'm Shashi. With 4+ years of experience in Informatica IICS,
            Oracle PL/SQL, and Snowflake, I help businesses transform raw messy
            data into trusted, analytics-ready datasets. I love solving complex
            ETL challenges and delivering data quality at scale.
          </p>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section id="skills" className="section section--muted">
        <div className="container">
          <h2 className="section__title">Skills</h2>
          <ul className="grid grid--4">
            {[
              "Informatica IICS (CDI/CDQ)",
              "Oracle SQL & PL/SQL",
              "Snowflake",
              "Power BI",
              "Data Quality Rules",
              "ETL Pipelines",
              "Git & CI/CD",
              "Data Governance",
            ].map((s) => (
              <li key={s} className="card">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section__title">Projects</h2>
          <div className="grid grid--2">
            <article className="card card--lg">
              <h3 className="card__title">Vendor Data Quality Pipeline</h3>
              <p>
                Built an end-to-end ETL pipeline in Informatica IICS to cleanse,
                deduplicate, and standardize vendor data across 80+ cities
                before loading into Snowflake for analytics.
              </p>
              <a className="link" href="#">
                View Details →
              </a>
            </article>

            <article className="card card--lg">
              <h3 className="card__title">Customer 360 Dashboard</h3>
              <p>
                Designed a Power BI dashboard connected to Snowflake that gives
                real-time insights into customer onboarding, data quality KPIs,
                and vendor performance.
              </p>
              <a className="link" href="#">
                View Details →
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* ===== YOUTUBE ===== */}
      <section id="youtube" className="section glassy">
        <div className="container">
          <h2 className="section__title">My YouTube Channel</h2>
          <p className="lead center">Some of my videos you can watch here 👇</p>

          <div className="video-grid">
            {/* Video 1 */}
            <article className="video-card">
              <div className="video">
                <iframe
                  src="https://www.youtube.com/embed/xpPqVXrvPkM?start=2&rel=0&modestbranding=1"
                  title="YouTube video 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <a
                className="yt-link"
                href="https://www.youtube.com/watch?v=xpPqVXrvPkM&t=2s"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch on YouTube →
              </a>
            </article>

            {/* Video 2 */}
            <article className="video-card">
              <div className="video">
                <iframe
                  src="https://www.youtube.com/embed/xl3qYtpUSJs?start=210&rel=0&modestbranding=1"
                  title="YouTube video 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <a
                className="yt-link"
                href="https://www.youtube.com/watch?v=xl3qYtpUSJs&t=210s"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch on YouTube →
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="section section--accent">
        <div className="container center">
          <h2 className="section__title section__title--light">Get in Touch</h2>
          <p className="lead lead--light">
            I'm open to data engineering, BI, and ETL consultant roles. Let’s
            connect!
          </p>
          <a className="btn btn--light" href="mailto:you@example.com">
            Email Me
          </a>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container center">
          © {new Date().getFullYear()} Shashi Kant · Built with React + Vite
        </div>
      </footer>
    </div>
  );
}
