// Work.jsx
import { useEffect, useRef, useState } from "react";

// Project data extracted from the resume
const PROJECTS = [
  {
    id: 1,
    title: "Global Edu Assist",
    description:
      "A comprehensive MERN stack application designed to solve student-related problems during the process of abroad studies. Features include university recommendations, cost estimation, a progress-tracking system, a chat system, and document guidance.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/Prazeen7/Global-Edu-Assist",
    live: null,
    category: "fullstack",
  },
  {
    id: 2,
    title: "Image Classification with CNN and Transfer Learning",
    description:
      "Implemented image classification using Convolutional Neural Networks (CNN) and transfer learning techniques. Utilized pre-trained models like VGG for feature extraction and fine-tuned them for specific classification tasks.",
    tech: ["Python", "TensorFlow", "CNN", "VGG", "Transfer Learning"],
    github:
      "https://www.kaggle.com/code/prajinsingh/logo-classification-using-cnn-from-scratch",
    live: null,
    category: "ml",
  },
  {
    id: 3,
    title: "Text Classification using RNN, LSTM and LSTM with Word2Vec",
    description:
      "Built text classification models using Recurrent Neural Networks (RNN), Long Short-Term Memory (LSTM) networks, and Word2Vec pre-trained models for hotel review sentiment analysis.",
    tech: ["Python", "RNN", "LSTM", "Word2Vec", "NLP"],
    github:
      "https://www.kaggle.com/code/prajinsingh/hotel-review-text-classification-using-rnn",
    live: null,
    category: "ml",
  },
  {
    id: 4,
    title: "Farm Mart",
    description:
      "Developed a farmers market website following Agile methodology and Scrum practices. The platform connects farmers directly with consumers, featuring product listings, order management, payment integration, and delivery tracking.",
    tech: ["HTML", "CSS", "JavaScript", "MySQL"],
    github: "https://github.com/Prazeen7/Farm-Mart",
    live: null,
    category: "web",
  },
  {
    id: 5,
    title: "Learning Management System",
    description:
      "Built a full-featured Learning Management System using Java with features including course management, student enrollment, assignment submission, grading system, and progress tracking.",
    tech: ["Java", "OOP", "Database", "Authentication"],
    github:
      "https://www.figma.com/proto/2mvOBc5gRZG7D27KxcHg4z/CMS?node-id=3639-1085&t=ZnlPrKhhcQTOSyC4-6&starting-point-node-id=3639%3A1085",
    live: null,
    category: "web",
  },
  {
    id: 6,
    title: "AI Chatbot with RAG and LLaMA 3 Integration",
    description:
      "Developed an AI chatbot using Retrieval-Augmented Generation (RAG) with a vector database to fetch relevant context, which was then fed into the LLaMA 3 model to generate accurate, context-aware responses.",
    tech: ["Python", "RAG", "LLaMA 3", "Vector DB", "LangChain"],
    github: "https://github.com/Prazeen7/Chatbot",
    live: null,
    category: "ai",
  },
  {
    id: 7,
    title: "Text-to-Speech Translation Web Application",
    description:
      "A Flask-based web application that translates text from English to a target language and generates text-to-speech (TTS) audio using a provided speaker voice. Uses Coqui TTS model (xtts_v2) for voice synthesis.",
    tech: ["Flask", "Python", "Coqui TTS", "xtts_v2"],
    github: "https://github.com/Prazeen7/Multilingual-Text-to-Speech",
    live: null,
    category: "ai",
  },
  {
    id: 8,
    title: "Company Finder",
    description:
      "A Python web app that extracts key details from company websites, including emails, phone numbers, social links, business nature, and location. Uses Selenium, BeautifulSoup, Google Custom Search, and a Qwen model for analysis.",
    tech: ["Python", "Selenium", "BeautifulSoup", "Flask", "Qwen"],
    github: "https://github.com/Prazeen7/Company-Finder",
    live: null,
    category: "ai",
  },
  {
    id: 9,
    title: "Videos to Blog",
    description:
      "Converts uploaded videos into blog posts by first transcribing the audio using OpenAI's Whisper model, then generating a natural, human-like blog article using the Qwen/Qwen2.5-7B-Instruct language model.",
    tech: ["Python", "Whisper", "Qwen", "Flask", "AI"],
    github: "https://github.com/Prazeen7/Video-to-Blogs",
    live: null,
    category: "ai",
  },
];

// Work Experience data from resume
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

