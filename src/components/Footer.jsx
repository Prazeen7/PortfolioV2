// Footer.jsx
import { useEffect, useRef, useState } from "react";
import ResumePDF from "../assets/Resume.pdf";

const NAV_LINKS = [
  { label: "Home",       href: "#home" },
  { label: "Experience", href: "#work" },
  { label: "Projects",   href: "#projects" },
  { label: "Contact",    href: "#contact" },
];

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/Prazeen7",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://np.linkedin.com/in/prajinsingh",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/przns7/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:prajin.singh9@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef   = useRef(null);
  const hasAnimated = useRef(false);

  /* ── Intersection observer — fires once, adds .ft-animate ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700;800&display=swap');

        /* ─── Footer shell ─────────────────────────────────── */
        .ft-root {
          font-family: 'Jost', sans-serif;
          border-top: 1px solid #2a2a2a;
          padding: 64px 64px 32px;
          transition: border-color 0.3s ease, background-color 0.3s ease;
        }
        body.light-mode .ft-root { border-top-color: #e0e0e0; }

        /* ─── Scroll-in — each row slides up from below ─────── */
        /*  Default: invisible, shifted down.                     */
        /*  .ft-animate adds class-driven transitions in waves.   */
        .ft-top,
        .ft-divider,
        .ft-bottom {
          opacity: 0;
          transform: translateY(40px);
          transition:
            opacity   0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            transform 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .ft-animate .ft-top      { opacity:1; transform:translateY(0); transition-delay: 0.05s; }
        .ft-animate .ft-divider  { opacity:1; transform:translateY(0); transition-delay: 0.20s; }
        .ft-animate .ft-bottom   { opacity:1; transform:translateY(0); transition-delay: 0.35s; }

        /* ─── Top row ──────────────────────────────────────── */
        .ft-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 48px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }

        /* Brand column */
        .ft-brand {}
        .ft-logo {
          font-size: 24px;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #e0e0e0;
          margin: 0 0 12px 0;
          transition: color 0.3s ease;
        }
        .ft-logo span { color: #E76F51; }
        .ft-tagline {
          font-size: 14px;
          color: #6a6a6a;
          line-height: 1.6;
          max-width: 260px;
          margin: 0 0 20px 0;
          transition: color 0.3s ease;
        }

        /* Social icons */
        .ft-socials {
          display: flex;
          gap: 10px;
        }
        .ft-social-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid #3a3a3a;
          background: transparent;
          color: #8a8a8a;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.22s ease;
        }
        .ft-social-btn svg { width: 14px; height: 14px; }
        .ft-social-btn:hover {
          border-color: #E76F51;
          color: #E76F51;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(231,111,81,0.2);
        }

        /* Nav column */
        .ft-nav-col {}
        .ft-col-heading {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #E76F51;
          margin: 0 0 18px 0;
        }
        .ft-nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .ft-nav-link {
          font-size: 14px;
          font-weight: 400;
          color: #8a8a8a;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s ease, gap 0.2s ease;
        }
        .ft-nav-link::before {
          content: "→";
          font-size: 11px;
          color: #E76F51;
          opacity: 0;
          transition: opacity 0.2s ease, transform 0.2s ease;
          transform: translateX(-6px);
        }
        .ft-nav-link:hover {
          color: #e0e0e0;
          gap: 10px;
        }
        .ft-nav-link:hover::before {
          opacity: 1;
          transform: translateX(0);
        }

        /* CV Download column */
        .ft-cv-col {}
        .ft-cv-col .ft-col-heading { margin-bottom: 20px; }

        @keyframes ft-cv-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(231,111,81,0.45); }
          50%       { box-shadow: 0 0 0 7px rgba(231,111,81,0); }
        }

        .ft-cv-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          text-decoration: none;
          color: #E76F51;
          border: 1.5px solid #E76F51;
          border-radius: 5px;
          padding: 10px 20px;
          background: transparent;
          cursor: pointer;
          transition: background 0.22s ease, color 0.22s ease, transform 0.18s ease, box-shadow 0.22s ease;
          animation: ft-cv-pulse 2.4s ease-in-out infinite;
          white-space: nowrap;
        }
        .ft-cv-btn svg {
          width: 14px;
          height: 14px;
          flex-shrink: 0;
          transition: transform 0.22s ease;
        }
        .ft-cv-btn:hover {
          background: #E76F51;
          color: #fff;
          transform: translateY(-2px);
          animation: none;
          box-shadow: 0 6px 18px rgba(231,111,81,0.35);
        }
        .ft-cv-btn:hover svg { transform: translateY(2px); }
        .ft-cv-btn:active   { transform: translateY(0); }

        /* ─── Divider ─────────────────────────────────────── */
        .ft-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, #2a2a2a, transparent);
          margin-bottom: 24px;
        }

        /* ─── Bottom row ──────────────────────────────────── */
        .ft-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        .ft-copy {
          font-size: 13px;
          color: #5a5a5a;
          transition: color 0.3s ease;
        }
        .ft-copy span { color: #E76F51; }
        .ft-made-with {
          font-size: 12px;
          color: #4a4a4a;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: color 0.3s ease;
        }
        .ft-heart {
          color: #E76F51;
          display: inline-block;
          animation: ft-heartbeat 1.4s ease infinite;
        }
        @keyframes ft-heartbeat {
          0%,100% { transform: scale(1); }
          14%     { transform: scale(1.2); }
          28%     { transform: scale(1); }
          42%     { transform: scale(1.15); }
          56%     { transform: scale(1); }
        }

        /* ─── Light mode overrides ────────────────────────── */
        body.light-mode .ft-logo     { color: #1a1a1a; }
        body.light-mode .ft-tagline  { color: #7a7a7a; }
        body.light-mode .ft-social-btn { border-color: #d0d0d0; color: #8a8a8a; }
        body.light-mode .ft-social-btn:hover { border-color: #E76F51; color: #E76F51; }
        body.light-mode .ft-nav-link  { color: #7a7a7a; }
        body.light-mode .ft-nav-link:hover { color: #1a1a1a; }
        body.light-mode .ft-divider   { background: linear-gradient(to right, transparent, #d0d0d0, transparent); }
        body.light-mode .ft-copy      { color: #8a8a8a; }
        body.light-mode .ft-made-with { color: #9a9a9a; }
        body.light-mode .ft-cv-btn { border-color: #E76F51; }

        /* ─── Responsive ──────────────────────────────────── */
        @media (max-width: 768px) {
          .ft-root { padding: 48px 24px 24px; }
          .ft-top  { flex-direction: column; gap: 36px; }
          .ft-bottom { flex-direction: column; align-items: flex-start; gap: 8px; }
        }
      `}</style>

      <footer
        ref={footerRef}
        className={`ft-root${isVisible ? " ft-animate" : ""}`}
        id="footer"
      >
        {/* ── Top row ── */}
        <div className="ft-top">

          {/* Brand + Social */}
          <div className="ft-brand">
            <h2 className="ft-logo">Prajin<span>.</span></h2>
            <p className="ft-tagline">
              I specialize in building web applications, deploying and training machine learning models, and turning complex data into clear, actionable insights. With expertise in modern frameworks and both ML and DL technologies, I bring ideas to life through clean, impactful code.

            </p>
            <div className="ft-socials">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ft-social-btn"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Nav */}
          <div className="ft-nav-col">
            <p className="ft-col-heading">Navigation</p>
            <ul className="ft-nav-list">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="ft-nav-link">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Download CV */}
          <div className="ft-cv-col">
            <p className="ft-col-heading">Resume</p>
            <a
              href={ResumePDF}
              download="Prajin_Singh_Resume.pdf"
              className="ft-cv-btn"
              aria-label="Download CV"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v13M7 11l5 5 5-5" />
                <path d="M5 20h14" />
              </svg>
              Download CV
            </a>
          </div>

        </div>

        {/* ── Divider ── */}
        <div className="ft-divider" />

        {/* ── Bottom row ── */}
        <div className="ft-bottom">
          <p className="ft-copy">
            © {year} <span>Prajin Singh</span>. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
