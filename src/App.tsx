import React, { ReactNode } from "react";

/* ===== Local assets ===== */
import profile from "./assets/profile.png";
import skLogo from "./assets/sk-logo.png";

import certIntroDA from "./assets/Introduction_to_data_analytics.png";
import certGooglePy from "./assets/Google Python.png";
import certExcel from "./assets/Excel_Basics.png";
import certPyDS from "./assets/python for data science ai and development.png";
import certPyProject from "./assets/Python Project for Data Science.png";
import certSQL from "./assets/SQL.png";
import certDV from "./assets/Data Visualization with excel and Cognos.png";

/* =========================
   Types & constants
========================= */
type Cert = {
  img: string;
  title: string;
  issuer: string;
  date: string;
  link: string;
};

const CERTIFICATIONS: Cert[] = [
  {
    img: certGooglePy,
    title: "Crash Course on Python",
    issuer: "Google · Coursera",
    date: "Issued Feb 2025",
    link: "https://coursera.org/verify/F7KSMCUHN9K6",
  },
  {
    img: certSQL,
    title: "Databases & SQL for Data Science (with Honors)",
    issuer: "IBM · Coursera",
    date: "Issued Mar 2025",
    link: "https://www.coursera.org/account/accomplishments/verify/492PS349LTLH",
  },
  {
    img: certIntroDA,
    title: "Introduction to Data Analytics",
    issuer: "IBM · Coursera",
    date: "Issued Jan 2025",
    link: "https://www.coursera.org/account/accomplishments/verify/NZPGQBR1TAY5",
  },
  {
    img: certDV,
    title: "Data Visualization and Dashboards with Excel and Cognos",
    issuer: "IBM · Coursera",
    date: "Issued Feb 2025",
    link: "https://coursera.org/verify/QHL5JB4D46GO",
  },
  {
    img: certExcel,
    title: "Excel Basics for Data Analysis",
    issuer: "IBM · Coursera",
    date: "Issued Feb 2025",
    link: "https://www.coursera.org/account/accomplishments/verify/MYZ07ND54QT7",
  },
  {
    img: certPyDS,
    title: "Python for Data Science, AI & Development",
    issuer: "IBM · Coursera",
    date: "Issued Mar 2025",
    link: "https://www.coursera.org/account/accomplishments/verify/755V5ZILTO3V",
  },
  {
    img: certPyProject,
    title: "Python Project for Data Science",
    issuer: "IBM · Coursera",
    date: "Issued Mar 2025",
    link: "https://www.coursera.org/account/accomplishments/verify/UX1LB6FA3195",
  },
];

const OWNER = "s-h-a-s-h-i-k-a-n-t";
const TABLEAU_URL =
  "https://public.tableau.com/app/profile/shashi.kant2423/vizzes";
const GITHUB_URL = `https://github.com/${OWNER}`;
const IDEAL_ELECTRICAL_REPO =
  "https://github.com/s-h-a-s-h-i-k-a-n-t/ideal-electricals-site";

/* contact links */
const PHONE_URL = "tel:+919620988539";
const WHATSAPP_URL = "https://wa.me/919620988539";
const EMAIL_URL = "mailto:shashimitian@gmail.com";

/* =========================
   Icons + Brand
========================= */
const IconBtn = ({
  title,
  href,
  children,
}: {
  title: string;
  href: string;
  children: ReactNode;
}) => (
  <a
    href={href}
    title={title}
    target="_blank"
    rel="noreferrer"
    style={{
      width: 44,
      height: 44,
      borderRadius: 9999,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "2px solid #fff",
      color: "#fff",
      background: "transparent",
      transition: "all .2s ease",
      textDecoration: "none",
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLAnchorElement).style.background = "#ffffff";
      (e.currentTarget as HTMLAnchorElement).style.color = "#4F46E5";
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
      (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
    }}
  >
    {children}
  </a>
);

