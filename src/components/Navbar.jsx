import { useState, useEffect } from "react";
import ResumePDF from "../assets/Resume.pdf";

const navLinks = [
  { label: "HOME", href: "home" },
  { label: "WORK", href: "work" },
  { label: "PROJECTS", href: "projects" },
  { label: "CONTACT", href: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("HOME");
  const [isScrolled, setIsScrolled] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(80);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const getNavbarHeight = () => {
    if (typeof window !== 'undefined') {
      const navbar = document.querySelector('.nb-nav');
      return navbar ? navbar.offsetHeight : 80;
    }
    return 80;
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const currentNavbarHeight = getNavbarHeight();
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - currentNavbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const updateNavbarHeight = () => {
      setNavbarHeight(getNavbarHeight());
    };

    updateNavbarHeight();
    window.addEventListener('resize', updateNavbarHeight);
    
    return () => window.removeEventListener('resize', updateNavbarHeight);
  }, [isScrolled]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const currentNavbarHeight = getNavbarHeight();
      const sections = navLinks.map(link => ({
        id: link.href,
        element: document.getElementById(link.href)
      }));

      let currentSection = "HOME";
      
      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= currentNavbarHeight + 50 && rect.bottom >= currentNavbarHeight) {
            currentSection = section.id.toUpperCase();
            break;
          }
        }
      }
      
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        currentSection = "CONTACT";
      }
      
      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500&display=swap');

        /* Dark Mode Variables */
        body.dark-mode {
          --bg-primary: #000000;
          --bg-secondary: rgba(0, 0, 0, 0.85);
          --text-primary: #8a8278;
          --text-hover: #E76F51;
          --text-scrolled: #d4cdc4;
          --line-color: #E76F51;
          --toggle-bg: #2c2c2c;
          --toggle-thumb: #E76F51;
        }

        /* Light Mode Variables */
        body.light-mode {
          --bg-primary: #ffffff;
          --bg-secondary: rgba(255, 255, 255, 0.95);
          --text-primary: #5a5248;
          --text-hover: #E76F51;
          --text-scrolled: #2c2c2c;
          --line-color: #E76F51;
          --toggle-bg: #e0e0e0;
          --toggle-thumb: #E76F51;
        }

        /* Base body styles */
        body {
          background-color: var(--bg-primary);
          transition: background-color 0.3s ease, color 0.3s ease;
          margin: 0;
          font-family: 'Jost', sans-serif;
        }

        .nb-nav {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          padding: 28px 40px;
          width: 100vw;
          position: fixed;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          box-sizing: border-box;
          background: transparent;
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .nb-nav.nb-scrolled {
          background: var(--bg-secondary);
          backdrop-filter: blur(8px);
          padding: 20px 40px;
        }

        /* Left side wrapper */
        .left-side {
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        /* Left line with gap before nav links */
        .left-line {
          flex: 1;
          height: 1px;
          background: var(--line-color);
          transition: opacity 0.3s ease;
          margin-right: 40px;
        }

        /* Center section with nav links */
        .center-section {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .nb-links {
          display: flex;
          align-items: center;
          gap: 36px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nb-item {
          position: relative;
        }

        .nb-link {
          font-family: 'Jost', sans-serif;
          font-size: 11.5px;
          font-weight: 400;
          letter-spacing: 0.18em;
          color: var(--text-primary);
          text-decoration: none;
          text-transform: uppercase;
          transition: all 0.25s ease;
          padding-bottom: 3px;
          cursor: pointer;
          white-space: nowrap;
          display: block;
          background: none;
          border: none;
          user-select: none;
        }

        .nb-scrolled .nb-link {
          color: var(--text-scrolled);
        }

        .nb-link:hover,
        .nb-link.nb-active {
          color: var(--text-hover);
        }

        .nb-link.nb-active {
          font-weight: 500;
        }

        .nb-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 1px;
          background: var(--text-hover);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .nb-link.nb-active::after,
        .nb-link:hover::after {
          transform: scaleX(1);
        }

        /* Right side wrapper */
        .right-side {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        /* Right side - line and toggle */
        .right-line {
          flex: 1;
          height: 1px;
          background: var(--line-color);
          transition: opacity 0.3s ease;
          margin-left: 40px;
        }

        /* Theme Toggle Switch */
        .theme-toggle {
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-left: 40px;
        }

        .toggle-switch {
          position: relative;
          display: inline-block;
          width: 50px;
          height: 24px;
        }

        .toggle-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .toggle-slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--toggle-bg);
          transition: 0.4s;
          border-radius: 34px;
        }

        .toggle-slider:before {
          position: absolute;
          content: "";
          height: 18px;
          width: 18px;
          left: 3px;
          bottom: 3px;
          background-color: var(--toggle-thumb);
          transition: 0.4s;
          border-radius: 50%;
        }

        input:checked + .toggle-slider:before {
          transform: translateX(26px);
        }

        /* Sun and Moon Icons */
        .toggle-icons {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 0 6px;
          box-sizing: border-box;
          pointer-events: none;
        }

        .toggle-icons svg {
          width: 12px;
          height: 12px;
          opacity: 0.7;
        }

        .sun-icon {
          color: #ffd700;
        }

        .moon-icon {
          color: #8a8278;
        }

        .nb-scrolled .left-line,
        .nb-scrolled .right-line {
          opacity: 0.6;
        }


        /* Responsive adjustments */
        @media (max-width: 768px) {
          .nb-nav {
            padding: 20px 20px;
          }
          
          .nb-scrolled {
            padding: 15px 20px;
          }
          
          .left-line {
            margin-right: 16px;
          }
          
          .right-line {
            margin-left: 16px;
          }
          
          .theme-toggle {
            margin-left: 12px;
          }
          
          .nb-links {
            gap: 20px;
          }
          
          .nb-link {
            font-size: 10px;
            letter-spacing: 0.12em;
          }

          .toggle-switch {
            width: 45px;
            height: 22px;
          }

          .toggle-slider:before {
            height: 16px;
            width: 16px;
          }

          input:checked + .toggle-slider:before {
            transform: translateX(23px);
          }

          .toggle-icons svg {
            width: 10px;
            height: 10px;
          }

          .toggle-icons {
            padding: 0 5px;
          }
        }

        @media (max-width: 480px) {
          .nb-nav {
            padding: 16px 12px;
          }
          
          .nb-scrolled {
            padding: 12px 12px;
          }
          
          .left-line {
            margin-right: 12px;
          }
          
          .right-line {
            margin-left: 12px;
          }
          
          .theme-toggle {
            margin-left: 10px;
          }
          
          .nb-links {
            gap: 14px;
          }
          
          .nb-link {
            font-size: 9px;
            letter-spacing: 0.1em;
          }

          .toggle-switch {
            width: 40px;
            height: 20px;
          }

          .toggle-slider:before {
            height: 14px;
            width: 14px;
          }

          input:checked + .toggle-slider:before {
            transform: translateX(20px);
          }

          .toggle-icons svg {
            width: 9px;
            height: 9px;
          }

          .toggle-icons {
            padding: 0 4px;
          }
        }

        :root {
          --navbar-height: 80px;
        }
        
        #home, #work, #contact {
          scroll-margin-top: var(--navbar-height);
        }

        @media (max-width: 768px) {
          :root {
            --navbar-height: 70px;
          }
        }

        @media (max-width: 480px) {
          :root {
            --navbar-height: 60px;
          }
        }

        .navbar-spacer {
          height: var(--navbar-height);
          width: 100%;
        }
      `}</style>

      <nav className={`nb-nav${isScrolled ? " nb-scrolled" : ""}`}>
        <div className="left-side">
          <div className="left-line" />
        </div>
        <div className="center-section">
          <ul className="nb-links">
            {navLinks.map(({ label, href }) => (
              <li key={label} className="nb-item">
                <button
                  onClick={() => {
                    scrollToSection(href);
                    setActive(label);
                  }}
                  className={`nb-link${active === label ? " nb-active" : ""}`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="right-side">
          <div className="right-line" />
          <div className="theme-toggle">
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={toggleTheme}
                aria-label="Toggle dark/light mode"
              />
              <span className="toggle-slider">
                <div className="toggle-icons">
                  <svg className="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                  <svg className="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                </div>
              </span>
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}