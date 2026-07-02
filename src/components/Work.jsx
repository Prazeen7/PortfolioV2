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
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [animationKey, setAnimationKey] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isUserHovering, setIsUserHovering] = useState(false);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);
  const animationIntervalRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-cycle through cards (desktop only)
  useEffect(() => {
    if (!isVisible || isUserHovering) return;

    // Check if we're on desktop
    const isDesktop = window.innerWidth > 768;
    if (!isDesktop) return;

    // Start cycling through cards
    animationIntervalRef.current = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % WORK_EXPERIENCE.length);
    }, 3000); // 3 seconds per card

    return () => {
      if (animationIntervalRef.current) {
        clearInterval(animationIntervalRef.current);
      }
    };
  }, [isVisible, isUserHovering]);

  const handleMouseEnter = (id) => {
    setIsUserHovering(true);
    setHoveredCard(id);
    // Pause the animation
    if (animationIntervalRef.current) {
      clearInterval(animationIntervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsUserHovering(false);
    setHoveredCard(null);
    // Force restart animation by changing key
    setAnimationKey(prev => prev + 1);
  };

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
        .wk-header {
          text-align: center;
          margin-bottom: 64px;
          margin-top: 80px;
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

        /* ─── Desktop: Hover Container ──────────────────────── */
        .experience-hover-item {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s cubic-bezier(0.25,0.46,0.45,0.94),
                      transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94);
        }

        .wk-animate .experience-hover-item {
          opacity: 1;
          transform: translateY(0);
        }

        .wk-animate .experience-hover-item:nth-child(1) { transition-delay: 0.10s; }
        .wk-animate .experience-hover-item:nth-child(2) { transition-delay: 0.22s; }
        .wk-animate .experience-hover-item:nth-child(3) { transition-delay: 0.34s; }

        .company-name {
          font-size: 24px;
          font-weight: 600;
          color: #e0e0e0;
          cursor: pointer;
          padding: 16px 24px;
          border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 280px;
        }

        .company-name:hover {
          color: #E76F51;
          background: rgba(231, 111, 81, 0.05);
        }

        /* Active state for company name - state driven */
        @media (min-width: 769px) {
          .company-name.is-active {
            color: #E76F51;
            background: rgba(231, 111, 81, 0.15);
            transform: scale(1.05);
          }

          /* Dim non-active company names when one is active */
          .experience-grid:has(.company-name.is-active) .company-name:not(.is-active) {
            color: #6a6a6a;
            background: transparent;
            transform: scale(1);
          }
        }

        /* ─── Card base — glassmorphism effect ─────────────── */
        .experience-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 20px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          height: auto;
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
          transition: border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
          min-width: 380px;
          max-width: 420px;
        }

        /* Desktop: Absolute positioned cards */
        @media (min-width: 769px) {
          .experience-card {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), 
                        transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 100;
            bottom: 100%;
            margin-bottom: 24px;
            max-width: min(420px, calc(100vw - 48px));
            min-width: min(380px, calc(100vw - 48px));
          }

          /* Show card when parent has is-active class */
          .experience-hover-item.is-active .experience-card {
            opacity: 1;
            pointer-events: auto;
            transform: translateX(-50%) translateY(-8px);
          }

          .experience-card:hover {
            border-color: #E76F51;
            box-shadow: 0 12px 28px rgba(231,111,81,0.15);
            background: rgba(231, 111, 81, 0.08);
          }
          
          /* Ensure parent container can show absolute positioned children */
          .experience-hover-item {
            position: relative;
            isolation: isolate;
          }
        }

        /* Mobile: Grid cards */
        @media (max-width: 768px) {
          .experience-hover-item {
            position: static;
            opacity: 0;
            transform: translateX(-40px);
            transition: opacity 0.7s cubic-bezier(0.25,0.46,0.45,0.94),
                        transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94);
            display: flex;
            height: 100%;
          }

          .wk-animate .experience-hover-item {
            opacity: 1;
            transform: translateX(0);
          }

          .company-name {
            display: none;
          }

          .experience-card {
            position: static;
            opacity: 1;
            pointer-events: auto;
            transform: none;
            min-width: auto;
            max-width: none;
            width: 100%;
            display: flex;
            flex-direction: column;
          }

          .experience-card:hover {
            border-color: #E76F51;
            transform: translateY(-4px);
            box-shadow: 0 12px 28px rgba(231,111,81,0.15);
            background: rgba(231, 111, 81, 0.08);
          }

          .exp-description {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
          }
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
          width: 100%;
          margin-bottom: 80px;
          padding: 0 24px;
          position: relative;
          overflow: visible;
          background: transparent;
        }
        .experience-section > * {
          position: relative;
          z-index: 1;
        }
        .experience-content {
          max-width: 1250px;
          margin: 0 auto;
        }
        
        /* Desktop & Tablet: Horizontal layout with hover */
        @media (min-width: 769px) {
          .experience-grid {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 80px;
            margin-top: 80px;
            padding: 300px 24px 80px 24px; /* Added horizontal padding */
            position: relative;
            min-height: 120px;
          }
          
          .experience-section {
            margin-bottom: 120px;
          }
          
          .wk-header {
            margin-top: 80px;
          }
        }

        /* Mobile: Grid layout */
        @media (max-width: 768px) {
          .experience-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 16px;
            margin-top: 28px;
            grid-auto-rows: 1fr;
          }
        }
        .section-divider {
          height: 2px;
          background: linear-gradient(to right, transparent, #E76F51 20%, #E76F51 80%, transparent);
          box-shadow: 0 0 20px rgba(231, 111, 81, 0.5);
          margin: 60px 24px;
          position: relative;
          z-index: 2;
        }
        
        body.light-mode .section-divider {
          box-shadow: 0 0 15px rgba(231, 111, 81, 0.4);
        }

        /* ─── Light Mode ─────────────────────────────────────── */
        body.light-mode .work-title { color: #1a1a1a; }
        body.light-mode .work-sub   { color: #6c6c6c; }
        body.light-mode .company-name { color: #1a1a1a; }
        body.light-mode .company-name:hover { color: #E76F51; background: rgba(231,111,81,0.08); }
        
        /* Light mode company name active state */
        @media (min-width: 769px) {
          body.light-mode .company-name.is-active {
            color: #E76F51;
            background: rgba(231, 111, 81, 0.2);
            transform: scale(1.05);
          }

          body.light-mode .experience-grid:has(.company-name.is-active) .company-name:not(.is-active) {
            color: #b0b0b0;
          }
        }
        body.light-mode .experience-card {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-color: rgba(0, 0, 0, 0.15);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.10);
        }
        @media (min-width: 769px) {
          body.light-mode .experience-hover-item:hover .experience-card {
            border-color: #E76F51; 
            box-shadow: 0 12px 28px rgba(231,111,81,0.2);
            background: rgba(231, 111, 81, 0.12);
          }
        }
        @media (max-width: 768px) {
          body.light-mode .experience-card:hover {
            border-color: #E76F51; 
            box-shadow: 0 8px 20px rgba(231,111,81,0.1);
            background: rgba(231, 111, 81, 0.12);
          }
        }
        body.light-mode .exp-title   { color: #1a1a1a; }
        body.light-mode .exp-company { color: #E76F51; }
        body.light-mode .exp-period  { color: #8a8a8a; }
        body.light-mode .exp-description li { color: #5a5a5a; }
        body.light-mode .exp-tech-tag { background: #f0f0f0; color: #E76F51; border-color: #e0e0e0; }
        body.light-mode .exp-tech-tag:hover { background: #E76F51; color: white; }

        /* ─── Responsive ─────────────────────────────────────── */
        @media (max-width: 768px) {
          .experience-section { padding: 0 16px; margin-bottom: 48px; }
          .section-divider { margin: 40px 16px; }
          .experience-card { padding: 20px; }
          .wk-header { margin-bottom: 36px; margin-top: 48px; }
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
          .wk-header { margin-bottom: 28px; padding: 0; margin-top: 40px; }
          .work-badge { font-size: 11px; }
          .exp-title { font-size: 15px; }
          .exp-company { font-size: 13px; }
          .exp-period { font-size: 11px; }
          .exp-description li { font-size: 12.5px; }
          .exp-tech-tag { font-size: 10px; padding: 4px 9px; }
        }
        
        /* Ensure proper spacing between sections on all screens */
        .section-divider {
          position: relative;
          z-index: 1;
        }
      `}</style>

      <div id="work">
        <div
          className={`experience-section${isVisible ? " wk-animate" : ""}`}
          ref={sectionRef}
        >
          <div className="experience-content">
            <div className="wk-header">
              <h2 className="work-title">Work Experience</h2>
              <p className="work-sub">
                Professional journey across AI development, IT support, and technical roles
              </p>
            </div>

            <div className="experience-grid" key={animationKey}>
              {WORK_EXPERIENCE.map((exp, index) => {
                const isActive = isUserHovering 
                  ? hoveredCard === exp.id 
                  : index === activeCardIndex;
                
                return (
                  <div 
                    key={exp.id} 
                    className={`experience-hover-item${isActive ? ' is-active' : ''}`}
                    onMouseEnter={() => handleMouseEnter(exp.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className={`company-name${isActive ? ' is-active' : ''}`}>
                      {exp.company}
                    </div>
                    <div className="experience-card">
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
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="section-divider"></div>
      </div>
    </>
  );
}