const IconGitHub = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 .5a11.3 11.3 0 0 0-3.57 22.03c.56.1.77-.24.77-.54v-1.9c-3.14.69-3.8-1.35-3.8-1.35-.51-1.3-1.23-1.64-1.23-1.64-1-.69.07-.68.07-.68 1.11.08 1.7 1.14 1.7 1.14.99 1.69 2.59 1.2 3.22.92.1-.73.39-1.2.71-1.48-2.51-.29-5.15-1.26-5.15-5.62 0-1.24.44-2.26 1.15-3.06-.12-.29-.5-1.45.11-3.01 0 0 .95-.3 3.1 1.16a10.8 10.8 0 0 1 5.65 0c2.15-1.46 3.1-1.16 3.1-1.16.6 1.56.23 2.72.11 3.01.72.8 1.15 1.82 1.15 3.06 0 4.37-2.65 5.32-5.18 5.6.4.35.76 1.03.76 2.08v3.08c0 .31.21.65.78.54A11.3 11.3 0 0 0 12 .5Z" />
  </svg>
);

const IconTableau = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M11 2h2v2h2v2h-2v2h-2V6H9V4h2V2zM5 7h2v1h1v2H7v1H5V10H4V8h1V7zM18 7h2v1h1v2h-1v1h-2V10h-1V8h1V7zM11 16h2v2h2v2h-2v2h-2v-2H9v-2h2v-2zM5 15h2v1h1v2H7v1H5v-1H4v-2h1v-1zM18 15h2v1h1v2h-1v1h-2v-1h-1v-2h1v-1z" />
  </svg>
);

