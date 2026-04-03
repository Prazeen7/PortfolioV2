// Work.jsx
import { useEffect, useRef, useState, useCallback, useMemo } from "react";

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
      "Collected and generated textile design datasets, performed extensive data cleaning and preprocessing, and trained a deep learning model to classify textile designs into multiple categories including Abstract, Border, Animals, Mirror, Tribal, Traditional, Geometry, and more. Achieved high accuracy in distinguishing intricate design patterns.",
    tech: ["Python", "TensorFlow", "CNN", "Data Augmentation", "Image Classification"],
    github: null,
    live: null,
    category: "ml",
  },
];

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

const CATEGORIES = ["all", "fullstack", "web", "ml", "ai", "ds"];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);
  const [expandedTech, setExpandedTech] = useState({});

  // Animation states for each section
  const [experienceHeaderVisible, setExperienceHeaderVisible] = useState(false);
  const [experienceCardsVisible, setExperienceCardsVisible] = useState(false);
  const [projectsHeaderVisible, setProjectsHeaderVisible] = useState(false);
  const [projectsFiltersVisible, setProjectsFiltersVisible] = useState(false);
  const [projectsCardsVisible, setProjectsCardsVisible] = useState(false);

  // Refs for observation
  const experienceHeaderRef = useRef(null);
  const experienceCardsRef = useRef(null);
  const projectsHeaderRef = useRef(null);
  const projectsFiltersRef = useRef(null);
  const projectsCardsRef = useRef(null);

  const filteredProjects = useMemo(() =>
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  const displayedProjects = useMemo(() =>
    filteredProjects.slice(0, visibleCount),
    [filteredProjects, visibleCount]
  );

  const hasMore = visibleCount < filteredProjects.length;

  const loadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  useEffect(() => {
    setVisibleCount(6);
  }, [activeCategory]);

  // Observer for Experience Header
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setExperienceHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -100px 0px" }
    );
    if (experienceHeaderRef.current) observer.observe(experienceHeaderRef.current);
    return () => observer.disconnect();
  }, []);

  // Observer for Experience Cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setExperienceCardsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (experienceCardsRef.current) observer.observe(experienceCardsRef.current);
    return () => observer.disconnect();
  }, []);

  // Observer for Projects Header
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProjectsHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -100px 0px" }
    );
    if (projectsHeaderRef.current) observer.observe(projectsHeaderRef.current);
    return () => observer.disconnect();
  }, []);

  // Observer for Projects Filters
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProjectsFiltersVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );
    if (projectsFiltersRef.current) observer.observe(projectsFiltersRef.current);
    return () => observer.disconnect();
  }, []);

  // Observer for Projects Cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProjectsCardsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" }
    );
    if (projectsCardsRef.current) observer.observe(projectsCardsRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleTechExpand = (projectId) => {
    setExpandedTech(prev => ({
      ...prev,
      [projectId]: true
    }));
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700;800&display=swap');

        /* Animation Keyframes - Slower and more noticeable */
        @keyframes fadeUpSlow {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeScaleSlow {
          from {
            opacity: 0;
            transform: scale(0.92);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideFromLeftSlow {
          from {
            opacity: 0;
            transform: translateX(-80px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideFromBottomSlow {
          from {
            opacity: 0;
            transform: translateY(80px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes techTagFadeIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Animation Classes - Longer durations */
        .fade-up-slow {
          opacity: 0;
          animation: fadeUpSlow 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .fade-scale-slow {
          opacity: 0;
          animation: fadeScaleSlow 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .slide-left-slow {
          opacity: 0;
          animation: slideFromLeftSlow 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .slide-bottom-slow {
          opacity: 0;
          animation: slideFromBottomSlow 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        /* Stagger delays for cards - More spaced out */
        .card-stagger-1 { animation-delay: 0.08s; }
        .card-stagger-2 { animation-delay: 0.18s; }
        .card-stagger-3 { animation-delay: 0.28s; }
        .card-stagger-4 { animation-delay: 0.38s; }
        .card-stagger-5 { animation-delay: 0.48s; }
        .card-stagger-6 { animation-delay: 0.58s; }

        /* ── Dark Mode (default) ── */
        .work-section { 
          background: #0a0a0a; 
          transition: background-color 0.3s ease;
        }
        .work-title { color: #e0e0e0; }
        .work-sub { color: #a0a0a0; }
        
        /* Experience Card Styles - Slide from Left */
        .experience-card { 
          background: #1a1a1a; 
          border: 1px solid #2a2a2a;
          border-radius: 20px;
          padding: 24px;
          transition: all 0.35s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          display: flex;
          flex-direction: column;
          height: auto;
          opacity: 0;
        }
        .experience-card.animate-in {
          animation: slideFromLeftSlow 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .experience-card:hover { 
          border-color: #E76F51;
          transform: translateY(-4px);
        }
        
        .exp-header { margin-bottom: 20px; }
        .exp-title { 
          color: #e0e0e0;
          font-size: 20px;
          font-weight: 700;
          margin: 0 0 6px 0;
          line-height: 1.3;
        }
        .exp-company { 
          color: #E76F51;
          font-size: 15px;
          font-weight: 500;
          margin: 0 0 4px 0;
        }
        .exp-period { 
          color: #8a8a8a;
          font-size: 12px;
          letter-spacing: 0.3px;
          display: inline-block;
          padding: 2px 0;
        }
        .exp-description {
          list-style: none;
          padding: 0;
          margin: 0 0 20px 0;
          flex: 1;
        }
        .exp-description li {
          color: #b0b0b0;
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 8px;
          padding-left: 18px;
          position: relative;
          text-align: start;
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
          gap: 8px;
          margin-top: 16px;
        }
        .exp-tech-tag { 
          background: #2a2a2a; 
          color: #E76F51; 
          border: 1px solid #3a3a3a;
          font-size: 11px;
          font-weight: 500;
          padding: 5px 12px;
          border-radius: 20px;
          transition: all 0.2s ease;
        }
        .exp-tech-tag:hover {
          background: #E76F51;
          color: #1a1a1a;
          transform: translateY(-1px);
        }

        /* Project Cards - Slide from Bottom */
        .work-card { 
          background: #1a1a1a; 
          border: 1px solid #2a2a2a;
          border-radius: 20px;
          padding: 24px;
          transition: all 0.35s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          display: flex;
          flex-direction: column;
          height: auto;
          opacity: 0;
        }
        .work-card.animate-in {
          animation: slideFromBottomSlow 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .work-card:hover { 
          border-color: #E76F51;
          transform: translateY(-4px);
        }
        .work-card-title { 
          color: #e0e0e0;
          font-size: 20px;
          font-weight: 700;
          margin: 0 0 12px 0;
          line-height: 1.3;
        }
        .work-card-desc { 
          color: #b0b0b0;
          font-size: 14px;
          line-height: 1.6;
          margin: 0 0 20px 0;
          text-align: start;
          flex: 1;
        }
        .work-card-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }
        .work-tech-tag { 
          background: #2a2a2a; 
          color: #E76F51; 
          border: 1px solid #3a3a3a;
          font-size: 11px;
          font-weight: 500;
          padding: 5px 12px;
          border-radius: 20px;
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .work-tech-tag:hover { 
          background: #E76F51; 
          color: #1a1a1a; 
          transform: translateY(-1px);
        }
        .work-tech-tag.expandable {
          background: #E76F51;
          color: white;
          border-color: #E76F51;
          cursor: pointer;
        }
        .work-tech-tag.expandable:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(231, 111, 81, 0.3);
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
          transition: all 0.2s ease;
          width: fit-content;
        }
        .work-card-link:hover {
          gap: 12px;
          border-bottom-color: #E76F51;
        }
        .work-card-link svg {
          width: 13px;
          height: 13px;
          transition: transform 0.2s;
        }
        .work-card-link:hover svg {
          transform: translateX(3px);
        }

        /* Filter Buttons */
        .work-filter-btn { 
          border: 1px solid #3a3a3a; 
          color: #a0a0a0;
          background: transparent;
          padding: 8px 24px;
          font-size: 14px;
          font-weight: 400;
          font-family: 'Jost', sans-serif;
          border-radius: 40px;
          cursor: pointer;
          transition: all 0.2s ease;
          letter-spacing: 0.01em;
        }
        .work-filter-btn:hover { 
          border-color: #E76F51; 
          color: #E76F51; 
          background: rgba(231, 111, 81, 0.08);
        }
        .work-filter-btn.active { 
          border-color: #E76F51; 
          background: rgba(231, 111, 81, 0.15); 
          color: #E76F51;
          font-weight: 500;
        }

        /* Load More Button */
        .work-loadmore-btn {
          background: transparent;
          border: 1px solid #E76F51;
          color: #E76F51;
          padding: 12px 36px;
          font-size: 15px;
          font-weight: 500;
          font-family: 'Jost', sans-serif;
          border-radius: 40px;
          cursor: pointer;
          transition: all 0.25s;
        }
        .work-loadmore-btn:hover {
          background: #E76F51;
          color: #0a0a0a;
        }

        /* ── Light Mode (when body has light-mode class) ── */
        body.light-mode .work-section { 
          background: #ffffff; 
        }
        body.light-mode .work-title { 
          color: #1a1a1a; 
        }
        body.light-mode .work-sub { 
          color: #6c6c6c; 
        }
        
        /* Experience Cards - Light Mode */
        body.light-mode .experience-card { 
          background: #ffffff; 
          border-color: #e0e0e0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }
        body.light-mode .experience-card:hover { 
          border-color: #E76F51;
          box-shadow: 0 8px 20px rgba(231, 111, 81, 0.1);
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
          background: #f0f0f0; 
          color: #E76F51; 
          border-color: #e0e0e0;
        }
        body.light-mode .exp-tech-tag:hover {
          background: #E76F51;
          color: white;
        }
        
        /* Project Cards - Light Mode */
        body.light-mode .work-card { 
          background: #ffffff; 
          border-color: #e0e0e0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }
        body.light-mode .work-card:hover { 
          border-color: #E76F51;
          box-shadow: 0 8px 20px rgba(231, 111, 81, 0.1);
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
        body.light-mode .work-tech-tag:hover { 
          background: #E76F51; 
          color: white;
        }
        body.light-mode .work-card-link {
          color: #E76F51;
          border-bottom: 1.5px solid #e0e0e0;
        }
        body.light-mode .work-card-link:hover {
          border-bottom-color: #E76F51;
        }
        body.light-mode .work-tech-tag.expandable {
          background: #E76F51;
          color: white;
          border-color: #E76F51;
        }
        
        /* Filter Buttons - Light Mode */
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
        }
        
        /* Load More Button - Light Mode */
        body.light-mode .work-loadmore-btn { 
          border-color: #E76F51; 
          color: #E76F51;
        }
        body.light-mode .work-loadmore-btn:hover { 
          background: #E76F51; 
          color: #ffffff;
        }

        /* ── Section Layout Styles ── */
        .work-section {
          padding: 0px 64px 0px;
          font-family: 'Jost', sans-serif;
          position: relative;
          transition: background-color 0.3s ease;
          overflow-x: hidden;
        }

        .work-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .work-header {
          text-align: center;
          margin-bottom: 64px;
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

        .experience-section {
          margin-bottom: 80px;
        }

        .experience-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-top: 40px;
        }

        .work-filters {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-bottom: 56px;
        }

        .work-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-bottom: 56px;
        }

        .work-loadmore {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }

        .section-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, #E76F51, transparent);
          margin: 60px 0;
        }

        .tech-tag-new {
          animation: techTagFadeIn 0.3s ease forwards;
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
          .work-card, .experience-card { 
            padding: 24px; 
          }
          .work-filters { 
            gap: 8px; 
          }
          .work-filter-btn { 
            padding: 6px 18px; 
            font-size: 13px; 
          }
          .work-card-desc { 
            text-align: left; 
          }
        }
      `}</style>

      <section className="work-section" id="work">
        <div className="work-container">

          {/* ── Work Experience Section ── */}
          <div className="experience-section">
            {/* Experience Header */}
            <div ref={experienceHeaderRef}>
              {experienceHeaderVisible && (
                <div className="work-header fade-up-slow">
                  <span className="work-badge">✦ EXPERIENCE</span>
                  <h2 className="work-title">Work Experience</h2>
                  <p className="work-sub">
                    Professional journey across AI development, IT support, and technical roles
                  </p>
                </div>
              )}
            </div>

            {/* Experience Cards - Slide from Left */}
            <div ref={experienceCardsRef}>
              {experienceCardsVisible && (
                <div className="experience-grid">
                  {WORK_EXPERIENCE.map((exp, idx) => (
                    <div
                      key={exp.id}
                      className={`experience-card animate-in card-stagger-${(idx % 6) + 1}`}
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
                          <span key={tech} className="exp-tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="section-divider"></div>

          {/* ── Projects Section ── */}
          <div>
            {/* Projects Header */}
            <div ref={projectsHeaderRef}>
              {projectsHeaderVisible && (
                <div className="work-header fade-up-slow">
                  <span className="work-badge">✦ PORTFOLIO</span>
                  <h2 className="work-title">Featured Projects</h2>
                  <p className="work-sub">
                    AI-driven applications, full‑stack platforms, data science projects, and machine
                    learning experiments — turning ideas into production-ready solutions.
                  </p>
                </div>
              )}
            </div>

            {/* Projects Filters */}
            <div ref={projectsFiltersRef}>
              {projectsFiltersVisible && (
                <div className="work-filters fade-scale-slow">
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
              )}
            </div>

            {/* Projects Cards - Slide from Bottom */}
            <div ref={projectsCardsRef}>
              {projectsCardsVisible && (
                <>
                  <div className="work-grid">
                    {displayedProjects.map((project, idx) => {
                      const isExpanded = expandedTech[project.id];
                      const displayTech = isExpanded ? project.tech : project.tech.slice(0, 4);
                      const hasMoreTech = project.tech.length > 4 && !isExpanded;

                      return (
                        <div
                          key={`${project.id}-${activeCategory}`}
                          className={`work-card animate-in card-stagger-${(idx % 6) + 1}`}
                        >
                          <h3 className="work-card-title">{project.title}</h3>
                          <p className="work-card-desc">{project.description}</p>
                          <div className="work-card-tech">
                            {displayTech.map((t, techIdx) => (
                              <span
                                key={t}
                                className={`work-tech-tag ${isExpanded && techIdx >= 4 ? "tech-tag-new" : ""}`}
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
                            <span
                              className="work-card-link"
                              style={{ opacity: 0.6, cursor: "default" }}
                            >
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
                      );
                    })}
                  </div>

                  {hasMore && (
                    <div className="work-loadmore">
                      <button onClick={loadMore} className="work-loadmore-btn">
                        Show more projects
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
            <div className="section-divider"></div>
          </div>
        </div>
      </section>
    </>
  );
}