const CATEGORIES = ["all", "fullstack", "web", "ml", "ai"];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);
  
  const expSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const expHeaderRef = useRef(null);
  const projectsHeaderRef = useRef(null);
  const filtersRef = useRef(null);
  const experienceRefs = useRef([]);
  const projectRefs = useRef([]);

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const loadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  useEffect(() => {
    setVisibleCount(6);
  }, [activeCategory]);

  // Observer for Experience section header
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && expHeaderRef.current) {
            expHeaderRef.current.style.animation = "fadeUpWork 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards";
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (expHeaderRef.current) {
      observer.observe(expHeaderRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Observer for Projects section header and filters
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (projectsHeaderRef.current) {
              projectsHeaderRef.current.style.animation = "fadeUpWork 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards";
            }
            if (filtersRef.current) {
              filtersRef.current.style.animation = "fadeUpWork 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.1s forwards";
            }
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (projectsHeaderRef.current) {
      observer.observe(projectsHeaderRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Observer for experience cards - simplified approach
  useEffect(() => {
    // Small delay to ensure refs are populated
    const timeout = setTimeout(() => {
      experienceRefs.current.forEach((card) => {
        if (card) {
          // Set opacity to 0 initially
          card.style.opacity = "0";
          
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.style.animation = "slideInLeft 0.5s ease forwards";
                  observer.unobserve(entry.target);
                }
              });
            },
            { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
          );
          observer.observe(card);
        }
      });
    }, 100);

    return () => clearTimeout(timeout);
  }, [WORK_EXPERIENCE]); // Only run once for experience cards

  // Observer for project cards - runs when displayedProjects changes
  useEffect(() => {
    // Clean up previous animations and set up new ones
    const timeout = setTimeout(() => {
      projectRefs.current.forEach((card) => {
        if (card) {
          // Reset any existing animations and set opacity to 0
          card.style.animation = "";
          card.style.opacity = "0";
          
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.style.animation = "scaleIn 0.5s ease forwards";
                  observer.unobserve(entry.target);
                }
              });
            },
            { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
          );
          observer.observe(card);
        }
      });
    }, 50);

    return () => clearTimeout(timeout);
  }, [displayedProjects]); // Re-run when displayed projects change

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700;800&display=swap');

        @keyframes fadeUpWork {
          from {
            opacity: 0;
            transform: translateY(36px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Dark Mode Styles */
        body.dark-mode .work-section {
          background: #0a0a0a;
        }

        body.dark-mode .work-title {
          color: #e0e0e0;
        }

        body.dark-mode .work-sub {
          color: #a0a0a0;
        }

        body.dark-mode .experience-card {
          background: #1a1a1a;
          border-color: #2a2a2a;
        }

        body.dark-mode .experience-card:hover {
          border-color: #E76F51;
        }

        body.dark-mode .exp-title {
          color: #e0e0e0;
        }

        body.dark-mode .exp-company {
          color: #E76F51;
        }

        body.dark-mode .exp-period {
          color: #8a8a8a;
        }

        body.dark-mode .exp-description li {
          color: #b0b0b0;
        }

        body.dark-mode .exp-tech-tag {
          background: #2a2a2a;
          color: #E76F51;
          border-color: #3a3a3a;
        }

        body.dark-mode .work-card {
          background: #1a1a1a;
          border-color: #2a2a2a;
        }

        body.dark-mode .work-card:hover {
          border-color: #E76F51;
        }

        body.dark-mode .work-card-title {
          color: #e0e0e0;
        }

        body.dark-mode .work-card-desc {
          color: #b0b0b0;
        }

        body.dark-mode .work-tech-tag {
          background: #2a2a2a;
          color: #E76F51;
          border-color: #3a3a3a;
        }

        body.dark-mode .work-filter-btn {
          border-color: #3a3a3a;
          color: #a0a0a0;
        }

        body.dark-mode .work-filter-btn:hover {
          border-color: #E76F51;
          color: #E76F51;
          background: rgba(231, 111, 81, 0.08);
        }

        body.dark-mode .work-filter-btn.active {
          border-color: #E76F51;
          background: rgba(231, 111, 81, 0.15);
          color: #E76F51;
          font-weight: 500;
        }

        /* Light Mode Styles */
        body.light-mode .work-section {
          background: #ffffff;
        }

        body.light-mode .work-title {
          color: #1a1a1a;
        }

        body.light-mode .work-sub {
          color: #6c6c6c;
        }

        body.light-mode .experience-card {
          background: #f8f9fa;
          border-color: #e0e0e0;
        }

        body.light-mode .experience-card:hover {
          border-color: #E76F51;
          box-shadow: 0 12px 24px -8px rgba(231, 111, 81, 0.15);
        }

        body.light-mode .exp-title {
          color: #1a1a1a;
        }

        body.light-mode .exp-company {
          color: #E76F51;
        }

        body.light-mode .exp-period {
          color: #8a8a8a;
        }

        body.light-mode .exp-description li {
          color: #5a5a5a;
        }

        body.light-mode .exp-tech-tag {
          background: #e8e8e8;
          color: #E76F51;
          border-color: #d0d0d0;
        }

        body.light-mode .work-card {
          background: #ffffff;
          border-color: #e0e0e0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        body.light-mode .work-card:hover {
          border-color: #E76F51;
          box-shadow: 0 12px 24px -8px rgba(231, 111, 81, 0.15);
        }

        body.light-mode .work-card-title {
          color: #1a1a1a;
        }

        body.light-mode .work-card-desc {
          color: #5a5a5a;
        }

        body.light-mode .work-tech-tag {
          background: #f0f0f0;
          color: #E76F51;
          border-color: #e0e0e0;
        }

        body.light-mode .work-filter-btn {
          border-color: #d0d0d0;
          color: #6c6c6c;
        }

        body.light-mode .work-filter-btn:hover {
          border-color: #E76F51;
          color: #E76F51;
          background: rgba(231, 111, 81, 0.08);
        }

        body.light-mode .work-filter-btn.active {
          border-color: #E76F51;
          background: rgba(231, 111, 81, 0.15);
          color: #E76F51;
          font-weight: 500;
        }

        body.light-mode .work-loadmore-btn {
          border-color: #E76F51;
          color: #E76F51;
        }

        body.light-mode .work-loadmore-btn:hover {
          background: #E76F51;
          color: #ffffff;
        }

        .work-section {
          padding: 0px 64px 0px;
          font-family: 'Jost', sans-serif;
          position: relative;
          transition: background-color 0.3s ease;
        }

        .work-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        /* header */
        .work-header {
          text-align: center;
          margin-bottom: 64px;
          opacity: 0;
        }

        .work-badge {
          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #E76F51;
          font-weight: 500;
          margin-bottom: 12px;
          display: inline-block;
        }

        .work-title {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 700;
          margin: 0 0 16px 0;
          letter-spacing: -0.02em;
          transition: color 0.3s ease;
        }

        .work-sub {
          font-size: 18px;
          max-width: 580px;
          margin: 0 auto;
          line-height: 1.5;
          font-weight: 400;
          transition: color 0.3s ease;
        }

        /* Experience Section */
        .experience-section {
          margin-bottom: 80px;
        }

        .experience-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 40px;
        }

        .experience-card {
          border-radius: 20px;
          padding: 28px;
          transition: all 0.3s ease;
        }

        .experience-card:hover {
          transform: translateY(-4px);
        }

        .exp-header {
          margin-bottom: 20px;
        }

        .exp-title {
          font-size: 20px;
          font-weight: 700;
          margin: 0 0 6px 0;
          transition: color 0.3s ease;
        }

        .exp-company {
          font-size: 15px;
          font-weight: 500;
          margin: 0 0 4px 0;
          transition: color 0.3s ease;
        }

        .exp-period {
          font-size: 12px;
          letter-spacing: 0.3px;
          display: inline-block;
          padding: 2px 0;
          transition: color 0.3s ease;
        }

        .exp-description {
          list-style: none;
          padding: 0;
          margin: 0 0 20px 0;
        }

        .exp-description li {
          font-size: 14px;
          line-height: 1.5;
          margin-bottom: 8px;
          padding-left: 18px;
          position: relative;
          text-align: justify;
          transition: color 0.3s ease;
        }

        .exp-description li::before {
          content: "▹";
          position: absolute;
          left: 0;
          color: #E76F51;
          font-size: 12px;
        }

        .exp-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 16px;
        }

        .exp-tech-tag {
          font-size: 10px;
          font-weight: 500;
          padding: 4px 10px;
          border-radius: 20px;
          letter-spacing: 0.02em;
          transition: all 0.2s ease;
        }

        /* category filter */
        .work-filters {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-bottom: 56px;
          opacity: 0;
        }

        .work-filter-btn {
          background: transparent;
          padding: 8px 24px;
          font-size: 14px;
          font-weight: 400;
          font-family: 'Jost', sans-serif;
          border: 1px solid;
          border-radius: 40px;
          cursor: pointer;
          transition: all 0.2s ease;
          letter-spacing: 0.01em;
        }

        /* grid - 3 columns with proper spacing */
        .work-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-bottom: 56px;
        }

        .work-card {
          border-radius: 20px;
          padding: 24px;
          transition: all 0.35s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          display: flex;
          flex-direction: column;
          height: auto;
          min-height: auto;
        }

        .work-card:hover {
          transform: translateY(-4px);
        }

        .work-card-title {
          font-size: 20px;
          font-weight: 700;
          margin: 0 0 12px 0;
          line-height: 1.3;
          transition: color 0.3s ease;
        }

        .work-card-desc {
          font-size: 14px;
          line-height: 1.6;
          margin: 0 0 20px 0;
          text-align: justify;
          flex: 1;
          transition: color 0.3s ease;
        }

        .work-card-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }

        .work-tech-tag {
          font-size: 11px;
          font-weight: 500;
          padding: 5px 12px;
          border-radius: 20px;
          letter-spacing: 0.02em;
          transition: all 0.2s ease;
        }

        .work-card-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 500;
          color: #E76F51;
          text-decoration: none;
          border-bottom: 1.5px solid #3a3a3a;
          padding-bottom: 4px;
          transition: border-color 0.2s, gap 0.2s;
          width: fit-content;
        }

        .work-card-link:hover {
          border-bottom-color: #E76F51;
          gap: 12px;
          color: #E76F51;
        }

        .work-card-link svg {
          width: 13px;
          height: 13px;
          transition: transform 0.2s;
        }

        .work-card-link:hover svg {
          transform: translateX(3px);
        }

        /* load more */
        .work-loadmore {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }

        .work-loadmore-btn {
          background: transparent;
          border: 1px solid #E76F51;
          padding: 12px 36px;
          font-size: 15px;
          font-weight: 500;
          font-family: 'Jost', sans-serif;
          border-radius: 40px;
          cursor: pointer;
          transition: all 0.25s;
          backdrop-filter: blur(2px);
        }

        .work-loadmore-btn:hover {
          background: #E76F51;
          border-color: #E76F51;
          color: #0a0a0a;
        }

        .section-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, #E76F51, transparent);
          margin: 60px 0;
        }

        @media (max-width: 1024px) {
          .work-grid,
          .experience-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
          }
        }

        @media (max-width: 768px) {
          .work-section {
            padding: 60px 24px 80px;
          }
          .work-grid,
          .experience-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .work-card {
            padding: 24px;
          }
          .work-filters {
            gap: 8px;
          }
          .work-filter-btn {
            padding: 6px 18px;
            font-size: 13px;
          }
          .experience-card {
            padding: 24px;
          }
          .work-card-desc {
            text-align: left;
          }
        }
      `}</style>

      <section className="work-section" id="work">
        <div className="work-container">
          {/* Work Experience Section */}
          <div className="experience-section" ref={expSectionRef}>
            <div className="work-header" ref={expHeaderRef}>
              <span className="work-badge">✦ EXPERIENCE</span>
              <h2 className="work-title">Work Experience</h2>
              <p className="work-sub">
                Professional journey across AI development, IT support, and
                technical roles
              </p>
            </div>

            <div className="experience-grid">
              {WORK_EXPERIENCE.map((exp, idx) => (
                <div
                  key={exp.id}
                  className="experience-card"
                  ref={(el) => (experienceRefs.current[idx] = el)}
                >
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
                      <span key={tech} className="exp-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="section-divider"></div>

          {/* Projects Section */}
          <div ref={projectsSectionRef}>
            <div className="work-header" ref={projectsHeaderRef}>
              <span className="work-badge">✦ PORTFOLIO</span>
              <h2 className="work-title">Featured Projects</h2>
              <p className="work-sub">
                AI-driven applications, full‑stack platforms, and machine
                learning experiments — turning ideas into production-ready
                solutions.
              </p>
            </div>

            <div className="work-filters" ref={filtersRef}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`work-filter-btn ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat === "all"
                    ? "All Work"
                    : cat === "fullstack"
                      ? "Full Stack"
                      : cat === "web"
                        ? "Web Apps"
                        : cat === "ml"
                          ? "ML / DL"
                          : "AI / LLM"}
                </button>
              ))}
            </div>

            <div className="work-grid">
              {displayedProjects.map((project, idx) => (
                <div
                  key={`${project.id}-${activeCategory}`}
                  className="work-card"
                  ref={(el) => (projectRefs.current[idx] = el)}
                >
                  <h3 className="work-card-title">{project.title}</h3>
                  <p className="work-card-desc">{project.description}</p>
                  <div className="work-card-tech">
                    {project.tech.slice(0, 4).map((t) => (
                      <span key={t} className="work-tech-tag">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="work-tech-tag">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-card-link"
                  >
                    View Project
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                </div>
              ))}
            </div>

            {hasMore && (
              <div className="work-loadmore">
                <button onClick={loadMore} className="work-loadmore-btn">
                  Show more projects
                </button>
              </div>
            )}
            <div className="section-divider"></div>
          </div>
        </div>
      </section>
    </>
  );
}