/* SK Brand logo button */
function BrandLogo() {
  return (
    <a
      href="#summary"
      aria-label="Home"
      title="Home"
      style={{
        display: "inline-flex",
        alignItems: "center",
        textDecoration: "none",
      }}
      onClick={(e) => {
        e.preventDefault();
        const el = document.getElementById("summary");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
    >
      <img
        src={skLogo}
        alt="SK"
        width={36}
        height={36}
        style={{
          width: 36,
          height: 36,
          borderRadius: 10,
          background: "#ffffff",
          objectFit: "cover",
          boxShadow: "0 4px 12px rgba(0,0,0,.12)",
          border: "1px solid #e5e7eb",
        }}
      />
    </a>
  );
}

/* =========================
   FOOTER
========================= */
function Footer() {
  const iconBase: React.CSSProperties = {
    width: 54,
    height: 54,
    borderRadius: "999px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.2)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    transition: "transform .15s ease",
    textDecoration: "none",
  };

  return (
    <footer
      style={{
        background: "#141C3A",
        color: "#fff",
        padding: "78px 0 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          gap: 28,
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          paddingBottom: 74,
        }}
      >
        {/* LEFT: brand logo + text */}
        <div
          style={{
            display: "flex",
            gap: 14,
            alignItems: "center",
            minWidth: 220,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "20px",
              background: "#fff",
              display: "grid",
              placeItems: "center",
            }}
          >
            <img
              src={skLogo}
              alt="SK"
              style={{ width: 44, height: 44, objectFit: "contain" }}
            />
          </div>
          <div>
            <p style={{ margin: 0, fontWeight: 800, fontSize: 18 }}>
              Shashi Kant
            </p>
            <p style={{ margin: 0, opacity: 0.7, fontSize: 13 }}>
              Frontend &amp; Full-Stack Web Developer
            </p>
          </div>
        </div>

        {/* CENTER: Get in Touch + icons */}
        <div
          style={{
            textAlign: "center",
            flex: "1 1 auto",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontWeight: 800,
              fontSize: 22,
              marginBottom: 16,
            }}
          >
            Get in Touch
          </h2>
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {/* Call */}
            <a
              href={PHONE_URL}
              style={iconBase}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(-3px)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.transform =
                  "none")
              }
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.58.57 1 1 0 0 1 1 1v3.61a1 1 0 0 1-1 1A17 17 0 0 1 3 5a1 1 0 0 1 1-1h3.61a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.58 1 1 0 0 1-.24 1.01l-2.32 2.2z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              style={iconBase}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(-3px)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.transform =
                  "none")
              }
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.52 3.48A11.78 11.78 0 0 0 12 0a11.8 11.8 0 0 0-8.36 20.16L0 24l3.92-3.6A11.8 11.8 0 1 0 20.52 3.48ZM12 21.4a9.36 9.36 0 0 1-4.77-1.29l-.34-.2-2.83.92.94-2.75-.22-.35a9.4 9.4 0 1 1 7.22 3.67Zm5.4-6.94c-.3-.15-1.77-.87-2.05-.97s-.48-.15-.68.15-.78.97-.96 1.17-.35.22-.64.07a7.64 7.64 0 0 1-2.26-1.39 8.5 8.5 0 0 1-1.57-1.96c-.16-.27 0-.41.12-.56.12-.12.27-.31.4-.46s.16-.27.24-.45a.49.49 0 0 0 0-.46c-.08-.15-.68-1.63-.94-2.24s-.5-.52-.68-.52h-.53a1 1 0 0 0-.73.35 3.05 3.05 0 0 0-.95 2.27 5.3 5.3 0 0 0 1.1 2.8 12 12 0 0 0 4.57 4.09 10.41 10.41 0 0 0 2.48.91 2.84 2.84 0 0 0 1.84-.31 2.34 2.34 0 0 0 1-1.47 2 2 0 0 0 .13-1.47c-.06-.07-.27-.15-.57-.3Z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href={EMAIL_URL}
              style={iconBase}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(-3px)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.transform =
                  "none")
              }
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M2 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2Zm0 2h20v.01L12 13 2 6.01V6Zm0 2.24 8.78 5.74a1 1 0 0 0 1.12 0L22 8.24V18H2V8.24Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* divider */}
      <div
        style={{
          width: "100%",
          height: "2px",
          background: "rgba(255,255,255,0.2)",
        }}
      />

      {/* copyright band */}
      <div
        style={{
          background: "#0B1020",
          padding: "18px 0 22px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="container">
          <div
            style={{
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: 13,
                opacity: 0.85,
                margin: 0,
                letterSpacing: "0.2px",
              }}
            >
              © 2025 Shashi Kant. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      {/* responsive */}
      <style>{`
        @media (max-width: 860px){
          footer .container{
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
}

/* =========================
   App
========================= */
export default function App() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="site">
      {/* ===== Global styles + Fonts ===== */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;800&family=Sora:wght@300;400;600;800&display=swap');

        :root{
          --bg:#0b1020;
          --ink:#0f172a;
          --muted:#f6f7fb;
          --brand:#4F46E5;
          --brand-ink:#ffffff;

          --card:#ffffff;

          --icon-teal:#5BE9B9;
          --icon-navy:#141C3A;

          --grad-start:#4F46E5;
          --grad-end:#5B21B6;

          --focus:#93C5FD;
        }
        *{ box-sizing:border-box; }
        html, body, #root{ height:100%; scroll-behavior:smooth; }
        body{
          margin:0;
          font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
          color:var(--ink);
          background:#ffffff;
        }
        a{ color:var(--brand); }
        a:focus-visible, button:focus-visible{
          outline: 3px solid var(--focus);
          outline-offset: 2px;
          border-radius: 8px;
        }
        .container{ width:min(1100px, 92%); margin:0 auto; }

        .header{
          position: static !important;
          top: auto !important;
          background:#ffffff;
          border-bottom:1px solid #e8e8ef;
        }
        .header__inner{
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:12px 0;
        }
        .brand{ display:flex; align-items:center; gap:12px; }

        .top-nav{
          display:flex;
          align-items:center;
          gap:18px;
          font-size:14px;
          flex-wrap:wrap;
        }
        .top-nav button{
          background:none;
          border:none;
          padding:6px 4px;
          font-size:14px;
          font-weight:600;
          cursor:pointer;
          color:#111827;
        }
        .top-nav button:hover{
          color:var(--brand);
        }

        .section{ padding:56px 0; }
        .section--muted{ background:var(--muted); }
        .section__title{ margin:0 0 16px; font-weight:800; letter-spacing:-0.2px; text-align:center; }
        .lead{ margin:0 0 12px; opacity:.9; }

        .grid{ display:grid; gap:16px; }
        .grid--3{ grid-template-columns: repeat(3, 1fr); }
        @media (max-width: 960px){ .grid--3{ grid-template-columns:1fr; } }

        .card{ background:var(--card); border:1px solid #eef0f6; border-radius:16px; padding:16px; }
        .card--lg{ padding:18px; }
        .card__title{ margin:0 0 6px; font-weight:700; }

        .pill{
          display:inline-flex;
          align-items:center;
          gap:6px;
          padding:4px 10px;
          border-radius:999px;
          background:#EEF2FF;
          color:#3730A3;
          font-size:11px;
          font-weight:600;
          letter-spacing:0.03em;
          text-transform:uppercase;
        }

        .hero-greeting{
          font-family: Sora, Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
          font-weight:800;
          letter-spacing:-0.3px;
          line-height:1.1;
        }

        .btn{
          border-radius:12px;
          padding:10px 14px;
          text-decoration:none;
          font-weight:600;
          display:inline-flex;
          align-items:center;
          gap:8px;
          border:none;
          cursor:pointer;
        }
        .btn--primary{ background:var(--brand); color:#fff; }
        .btn--ghost{ background:#fff; border:1px solid #e8e8ef; color:#111827; }

        .stack-list{
          display:flex;
          flex-wrap:wrap;
          gap:6px;
          margin-top:8px;
        }
        .stack-tag{
          padding:4px 9px;
          border-radius:999px;
          background:#F3F4F6;
          font-size:11px;
          color:#4B5563;
        }

        .cert-grid{
          display:flex;
          flex-wrap:wrap;
          gap:24px;
          justify-content:center;
          align-items:stretch;
        }
        .cert-card{
          flex: 0 0 250px; max-width: 320px; background:#fff; border-radius:14px; border:1px solid #e5e7eb; padding:16px;
          display:flex; flex-direction:column; box-shadow: 0 6px 18px rgba(2,6,23,.06);
        }
        .cert-img-wrap{ width:100%; aspect-ratio: 16 / 11; border-radius:12px; overflow:hidden; border:1px solid #e5e7eb; background:#fbfbfd; display:flex; align-items:center; justify-content:center; margin-bottom:12px; }
        .cert-img{ width:100%; height:100%; object-fit:contain; }
        .cert-title{ margin:8px 0 4px; font-size:16px; font-weight:800; }
        .cert-issuer, .cert-date{ margin:0 0 6px; color:#6b7280; font-size:13px; }

        /* EXPERIENCE HERO */
        :root{
          --xp-ink:#0f172a;
          --xp-muted:#64748B;
        }
        .xp-hero{
          background: linear-gradient(180deg, var(--grad-start) 0%, var(--grad-end) 100%);
          padding: 70px 0 86px;
          color:#fff;
        }

        /* section-level title above card (centered like screenshot 2) */
        .xp-main-title{
          text-align:center;
          margin: 0 0 14px;
          font-weight:800;
          letter-spacing:-0.2px;
        }

        .xp-intro{
          text-align:center;
          margin: 0 0 24px;
          color: #e5e7f5;
          font-size:14px;
          max-width: 720px;
          margin-left:auto;
          margin-right:auto;
        }

        .xp-card{
          background:#fff;
          color:var(--xp-ink);
          border-radius: 18px;
          border:1px solid #eef0f6;
          box-shadow: 0 24px 60px rgba(2,6,23,.25);
          padding: 28px 20px 22px;
          max-width: 980px;
          margin: 0 auto;       /* centered card */
        }

        .xp-cols{
          display:grid;
          grid-template-columns: repeat(2, 1fr);
          column-gap: 0;
        }
        @media (max-width: 980px){
          .xp-cols{
            grid-template-columns:1fr;
          }
        }
        .xp-col{
          padding: 24px 26px 22px;
          position:relative;
          text-align:left;
        }
        @media (min-width: 981px){
          .xp-col + .xp-col{
            border-left:1px solid #E5E7EB;
          }
        }
        .xp-icon{
          width:60px;
          height:60px;
          border-radius:9999px;
          background: var(--icon-teal);
          display:flex;
          align-items:center;
          justify-content:center;
          margin-bottom:10px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.05);
        }
        .xp-icon svg{
          color: var(--icon-navy);
        }
        .xp-h3{
          margin: 4px 0 4px;
          font-weight: 800;
        }
        .xp-sub{
          margin: 0 0 8px;
          color: var(--xp-muted);
          font-size: 13px;
        }
        .xp-bullets{
          list-style: disc;
          padding-left: 1.1rem;
          margin: 0;
          font-size: 14px;
        }
        .xp-bullets li{
          margin: 5px 0;
        }
      `}</style>

      {/* ===== HEADER ===== */}
      <header className="header">
        <div
          className="container header__inner"
          style={{ position: "relative" }}
        >
          <div className="brand" style={{ cursor: "pointer" }}>
            <BrandLogo />
          </div>
          <nav className="top-nav" aria-label="Primary navigation">
            <button onClick={() => scrollToSection("skills")}>Skills</button>
            <button onClick={() => scrollToSection("projects")}>
              Projects
            </button>
            <button onClick={() => scrollToSection("experience")}>
              Experience
            </button>
          </nav>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section
        id="summary"
        className="section"
        style={{
          background:
            "linear-gradient(180deg, var(--grad-start) 0%, var(--grad-end) 100%)",
          color: "white",
          paddingTop: 64,
          paddingBottom: 64,
          textAlign: "center",
        }}
      >
        <div className="container">
          {/* Profile image centered */}
          <img
            src={profile}
            alt="Shashi Kant"
            width={140}
            height={140}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid #ffffff",
              boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
              display: "block",
              margin: "0 auto 20px",
            }}
          />

          <h1
            className="section__title hero-greeting"
            style={{ color: "white", marginBottom: 10 }}
          >
            Hi, I'm Shashi. Nice to meet you.
          </h1>
          <p
            className="lead"
            style={{
              color: "rgba(255,255,255,0.9)",
              maxWidth: "820px",
              margin: "0 auto 18px",
              lineHeight: 1.6,
            }}
          >
            <strong>Frontend / Full-Stack Web Developer</strong> who enjoys
            turning real requirements into production-ready React and Next.js
            applications — building fast, scalable UIs and end-to-end solutions
            for e-commerce platforms, portfolios, and data dashboards.
          </p>

          <p
            style={{
              marginBottom: 18,
              color: "rgba(255,255,255,0.95)",
              textAlign: "center",
              fontSize: "15px",
            }}
          >
            💻 JavaScript · TypeScript · React · Next.js · Node.js · Tailwind
            CSS · REST APIs · Auth · CI/CD
          </p>
          <p
            style={{
              marginBottom: 14,
              color: "rgba(255,255,255,0.95)",
              textAlign: "center",
              fontSize: "15px",
            }}
          >
            📍 New Delhi &nbsp;|&nbsp; 📞{" "}
            <a
              href={PHONE_URL}
              style={{ color: "#fff", textDecoration: "underline" }}
            >
              +91-96209-88539
            </a>
            &nbsp;|&nbsp; 📧{" "}
            <a
              href={EMAIL_URL}
              style={{ color: "#fff", textDecoration: "underline" }}
            >
              shashimitian@gmail.com
            </a>
          </p>

          {/* Social row – GitHub + Tableau */}
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 18,
            }}
          >
            <IconBtn title="GitHub" href={GITHUB_URL}>
              <IconGitHub />
            </IconBtn>
            <IconBtn title="Tableau Public" href={TABLEAU_URL}>
              <IconTableau />
            </IconBtn>
          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section id="skills" className="section section--muted">
        <div className="container">
          <h2 className="section__title">Technical Skills</h2>
          <p
            className="lead"
            style={{
              textAlign: "center",
              maxWidth: 720,
              margin: "0 auto 24px",
            }}
          >
            I focus on building end-to-end web experiences — from responsive UI
            and state management to APIs, auth, and deployment.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            {/* Core Web */}
            <div
              className="card"
              style={{
                flex: "1 1 260px",
                maxWidth: "320px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <h3 className="card__title">Core Web</h3>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
                <li>HTML5, Semantic markup, Accessibility basics</li>
                <li>Modern CSS3 (Flexbox, Grid, Responsive layouts)</li>
                <li>JavaScript (ES6+), TypeScript basics</li>
              </ul>
            </div>

            {/* Frontend Frameworks */}
            <div
              className="card"
              style={{
                flex: "1 1 260px",
                maxWidth: "320px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <h3 className="card__title">Frontend Frameworks</h3>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
                <li>React (hooks, context, custom hooks)</li>
                <li>Next.js (pages, routing, data fetching)</li>
                <li>Component-driven UI architecture</li>
              </ul>
            </div>

            {/* Styling & UI */}
            <div
              className="card"
              style={{
                flex: "1 1 260px",
                maxWidth: "320px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <h3 className="card__title">Styling &amp; Design Systems</h3>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
                <li>Tailwind CSS</li>
                <li>Responsive design for mobile &amp; desktop</li>
                <li>Reusable components &amp; layout systems</li>
              </ul>
            </div>

            {/* Backend & APIs */}
            <div
              className="card"
              style={{
                flex: "1 1 260px",
                maxWidth: "320px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <h3 className="card__title">Backend &amp; APIs</h3>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
                <li>Node.js &amp; Express basics</li>
                <li>REST API design &amp; integration</li>
                <li>JSON, Axios / Fetch, error handling</li>
              </ul>
            </div>

            {/* Auth & Security */}
            <div
              className="card"
              style={{
                flex: "1 1 260px",
                maxWidth: "320px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <h3 className="card__title">Authentication &amp; Security</h3>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
                <li>JWT-based login &amp; protected routes</li>
                <li>Role-based access (admin vs user)</li>
                <li>Form validation, basic input sanitization</li>
              </ul>
            </div>

            {/* Tooling & DevOps */}
            <div
              className="card"
              style={{
                flex: "1 1 260px",
                maxWidth: "320px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <h3 className="card__title">Tooling &amp; Deployment</h3>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
                <li>Git &amp; GitHub (branches, PRs)</li>
                <li>Vite, npm, environment variables</li>
                <li>Netlify / Vercel deployment, CI/CD basics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section__title">Projects</h2>

          <div className="grid grid--3">
            {/* Project 1 – uses IDEAL_ELECTRICAL_REPO */}
            <article className="card card--lg">
              <p className="pill" style={{ marginBottom: 10 }}>
                <span>E-commerce · Real-world</span>
              </p>
              <h3 className="card__title">
                Ideal Electrical Solutions — E-commerce Platform
              </h3>
              <p className="lead" style={{ fontSize: 14, marginBottom: 10 }}>
                Full-stack web app for a multi-vendor electrical marketplace:
                product catalog, cart, checkout flow, and admin management.
              </p>
              <ul style={{ paddingLeft: 18, margin: "0 0 10px", fontSize: 14 }}>
                <li>Responsive product listing, filters, and detail pages</li>
                <li>
                  JWT-based authentication (login, register, protected pages)
                </li>
                <li>Admin panel to manage products, vendors, and orders</li>
              </ul>
              <div className="stack-list">
                <span className="stack-tag">React</span>
                <span className="stack-tag">Next.js</span>
                <span className="stack-tag">Node.js</span>
                <span className="stack-tag">Tailwind CSS</span>
                <span className="stack-tag">REST API</span>
                <span className="stack-tag">JWT Auth</span>
              </div>
              <div style={{ marginTop: 14, display: "flex", gap: 8 }}>
                <a
                  href={IDEAL_ELECTRICAL_REPO}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--primary"
                >
                  View Project on GitHub
                </a>
              </div>
            </article>

            {/* Project 2 */}
            <article className="card card--lg">
              <p className="pill" style={{ marginBottom: 10 }}>
                <span>Portfolio · Vite + React</span>
              </p>
              <h3 className="card__title">Developer Portfolio Website</h3>
              <p className="lead" style={{ fontSize: 14, marginBottom: 10 }}>
                This site — a single-page application showcasing skills,
                projects, and experience with smooth in-page navigation.
              </p>
              <ul style={{ paddingLeft: 18, margin: "0 0 10px", fontSize: 14 }}>
                <li>Custom layout with reusable sections and components</li>
                <li>Responsive design with focus on readability</li>
                <li>Integrated GitHub and Tableau links</li>
              </ul>
              <div className="stack-list">
                <span className="stack-tag">React</span>
                <span className="stack-tag">TypeScript</span>
                <span className="stack-tag">Vite</span>
                <span className="stack-tag">Custom CSS</span>
              </div>
              <div style={{ marginTop: 14, display: "flex", gap: 8 }}>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--primary"
                >
                  View Code (GitHub)
                </a>
              </div>
            </article>

            {/* Project 3 */}
            <article className="card card--lg">
              <p className="pill" style={{ marginBottom: 10 }}>
                <span>Dashboard · Auth</span>
              </p>
              <h3 className="card__title">Admin Dashboard &amp; Analytics</h3>
              <p className="lead" style={{ fontSize: 14, marginBottom: 10 }}>
                Admin dashboard concept for monitoring orders, revenue, and user
                activity with protected routes and role-based access.
              </p>
              <ul style={{ paddingLeft: 18, margin: "0 0 10px", fontSize: 14 }}>
                <li>JWT auth and role-based route protection</li>
                <li>Reusable cards, tables, and charts layout</li>
                <li>API-driven widgets for metrics and activity feed</li>
              </ul>
              <div className="stack-list">
                <span className="stack-tag">React</span>
                <span className="stack-tag">Tailwind CSS</span>
                <span className="stack-tag">Node.js</span>
                <span className="stack-tag">REST API</span>
              </div>
              <div style={{ marginTop: 14, display: "flex", gap: 8 }}>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--primary"
                >
                  View Code (GitHub)
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE HERO (centered header in each card) ===== */}
      <section id="experience" className="xp-hero">
        <div className="container">
          <h2 className="xp-main-title">Professional Experience</h2>
          <p className="xp-intro">
            I combine frontend engineering with a strong understanding of data
            and ETL, which helps me design UIs that actually match real business
            flows.
          </p>

          <div className="xp-card">
            <div className="xp-cols">
              {/* LEFT COLUMN */}
              <div className="xp-col">
                {/* icon + role + dates centered */}
                <div
                  style={{
                    textAlign: "center",
                    marginBottom: 12,
                  }}
                >
                  <div className="xp-icon" aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="28"
                      height="28"
                      fill="none"
                      stroke="#0A0F29"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M20 22H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14v19z" />
                      <line x1="16" y1="2" x2="16" y2="22" />
                      <line x1="8" y1="8" x2="12" y2="8" />
                      <line x1="8" y1="12" x2="12" y2="12" />
                    </svg>
                  </div>

                  <h3
                    className="xp-h3"
                    style={{
                      marginTop: 6,
                      marginBottom: 4,
                      textAlign: "center",
                    }}
                  >
                    Freelance Frontend Developer
                  </h3>
                  <p
                    className="xp-sub"
                    style={{ margin: 0, textAlign: "center" }}
                  >
                    Sep. 2023 – Oct. 2024 · Remote &amp; Project-based
                  </p>
                </div>

                {/* bullets stay left-aligned */}
                <ul className="xp-bullets">
                  <li>
                    Designed and developed responsive, interactive UIs using
                    React.js, Next.js, and Tailwind CSS.
                  </li>
                  <li>
                    Translated client ideas into pixel-perfect layouts, ensuring
                    cross-browser and mobile compatibility.
                  </li>
                  <li>
                    Integrated APIs and dynamic data rendering for dashboards,
                    e-commerce, and portfolio projects.
                  </li>
                  <li>
                    Optimized performance through lazy loading, code splitting,
                    and image optimization.
                  </li>
                  <li>
                    Used GitHub for version control and deployed production
                    builds to Netlify and Vercel.
                  </li>
                  <li>
                    Collaborated with non-technical clients, transforming
                    requirements into clean, maintainable frontend code.
                  </li>
                  <li>
                    Focused on modern UI/UX design principles, accessibility,
                    and smooth user interactions.
                  </li>
                </ul>
              </div>

              {/* RIGHT COLUMN */}
              <div className="xp-col">
                {/* icon + role + dates centered */}
                <div
                  style={{
                    textAlign: "center",
                    marginBottom: 12,
                  }}
                >
                  <div className="xp-icon" aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="28"
                      height="28"
                      fill="none"
                      stroke="#0A0F29"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M10 6h4V5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1Z" />
                      <rect x="3" y="7" width="18" height="11" rx="2" />
                      <path d="M3 12h18" />
                    </svg>
                  </div>

                  <h3
                    className="xp-h3"
                    style={{
                      marginTop: 6,
                      marginBottom: 4,
                      textAlign: "center",
                    }}
                  >
                    Data &amp; Web Solutions Consultant — Ideal Electrical
                    Solutions Pvt. Ltd.
                  </h3>
                  <p
                    className="xp-sub"
                    style={{ margin: 0, textAlign: "center" }}
                  >
                    Oct. 2024 – Current · Project-based
                  </p>
                </div>

                {/* bullets stay left-aligned */}
                <ul className="xp-bullets">
                  <li>
                    Engineered a full-stack e-commerce platform connecting
                    vendors and customers across 80+ cities.
                  </li>
                  <li>
                    Built the frontend with React &amp; Next.js, implementing
                    responsive layouts, reusable components, and dynamic product
                    listings.
                  </li>
                  <li>
                    Developed a secure backend using Node.js &amp; Express,
                    integrating JWT-based authentication and role-based access
                    for admins, vendors, and customers.
                  </li>
                  <li>
                    Implemented a complete shopping-cart system, order
                    management flow, and payment logic simulation for a seamless
                    user experience.
                  </li>
                  <li>
                    Integrated the web layer with Informatica-driven data
                    pipelines and analytics dashboards to display real-time
                    vendor performance insights.
                  </li>
                  <li>
                    Focused on clean navigation, search, filters, and checkout
                    optimization for high usability on both desktop and mobile.
                  </li>
                  <li>
                    Deployed the application to Vercel, with continuous updates
                    from GitHub CI/CD pipelines.
                  </li>
                  <li>
                    Designed the architecture to handle real-world, messy
                    business data, ensuring reliability and scalability.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATIONS ===== */}
      <section id="certifications" className="section">
        <div className="container">
          <h2 className="section__title">Learning &amp; Certifications</h2>
          <p
            className="lead"
            style={{
              textAlign: "center",
              maxWidth: 720,
              margin: "0 auto 24px",
            }}
          >
            Strong fundamentals in programming, SQL, and analytics support the
            way I design frontend and full-stack solutions.
          </p>
        </div>
        <div className="container">
          <div className="cert-grid">
            {CERTIFICATIONS.map((c) => (
              <article key={c.title} className="card cert-card">
                <div className="cert-img-wrap">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="cert-img"
                    loading="lazy"
                  />
                </div>
                <h3 className="cert-title">{c.title}</h3>
                <p className="cert-issuer">{c.issuer}</p>
                <p className="cert-date">{c.date}</p>
                <a
                  className="link"
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: 13, fontWeight: 600 }}
                >
                  View credential →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
