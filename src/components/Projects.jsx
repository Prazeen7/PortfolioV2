// Projects.jsx
import { useEffect, useRef, useState, useMemo, useCallback } from "react";

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
    github: "https://www.kaggle.com/code/prajinsingh/logo-classification-using-cnn-from-scratch",
    live: null,
    category: "ml",
  },
  {
    id: 3,
    title: "Text Classification using RNN, LSTM and LSTM with Word2Vec",
    description:
      "Built text classification models using Recurrent Neural Networks (RNN), Long Short-Term Memory (LSTM) networks, and Word2Vec pre-trained models for hotel review sentiment analysis.",
    tech: ["Python", "RNN", "LSTM", "Word2Vec", "NLP"],
    github: "https://www.kaggle.com/code/prajinsingh/hotel-review-text-classification-using-rnn",
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
  {
    id: 10,
    title: "Website Log Analysis & Insights Dashboard",
    description:
      "Analysis website logs to extract meaningful insights and display them on an interactive dashboard. Processes log files to identify patterns, detect anomalies, and visualize key metrics for better decision-making.",
    tech: ["Python", "Log Analysis", "Data Visualization", "React"],
    github: "https://github.com/Prazeen7/Log-Feature",
    live: null,
    category: "ds",
  },
  {
    id: 11,
    title: "Google Analytics Data Pipeline with Gzip Optimization",
    description:
      "Engineered a high-performance data pipeline that collects website data via Google BigQuery, exports to Google Cloud Storage using scheduled CRON jobs, and optimizes delivery with gzip compression. Implemented worker-based parallel fetching for fast dashboard rendering in React.",
    tech: ["Node.js", "BigQuery", "GCS", "CRON", "React", "Gzip"],
    github: null,
    live: null,
    category: "ds",
  },
  {
    id: 12,
    title: "Textile Design Classification Using Deep Learning",
    description:
      "Collected and generated textile design datasets, performed extensive data cleaning and preprocessing, and trained a deep learning model to classify textile designs including Abstract, Border, Animals, Mirror, Tribal, Traditional, Geometry, and more.",
    tech: ["Python", "TensorFlow", "CNN", "Data Augmentation", "Image Classification"],
    github: null,
    live: null,
    category: "ml",
  },
];

const CATEGORIES = ["all", "fullstack", "web", "ml", "ai", "ds"];
const AUTOPLAY_DELAY = 3000;

