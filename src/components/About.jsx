import { useState, useRef, useCallback, useLayoutEffect } from 'react';
import PP4 from '../assets/pp4.png';

// Simple notched border with TWO separate SVG paths for TWO buttons
function NotchedBorder({
  color,
  buttonRadius = 24,
  cornerRadius = 12,
  side = 'right'
}) {
  const ref = useRef(null);
  const [topPath, setTopPath] = useState('');
  const [bottomPath, setBottomPath] = useState('');

  const recalc = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const { width: w, height: h } = el.getBoundingClientRect();
    const r = cornerRadius;
    const gap = 2;
    const buttonGap = 12; // Gap between buttons
    const totalButtonHeight = (buttonRadius * 2) * 2 + buttonGap;

    if (side === 'right') {
      const cy = h / 2;
      const topY = cy - totalButtonHeight / 2 - gap;
      const bottomY = cy + totalButtonHeight / 2 + gap;

      // Top path - from top-left corner down to the first button
      setTopPath(`
        M ${r},0 
        H ${w - r} 
        A ${r},${r} 0 0 1 ${w},${r} 
        V ${topY}
      `);

      // Bottom path - from below the second button all the way around the rest
      setBottomPath(`
        M ${w},${bottomY} 
        V ${h - r} 
        A ${r},${r} 0 0 1 ${w - r},${h} 
        H ${r} 
        A ${r},${r} 0 0 1 0,${h - r} 
        V ${r} 
        A ${r},${r} 0 0 1 ${r},0 
        H ${w - r}
        A ${r},${r} 0 0 1 ${w},${r}
      `);
    } else {
      const cx = w / 2;
      const totalButtonWidth = (buttonRadius * 2) * 2 + buttonGap;
      const leftX = cx - totalButtonWidth / 2 - gap;
      const rightX = cx + totalButtonWidth / 2 + gap;

      setTopPath(`
        M ${r},0 
        H ${w - r} 
        A ${r},${r} 0 0 1 ${w},${r} 
        V ${h - r} 
        A ${r},${r} 0 0 1 ${w - r},${h} 
        H ${rightX}
      `);

      setBottomPath(`
        M ${leftX},${h} 
        H ${r} 
        A ${r},${r} 0 0 1 0,${h - r} 
        V ${r} 
        A ${r},${r} 0 0 1 ${r},0
      `);
    }
  }, [cornerRadius, buttonRadius, side]);

  useLayoutEffect(() => {
    recalc();
    const ro = new ResizeObserver(recalc);
    if (ref.current) ro.observe(ref.current);
    return () => ro.disconnect();
  }, [recalc]);

  return (
    <div ref={ref} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
        <path
          d={topPath}
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d={bottomPath}
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default function About({ theme }) {
  const [activeSection, setActiveSection] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 968);
  const [showTransition, setShowTransition] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const isDark = theme === 'dark';
  const descriptionContentRef = useRef(null);
  const cardRef = useRef(null);

  const handleSectionChange = (section) => {
    if (activeSection && activeSection !== section) {
      // Trigger transition line when switching between sections
      setShowTransition(true);
      setIsTyping(false);
      // Change content halfway through the animation (when lines are in the middle)
      setTimeout(() => {
        setActiveSection(section);
        setIsTyping(true);
        // Scroll to description content on mobile after content loads
        if (isMobile && descriptionContentRef.current) {
          setTimeout(() => {
            const navbarHeight = 80; 
            const elementPosition = descriptionContentRef.current.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }, 200);
        }
      }, 600);
      // Hide transition after animation completes
      setTimeout(() => setShowTransition(false), 1400);
    } else {
      if (activeSection === section) {
        // Collapsing - scroll to card
        setActiveSection('');
        setIsTyping(false);
        if (isMobile && cardRef.current) {
          setTimeout(() => {
            const navbarHeight = 80;
            const elementPosition = cardRef.current.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 20;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }, 100);
        }
      } else {
        // Expanding
        setActiveSection(section);
        setIsTyping(true);
        // Scroll to description content on mobile after content loads
        if (isMobile && descriptionContentRef.current) {
          setTimeout(() => {
            const navbarHeight = 80; 
            const elementPosition = descriptionContentRef.current.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }, 200);
        }
      }
    }
  };

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 968);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const borderColor = isDark ? '#404040' : '#d0d0d0';
  const notchSide = isMobile ? 'bottom' : 'right';

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap');

        .about-section {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 64px;
          box-sizing: border-box;
          font-family: 'Jost', sans-serif;
          transition: background-color 0.3s ease;
          position: relative;
          background: transparent;
        }

        .about-container {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
        }

        .about-title {
          font-size: clamp(36px, 4vw, 48px);
          font-weight: 700;
          margin-bottom: 48px;
          text-align: center;
          letter-spacing: -0.02em;
          transition: color 0.3s ease;
          color: #e0e0e0;
        }

        body.light-mode .about-title {
          color: #1a1a1a;
        }

        .section-divider {
          height: 2px;
          background: linear-gradient(
            to right,
            transparent,
            #E76F51 20%,
            #E76F51 80%,
            transparent
          );
          box-shadow: 0 0 20px rgba(231, 111, 81, 0.5);
          margin: 60px 0;
          position: relative;
          z-index: 2;
        }

        body.light-mode .section-divider {
          box-shadow: 0 0 15px rgba(231, 111, 81, 0.4);
        }

        .about-card {
          border-radius: 12px;
          padding: 24px;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: visible;
          display: flex;
          align-items: stretch;
          gap: 0;
          max-width: 450px;
          height: 548px;
          background: transparent;
        }

        .about-card.expanded {
          max-width: 100%;
          height: 548px;
        }

        .about-card-bg {
          position: absolute;
          inset: 0;
          border-radius: 12px;
          z-index: 0;
          transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          background: rgba(26, 26, 26, 0.4);
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          border: none;
          box-shadow: 
            0 8px 32px 0 rgba(0, 0, 0, 0.37),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.05);
        }

        .about-image-container {
          flex-shrink: 0;
          width: 400px;
          height: 500px;
          border-radius: 8px;
          overflow: hidden;
          border: 2px solid;
          transition: border-color 0.3s ease;
          position: relative;
          z-index: 2;
        }

        .about-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
          display: block;
        }

        /* Button container - two vertical buttons */
        .about-button-container {
          position: absolute;
          right: -24px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 10;
        }

        .about-button-container.mobile {
          right: 50%;
          top: auto;
          bottom: -24px;
          transform: translateX(50%);
          flex-direction: row;
          gap: 12px;
        }

        .about-nav-button {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 2px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          background: transparent;
          font-size: 13px;
          font-weight: 500;
          text-align: center;
          line-height: 1.2;
          padding: 4px;
          position: relative;
        }

        .about-nav-button svg {
          width: 20px;
          height: 20px;
          transition: fill 0.3s ease;
        }

        .about-nav-button .button-label {
          display: none;
        }

        /* Button ring indicator */
        .button-ring {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .button-ring.visible {
          opacity: 1;
        }

        .button-ring svg {
          width: 100%;
          height: 100%;
          display: block;
          position: absolute;
          top: 0;
          left: 0;
        }

        .button-ring circle {
          animation: rotate-ring 8s linear infinite;
        }

        @keyframes rotate-ring {
          from {
            transform: rotate(0deg);
            transform-origin: center;
          }
          to {
            transform: rotate(360deg);
            transform-origin: center;
          }
        }

        /* Arrow indicator outside button */
        .button-arrow-indicator {
          position: absolute;
          right: -68px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
          gap: 6px;
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .button-arrow-indicator.visible {
          opacity: 0.7;
        }

        .button-arrow-indicator.hidden {
          opacity: 0 !important;
        }

        .button-arrow-indicator svg {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
        }

        .button-arrow-indicator .click-text {
          display: flex;
          flex-direction: column;
          font-family: 'Jost', sans-serif;
          font-size: 9px;
          font-weight: 500;
          line-height: 1.2;
          white-space: nowrap;
          letter-spacing: 0.3px;
        }

        body.dark-mode .button-arrow-indicator .click-text {
          color: #a0a0a0;
        }

        body.light-mode .button-arrow-indicator .click-text {
          color: #6c6c6c;
        }

        /* Pulse animation for arrows */
        @keyframes pulse-arrow {
          0%, 100% {
            opacity: 0.5;
            transform: translateY(-50%) scale(1);
          }
          50% {
            opacity: 0.9;
            transform: translateY(-50%) scale(1.08);
          }
        }

        .button-arrow-indicator:not(.hidden) {
          animation: pulse-arrow 2s ease-in-out infinite;
        }

        /* Mobile styles */
        .button-arrow-indicator.mobile {
          right: auto;
          top: auto;
          bottom: -40px;
          left: 50%;
          transform: translateX(-50%);
          flex-direction: column;
          gap: 2px;
        }

        .button-arrow-indicator.mobile svg {
          transform: rotate(90deg);
        }

        .button-arrow-indicator.mobile .click-text {
          flex-direction: row;
          gap: 4px;
          font-size: 8px;
        }

        @keyframes pulse-arrow-mobile {
          0%, 100% {
            opacity: 0.5;
            transform: translateX(-50%) scale(1);
          }
          50% {
            opacity: 0.9;
            transform: translateX(-50%) scale(1.05);
          }
        }

        .button-arrow-indicator.mobile:not(.hidden) {
          animation: pulse-arrow-mobile 2s ease-in-out infinite;
        }

        /* Active state for buttons */
        .about-nav-button.active {
          border-color: #E76F51;
          background: rgba(231, 111, 81, 0.1);
        }

        .about-nav-button.active svg {
          fill: #E76F51;
        }

        .about-nav-button:hover {
          transform: scale(1.1);
          border-color: #E76F51;
        }

        .about-nav-button.active:hover {
          transform: scale(1.05);
        }

        .about-description {
          max-width: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-width 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 0.4s ease 0.1s,
                      padding 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 0;
          display: flex;
          align-items: center;
          position: relative;
          z-index: 2;
          flex: 1;
        }

        .about-description.expanded {
          max-width: 800px;
          opacity: 1;
          padding: 0 0 0 32px;
        }

        .about-description-content {
          padding: 32px;
          border-radius: 8px;
          border: 1px solid;
          transition: all 0.3s ease;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow-y: auto;
        }

        .about-description-content h3 {
          font-size: 24px;
          font-weight: 600;
          margin: 0 0 16px 0;
          transition: color 0.3s ease;
        }

        .about-description-content p {
          font-size: 16px;
          line-height: 1.8;
          margin: 0 0 16px 0;
          transition: color 0.3s ease;
        }

        .about-description-content p:last-child {
          margin-bottom: 0;
        }

        /* Transition line animation - wipe/reveal effect */
        .transition-line-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 100;
          overflow: hidden;
          border-radius: 8px;
          display: none;
        }

        .transition-line-overlay.active {
          display: block;
        }

        .transition-lines-container {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
        }

        .transition-line {
          position: relative;
          width: 100%;
          height: 2%;
          overflow: hidden;
        }

        .transition-line::before {
          content: '';
          position: absolute;
          left: -100%;
          top: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(231, 111, 81, 0.4) 15%,
            rgba(231, 111, 81, 0.9) 40%,
            #E76F51 50%,
            rgba(231, 111, 81, 0.9) 60%,
            rgba(231, 111, 81, 0.4) 85%,
            transparent 100%
          );
          box-shadow: 0 0 20px rgba(231, 111, 81, 0.8),
                      0 0 40px rgba(231, 111, 81, 0.4);
          animation: sweepRight 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        /* Stagger each line with different delays */
        .transition-line:nth-child(1)::before { animation-delay: 0s; }
        .transition-line:nth-child(2)::before { animation-delay: 0.04s; }
        .transition-line:nth-child(3)::before { animation-delay: 0.08s; }
        .transition-line:nth-child(4)::before { animation-delay: 0.12s; }
        .transition-line:nth-child(5)::before { animation-delay: 0.16s; }
        .transition-line:nth-child(6)::before { animation-delay: 0.2s; }
        .transition-line:nth-child(7)::before { animation-delay: 0.24s; }
        .transition-line:nth-child(8)::before { animation-delay: 0.28s; }
        .transition-line:nth-child(9)::before { animation-delay: 0.32s; }
        .transition-line:nth-child(10)::before { animation-delay: 0.36s; }
        .transition-line:nth-child(11)::before { animation-delay: 0.4s; }
        .transition-line:nth-child(12)::before { animation-delay: 0.44s; }
        .transition-line:nth-child(13)::before { animation-delay: 0.48s; }
        .transition-line:nth-child(14)::before { animation-delay: 0.52s; }
        .transition-line:nth-child(15)::before { animation-delay: 0.56s; }
        .transition-line:nth-child(16)::before { animation-delay: 0.6s; }
        .transition-line:nth-child(17)::before { animation-delay: 0.64s; }
        .transition-line:nth-child(18)::before { animation-delay: 0.68s; }
        .transition-line:nth-child(19)::before { animation-delay: 0.72s; }
        .transition-line:nth-child(20)::before { animation-delay: 0.76s; }

        @keyframes sweepRight {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        /* Content wipe effect */
        .about-description-content {
          position: relative;
          overflow: visible;
        }

        .about-description-content.wiping-out {
          animation: contentFadeOut 0.6s ease forwards;
        }

        .about-description-content.wiping-in {
          opacity: 0;
          animation: none;
        }

        .about-description-content.wiping-in > * {
          opacity: 0;
          animation: revealSlowly 1.5s ease forwards;
        }

        .about-description-content.wiping-in h3 {
          animation-delay: 0.6s;
        }

        .about-description-content.wiping-in p:nth-of-type(1),
        .about-description-content.wiping-in .education-item:nth-child(1) {
          animation-delay: 0.9s;
        }

        .about-description-content.wiping-in p:nth-of-type(2),
        .about-description-content.wiping-in .education-item:nth-child(2) {
          animation-delay: 1.2s;
        }

        .about-description-content.wiping-in p:nth-of-type(3),
        .about-description-content.wiping-in .education-item:nth-child(3) {
          animation-delay: 1.5s;
        }

        .about-description-content.wiping-in .education-item:nth-child(4) {
          animation-delay: 1.8s;
        }

        .about-description-content.wiping-in .about-skills-list {
          animation-delay: 2.1s;
        }

        @keyframes revealSlowly {
          0% {
            opacity: 0;
            transform: translateY(15px);
            filter: blur(5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes contentFadeOut {
          0% {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0);
          }
          100% {
            opacity: 0;
            transform: translateX(50px);
            filter: blur(5px);
          }
        }

        /* Education specific styles */
        .education-item {
          margin-bottom: 10px;
        }

        .education-item:last-child {
          margin-bottom: 0;
        }

        .education-item h4 {
          font-size: 18px;
          font-weight: 600;
          margin: 0 0 2px;
          transition: color 0.3s ease;
        }

        .education-item .institution {
          font-size: 15px;
          font-weight: 500;
          margin: 0 0 2px;
          transition: color 0.3s ease;
        }

        .education-item .year {
          font-size: 14px;
          opacity: 0.7;
          margin: 0 0 2px;
          transition: color 0.3s ease;
        }

        .education-item .description {
          font-size: 14px;
          line-height: 1.6;
          margin: 0;
          transition: color 0.3s ease;
        }

        .about-skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 24px;
        }

        .about-skill-badge {
          font-size: 13px;
          font-weight: 500;
          padding: 8px 16px;
          border: 1px solid;
          border-radius: 6px;
          transition: all 0.2s ease;
        }

        /* Dark mode styles */
        body.dark-mode .about-section {
          background: transparent;
        }

        body.dark-mode .about-title {
          color: #e0e0e0;
        }

        body.dark-mode .about-card-bg {
          background: rgba(26, 26, 26, 0.4);
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          border: none;
          box-shadow: 
            0 8px 32px 0 rgba(0, 0, 0, 0.37),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.05);
        }

        body.dark-mode .about-image-container {
          border-color: #404040;
        }

        body.dark-mode .about-nav-button {
          border-color: #404040;
          color: #a0a0a0;
        }

        body.dark-mode .about-nav-button svg {
          fill: #a0a0a0;
        }

        body.dark-mode .about-nav-button.active {
          border-color: #E76F51;
          background: rgba(231, 111, 81, 0.15);
        }

        body.dark-mode .about-nav-button.active svg {
          fill: #E76F51;
        }

        body.dark-mode .about-nav-button:hover {
          border-color: #E76F51;
          color: #E76F51;
        }

        body.dark-mode .about-nav-button:hover svg {
          fill: #E76F51;
        }

        body.dark-mode .about-description-content {
          border-color: #404040;
          background: rgba(20, 20, 20, 0.6);
        }

        body.dark-mode .about-description-content h3 {
          color: #E76F51;
        }

        body.dark-mode .about-description-content p {
          color: #c0c0c0;
        }

        body.dark-mode .education-item h4 {
          color: #E76F51;
        }

        body.dark-mode .education-item .institution {
          color: #c0c0c0;
        }

        body.dark-mode .education-item .year {
          color: #888;
        }

        body.dark-mode .education-item .description {
          color: #a0a0a0;
        }

        body.dark-mode .about-skill-badge {
          border-color: #404040;
          color: #a0a0a0;
          background: rgba(26, 26, 26, 0.5);
        }

        body.dark-mode .about-skill-badge:hover {
          border-color: #E76F51;
          color: #E76F51;
        }

        /* Light mode styles */
        body.light-mode .about-section {
          background: transparent;
        }

        body.light-mode .about-title {
          color: #1a1a1a;
        }

        body.light-mode .about-card-bg {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          border: none;
          box-shadow: 
            0 8px 32px 0 rgba(31, 38, 135, 0.10),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.5);
        }

        body.light-mode .about-image-container {
          border-color: #d0d0d0;
        }

        body.light-mode .about-nav-button {
          border-color: #d0d0d0;
          color: #6c6c6c;
        }

        body.light-mode .about-nav-button svg {
          fill: #6c6c6c;
        }

        body.light-mode .about-nav-button.active {
          border-color: #E76F51;
          background: rgba(231, 111, 81, 0.1);
        }

        body.light-mode .about-nav-button.active svg {
          fill: #E76F51;
        }

        body.light-mode .about-nav-button:hover {
          border-color: #E76F51;
          color: #E76F51;
        }

        body.light-mode .about-nav-button:hover svg {
          fill: #E76F51;
        }

        body.light-mode .about-description-content {
          border-color: #d0d0d0;
          background: rgba(255, 255, 255, 0.8);
        }

        body.light-mode .about-description-content h3 {
          color: #E76F51;
        }

        body.light-mode .about-description-content p {
          color: #4a4a4a;
        }

        body.light-mode .education-item h4 {
          color: #E76F51;
        }

        body.light-mode .education-item .institution {
          color: #4a4a4a;
        }

        body.light-mode .education-item .year {
          color: #888;
        }

        body.light-mode .education-item .description {
          color: #5a5a5a;
        }

        body.light-mode .about-skill-badge {
          border-color: #d0d0d0;
          color: #5a5a5a;
          background: rgba(255, 255, 255, 0.5);
        }

        body.light-mode .about-skill-badge:hover {
          border-color: #E76F51;
          color: #E76F51;
        }

        /* Responsive styles */
        @media (max-width: 968px) {
          .about-section {
            padding: 60px 24px;
          }

          .section-divider {
            margin: 40px 0;
          }

          .about-card {
            flex-direction: column;
            max-width: 100%;
            align-items: center;
            height: auto;
            padding: 24px;
          }

          .about-card.expanded {
            max-width: 100%;
            height: auto;
          }

          .about-image-container {
            width: 200px;
            height: 200px;
            margin-bottom: 16px;
          }

          .about-card.expanded .about-image-container {
            width: 250px;
            height: 300px;
          }

          .about-button-container.mobile {
            position: absolute;
            right: 50%;
            top: auto;
            bottom: -24px;
            transform: translateX(50%);
            flex-direction: row;
            gap: 12px;
          }

          .about-nav-button {
            width: 48px;
            height: 48px;
            border-radius: 50%;
          }

          .about-nav-button svg {
            display: flex;
          }

          .about-nav-button .button-label {
            display: none;
          }

          .button-arrow-indicator {
            display: flex;
          }

          .about-description {
            max-width: 100%;
            max-height: 0;
            padding: 0;
            width: 100%;
          }

          .about-description.expanded {
            max-width: 100%;
            max-height: 1000px;
            padding: 16px 0 0 0;
            width: 100%;
          }

          .about-description-content {
            padding: 20px;
            width: 100%;
            height: auto;
          }

          .about-description-content h3 {
            font-size: 20px;
          }

          .about-description-content p {
            font-size: 15px;
          }

          .education-item h4 {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .about-image-container {
            width: 160px;
            height: 160px;
          }

          .section-divider {
            margin: 32px 0;
          }

          .about-card.expanded .about-image-container {
            width: 200px;
            height: 250px;
          }

          .about-title {
            font-size: 32px;
            margin-bottom: 32px;
          }

          .about-nav-button {
            width: 44px;
            height: 44px;
          }
          
          .about-nav-button svg {
            width: 18px;
            height: 18px;
          }

          .button-ring {
            inset: -3px;
            display: none;
          }

          .button-ring svg circle {
            stroke-width: 1.5;
          }

          .about-description-content {
            padding: 16px;
          }
        }
      `}</style>

      <section className="about-section" id="about">
        <div className="about-container">
          <h2 className="about-title">About Me</h2>

          <div className={`about-card ${activeSection ? 'expanded' : ''}`} ref={cardRef}>
            <div className="about-card-bg"></div>

            <NotchedBorder
              color={borderColor}
              side={notchSide}
              buttonRadius={isMobile ? 20 : 24}
              cornerRadius={12}
            />

            <div className="about-image-container">
              <img src={PP4} alt="Prajin Singh" />
            </div>

            {/* Button Container */}
            <div className={`about-button-container ${isMobile ? 'mobile' : ''}`}>
              <button
                className={`about-nav-button ${activeSection === 'description' ? 'active' : ''}`}
                onClick={() => handleSectionChange('description')}
                aria-label="About description"
              >
                {/* Button ring indicator */}
                <div className={`button-ring ${!activeSection ? 'visible' : ''}`}>
                  <svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                    <circle
                      cx="28"
                      cy="28"
                      r="26"
                      fill="none"
                      stroke="#E76F51"
                      strokeWidth="2"
                      strokeDasharray="126 8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Arrow indicator outside button */}
                <div className={`button-arrow-indicator ${isMobile ? 'mobile' : ''} ${!activeSection ? 'visible' : 'hidden'}`}>
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 16 4 L 8 12 L 16 20" stroke="#E76F51" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="click-text">
                    <span>Click</span>
                    <span>Here</span>
                  </div>
                </div>

                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h10v2H4v-2z" />
                </svg>
                <span className="button-label">About</span>
              </button>

              <button
                className={`about-nav-button ${activeSection === 'education' ? 'active' : ''}`}
                onClick={() => handleSectionChange('education')}
                aria-label="Education"
              >
                {/* Button ring indicator */}
                <div className={`button-ring ${!activeSection ? 'visible' : ''}`}>
                  <svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                    <circle
                      cx="28"
                      cy="28"
                      r="26"
                      fill="none"
                      stroke="#E76F51"
                      strokeWidth="2"
                      strokeDasharray="126 8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Arrow indicator outside button */}
                <div className={`button-arrow-indicator ${isMobile ? 'mobile' : ''} ${!activeSection ? 'visible' : 'hidden'}`}>
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 16 4 L 8 12 L 16 20" stroke="#E76F51" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="click-text">
                    <span>Click</span>
                    <span>Here</span>
                  </div>
                </div>

                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                </svg>
                <span className="button-label">Education</span>
              </button>
            </div>

            <div className={`about-description ${activeSection ? 'expanded' : ''}`}>
              {/* Transition Line Overlay - wipe effect with multiple lines */}
              {showTransition && (
                <div className="transition-line-overlay active">
                  <div className="transition-lines-container">
                    <div className="transition-line"></div>
                    <div className="transition-line"></div>
                    <div className="transition-line"></div>
                    <div className="transition-line"></div>
                    <div className="transition-line"></div>
                    <div className="transition-line"></div>
                    <div className="transition-line"></div>
                    <div className="transition-line"></div>
                    <div className="transition-line"></div>
                    <div className="transition-line"></div>
                    <div className="transition-line"></div>
                    <div className="transition-line"></div>
                    <div className="transition-line"></div>
                    <div className="transition-line"></div>
                    <div className="transition-line"></div>
                    <div className="transition-line"></div>
                    <div className="transition-line"></div>
                    <div className="transition-line"></div>
                    <div className="transition-line"></div>
                    <div className="transition-line"></div>
                  </div>
                </div>
              )}

              <div className={`about-description-content ${showTransition ? 'wiping-in' : ''} ${isTyping ? 'typing-text' : ''}`} ref={descriptionContentRef}>
                {activeSection === 'description' && (
                  <>
                    <h3>Hello! I'm Prajin Singh</h3>
                    <p>
                      I'm a passionate AI Developer and Full-Stack Web Developer with a strong
                      foundation in building intelligent and user-focused applications. I graduated
                      with a <strong>First Class Bachelor's degree (Hons) in Computer Science</strong>,
                      where I developed expertise in software engineering, machine learning, and
                      modern web technologies.
                    </p>

                    <p>
                      Over the past few years, I've gained hands-on industry experience working as
                      an <strong>IT Assistant</strong> and later as a <strong>Junior AI Developer</strong>,
                      where I contributed to AI research, implemented AI-powered solutions, and
                      developed scalable web applications.
                    </p>

                    <p>
                      Beyond my professional work, I'm constantly exploring emerging AI tools,
                      building personal projects, and experimenting with new technologies to
                      expand my skills. Whether it's creating intelligent applications, designing
                      intuitive user experiences, or learning the latest advancements in AI, I'm
                      always motivated by curiosity and continuous improvement.
                    </p>
                  </>
                )}

                {activeSection === 'education' && (
                  <>
                    <h3>Education</h3>

                    <div className="education-item">
                      <h4>Bachelor of Science (Hons) in Computer Science</h4>
                      <div className="institution">Herald College Kathmandu (University of Wolverhampton)</div>
                      <div className="year">2022 - 2025</div>
                      <div className="description">
                        Graduated with <strong>First Class Honours</strong>, with a focus on AI, machine learning, software engineering, and modern web development.
                      </div>
                    </div>

                    <div className="education-item">
                      <h4>Higher Secondary Education (+2 Management)</h4>
                      <div className="institution">Uniglobe SS/College</div>
                      <div className="year">2017 - 2019</div>
                      <div className="description">
                        Completed higher secondary education with a GPA of <strong>2.91</strong>,
                        building a solid foundation in mathematics, physics, and computer science that
                        sparked my interest in technology.
                      </div>
                    </div>

                    <div className="education-item">
                      <h4>School Education (SEE)</h4>
                      <div className="institution">Dreamland Public High School</div>
                      <div className="year">2017</div>
                      <div className="description">
                        Graduated with a GPA of <strong>3.55</strong>, developing strong analytical
                        and problem-solving skills that laid the groundwork for my academic journey.
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-divider"></div>
    </>
  );
}