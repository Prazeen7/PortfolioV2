import { useEffect, useState } from "react";
import PP from "../assets/pp.jpg";

const TITLES = ["AI Developer", "Web Developer", "Data Scientist"];

export default function Home() {
  const [displayed, setDisplayed] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    const current = TITLES[titleIndex];
    let timeout;

    if (phase === "typing") {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), 1600);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("erasing"), 400);
    } else if (phase === "erasing") {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 45);
      } else {
        setTitleIndex((prev) => (prev + 1) % TITLES.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, phase, titleIndex]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap');

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(36px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .hm-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 60px 64px;
          min-height: calc(100vh - 80px);
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
          font-family: 'Jost', sans-serif;
          background: #0a0a0a;
        }

        .hm-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;
          z-index: 2;
          max-width: 520px;
        }

        /* ── staggered children ── */
        .hm-left > * {
          opacity: 0;
          animation: fadeUp 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .hm-left > *:nth-child(1) { animation-delay: 0.10s; }
        .hm-left > *:nth-child(2) { animation-delay: 0.22s; }
        .hm-left > *:nth-child(3) { animation-delay: 0.34s; }
        .hm-left > *:nth-child(4) { animation-delay: 0.46s; }
        .hm-left > *:nth-child(5) { animation-delay: 0.58s; }

        .hm-greeting {
          font-size: 14px;
          font-weight: 300;
          letter-spacing: 0.08em;
          color: #a0a0a0;
          line-height: 1.4;
          margin: 0;
        }

        .hm-greeting span {
          display: block;
          font-size: 17px;
          font-weight: 500;
          color: #e0e0e0;
          margin-top: 2px;
        }

        .hm-title {
          font-size: clamp(42px, 5vw, 64px);
          font-weight: 700;
          color: #E76F51;
          margin: 0;
          line-height: 1.1;
          letter-spacing: -0.02em;
          min-height: 1.2em;
          display: flex;
          align-items: center;
        }

        .hm-cursor {
          display: inline-block;
          width: 3px;
          height: 0.85em;
          background: #E76F51;
          margin-left: 4px;
          border-radius: 1px;
          animation: blink 0.75s step-end infinite;
          vertical-align: middle;
          flex-shrink: 0;
        }

        .hm-socials {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .hm-social-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid #404040;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s, color 0.2s;
          color: #a0a0a0;
          font-size: 14px;
          text-decoration: none;
        }

        .hm-social-btn:hover {
          border-color: #E76F51;
          color: #E76F51;
        }

        .hm-social-btn svg {
          width: 15px;
          height: 15px;
          fill: currentColor;
        }

        .hm-skills-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          padding: 14px 18px;
          border: 1px solid #404040;
          border-radius: 6px;
          margin-top: 4px;
          position: relative;
        }

        .hm-skills-wrap::before {
          content: "TECH STACK";
          position: absolute;
          top: -9px;
          left: 14px;
          background: #0a0a0a;
          padding: 0 6px;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.18em;
          color: #E76F51;
          font-family: 'Jost', sans-serif;
        }

        .hm-skill-tag {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.08em;
          color: #c0c0c0;
          padding: 5px 11px;
          border: 1px solid #404040;
          border-radius: 3px;
          background: transparent;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
          cursor: default;
        }

        .hm-skill-tag:hover {
          border-color: #E76F51;
          color: #E76F51;
          background: #1a1a1a;
        }

        .hm-stats {
          display: flex;
          gap: 0;
          margin-top: 16px;
        }

        .hm-stat {
          padding: 16px 32px 16px 0;
          border-right: 1px solid #404040;
          margin-right: 32px;
        }

        .hm-stat:last-child {
          border-right: none;
          margin-right: 0;
        }

        .hm-stat-num {
          font-size: 22px;
          font-weight: 700;
          color: #e0e0e0;
          letter-spacing: -0.02em;
          line-height: 1;
        }

        .hm-stat-label {
          font-size: 12px;
          font-weight: 400;
          color: #a0a0a0;
          margin-top: 5px;
          letter-spacing: 0.06em;
        }

        /* ── right side ── */
        .hm-right {
          position: relative;
          z-index: 2;
          flex-shrink: 0;
          opacity: 0;
          animation: fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.3s forwards;
        }

        .hm-avatar-wrap {
          width: 360px;
          height: 360px;
          border-radius: 50%;
          background: #1a1a1a;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .hm-avatar-ring {
          position: absolute;
          inset: -12px;
          border-radius: 50%;
          border: 1px solid #404040;
          pointer-events: none;
          opacity: 0;
          animation: fadeIn 1s ease 0.7s forwards;
        }

        .hm-avatar-ring-2 {
          position: absolute;
          inset: -28px;
          border-radius: 50%;
          border: 1px solid #2a2a2a;
          pointer-events: none;
          opacity: 0;
          animation: fadeIn 1s ease 0.9s forwards;
        }

        @media (max-width: 768px) {
          .hm-section {
            flex-direction: column-reverse;
            padding: 80px 24px;
            gap: 40px;
            min-height: auto;
          }
          .hm-avatar-wrap {
            width: 260px;
            height: 260px;
          }
          .hm-left {
            align-items: center;
            text-align: center;
          }
          .hm-stats {
            justify-content: center;
          }
          .hm-skills-wrap {
            justify-content: center;
          }

          .section-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, #E76F51, transparent);
          margin: 60px 0;
        }
        }
      `}</style>

      <section className="hm-section" id="home">
        <div className="hm-left">
          <p className="hm-greeting">
            Hi I am
            <span>Prajin Singh</span>
          </p>

          <h1 className="hm-title">
            {displayed}
            <span className="hm-cursor" />
          </h1>

          <div className="hm-socials">
            <a
              href="https://www.instagram.com/przns7/"
              className="hm-social-btn"
              aria-label="Instagram"
              target="_blank"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://np.linkedin.com/in/prajinsingh"
              className="hm-social-btn"
              aria-label="LinkedIn"
              target="_blank"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://github.com/Prazeen7"
              className="hm-social-btn"
              aria-label="GitHub"
              target="_blank"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="mailto:prajin.singh9@gmail.com"
              className="hm-social-btn"
              aria-label="Email"
              target="_blank"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>

          <div className="hm-skills-wrap">
            {[
              "React",
              "Node.js",
              "Python",
              "ML / DL",
              "SQL",
              "JavaScript",
              "Figma",
              "Unity", 
              "MERN",
              "Java",
              "C/C++/C#"
            ].map((skill) => (
              <span key={skill} className="hm-skill-tag">
                {skill}
              </span>
            ))}
          </div>

          <div className="hm-stats">
            <div className="hm-stat">
              <div className="hm-stat-num">1+</div>
              <div className="hm-stat-label">Experiences</div>
            </div>
            <div className="hm-stat">
              <div className="hm-stat-num">20+</div>
              <div className="hm-stat-label">Project done</div>
            </div>
            <div className="hm-stat">
              <div className="hm-stat-num">15+</div>
              <div className="hm-stat-label">Technologies</div>
            </div>
          </div>
        </div>

        <div className="hm-right">
          <div className="hm-avatar-ring-2" />
          <div className="hm-avatar-ring" />
          <div className="hm-avatar-wrap">
            <img
              src={PP}
              alt="Prajin Singh"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
        </div>
      </section>
      <div className="section-divider"></div>
    </>
  );
}
