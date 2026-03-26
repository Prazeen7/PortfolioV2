import { useState } from "react";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "WORK", href: "#work" },
  { label: "CONTACT", href: "#contact" },
  { label: "RESUMÉ", href: "#resume" },
];

export default function Navbar() {
  const [active, setActive] = useState("HOME");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500&display=swap');

        .nb-nav {
          display: flex;
          align-items: center;
          padding: 28px 40px;
          width: 100vw;
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          box-sizing: border-box;
          background: transparent;
        }

        .nb-line {
          flex: 1;
          height: 1px;
          background: #E76F51;
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
          transition: color 0.25s ease;
          padding-bottom: 3px;
          cursor: pointer;
          white-space: nowrap;
          display: block;
          background: none;
          border: none;
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
      `}</style>

      <nav className="nb-nav">
        <div className="nb-line" />
        <ul className="nb-links">
          {navLinks.map(({ label, href }) => (
            <li key={label} className="nb-item">
              <a
                href={href}
                className={`nb-link${active === label ? " nb-active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActive(label);
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nb-line" />
      </nav>
    </>
  );
}