import { useState, useEffect } from "react";

const navLinks = [
  { label: "HOME", href: "home" },
  { label: "WORK", href: "work" },
  { label: "CONTACT", href: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("HOME");
  const [isScrolled, setIsScrolled] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(80); // Dynamic navbar height

  // Function to get current navbar height based on screen size and scroll state
  const getNavbarHeight = () => {
    if (typeof window !== 'undefined') {
      const navbar = document.querySelector('.nb-nav');
      return navbar ? navbar.offsetHeight : 80;
    }
    return 80;
  };

  // Function to handle smooth scrolling with dynamic navbar height
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

  // Update navbar height on resize and scroll state change
  useEffect(() => {
    const updateNavbarHeight = () => {
      setNavbarHeight(getNavbarHeight());
    };

    updateNavbarHeight();
    window.addEventListener('resize', updateNavbarHeight);
    
    return () => window.removeEventListener('resize', updateNavbarHeight);
  }, [isScrolled]); // Re-run when scroll state changes

  // Handle scroll events for background and active state
  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled more than 50px
      setIsScrolled(window.scrollY > 50);

      const currentNavbarHeight = getNavbarHeight();
      const sections = navLinks.map(link => ({
        id: link.href,
        element: document.getElementById(link.href)
      }));

      // Find which section is currently in view
      let currentSection = "HOME";
      
      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          // Check if section is in viewport with dynamic navbar height
          if (rect.top <= currentNavbarHeight + 50 && rect.bottom >= currentNavbarHeight) {
            currentSection = section.id.toUpperCase();
            break;
          }
        }
      }
      
      // Check if at the bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        currentSection = "CONTACT";
      }
      
      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500&display=swap');

        .nb-nav {
          display: flex;
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

        /* Scrolled state - transparent black background */
        .nb-nav.nb-scrolled {
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(8px);
          padding: 20px 40px;
        }

        .nb-line {
          flex: 1;
          height: 1px;
          background: #E76F51;
          transition: opacity 0.3s ease;
        }

        /* Adjust line opacity when scrolled */
        .nb-scrolled .nb-line {
          opacity: 0.6;
        }

        .nb-links {
          display: flex;
          align-items: center;
          gap: 36px;
          list-style: none;
          margin: 0;
          padding: 0 40px;
        }

        .nb-item {
          position: relative;
        }

        .nb-link {
          font-family: 'Jost', sans-serif;
          font-size: 11.5px;
          font-weight: 400;
          letter-spacing: 0.18em;
          color: #8a8278;
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

        /* Lighten text color when scrolled */
        .nb-scrolled .nb-link {
          color: #d4cdc4;
        }

        .nb-link:hover,
        .nb-link.nb-active {
          color: #E76F51;
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
          background: #E76F51;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .nb-link.nb-active::after,
        .nb-link:hover::after {
          transform: scaleX(1);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .nb-nav {
            padding: 20px 20px;
          }
          
          .nb-scrolled {
            padding: 15px 20px;
          }
          
          .nb-links {
            gap: 24px;
            padding: 0 20px;
          }
          
          .nb-link {
            font-size: 10px;
            letter-spacing: 0.12em;
          }
        }

        @media (max-width: 480px) {
          .nb-nav {
            padding: 16px 16px;
          }
          
          .nb-scrolled {
            padding: 12px 16px;
          }
          
          .nb-links {
            gap: 20px;
            padding: 0 12px;
          }
          
          .nb-link {
            font-size: 9px;
            letter-spacing: 0.1em;
          }
        }

        /* Dynamic scroll margin using CSS variable */
        :root {
          --navbar-height: 80px;
        }
        
        /* Apply scroll margin to all sections */
        #home, #work, #contact {
          scroll-margin-top: var(--navbar-height);
        }

        /* Update navbar height variable on different screen sizes */
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

        /* Optional: Add a spacer div to prevent initial overlap */
        .navbar-spacer {
          height: var(--navbar-height);
          width: 100%;
        }
      `}</style>

      <nav className={`nb-nav${isScrolled ? " nb-scrolled" : ""}`}>
        <div className="nb-line" />
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
        <div className="nb-line" />
      </nav>
    </>
  );
}