export default function Projects() {
  // isVisible controls the .prj-animate class — added once, never removed
  const [isVisible, setIsVisible]           = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedTech, setExpandedTech]     = useState({});
  const [currentIndex, setCurrentIndex]     = useState(0);
  const [cardsPerView, setCardsPerView]     = useState(3);
  const [touchStart, setTouchStart]         = useState(null);

  const sectionRef    = useRef(null);
  const hasAnimated   = useRef(false);
  const intervalRef   = useRef(null);
  const isPausedRef   = useRef(false); // true when mouse is over the card viewport

  /* ── Derived ── */
  const filteredProjects = useMemo(
    () =>
      activeCategory === "all"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  const total      = filteredProjects.length;
  const maxIdx     = Math.max(0, total - cardsPerView);
  const dotCount   = maxIdx + 1;
  const translateX = -(currentIndex * (100 / cardsPerView));

  /* ── Reset index on category / viewport change ── */
  useEffect(() => { setCurrentIndex(0); }, [activeCategory]);
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, Math.max(0, total - cardsPerView)));
  }, [cardsPerView, total]);

  /* ── Responsive cards per view ── */
  useEffect(() => {
    const update = () => {
      if      (window.innerWidth < 640)  setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else                               setCardsPerView(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* ── Intersection observer — fires once, adds .prj-animate ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
          observer.disconnect(); // never fires again
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ── Continuous auto-play — starts once section is visible ── */
  useEffect(() => {
    if (!isVisible || total <= cardsPerView) return;

    intervalRef.current = setInterval(() => {
      if (isPausedRef.current) return; // skip tick while hovered
      setCurrentIndex((prev) =>
        prev >= Math.max(0, total - cardsPerView) ? 0 : prev + 1
      );
    }, AUTOPLAY_DELAY);

    return () => clearInterval(intervalRef.current);
  }, [isVisible, cardsPerView, total]); // restarts on category change (total changes)

  /* ── Pause / resume — ONLY on the card viewport ── */
  const handleTrackEnter = useCallback(() => { isPausedRef.current = true;  }, []);
  const handleTrackLeave = useCallback(() => { isPausedRef.current = false; }, []);

  /* ── Manual nav — always wraps ── */
  const goTo = useCallback((dir) => {
    setCurrentIndex((prev) => {
      const max = Math.max(0, total - cardsPerView);
      if (dir === "next") return prev >= max ? 0 : prev + 1;
      return prev <= 0 ? max : prev - 1;
    });
  }, [total, cardsPerView]);

  const goToIndex = useCallback((idx) => setCurrentIndex(idx), []);

  /* ── Keyboard ── */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft")  goTo("prev");
      if (e.key === "ArrowRight") goTo("next");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goTo]);

  /* ── Touch / swipe ── */
  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd   = (e) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goTo(diff > 0 ? "next" : "prev");
    setTouchStart(null);
  };

  const toggleTechExpand = (id) =>
    setExpandedTech((prev) => ({ ...prev, [id]: true }));

  /* ════════════════════════════════════════════════
     RENDER
  ════════════════════════════════════════════════ */
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700;800&display=swap');

        /* ─── Keyframes ──────────────────────────────────────── */
        @keyframes dotPulse {
          0%,100% { transform:scale(1); }
          50%     { transform:scale(1.3); }
        }
        @keyframes techTagFadeIn {
          from { opacity:0; transform:scale(0.8); }
          to   { opacity:1; transform:scale(1); }
        }

        /* ─── Scroll-in animation — header ───────────────────── */
        /*
          Everything starts hidden via opacity/transform.
          .prj-animate (added once on intersection) triggers CSS transitions.
          Cards never unmount, so scrolling away + back never replays.
        */
        .prj-header {
          text-align: center;
          margin-bottom: 64px;
          padding: 0 16px;
          opacity: 0;
          transform: translateY(36px);
          transition:
            opacity  0.85s cubic-bezier(0.25,0.46,0.45,0.94),
            transform 0.85s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .prj-animate .prj-header {
          opacity: 1;
          transform: translateY(0);
        }

        /* ─── Filter row ─────────────────────────────────────── */
        .prj-filters-wrap {
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity  0.75s cubic-bezier(0.25,0.46,0.45,0.94) 0.15s,
            transform 0.75s cubic-bezier(0.25,0.46,0.45,0.94) 0.15s;
        }
        .prj-animate .prj-filters-wrap {
          opacity: 1;
          transform: translateY(0);
        }

        /* ─── Carousel outer ─────────────────────────────────── */
        .prj-carousel-wrap {
          opacity: 0;
          transform: translateY(32px);
          transition:
            opacity  0.8s cubic-bezier(0.25,0.46,0.45,0.94) 0.28s,
            transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94) 0.28s;
        }
        .prj-animate .prj-carousel-wrap {
          opacity: 1;
          transform: translateY(0);
        }

        /* ─── Individual cards — fade+slide up on first view ─── */
        .work-card {
          background: #1a1a1a;
          border: 1px solid #2a2a2a;
          border-radius: 20px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          height: 100%;
          box-sizing: border-box;
          /* start invisible */
          opacity: 0;
          transform: translateY(28px) scale(0.97);
          transition:
            opacity   0.6s cubic-bezier(0.25,0.46,0.45,0.94),
            transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94),
            border-color 0.3s ease,
            box-shadow   0.3s ease;
        }
        /* Animate cards in once section is seen */
        .prj-animate .work-card {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        /* Stagger per visible position (up to 3 per view) */
        .prj-animate .carousel-slide:nth-child(3n+1) .work-card { transition-delay: 0.30s; }
        .prj-animate .carousel-slide:nth-child(3n+2) .work-card { transition-delay: 0.44s; }
        .prj-animate .carousel-slide:nth-child(3n+3) .work-card { transition-delay: 0.58s; }

        /* Hover — only after visible so no jank during animation */
        .prj-animate .work-card:hover {
          border-color: #E76F51;
          transform: translateY(-4px) scale(1);
          box-shadow: 0 12px 32px rgba(231,111,81,0.15);
        }

        /* ─── Card internals ─────────────────────────────────── */
        .work-card-title {
          color:#e0e0e0; font-size:18px; font-weight:700;
          margin:0 0 12px 0; line-height:1.3;
        }
        .work-card-desc {
          color:#b0b0b0; font-size:14px; line-height:1.65;
          margin:0 0 20px 0; flex:1;
        }
        .work-card-tech { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:20px; }
        .work-tech-tag {
          background:#2a2a2a; color:#E76F51; border:1px solid #3a3a3a;
          font-size:11px; font-weight:500; padding:5px 12px; border-radius:20px;
          transition:all 0.2s ease; cursor:pointer;
        }
        .work-tech-tag:hover { background:#E76F51; color:#1a1a1a; transform:translateY(-1px); }
        .work-tech-tag.expandable { background:#E76F51; color:white; border-color:#E76F51; }
        .work-tech-tag.expandable:hover { transform:translateY(-2px); box-shadow:0 4px 12px rgba(231,111,81,0.3); }
        .tech-tag-new { animation: techTagFadeIn 0.3s ease forwards; }

        .work-card-link {
          display:inline-flex; align-items:center; gap:8px;
          font-size:13px; font-weight:500; color:#E76F51;
          text-decoration:none; border-bottom:1.5px solid #3a3a3a;
          padding-bottom:4px; transition:all 0.2s ease; width:fit-content;
        }
        .work-card-link:hover { gap:12px; border-bottom-color:#E76F51; }
        .work-card-link svg { width:13px; height:13px; transition:transform 0.2s; }
        .work-card-link:hover svg { transform:translateX(3px); }

        /* ─── Theme tokens ───────────────────────────────────── */
        .work-title { color:#e0e0e0; }
        .work-sub   { color:#a0a0a0; }
        .work-badge {
          font-size:12px; letter-spacing:0.2em; text-transform:uppercase;
          color:#E76F51; font-weight:500; margin-bottom:12px; display:inline-block;
        }
        .work-title {
          font-size:clamp(26px,5vw,48px); font-weight:700;
          margin:0 0 16px 0; letter-spacing:-0.02em; transition:color 0.3s ease;
        }
        .work-sub {
          font-size:clamp(14px,2.2vw,18px); max-width:580px; margin:0 auto;
          line-height:1.5; font-weight:400; transition:color 0.3s ease;
        }

        /* ─── Filter Buttons ─────────────────────────────────── */
        .work-filters {
          display:flex; flex-wrap:wrap; justify-content:center;
          gap:10px; margin-bottom:48px;
        }
        .work-filter-btn {
          border:1px solid #3a3a3a; color:#a0a0a0; background:transparent;
          padding:8px 22px; font-size:clamp(12px,1.5vw,14px); font-weight:400;
          font-family:'Jost',sans-serif; border-radius:40px;
          cursor:pointer; transition:all 0.2s ease; letter-spacing:0.01em;
        }
        .work-filter-btn:hover  { border-color:#E76F51; color:#E76F51; background:rgba(231,111,81,0.08); }
        .work-filter-btn.active { border-color:#E76F51; background:rgba(231,111,81,0.15); color:#E76F51; font-weight:500; }

        /* ─── Carousel ───────────────────────────────────────── */
        .carousel-outer {
          position: relative;
          padding: 0 28px;
        }
        .carousel-viewport {
          overflow: hidden;
          border-radius: 20px;
          padding: 8px 0 12px;
        }
        .carousel-track {
          display: flex;
          transition: transform 0.45s cubic-bezier(0.4,0,0.2,1);
          will-change: transform;
        }
        .carousel-slide {
          flex: 0 0 calc(100% / var(--cpv));
          padding: 0 12px;
          box-sizing: border-box;
        }

        /* ─── Arrow Buttons ──────────────────────────────────── */
        .carousel-arrow {
          position:absolute; top:50%; transform:translateY(-50%);
          z-index:10; width:44px; height:44px; border-radius:50%;
          border:1.5px solid #3a3a3a; background:#1a1a1a; color:#e0e0e0;
          display:flex; align-items:center; justify-content:center;
          cursor:pointer; transition:all 0.25s ease;
          box-shadow:0 4px 16px rgba(0,0,0,0.4);
        }
        .carousel-arrow:hover {
          border-color:#E76F51; background:#E76F51; color:white;
          box-shadow:0 6px 20px rgba(231,111,81,0.35);
        }
        .carousel-arrow-prev { left:-20px; }
        .carousel-arrow-next { right:-20px; }
        .carousel-arrow svg  { width:18px; height:18px; }

        /* ─── Dots ───────────────────────────────────────────── */
        .carousel-dots {
          display:flex; justify-content:center; align-items:center;
          gap:8px; margin-top:20px;
        }
        .carousel-dot {
          width:8px; height:8px; border-radius:50%;
          background:#3a3a3a; border:none; cursor:pointer;
          transition:all 0.3s ease; padding:0;
        }
        .carousel-dot.active {
          background:#E76F51; width:24px; border-radius:4px;
          animation:dotPulse 0.4s ease;
        }
        .carousel-dot:hover:not(.active) { background:#6a6a6a; transform:scale(1.2); }

        /* ─── Counter ────────────────────────────────────────── */
        .carousel-counter {
          text-align:left; margin-top:10px; font-size:13px;
          color:#5a5a5a; letter-spacing:0.05em; font-weight:400;
        }
        .carousel-counter span { color:#E76F51; font-weight:600; }

        /* ─── Divider ────────────────────────────────────────── */
        .section-divider {
          height:1px;
          background:linear-gradient(to right, transparent, #E76F51, transparent);
          margin:60px 0;
        }

        /* ─── Light Mode ─────────────────────────────────────── */
        body.light-mode .work-title  { color:#1a1a1a; }
        body.light-mode .work-sub    { color:#6c6c6c; }
        body.light-mode .work-card   { background:#ffffff; border-color:#e0e0e0; box-shadow:0 2px 8px rgba(0,0,0,0.04); }
        body.light-mode .prj-animate .work-card:hover { border-color:#E76F51; box-shadow:0 8px 20px rgba(231,111,81,0.1); }
        body.light-mode .work-card-title { color:#1a1a1a; }
        body.light-mode .work-card-desc  { color:#5a5a5a; }
        body.light-mode .work-tech-tag   { background:#f0f0f0; color:#E76F51; border-color:#e0e0e0; }
        body.light-mode .work-tech-tag:hover { background:#E76F51; color:white; }
        body.light-mode .work-tech-tag.expandable { background:#E76F51; color:white; border-color:#E76F51; }
        body.light-mode .work-card-link  { color:#E76F51; border-bottom:1.5px solid #e0e0e0; }
        body.light-mode .work-card-link:hover { border-bottom-color:#E76F51; }
        body.light-mode .work-filter-btn { border-color:#d0d0d0; color:#6c6c6c; }
        body.light-mode .work-filter-btn:hover  { border-color:#E76F51; color:#E76F51; background:rgba(231,111,81,0.08); }
        body.light-mode .work-filter-btn.active { border-color:#E76F51; background:rgba(231,111,81,0.15); color:#E76F51; }
        body.light-mode .carousel-arrow { background:#ffffff; border-color:#d0d0d0; color:#1a1a1a; box-shadow:0 4px 16px rgba(0,0,0,0.1); }
        body.light-mode .carousel-arrow:hover { background:#E76F51; border-color:#E76F51; color:white; }
        body.light-mode .carousel-dot   { background:#d0d0d0; }
        body.light-mode .carousel-dot.active  { background:#E76F51; }
        body.light-mode .carousel-counter { color:#9a9a9a; }

        /* ─── Responsive ─────────────────────────────────────── */
        @media (max-width:1024px) {
          .prj-header { margin-bottom: 48px; }
          .work-filters { margin-bottom: 36px; }
          .carousel-arrow-prev { left:-14px; }
          .carousel-arrow-next { right:-14px; }
          /* on tablet, stagger by 2 */
          .prj-animate .carousel-slide:nth-child(2n+1) .work-card { transition-delay: 0.30s; }
          .prj-animate .carousel-slide:nth-child(2n+2) .work-card { transition-delay: 0.44s; }
        }
        @media (max-width:768px) {
          .prj-header { margin-bottom: 40px; }
          .work-filters { gap:8px; margin-bottom:28px; }
          .work-filter-btn { padding:6px 16px; font-size:12px; }
          .carousel-outer { padding:0 16px; }
          .carousel-arrow { width:38px; height:38px; }
          .carousel-arrow-prev { left:-10px; }
          .carousel-arrow-next { right:-10px; }
          .carousel-slide { padding:0 8px; }
          .work-card { padding:20px; }
          .work-card-title { font-size:16px; }
          .work-card-desc { font-size:13px; }
          /* on mobile, all cards same delay */
          .prj-animate .carousel-slide .work-card { transition-delay: 0.30s; }
        }
        @media (max-width:480px) {
          .prj-header { margin-bottom: 28px; padding: 0 8px; }
          .work-filters { gap:6px; margin-bottom:22px; }
          .work-filter-btn { padding:5px 12px; font-size:11px; border-radius:30px; }
          .carousel-outer { padding:0 12px; }
          .carousel-arrow { width:32px; height:32px; }
          .carousel-arrow svg { width:14px; height:14px; }
          .carousel-arrow-prev { left:-8px; }
          .carousel-arrow-next { right:-8px; }
          .carousel-slide { padding:0 6px; }
          .work-card { padding:16px 14px; border-radius:16px; }
          .work-card-title { font-size:15px; }
          .work-card-desc { font-size:12.5px; }
          .work-tech-tag { font-size:10px; padding:4px 10px; }
          .carousel-dots { margin-top:14px; }
          .carousel-counter { font-size:12px; margin-top:10px; }
          .section-divider { margin:40px 0; }
        }
      `}</style>

      <div id="projects">
        {/*
          sectionRef lives on the outermost wrapper.
          .prj-animate is added once when scrolled into view — never removed.
          This means cards always exist in the DOM and never re-animate on scroll.
        */}
        <div
          ref={sectionRef}
          className={isVisible ? "prj-animate" : ""}
        >
          {/* ── Header ── */}
          <div className="prj-header">
            <h2 className="work-title">Featured Projects</h2>
            <p className="work-sub">
              AI-driven applications, full-stack platforms, data science projects, and machine
              learning experiments that turn ideas into production-ready solutions.
            </p>
          </div>

          {/* ── Category filters ── */}
          <div className="prj-filters-wrap">
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
                    : cat === "ai"
                    ? "AI / LLM"
                    : "Data Science"}
                </button>
              ))}
            </div>
          </div>

          {/* ══ Carousel ══ */}
          <div className="prj-carousel-wrap">
            <div className="carousel-outer">

              {/* Prev — wraps */}
              <button
                className="carousel-arrow carousel-arrow-prev"
                onClick={() => goTo("prev")}
                aria-label="Previous projects"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              {/*
                Card viewport:
                - onMouseEnter pauses autoplay
                - onMouseLeave resumes autoplay
                Pause fires ONLY for the card area, not arrows/dots.
              */}
              <div
                className="carousel-viewport"
                onMouseEnter={handleTrackEnter}
                onMouseLeave={handleTrackLeave}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <div
                  className="carousel-track"
                  style={{ transform: `translateX(${translateX}%)`, "--cpv": cardsPerView }}
                >
                  {filteredProjects.map((project) => {
                    const isExpanded  = expandedTech[project.id];
                    const displayTech = isExpanded ? project.tech : project.tech.slice(0, 4);
                    const hasMoreTech = project.tech.length > 4 && !isExpanded;

                    return (
                      <div
                        key={`${project.id}-${activeCategory}`}
                        className="carousel-slide"
                        style={{ "--cpv": cardsPerView }}
                      >
                        <div className="work-card">
                          <h3 className="work-card-title">{project.title}</h3>
                          <p className="work-card-desc">{project.description}</p>

                          <div className="work-card-tech">
                            {displayTech.map((t, techIdx) => (
                              <span
                                key={t}
                                className={`work-tech-tag${isExpanded && techIdx >= 4 ? " tech-tag-new" : ""}`}
                              >
                                {t}
                              </span>
                            ))}
                            {hasMoreTech && (
                              <span
                                className="work-tech-tag expandable"
                                onClick={() => toggleTechExpand(project.id)}
                              >
                                +{project.tech.length - 4}
                              </span>
                            )}
                          </div>

                          {project.github ? (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="work-card-link"
                            >
                              View Project
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeLinecap="round" />
                              </svg>
                            </a>
                          ) : (
                            <span className="work-card-link" style={{ opacity: 0.6, cursor: "default" }}>
                              Private Repository
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path
                                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                />
                              </svg>
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Next — wraps */}
              <button
                className="carousel-arrow carousel-arrow-next"
                onClick={() => goTo("next")}
                aria-label="Next projects"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>

            {/* Dots */}
            {dotCount > 1 && (
              <div className="carousel-dots">
                {Array.from({ length: dotCount }).map((_, i) => (
                  <button
                    key={i}
                    className={`carousel-dot${i === currentIndex ? " active" : ""}`}
                    onClick={() => goToIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Counter */}
            <p className="carousel-counter">
              <span>{Math.min(currentIndex + cardsPerView, total)}</span>
              {" / "}
              {total} projects
            </p>
          </div>
        </div>

        <div className="section-divider"></div>
      </div>
    </>
  );
}