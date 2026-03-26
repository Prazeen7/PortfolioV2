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
      "https://www.figma.com/proto/2mv0Bc5gRZG7D27KxcHg4z/CMS?node-id=3639-1085",
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
  const sectionRef = useRef(null);

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

        .work-section {
          padding: 0px 64px 0px;
          background: #0a0a0a;
          font-family: 'Jost', sans-serif;
          position: relative;
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
          animation: fadeUpWork 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
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
          color: #e0e0e0;
          margin: 0 0 16px 0;
          letter-spacing: -0.02em;
        }

        .work-sub {
          font-size: 18px;
          color: #a0a0a0;
          max-width: 580px;
          margin: 0 auto;
          line-height: 1.5;
          font-weight: 400;
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
          background: #1a1a1a;
          border-radius: 20px;
          padding: 28px;
          border: 1px solid #2a2a2a;
          transition: all 0.3s ease;
          opacity: 0;
          animation: slideInLeft 0.5s ease forwards;
          animation-delay: calc(0.1s * var(--exp-index, 0));
        }

        .experience-card:hover {
          transform: translateY(-4px);
          border-color: #E76F51;
          box-shadow: 0 12px 24px -8px rgba(231, 111, 81, 0.1);
        }

        .exp-header {
          margin-bottom: 20px;
        }

        .exp-title {
          font-size: 20px;
          font-weight: 700;
          color: #e0e0e0;
          margin: 0 0 6px 0;
        }

        .exp-company {
          font-size: 15px;
          font-weight: 500;
          color: #E76F51;
          margin: 0 0 4px 0;
        }

        .exp-period {
          font-size: 12px;
          color: #8a8a8a;
          letter-spacing: 0.3px;
          display: inline-block;
          padding: 2px 0;
        }

        .exp-description {
          list-style: none;
          padding: 0;
          margin: 0 0 20px 0;
        }

        .exp-description li {
          font-size: 14px;
          color: #b0b0b0;
          line-height: 1.5;
          margin-bottom: 8px;
          padding-left: 18px;
          position: relative;
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
          background: #2a2a2a;
          color: #E76F51;
          border-radius: 20px;
          letter-spacing: 0.02em;
          border: 1px solid #3a3a3a;
        }

        /* category filter */
        .work-filters {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-bottom: 56px;
          opacity: 0;
          animation: fadeUpWork 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.1s forwards;
        }

        .work-filter-btn {
          background: transparent;
          border: 1px solid #3a3a3a;
          padding: 8px 24px;
          font-size: 14px;
          font-weight: 500;
          font-family: 'Jost', sans-serif;
          color: #b0b0b0;
          border-radius: 40px;
          cursor: pointer;
          transition: all 0.25s ease;
          letter-spacing: 0.02em;
        }

        .work-filter-btn:hover {
          border-color: #E76F51;
          color: #E76F51;
          background: rgba(231, 111, 81, 0.05);
        }

        .work-filter-btn.active {
          background: #E76F51;
          border-color: #E76F51;
          color: #0a0a0a;
        }

        /* grid - 3 columns with proper spacing */
        .work-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-bottom: 56px;
        }

        .work-card {
          background: #1a1a1a;
          border-radius: 20px;
          padding: 24px;
          transition: all 0.35s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          border: 1px solid #2a2a2a;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
          opacity: 0;
          animation: scaleIn 0.5s ease forwards;
          animation-delay: calc(0.05s * var(--card-index, 0));
          display: flex;
          flex-direction: column;
          height: auto;
          min-height: 380px;
        }

        .work-card:hover {
          transform: translateY(-4px);
          border-color: #E76F51;
          box-shadow: 0 12px 24px -8px rgba(231, 111, 81, 0.1);
        }

        .work-card-icon {
          width: 44px;
          height: 44px;
          background: #2a2a2a;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          color: #E76F51;
          flex-shrink: 0;
        }

        .work-card-icon svg {
          width: 22px;
          height: 22px;
        }

        .work-card-title {
          font-size: 20px;
          font-weight: 700;
          color: #e0e0e0;
          margin: 0 0 10px 0;
          line-height: 1.3;
        }

        .work-card-desc {
          font-size: 14px;
          line-height: 1.5;
          color: #b0b0b0;
          margin: 0 0 16px 0;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .work-card-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 20px;
        }

        .work-tech-tag {
          font-size: 10px;
          font-weight: 500;
          padding: 4px 10px;
          background: #2a2a2a;
          color: #E76F51;
          border-radius: 20px;
          letter-spacing: 0.02em;
          border: 1px solid #3a3a3a;
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
          color: #E76F51;
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
            min-height: auto;
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
        }
      `}</style>

      <section className="work-section" id="work" ref={sectionRef}>
        <div className="work-container">
          {/* Work Experience Section */}
          <div className="experience-section">
            <div className="work-header" style={{ marginBottom: "40px" }}>
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
                  style={{ "--exp-index": idx }}
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
          <div>
            <div className="work-header">
              <span className="work-badge">✦ PORTFOLIO</span>
              <h2 className="work-title">Featured Projects</h2>
              <p className="work-sub">
                AI-driven applications, full‑stack platforms, and machine
                learning experiments — turning ideas into production-ready
                solutions.
              </p>
            </div>

            <div className="work-filters">
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
                  key={project.id}
                  className="work-card"
                  style={{ "--card-index": idx % 9 }}
                >
                  <div className="work-card-icon">
                    {project.category === "ai" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path
                          d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
                          stroke="currentColor"
                        />
                        <circle cx="12" cy="12" r="4" stroke="currentColor" />
                      </svg>
                    )}
                    {project.category === "ml" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path
                          d="M3 3v18h18M9 15l3-3 3 3 4-4"
                          stroke="currentColor"
                          fill="none"
                        />
                        <circle
                          cx="7"
                          cy="15"
                          r="1.5"
                          fill="currentColor"
                          stroke="none"
                        />
                      </svg>
                    )}
                    {project.category === "fullstack" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <rect
                          x="2"
                          y="3"
                          width="20"
                          height="14"
                          rx="2"
                          stroke="currentColor"
                        />
                        <path d="M8 21h8M12 17v4" stroke="currentColor" />
                      </svg>
                    )}
                    {project.category === "web" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path
                          d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
                          stroke="currentColor"
                        />
                        <path d="M8 2v4M16 2v4M3 10h18" stroke="currentColor" />
                      </svg>
                    )}
                  </div>
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
