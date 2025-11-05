import { useEffect, useState, useRef, ReactNode } from "react";

/* ===== Local assets (keep only what we use) ===== */
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

type GHItem = {
  name: string;
  path: string;
  type: "file" | "dir";
  download_url?: string;
};

type Card = {
  base: string;
  kind: "Mapping" | "Taskflow";
  imageUrl: string;
  imageBlobUrl: string;
  docsUrlGuess: string | null;
  zipSearchUrl?: string;
};

const OWNER = "s-h-a-s-h-i-k-a-n-t";
const REPO = "iics-projects-portfolio";
const RAW_PREFIX = `https://raw.githubusercontent.com/${OWNER}/${REPO}/main/`;
const BLOB = (p: string) =>
  `https://github.com/${OWNER}/${REPO}/blob/main/${p}`;
const SEARCH = (q: string) =>
  `https://github.com/${OWNER}/${REPO}/search?q=${encodeURIComponent(q)}`;

const TABLEAU_URL =
  "https://public.tableau.com/app/profile/shashi.kant2423/viz/Total_revenue_by_region_Sales_person/Sheet1";
const RESUME_URL =
  "https://raw.githubusercontent.com/s-h-a-s-h-i-k-a-n-t/iics-projects-portfolio/main/docs/Shashi_Kant_Resume.pdf";
const GITHUB_URL = `https://github.com/${OWNER}/${REPO}`;
const LINKEDIN_URL = "https://www.linkedin.com/in/shashi-kant-b26459130/";
const YOUTUBE_URL = "https://www.youtube.com/@iicsinformaticasimplified";

/* contact links - footer */
const PHONE_URL = "tel:+919620988539";
const WHATSAPP_URL = "https://wa.me/919620988539";
const EMAIL_URL = "mailto:shashimitian@gmail.com";

/* =========================
   Helpers
========================= */
const baseNoExt = (name: string) =>
  name.match(/^(.+)\.[A-Za-z0-9]+$/)?.[1] ?? name;

