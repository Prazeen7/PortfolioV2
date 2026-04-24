import { useEffect, useState, useRef } from "react";
import PP from "../assets/pp4.png";

const TITLES = ["AI Developer", "Web Developer", "Data Scientist"];

const DigitReel = ({ digit, prevDigit }) => {
  const ribbonRef = useRef(null);

  useEffect(() => {
    const ribbon = ribbonRef.current;
    if (!ribbon) return;

    const indexOf = (d) => 9 - d;
    const isWrapping = prevDigit > digit;
    const targetIndex = isWrapping ? 10 : indexOf(digit);

    ribbon.style.transition = "transform 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1)";
    ribbon.style.transform = `translateY(-${(targetIndex / 11) * 100}%)`;

    if (isWrapping) {
      const onEnd = () => {
        ribbon.style.transition = "none";
        ribbon.style.transform = `translateY(-${(indexOf(digit) / 11) * 100}%)`;
        ribbon.removeEventListener("transitionend", onEnd);
      };
      ribbon.addEventListener("transitionend", onEnd);
      return () => ribbon.removeEventListener("transitionend", onEnd);
    }
  }, [digit, prevDigit]);

  return (
    <div className="odometer-digit">
      <div className="odometer-digit-inner">
        <div
          className="odometer-ribbon"
          ref={ribbonRef}
          style={{ transform: `translateY(-${((9 - digit) / 11) * 100}%)` }}
        >
          {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 9].map((num, i) => (
            <div key={i} className="odometer-value">{num}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

const RollingNumber = ({ target, suffix = "+", duration = 3000 }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const prevNumberRef = useRef(0);
  const animationRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    startTimeRef.current = null;
    const startValue = 0;

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const newValue = Math.floor(startValue + (target - startValue) * easeOut);

      setCurrentNumber((prev) => {
        prevNumberRef.current = prev;
        return newValue;
      });

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCurrentNumber((prev) => {
          prevNumberRef.current = prev;
          return target;
        });
        animationRef.current = null;
      }
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [target, duration]);

  const getDigits = (num) => num.toString().split("").map(Number);
  const currentDigits = getDigits(currentNumber);
  const prevDigits = getDigits(prevNumberRef.current);

  while (prevDigits.length < currentDigits.length) prevDigits.unshift(0);
  while (prevDigits.length > currentDigits.length) prevDigits.shift();

  return (
    <span className="odometer-container">
      {currentDigits.map((digit, i) => (
        <DigitReel key={i} digit={digit} prevDigit={prevDigits[i] ?? 0} />
      ))}
      <span className="odometer-suffix">{suffix}</span>
    </span>
  );
};

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
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }

        @keyframes spin-border {
          0%   { --ring-angle: 0deg; }
          100% { --ring-angle: 360deg; }
        }

        @keyframes ring-pulse {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50%       { opacity: 0.70; transform: scale(1.012); }
        }

        @property --ring-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }

        /* Base styles that work for both themes */
        .odometer-container {
          display: inline-flex;
          align-items: center;
          gap: 0;
          font-family: 'Jost', monospace;
          letter-spacing: 0;
        }

        .odometer-digit {
          position: relative;
          display: inline-block;
          min-width: 0.65em;
          height: 1.2em;
          overflow: hidden;
        }

        .odometer-digit-inner {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .odometer-ribbon {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: calc(11 * 1.2em);
          will-change: transform;
        }

        .odometer-value {
          height: 1.2em;
          line-height: 1.2em;
          text-align: center;
          font-weight: 700;
          font-size: 22px;
          font-family: 'Jost', monospace;
        }

        .odometer-suffix {
          font-weight: 600;
          font-size: 22px;
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
          transition: background-color 0.3s ease;
        }

        .hm-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;
          z-index: 2;
          max-width: 520px;
        }

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
          line-height: 1.4;
          margin: 0;
          transition: color 0.3s ease;
        }

        .hm-greeting span {
          display: block;
          font-size: 17px;
          font-weight: 500;
          margin-top: 2px;
          transition: color 0.3s ease;
        }

        .hm-title {
          font-size: clamp(42px, 5vw, 64px);
          font-weight: 700;
          margin: 0;
          line-height: 1.1;
          letter-spacing: -0.02em;
          min-height: 1.2em;
          display: flex;
          align-items: center;
          transition: color 0.3s ease;
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
          border: 1px solid;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 14px;
          text-decoration: none;
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
          border: 1px solid;
          border-radius: 6px;
          margin-top: 4px;
          position: relative;
          transition: border-color 0.3s ease;
        }

        .hm-skills-wrap::before {
          content: "TECH STACK";
          position: absolute;
          top: -9px;
          left: 14px;
          padding: 0 6px;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.18em;
          font-family: 'Jost', sans-serif;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .hm-skill-tag {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.08em;
          padding: 5px 11px;
          border: 1px solid;
          border-radius: 3px;
          background: transparent;
          transition: all 0.2s ease;
          cursor: default;
        }

        .hm-stats {
          display: flex;
          gap: 0;
          margin-top: 16px;
        }

        .hm-stat {
          padding: 16px 32px 16px 0;
          border-right: 1px solid;
          margin-right: 32px;
          transition: border-color 0.3s ease;
        }

        .hm-stat:last-child {
          border-right: none;
          margin-right: 0;
        }

        .hm-stat-num {
          font-size: 22px;
          font-weight: 700;
          letter-spacing: 0;
          line-height: 1;
          font-family: 'Jost', monospace;
        }

        .hm-stat-label {
          font-size: 12px;
          font-weight: 400;
          margin-top: 5px;
          letter-spacing: 0.06em;
          transition: color 0.3s ease;
        }

        .hm-right {
          position: relative;
          z-index: 2;
          flex-shrink: 0;
          opacity: 0;
          animation: fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.3s forwards;
        }

        .hm-avatar-wrap {
          width: 300px;
          height: 400px;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: background-color 0.3s ease;
        }

        /* ── Animated avatar rings ── */
        .hm-avatar-ring {
          position: absolute;
          inset: -10px;
          border-radius: 24px;
          pointer-events: none;
          padding: 2px;
          /* conic-gradient mask trick for a spinning border */
          background: conic-gradient(
            from var(--ring-angle),
            #E76F51 0deg,
            #F4A261 60deg,
            transparent 120deg,
            transparent 240deg,
            #E76F51 300deg,
            #E76F51 360deg
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          animation:
            fadeIn 1s ease 0.7s forwards,
            spin-border 3s linear 1.7s infinite;
        }

        .hm-avatar-ring-2 {
          position: absolute;
          inset: -24px;
          border-radius: 32px;
          pointer-events: none;
          padding: 1.5px;
          background: conic-gradient(
            from calc(var(--ring-angle) + 180deg),
            rgba(231,111,81,0.55) 0deg,
            rgba(244,162,97,0.55) 60deg,
            transparent 130deg,
            transparent 230deg,
            rgba(231,111,81,0.55) 300deg,
            rgba(231,111,81,0.55) 360deg
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          animation:
            fadeIn 1s ease 0.9s forwards,
            spin-border 5s linear 1.9s infinite reverse,
            ring-pulse 4s ease-in-out 2s infinite;
        }

        .section-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, #E76F51, transparent);
          margin: 0;
          padding: 0;
          line-height: 0;
          transition: background 0.3s ease;
          background-color: transparent;
        }

        /* Dark mode styles */
        body.dark-mode {
          background-color: #0a0a0a;
        }

        body.dark-mode .hm-section {
          background: #0a0a0a;
        }

        body.dark-mode .hm-greeting {
          color: #a0a0a0;
        }

        body.dark-mode .hm-greeting span {
          color: #e0e0e0;
        }

        body.dark-mode .hm-title {
          color: #E76F51;
        }

        body.dark-mode .hm-social-btn {
          border-color: #404040;
          color: #a0a0a0;
        }

        body.dark-mode .hm-social-btn:hover {
          border-color: #E76F51;
          color: #E76F51;
        }

        body.dark-mode .hm-skills-wrap {
          border-color: #404040;
        }

        body.dark-mode .hm-skills-wrap::before {
          background: #0a0a0a;
          color: #E76F51;
        }

        body.dark-mode .hm-skill-tag {
          border-color: #404040;
          color: #c0c0c0;
        }

        body.dark-mode .hm-skill-tag:hover {
          border-color: #E76F51;
          color: #E76F51;
          background: #1a1a1a;
        }

        body.dark-mode .hm-stat {
          border-right-color: #404040;
        }

        body.dark-mode .hm-stat-num .odometer-value {
          color: #e0e0e0;
        }

        body.dark-mode .odometer-suffix {
          color: #e0e0e0;
        }

        body.dark-mode .hm-stat-label {
          color: #a0a0a0;
        }

        body.dark-mode .hm-avatar-wrap {
          background: #1a1a1a;
        }

        /* rings are gradient-based — no border-color override needed */
        body.dark-mode .hm-avatar-ring,
        body.dark-mode .hm-avatar-ring-2 {
          filter: brightness(1.1);
        }

        body.dark-mode .section-divider {
          background: linear-gradient(to right, transparent, #E76F51, transparent);
        }

        /* Light mode styles */
        body.light-mode {
          background-color: #ffffff;
        }

        body.light-mode .hm-section {
          background: #ffffff;
        }

        body.light-mode .hm-greeting {
          color: #6c6c6c;
        }

        body.light-mode .hm-greeting span {
          color: #2c2c2c;
        }

        body.light-mode .hm-title {
          color: #E76F51;
        }

        body.light-mode .hm-social-btn {
          border-color: #d0d0d0;
          color: #6c6c6c;
        }

        body.light-mode .hm-social-btn:hover {
          border-color: #E76F51;
          color: #E76F51;
        }

        body.light-mode .hm-skills-wrap {
          border-color: #d0d0d0;
        }

        body.light-mode .hm-skills-wrap::before {
          background: #ffffff;
          color: #E76F51;
        }

        body.light-mode .hm-skill-tag {
          border-color: #d0d0d0;
          color: #5a5a5a;
        }

        body.light-mode .hm-skill-tag:hover {
          border-color: #E76F51;
          color: #E76F51;
          background: #f5f5f5;
        }

        body.light-mode .hm-stat {
          border-right-color: #d0d0d0;
        }

        body.light-mode .hm-stat-num .odometer-value {
          color: #2c2c2c;
        }

        body.light-mode .odometer-suffix {
          color: #2c2c2c;
        }

        body.light-mode .hm-stat-label {
          color: #6c6c6c;
        }

        body.light-mode .hm-avatar-wrap {
          background: #f0f0f0;
        }

        body.light-mode .hm-avatar-ring,
        body.light-mode .hm-avatar-ring-2 {
          filter: brightness(0.9);
        }

        body.light-mode .section-divider {
          background: linear-gradient(to right, transparent, #E76F51, transparent);
          background-color: transparent;
        }

        @media (max-width: 768px) {
          .hm-section {
            flex-direction: column-reverse;
            padding: 80px 24px;
            gap: 40px;
            min-height: auto;
          }
          .hm-avatar-wrap {
            width: 200px;
            height: 267px;
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
            <a href="https://www.instagram.com/przns7/" className="hm-social-btn" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="https://np.linkedin.com/in/prajinsingh" className="hm-social-btn" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="https://github.com/Prazeen7" className="hm-social-btn" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="mailto:prajin.singh9@gmail.com" className="hm-social-btn" aria-label="Email" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>

          <div className="hm-skills-wrap">
            {["React", "Node.js", "Python", "ML / DL", "SQL", "JavaScript", "Figma", "Unity", "MERN", "Java", "C/C++/C#"].map((skill) => (
              <span key={skill} className="hm-skill-tag">{skill}</span>
            ))}
          </div>

          <div className="hm-stats">
            <div className="hm-stat">
              <div className="hm-stat-num">
                <RollingNumber target={1} suffix="+" duration={3000} />
              </div>
              <div className="hm-stat-label">Experiences</div>
            </div>
            <div className="hm-stat">
              <div className="hm-stat-num">
                <RollingNumber target={20} suffix="+" duration={3000} />
              </div>
              <div className="hm-stat-label">Project done</div>
            </div>
            <div className="hm-stat">
              <div className="hm-stat-num">
                <RollingNumber target={15} suffix="+" duration={3000} />
              </div>
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
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center",  }}
            />
          </div>
        </div>
      </section>
      <div className="section-divider"></div>
    </>
  );
}