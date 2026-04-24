// Work.jsx
import { useEffect, useRef, useState } from "react";

const WORK_EXPERIENCE = [
  {
    id: 1,
    title: "Junior AI Developer",
    company: "Alternative Technology",
    period: "June 2025 - Feb 2026",
    description: [
      "Research on different AI tools",
      "Implement AI tools as required",
    ],
    technologies: ["Python", "AI/ML", "LLM", "RAG"],
  },
  {
    id: 2,
    title: "IT Assistant",
    company: "Oli & Associates",
    period: "May 2023 - Feb 2025",
    description: [
      "Installing and configuring computer hardware, operating system and applications",
      "Monitoring and maintaining computer system",
    ],
    technologies: ["Hardware", "OS", "System Administration"],
  },
  {
    id: 3,
    title: "Technical Support",
    company: "Micro World International",
    period: "Jan 2021 - Feb 2022",
    description: [
      "Installing and configuring computer hardware, operating system and applications",
    ],
    technologies: ["Technical Support", "Hardware", "Software Installation"],
  },
];

export default function WorkExperience() {
  // Start as false — cards render immediately but are invisible
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef  = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
          observer.disconnect(); // fire once, never again
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700;800&display=swap');

        /* ─── Keyframes ──────────────────────────────────────── */
        @keyframes wk-fadeUp {
          from { opacity: 0; transform: translateY(50px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes wk-slideLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        /* ─── Header animation ───────────────────────────────── */
        /*  Always invisible until .wk-animate is added by JS    */
        .wk-header {
          text-align: center;
          margin-bottom: 64px;
          padding: 0 16px;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.9s cubic-bezier(0.25,0.46,0.45,0.94),
                      transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .wk-animate .wk-header {
          opacity: 1;
          transform: translateY(0);
        }

        /* ─── Card base — always in DOM, starts invisible ────── */
        .experience-card {
          background: #1a1a1a;
          border: 1px solid #2a2a2a;
          border-radius: 20px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          height: auto;
          /* invisible by default — no opacity:0 tricks, use transform+opacity transition */
          opacity: 0;
          transform: translateX(-40px);
          transition:
            opacity  0.7s cubic-bezier(0.25,0.46,0.45,0.94),
            transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94),
            border-color 0.3s ease,
            box-shadow 0.3s ease;
          /* hover uses a separate transform, so we can't combine — handle below */
        }

        /* When the section has been seen, animate cards in */
        .wk-animate .experience-card {
          opacity: 1;
          transform: translateX(0);
        }

        /* Stagger — delay each card's transition start */
        .wk-animate .experience-card:nth-child(1) { transition-delay: 0.10s; }
        .wk-animate .experience-card:nth-child(2) { transition-delay: 0.22s; }
        .wk-animate .experience-card:nth-child(3) { transition-delay: 0.34s; }
        .wk-animate .experience-card:nth-child(4) { transition-delay: 0.46s; }
        .wk-animate .experience-card:nth-child(5) { transition-delay: 0.58s; }
        .wk-animate .experience-card:nth-child(6) { transition-delay: 0.70s; }

        /* Hover — only when already visible */
        .wk-animate .experience-card:hover {
          border-color: #E76F51;
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(231,111,81,0.15);
        }

        /* ─── Card internals ─────────────────────────────────── */
        .exp-header { margin-bottom: 20px; }
        .exp-title {
          color: #e0e0e0; font-size: 20px; font-weight: 700;
          margin: 0 0 6px 0; line-height: 1.3;
        }
        .exp-company {
          color: #E76F51; font-size: 15px; font-weight: 500; margin: 0 0 4px 0;
        }
        .exp-period {
          color: #8a8a8a; font-size: 12px; letter-spacing: 0.3px;
          display: inline-block; padding: 2px 0;
        }
        .exp-description {
          list-style: none; padding: 0; margin: 0 0 20px 0; flex: 1;
        }
        .exp-description li {
          color: #b0b0b0; font-size: 14px; line-height: 1.6;
          margin-bottom: 8px; padding-left: 18px;
          position: relative; text-align: start;
        }
        .exp-description li::before {
          content: "▹"; position: absolute; left: 0;
          color: #E76F51; font-size: 12px;
        }
        .exp-tech { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; }
        .exp-tech-tag {
          background: #2a2a2a; color: #E76F51; border: 1px solid #3a3a3a;
          font-size: 11px; font-weight: 500; padding: 5px 12px;
          border-radius: 20px; transition: all 0.2s ease;
        }
        .exp-tech-tag:hover { background: #E76F51; color: #1a1a1a; transform: translateY(-1px); }

        /* ─── Theme tokens ───────────────────────────────────── */
        .work-title { color: #e0e0e0; }
        .work-sub   { color: #a0a0a0; }
        .work-badge {
          font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase;
          color: #E76F51; font-weight: 500; margin-bottom: 12px; display: inline-block;
        }
        .work-title {
          font-size: clamp(26px, 5vw, 48px); font-weight: 700;
          margin: 0 0 16px 0; letter-spacing: -0.02em; transition: color 0.3s ease;
        }
        .work-sub {
          font-size: clamp(14px, 2.2vw, 18px); max-width: 580px; margin: 0 auto;
          line-height: 1.5; font-weight: 400; transition: color 0.3s ease;
        }

        /* ─── Layout ─────────────────────────────────────────── */
        .experience-section {
          margin-bottom: 80px;
          padding: 0 24px;
        }
        .experience-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-top: 40px;
        }
        .section-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, #E76F51, transparent);
          margin: 60px 24px;
        }

        /* ─── Light Mode ─────────────────────────────────────── */
        body.light-mode .work-title { color: #1a1a1a; }
        body.light-mode .work-sub   { color: #6c6c6c; }
        body.light-mode .experience-card {
          background: #ffffff; border-color: #e0e0e0;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }
        body.light-mode .wk-animate .experience-card:hover {
          border-color: #E76F51; box-shadow: 0 8px 20px rgba(231,111,81,0.1);
        }
        body.light-mode .exp-title   { color: #1a1a1a; }
        body.light-mode .exp-company { color: #E76F51; }
        body.light-mode .exp-period  { color: #8a8a8a; }
        body.light-mode .exp-description li { color: #5a5a5a; }
        body.light-mode .exp-tech-tag { background: #f0f0f0; color: #E76F51; border-color: #e0e0e0; }
        body.light-mode .exp-tech-tag:hover { background: #E76F51; color: white; }

        /* ─── Responsive ─────────────────────────────────────── */
        @media (max-width: 1024px) {
          .experience-section { padding: 0 20px; margin-bottom: 64px; }
          .section-divider { margin: 50px 20px; }
          .experience-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
          .wk-header { margin-bottom: 48px; }
        }
        @media (max-width: 768px) {
          .experience-section { padding: 0 16px; margin-bottom: 48px; }
          .section-divider { margin: 40px 16px; }
          .experience-grid { grid-template-columns: 1fr; gap: 16px; margin-top: 28px; }
          .experience-card { padding: 20px; }
          .wk-header { margin-bottom: 36px; }
          .exp-title { font-size: 17px; }
          .exp-company { font-size: 14px; }
          .exp-description li { font-size: 13px; }
          .exp-tech { gap: 6px; }
        }
        @media (max-width: 480px) {
          .experience-section { padding: 0 12px; margin-bottom: 36px; }
          .section-divider { margin: 32px 12px; }
          .experience-grid { gap: 12px; margin-top: 20px; }
          .experience-card { padding: 16px 14px; border-radius: 16px; }
          .wk-header { margin-bottom: 28px; padding: 0; }
          .work-badge { font-size: 11px; }
          .exp-title { font-size: 15px; }
          .exp-company { font-size: 13px; }
          .exp-period { font-size: 11px; }
          .exp-description li { font-size: 12.5px; }
          .exp-tech-tag { font-size: 10px; padding: 4px 9px; }
        }
      `}</style>

      <div id="work">
        {/*
          The wrapper always renders — cards stay in the DOM.
          .wk-animate is added once when the observer fires,
          triggering the CSS transitions. It is never removed,
          so scrolling away and back does NOT replay the animation.
        */}
        <div
          className={`experience-section${isVisible ? " wk-animate" : ""}`}
          ref={sectionRef}
        >
          {/* Header */}
          <div className="wk-header">
            <h2 className="work-title">Work Experience</h2>
            <p className="work-sub">
              Professional journey across AI development, IT support, and technical roles
            </p>
          </div>

          {/* Cards grid — always in DOM */}
          <div className="experience-grid">
            {WORK_EXPERIENCE.map((exp) => (
              <div key={exp.id} className="experience-card">
                <div className="exp-header">
                  <h3 className="exp-title">{exp.title}</h3>
                  <p className="exp-company">{exp.company}</p>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <ul className="exp-description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="exp-tech">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="exp-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section-divider"></div>
      </div>
    </>
  );
}