async function ghList(path: string): Promise<GHItem[]> {
  const cacheKey = `gh:${path}`;
  const cached = sessionStorage.getItem(cacheKey);
  if (cached) {
    try {
      return JSON.parse(cached) as GHItem[];
    } catch {}
  }
  const url = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${path}?per_page=100`;
  const res = await fetch(url, {
    headers: { Accept: "application/vnd.github+json" },
  });
  if (!res.ok) throw new Error(`GitHub API ${res.status} for /${path}`);
  const data = (await res.json()) as GHItem[];
  sessionStorage.setItem(cacheKey, JSON.stringify(data));
  return data;
}

function guessDocsBlobUrl(kind: Card["kind"], base: string) {
  const prefix = kind === "Mapping" ? "Mapping%3A%20" : "Taskflow%3A%20";
  return BLOB(`docs/${prefix}${base}.md`);
}
const makeZipSearchUrl = (base: string) =>
  SEARCH(`${base} path:jobs_exports type:path`);

function humanizeName(raw: string) {
  let s = raw;
  s = s.replace(/^(m_|tf_|dt_|mt_|mct_|mtt_)/i, "");
  s = s.replace(/SCD[_\s]?Type[_\s]?2/gi, "SCD Type 2");
  s = s.replace(/Type[_\s]?2/gi, "Type 2");
  s = s.replace(/MD5/gi, "MD5");
  s = s.replace(/[_-]/g, " ");
  s = s.replace(/\s+/g, " ").trim();
  s = s
    .split(" ")
    .map((w) =>
      w === w.toUpperCase() && w.length <= 4
        ? w
        : w[0].toUpperCase() + w.slice(1).toLowerCase()
    )
    .join(" ");
  s = s.replace(/\(Date MD5\)/i, "(Date + MD5)");
  return s;
}

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
const IconLinkedIn = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5 2.5 2.5 0 0 1 4.98 3.5zM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9z" />
  </svg>
);
const IconYouTube = ({ size = 22 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M23.5 7.2s-.23-1.64-.95-2.36c-.9-.95-1.92-.96-2.39-1.02C16.98 3.5 12 3.5 12 3.5h-.01s-4.98 0-8.16.32c-.47.06-1.49.07-2.39 1.02C.73 5.56.5 7.2.5 7.2S.27 9.1.27 11v2c0 1.9.23 3.8.23 3.8s.23 1.64.95 2.36c.9.95 2.08.92 2.61 1.02 1.9.18 8 .32 8 .32s4.98 0 8.16-.32c.47-.06 1.49-.07 2.39-1.02.72-.72.95-2.36.95-2.36s.23-1.9.23-3.8v-2c0-1.9-.23-3.8-.23-3.8ZM9.75 14.85V8.94l6.05 2.96-6.05 2.95Z" />
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

/* SK Brand logo (image only) — name removed */
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
   Modal (Details)
========================= */
function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div
      aria-modal="true"
      role="dialog"
      aria-label={title}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        zIndex: 1000,
      }}
    >
      <div
        ref={ref}
        style={{
          background: "#fff",
          borderRadius: 16,
          width: "min(900px, 96%)",
          maxHeight: "90vh",
          overflow: "auto",
          boxShadow: "0 25px 60px rgba(2,6,23,.35)",
        }}
      >
        <div
          style={{
            padding: "14px 18px",
            borderBottom: "1px solid #eef0f6",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h3 style={{ margin: 0, fontWeight: 800 }}>{title}</h3>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              border: "1px solid #e5e7eb",
              background: "white",
              borderRadius: 10,
              padding: "6px 10px",
              cursor: "pointer",
              fontWeight: 700,
            }}
          >
            ✕
          </button>
        </div>
        <div style={{ padding: 18 }}>{children}</div>
      </div>
    </div>
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
              Data Quality &amp; ETL Consultant
            </p>
          </div>
        </div>

        {/* CENTER: Get in Touch + 4 icons */}
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

            {/* LinkedIn */}
            <a
              href={LINKEDIN_URL}
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
                <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5 2.5 2.5 0 0 1 4.98 3.5zM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* divider to separate sections */}
      <div
        style={{
          width: "100%",
          height: "2px",
          background: "rgba(255,255,255,0.2)",
        }}
      />

      {/* separate copyright band */}
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
  const [mappingCards, setMappingCards] = useState<Card[]>([]);
  const [taskflowCards, setTaskflowCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const [selected, setSelected] = useState<Card | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const [mapPngs, tfPngs] = await Promise.all([
          ghList("CDI/mappings"),
          ghList("CDI/taskflows"),
        ]);

        const toCards = (pngs: GHItem[], kind: Card["kind"]): Card[] =>
          pngs
            .filter((f) => f.type === "file" && /\.png$/i.test(f.name))
            .map((f) => {
              const base = baseNoExt(f.name);
              return {
                base,
                kind,
                imageUrl: f.download_url || RAW_PREFIX + f.path,
                imageBlobUrl: BLOB(f.path),
                docsUrlGuess: guessDocsBlobUrl(kind, base),
                zipSearchUrl:
                  kind === "Taskflow" ? makeZipSearchUrl(base) : undefined,
              };
            })
            .sort((a, b) => a.base.localeCompare(b.base));

        sessionStorage.setItem(
          "cards:mappings",
          JSON.stringify(toCards(mapPngs, "Mapping"))
        );
        sessionStorage.setItem(
          "cards:taskflows",
          JSON.stringify(toCards(tfPngs, "Taskflow"))
        );

        setMappingCards(
          JSON.parse(sessionStorage.getItem("cards:mappings") || "[]")
        );
        setTaskflowCards(
          JSON.parse(sessionStorage.getItem("cards:taskflows") || "[]")
        );
      } catch (e: any) {
        const msg = e?.message || "";
        if (/API 403|rate|abuse/i.test(msg))
          setErr(
            "GitHub is rate-limiting right now. Please refresh in a minute."
          );
        else if (/404/.test(msg))
          setErr(
            "Couldn’t find portfolio folders on GitHub. Check the repo paths."
          );
        else setErr("Failed to load GitHub items. Please try again.");
        try {
          const m = sessionStorage.getItem("cards:mappings");
          const t = sessionStorage.getItem("cards:taskflows");
          if (m) setMappingCards(JSON.parse(m));
          if (t) setTaskflowCards(JSON.parse(t));
        } catch {}
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const CardsGrid = ({ items }: { items: Card[] }) => {
    if (!items.length) {
      return (
        <div className="empty">
          <p className="lead">
            No visuals found here yet. Check the{" "}
            <a
              className="link"
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
            >
              GitHub repo
            </a>{" "}
            or refresh later.
          </p>
        </div>
      );
    }
    return (
      <div className="grid grid--3">
        {items.map((c) => (
          <article
            key={`${c.kind}:${c.base}`}
            className="card card--lg"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <a
              href={c.imageBlobUrl}
              target="_blank"
              rel="noreferrer"
              title="Open image on GitHub"
              style={{
                display: "block",
                textDecoration: "none",
                color: "inherit",
                marginBottom: 12,
              }}
            >
              <img
                src={c.imageUrl}
                alt={`${c.base} — ${c.kind} diagram`}
                className="viz-img"
                style={{ width: "100%", height: "auto", borderRadius: 12 }}
                loading="lazy"
              />
            </a>

            <h4
              className="card__title"
              style={{ wordBreak: "break-word", marginBottom: 6 }}
              title={humanizeName(c.base)}
            >
              {humanizeName(c.base)}
            </h4>

            <div className="chips" style={{ marginBottom: 12 }}>
              <span className="chip">{c.kind}</span>
            </div>

            <div
              style={{
                marginTop: "auto",
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
              }}
            >
              <a
                href={c.imageBlobUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn--primary"
              >
                GitHub
              </a>
              <button
                className="btn btn--ghost"
                onClick={() => setSelected(c)}
                title="Open details"
                style={{ cursor: "pointer" }}
              >
                Details
              </button>
            </div>
          </article>
        ))}
      </div>
    );
  };

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

        /* MOVABLE (NON-STICKY) HEADER */
        .header{
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
        .section--accent{
          background: linear-gradient(180deg, var(--grad-start) 0%, var(--grad-end) 100%);
          color:var(--brand-ink);
        }

        .section__title{ margin:0 0 16px; font-weight:800; letter-spacing:-0.2px; text-align:center; }
        .section__title--light{ color:#fff; }
        .lead{ margin:0 0 12px; opacity:.9; }
        .lead--light{ color:#fff; opacity:.95; }

        .grid{ display:grid; gap:16px; }
        .grid--3{ grid-template-columns: repeat(3, 1fr); }
        @media (max-width: 960px){ .grid--3{ grid-template-columns:1fr; } }

        .card{ background:var(--card); border:1px solid #eef0f6; border-radius:16px; padding:16px; }
        .card--lg{ padding:16px; }
        .card__title{ margin:0 0 6px; font-weight:700; }
        .chips{ display:flex; gap:8px; flex-wrap:wrap; }
        .chip{ background:#eef2ff; color:#3730A3; border:1px solid #E0E7FF; padding:4px 10px; border-radius:999px; font-size:12px; font-weight:600; }
        .btn{ border-radius:12px; padding:10px 14px; text-decoration:none; font-weight:600; display:inline-flex; align-items:center; gap:8px; }
        .btn--primary{ background:var(--brand); color:#fff; }
        .btn--ghost{ background:#fff; border:1px solid #e8e8ef; color:#111827; }
        .btn--light{ background:#ffffff; color:#111827; border:1px solid rgba(15,23,42,.15); }

        :root{
          --xp-ink:#0f172a;
          --xp-muted:#64748B;
        }
        .xp-hero{
          background: linear-gradient(180deg, var(--grad-start) 0%, var(--grad-end) 100%);
          color:#fff; padding: 70px 0 86px;
        }
        .xp-card{
          background:#fff; color:var(--xp-ink);
          border-radius: 18px; border:1px solid #eef0f6;
          box-shadow: 0 24px 60px rgba(2,6,23,.25);
          padding: 28px 18px 22px;
        }
        .xp-title{ text-align:center; margin: 0 0 18px; font-weight: 800; letter-spacing:-0.2px; }
        .xp-cols{ display:grid; grid-template-columns: repeat(2, 1fr); gap: 0; }
        @media (max-width: 980px){ .xp-cols{ grid-template-columns: 1fr; } }
        .xp-col{
          padding: 28px 26px 22px;
          position:relative;
          text-align:center;
        }
        @media (min-width: 981px){ .xp-col + .xp-col{ border-left:1px solid #E5E7EB; } }

        .xp-icon{
          width:60px; height:60px;
          margin: 0 auto 12px;
          border-radius:9999px;
          background: var(--icon-teal);
          display:flex; align-items:center; justify-content:center;
          box-shadow: 0 4px 8px rgba(0,0,0,0.05);
        }
        .xp-icon svg{ color: var(--icon-navy); }

        .xp-h3{ margin: 6px 0 6px; font-weight: 800; }
        .xp-sub{ margin: 0 0 16px; color: var(--xp-muted); font-size:14px; }
        .xp-bullets{ list-style: disc; padding-left: 1.1rem; margin: 0 auto; max-width: 560px; text-align: left; }
        .xp-bullets li{ margin: 6px 0; }

        .cert-grid{ display:flex; flex-wrap:wrap; gap:24px; justify-content:center; align-items:stretch; }
        .cert-card{
          flex: 0 0 250px; max-width: 320px; background:#fff; border-radius:14px; border:1px solid #e5e7eb; padding:16px;
          display:flex; flex-direction:column; box-shadow: 0 6px 18px rgba(2,6,23,.06);
        }
        .cert-img-wrap{ width:100%; aspect-ratio: 16 / 11; border-radius:12px; overflow:hidden; border:1px solid #e5e7eb; background:#fbfbfd; display:flex; align-items:center; justify-content:center; margin-bottom:12px; }
        .cert-img{ width:100%; height:100%; object-fit:contain; }
        .cert-title{ margin:8px 0 4px; font-size:16px; font-weight:800; }
        .cert-issuer, .cert-date{ margin:0 0 6px; color:#6b7280; font-size:13px; }

        .hero-greeting{ font-family: Sora, Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; font-weight:800; letter-spacing:-0.3px; line-height:1.1; }
      `}</style>

      {/* ===== HEADER (non-sticky, with section links) ===== */}
      <header className="header">
        <div
          className="container header__inner"
          style={{ position: "relative" }}
        >
          <div className="brand" style={{ cursor: "pointer" }}>
            <BrandLogo />
          </div>
          <nav className="top-nav" aria-label="Primary navigation">
            <button onClick={() => scrollToSection("skills")}>
              Technical Skills
            </button>
            <button onClick={() => scrollToSection("experience")}>
              Professional Experience
            </button>
            <button onClick={() => scrollToSection("sample-work")}>
              Projects
            </button>
            <button onClick={() => scrollToSection("certifications")}>
              Certifications
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
          paddingTop: 56,
          paddingBottom: 56,
          textAlign: "center",
        }}
      >
        <div className="container">
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
              marginBottom: 20,
            }}
          />
          <h1
            className="section__title hero-greeting"
            style={{ color: "white" }}
          >
            Hi, I'm Shashi. Nice to meet you.
          </h1>
          <p
            className="lead"
            style={{
              color: "rgba(255,255,255,0.9)",
              maxWidth: "850px",
              margin: "0 auto 20px",
              lineHeight: 1.6,
            }}
          >
            Data Quality &amp; ETL Trainer and Freelance Consultant with
            hands-on experience delivering projects for{" "}
            <strong>Ideal Electrical Solutions Pvt Ltd</strong> and mentoring{" "}
            <strong>800+ students</strong> in Informatica (IICS/PowerCenter),
            SQL, and Tableau. I simplify complex data integration and quality
            challenges into real-world solutions: cleansing, profiling,{" "}
            <strong>data modeling</strong>, and BI dashboards.
          </p>
          <p
            style={{
              marginBottom: 14,
              color: "rgba(255,255,255,0.95)",
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            📍 New Delhi &nbsp;|&nbsp; 📞{" "}
            <a
              href="tel:+919620988539"
              style={{ color: "#fff", textDecoration: "underline" }}
            >
              +91-96209-88539
            </a>
            &nbsp;|&nbsp; 📧{" "}
            <a
              href="mailto:shashimitian@gmail.com"
              style={{ color: "#fff", textDecoration: "underline" }}
            >
              shashimitian@gmail.com
            </a>
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <IconBtn title="GitHub" href={GITHUB_URL}>
              <IconGitHub />
            </IconBtn>
            <IconBtn title="LinkedIn" href={LINKEDIN_URL}>
              <IconLinkedIn />
            </IconBtn>
            <IconBtn title="YouTube" href={YOUTUBE_URL}>
              <IconYouTube />
            </IconBtn>
            <IconBtn title="Tableau Public" href={TABLEAU_URL}>
              <IconTableau />
            </IconBtn>
          </div>
        </div>
      </section>

      {/* ===== TECHNICAL SKILLS ===== */}
      <section id="skills" className="section section--muted">
        <div className="container">
          <h2 className="section__title">Technical Skills</h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            {/* BI */}
            <div
              style={{
                flex: "1 1 280px",
                maxWidth: "320px",
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "14px",
                padding: "20px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <h3 style={{ fontWeight: 700, marginBottom: 10 }}>
                BI &amp; Visualization
              </h3>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
                <li>Power BI</li>
                <li>Tableau</li>
                <li>IBM Cognos Analytics</li>
              </ul>
            </div>

            {/* DB & Programming */}
            <div
              style={{
                flex: "1 1 280px",
                maxWidth: "320px",
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "14px",
                padding: "20px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <h3 style={{ fontWeight: 700, marginBottom: 10 }}>
                Databases &amp; Programming
              </h3>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
                <li>SQL</li>
                <li>PL/SQL</li>
                <li>Python</li>
              </ul>
            </div>

            {/* ETL tools */}
            <div
              style={{
                flex: "1 1 280px",
                maxWidth: "320px",
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "14px",
                padding: "20px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <h3 style={{ fontWeight: 700, marginBottom: 10 }}>ETL Tools</h3>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
                <li>Informatica PowerCenter</li>
                <li>Informatica IICS (CDQ / CDI)</li>
                <li>Informatica Cloud Data Integration Services</li>
              </ul>
            </div>

            {/* DQ */}
            <div
              style={{
                flex: "1 1 280px",
                maxWidth: "320px",
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "14px",
                padding: "20px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <h3 style={{ fontWeight: 700, marginBottom: 10 }}>
                Data Quality &amp; Rule Management
              </h3>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
                <li>Data Profiling</li>
                <li>Data Cleansing &amp; Standardization</li>
                <li>Deduplication &amp; Matching</li>
                <li>Rule Specifications &amp; Scorecards</li>
                <li>Reference Tables &amp; Labeler</li>
              </ul>
            </div>

            {/* Cloud */}
            <div
              style={{
                flex: "1 1 280px",
                maxWidth: "320px",
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "14px",
                padding: "20px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <h3 style={{ fontWeight: 700, marginBottom: 10 }}>
                Cloud &amp; Warehousing
              </h3>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
                <li>AWS</li>
                <li>Azure</li>
                <li>Snowflake (Cloud Data Warehouse)</li>
                <li>Data Governance</li>
              </ul>
            </div>

            {/* Git / CI */}
            <div
              style={{
                flex: "1 1 280px",
                maxWidth: "320px",
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "14px",
                padding: "20px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <h3 style={{ fontWeight: 700, marginBottom: 10 }}>
                Version Control &amp; CI/CD
              </h3>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
                <li>Git &amp; GitHub</li>
                <li>Jenkins (ETL CI/CD)</li>
                <li>Informatica Git Integration</li>
                <li>Deployment Automation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROFESSIONAL EXPERIENCE SECTION ===== */}
      <section id="experience" className="xp-hero">
        <div className="container">
          <div className="xp-card">
            <h2 className="xp-title">Professional Experience</h2>

            <div
              className="xp-cols"
              style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
            >
              {/* LEFT CARD */}
              <div className="xp-col">
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

                <h3 className="xp-h3">
                  Independent ETL / Data Quality Trainer &amp; Consultant
                </h3>
                <p className="xp-sub">Feb 2021 – Oct 2024</p>
                <p className="xp-sub">Workshops · Bootcamps · 1:1 Mentorship</p>

                <ul className="xp-bullets">
                  <li>
                    Delivered structured training and mentored 800+ learners
                    across Informatica ETL, SQL, and Tableau.
                  </li>
                  <li>
                    Designed curriculum and hands-on labs covering cleansing,
                    dedupe, rule specification, and data modeling.
                  </li>
                  <li>
                    Conducted doubt-clearing sessions and project-based case
                    studies for real-world problem-solving.
                  </li>
                  <li>
                    Created and maintained multiple ETL data pipelines
                    integrating diverse data sources.
                  </li>
                  <li>
                    Project-based learning and industry-aligned curriculum for
                    ETL, DQ, and BI.
                  </li>
                </ul>
              </div>

              {/* RIGHT CARD */}
              <div className="xp-col">
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

                <h3 className="xp-h3">
                  Data Quality &amp; ETL Consultant — Ideal Electrical Solutions
                  Pvt. Ltd.
                </h3>
                <p className="xp-sub">Oct 2024 - Current (Project-based)</p>

                <ul className="xp-bullets">
                  <li>
                    Designed and deployed end-to-end pipelines in IICS (CDI
                    &amp; CDQ), integrating multiple sources.
                  </li>
                  <li>
                    Migrated DQ rules to IICS CDQ, improving validation and
                    reducing maintenance.
                  </li>
                  <li>
                    Implemented CDI mappings with dynamic parameters &amp;
                    reusable transformations.
                  </li>
                  <li>
                    Automated scorecards and exception monitoring, cutting
                    manual verification.
                  </li>
                  <li>
                    Built multi-source load orchestration for Oracle, SQL
                    Server, Snowflake.
                  </li>
                  <li>
                    Added governance via reference tables, DQ metrics, and
                    business rules.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="sample-work" className="section">
        <div className="container">
          <h2 className="section__title">Projects</h2>

          <h3
            className="section__title"
            style={{ marginTop: 0, marginBottom: 12 }}
          >
            Sample Mappings
          </h3>
          {loading && <p className="lead">Loading GitHub items…</p>}
          {err && <p className="lead">Error: {err}</p>}
          {!loading && !err && <CardsGrid items={mappingCards} />}

          <h3 className="section__title" style={{ marginTop: 32 }}>
            Taskflows
          </h3>
          {!loading && !err && <CardsGrid items={taskflowCards} />}
        </div>
      </section>

      {/* ===== CERTIFICATIONS ===== */}
      <section id="certifications" className="section section--muted">
        <div className="container">
          <h2 className="section__title">Certifications</h2>
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

      {/* ===== DETAILS MODAL ===== */}
      <Modal
        open={!!selected}
        onClose={() => setSelected(null)}
        title={selected ? humanizeName(selected.base) : ""}
      >
        {selected && (
          <div
            style={{
              display: "grid",
              gap: 16,
              gridTemplateColumns: "1fr",
              alignItems: "start",
            }}
          >
            <img
              src={selected.imageUrl}
              alt={selected.base}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: 12,
                border: "1px solid #e5e7eb",
              }}
            />
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              <a
                className="btn btn--primary"
                href={selected.imageBlobUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open on GitHub
              </a>
              {selected.docsUrlGuess && (
                <a
                  className="btn btn--ghost"
                  href={selected.docsUrlGuess}
                  target="_blank"
                  rel="noreferrer"
                >
                  Docs (guessed)
                </a>
              )}
              {selected.kind === "Taskflow" && selected.zipSearchUrl && (
                <a
                  className="btn btn--ghost"
                  href={selected.zipSearchUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Find Export ZIP
                </a>
              )}
            </div>
            <div style={{ marginTop: 8 }}>
              <h4 style={{ margin: "12px 0 6px" }}>Overview</h4>
              <p style={{ margin: 0, color: "#334155" }}>
                We’ll add a concise description, inputs/outputs, and key steps
                here later.
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
