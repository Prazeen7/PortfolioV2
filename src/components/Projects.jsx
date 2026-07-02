import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import cnn1 from "../assets/Projects/CNN/CNN-1.png";
import cnn2 from "../assets/Projects/CNN/CNN-2.png";
import cnnTrain from "../assets/Projects/CNN/CNN-Train.png";
import cnnTrain2 from "../assets/Projects/CNN/CNN-Train-2.png";
import wordcloud from '../assets/Projects/RNN/wordcloud.png';
import freq from '../assets/Projects/RNN/freq.png';
import cm from '../assets/Projects/RNN/CM.png';
import cm1 from '../assets/Projects/RNN/CM-1.png';
import lstm from '../assets/Projects/RNN/LSTMW.png'
import lstm1 from '../assets/Projects/RNN/LSTMW2.png';
import overall from '../assets/Projects/RNN/Overall.png';
import overall1 from '../assets/Projects/RNN/Overall2.png';
import one from '../assets/Projects/LMS/one.png';
import two from '../assets/Projects/LMS/two.png';
import three from '../assets/Projects/LMS/three.png';
import four from '../assets/Projects/LMS/four.png';
import five from '../assets/Projects/LMS/five.png';
import six from '../assets/Projects/LMS/six.png';
import seven from '../assets/Projects/LMS/seven.png';
import eight from '../assets/Projects/LMS/eight.png';
import CF from '../assets/Projects/CF.png'
import chatbot from '../assets/Projects/chatbot.png'
import FM from '../assets/Projects/FM.png'
import GEA from '../assets/Projects/GEA.png'
import log from '../assets/Projects/log.png'
import TTS from '../assets/Projects/TTS.png'
import VTB from '../assets/Projects/VTB.png'


const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

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
    images: [GEA],
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
    images: [cnn1, cnn2, cnnTrain, cnnTrain2],
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
    images: [wordcloud, freq, lstm, lstm1, overall, overall1, cm, cm1]
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
    images: [FM],
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
    images: [one, two, three, four, five, six, seven, eight]
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
    images: [chatbot],
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
    images: [TTS],
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
    images: [CF],
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
    images: [VTB],
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
    images: [log],
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
const AUTOPLAY_DELAY = 5000;

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedTech, setExpandedTech] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [touchStart, setTouchStart] = useState(null);
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(true);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [autoPlayIndex, setAutoPlayIndex] = useState(0);
  const [isUserHovering, setIsUserHovering] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);
  const intervalRef = useRef(null);
  const isPausedRef = useRef(false);
  const desktopIntervalRef = useRef(null);
  const transitionTimeoutRef = useRef(null);
  const isMobile = useIsMobile();

  const filteredProjects = useMemo(
    () =>
      activeCategory === "all"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  const total = filteredProjects.length;
  const maxIdx = Math.max(0, total - cardsPerView);
  const dotCount = maxIdx + 1;
  const translateX = -(currentIndex * (100 / cardsPerView));

  useEffect(() => {
    setCurrentIndex(0);
    setAutoPlayIndex(0);
    setIsUserHovering(false);
    setHoveredProject(null);
  }, [activeCategory]);

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, Math.max(0, total - cardsPerView)));
  }, [cardsPerView, total]);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || total <= cardsPerView || !autoPlayEnabled) return;

    intervalRef.current = setInterval(() => {
      if (isPausedRef.current) return;
      setCurrentIndex((prev) =>
        prev >= Math.max(0, total - cardsPerView) ? 0 : prev + 1
      );
    }, AUTOPLAY_DELAY);

    return () => clearInterval(intervalRef.current);
  }, [isVisible, cardsPerView, total, autoPlayEnabled]);

  const handleTrackEnter = useCallback(() => {
    isPausedRef.current = true;
  }, []);
  const handleTrackLeave = useCallback(() => {
    isPausedRef.current = false;
  }, []);

  const goTo = useCallback(
    (dir) => {
      setAutoPlayEnabled(false); // Disable autoplay on manual navigation
      clearInterval(intervalRef.current);
      setCurrentIndex((prev) => {
        const max = Math.max(0, total - cardsPerView);
        if (dir === "next") return prev >= max ? 0 : prev + 1;
        return prev <= 0 ? max : prev - 1;
      });
    },
    [total, cardsPerView]
  );

  const goToIndex = useCallback((idx) => {
    setAutoPlayEnabled(false);
    clearInterval(intervalRef.current);
    setCurrentIndex(idx);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") goTo("prev");
      if (e.key === "ArrowRight") goTo("next");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goTo]);

  const handleTouchStart = (e) => {
    setAutoPlayEnabled(false); // Disable autoplay on touch
    clearInterval(intervalRef.current);
    setTouchStart(e.touches[0].clientX);
  };
  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goTo(diff > 0 ? "next" : "prev");
    setTouchStart(null);
  };

  const toggleTechExpand = (id) =>
    setExpandedTech((prev) => ({ ...prev, [id]: true }));

  // Desktop layout: split projects into left and right columns
  const midPoint = Math.ceil(filteredProjects.length / 2);
  const leftProjects = filteredProjects.slice(0, midPoint);
  const rightProjects = filteredProjects.slice(midPoint);

  // Desktop auto-play effect
  useEffect(() => {
    if (!isMobile && isVisible && filteredProjects.length > 0 && !isUserHovering && !isTransitioning) {
      desktopIntervalRef.current = setInterval(() => {
        setAutoPlayIndex((prev) => (prev + 1) % filteredProjects.length);
      }, AUTOPLAY_DELAY);

      return () => clearInterval(desktopIntervalRef.current);
    } else {
      if (desktopIntervalRef.current) {
        clearInterval(desktopIntervalRef.current);
      }
    }
  }, [isMobile, isVisible, filteredProjects.length, isUserHovering, isTransitioning]);

  // Set the displayed project based on auto-play or hover
  const displayedProject = (isUserHovering || isTransitioning) && hoveredProject 
    ? hoveredProject 
    : (!isUserHovering && !isTransitioning && filteredProjects[autoPlayIndex] 
      ? filteredProjects[autoPlayIndex] 
      : null);

  const handleProjectHover = (project) => {
    // Clear any pending transition
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = null;
    }
    setIsTransitioning(false);
    setIsUserHovering(true);
    setHoveredProject(project);
  };

  const handleProjectLeave = () => {
    setIsUserHovering(false);
    // Start transition delay before resuming animation
    setIsTransitioning(true);
    transitionTimeoutRef.current = setTimeout(() => {
      setHoveredProject(null);
      setIsTransitioning(false);
    }, 400); // Match card fade-out animation duration
  };

  const handleCardHover = () => {
    // Clear any pending transition
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = null;
    }
    // Capture the currently displayed project and keep it locked
    if (displayedProject) {
      setHoveredProject(displayedProject);
    }
    setIsTransitioning(false);
    setIsUserHovering(true);
  };

  const handleCardLeave = () => {
    setIsUserHovering(false);
    // Start transition delay before resuming animation
    setIsTransitioning(true);
    transitionTimeoutRef.current = setTimeout(() => {
      setHoveredProject(null);
      setIsTransitioning(false);
    }, 400); // Match card fade-out animation duration
  };

  // Cleanup transition timeout on unmount
  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700;800&display=swap');

        @keyframes dotPulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.3);
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

        .prj-header {
          text-align: center;
          margin-bottom: 64px;
          margin-top: 80px;
          padding: 0 16px;
          opacity: 0;
          transform: translateY(36px);
          transition:
            opacity 0.85s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            transform 0.85s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .prj-animate .prj-header {
          opacity: 1;
          transform: translateY(0);
        }

        .prj-filters-wrap {
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.15s,
            transform 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.15s;
        }
        .prj-animate .prj-filters-wrap {
          opacity: 1;
          transform: translateY(0);
        }

        .prj-carousel-wrap {
          opacity: 0;
          transform: translateY(32px);
          transition:
            opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.28s,
            transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.28s;
        }
        .prj-animate .prj-carousel-wrap {
          opacity: 1;
          transform: translateY(0);
        }

        /* ─── Card – fully transparent ───────────────────────── */
        .work-card {
          background: rgba(10, 10, 10, 0.4);
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 20px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          height: 100%;
          box-sizing: border-box;
          box-shadow: 
            0 8px 32px 0 rgba(0, 0, 0, 0.37),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.05);
          opacity: 0;
          transform: translateY(28px) scale(0.97);
          transition:
            opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }
        .prj-animate .work-card {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .prj-animate .carousel-slide:nth-child(3n + 1) .work-card {
          transition-delay: 0.30s;
        }
        .prj-animate .carousel-slide:nth-child(3n + 2) .work-card {
          transition-delay: 0.44s;
        }
        .prj-animate .carousel-slide:nth-child(3n + 3) .work-card {
          transition-delay: 0.58s;
        }

        .prj-animate .work-card:hover {
          border-color: #E76F51;
          transform: translateY(-4px) scale(1);
          box-shadow: 
            0 12px 32px rgba(231, 111, 81, 0.15),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
        }

        .work-card-title {
          color: #e0e0e0;
          font-size: 18px;
          font-weight: 700;
          margin: 0 0 12px 0;
          line-height: 1.3;
        }

        /* ─── Image Slideshow Styles ───────────────────────── */
        .project-image-slideshow {
          width: 100%;
          margin-bottom: 20px;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          aspect-ratio: 16 / 9;
        }

        .slideshow-images {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .slideshow-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          opacity: 0;
          transition: opacity 0.6s ease-in-out;
          border-radius: 12px;
        }

        .slideshow-image.active {
          opacity: 1;
          z-index: 1;
        }

        .slideshow-indicators {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 2;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          padding: 6px 12px;
          border-radius: 20px;
        }

        .slideshow-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .slideshow-dot.active {
          background: #E76F51;
          width: 24px;
          border-radius: 4px;
        }

        .slideshow-dot:hover:not(.active) {
          background: rgba(255, 255, 255, 0.7);
          transform: scale(1.2);
        }

        body.light-mode .project-image-slideshow {
          background: rgba(0, 0, 0, 0.03);
        }

        body.light-mode .slideshow-indicators {
          background: rgba(255, 255, 255, 0.5);
        }

        body.light-mode .slideshow-dot {
          background: rgba(0, 0, 0, 0.3);
        }

        body.light-mode .slideshow-dot.active {
          background: #E76F51;
        }
        .work-card-desc {
          color: #b0b0b0;
          font-size: 14px;
          line-height: 1.65;
          margin: 0 0 20px 0;
          flex: 1;
        }
        .work-card-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
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
        }
        .work-tech-tag.expandable:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(231, 111, 81, 0.3);
        }
        .tech-tag-new {
          animation: techTagFadeIn 0.3s ease forwards;
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

        .work-title {
          color: #e0e0e0;
        }
        .work-sub {
          color: #a0a0a0;
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
          font-size: clamp(26px, 5vw, 48px);
          font-weight: 700;
          margin: 0 0 16px 0;
          letter-spacing: -0.02em;
          transition: color 0.3s ease;
        }
        .work-sub {
          font-size: clamp(14px, 2.2vw, 18px);
          max-width: 580px;
          margin: 0 auto;
          line-height: 1.5;
          font-weight: 400;
          transition: color 0.3s ease;
        }

        .work-filters {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-bottom: 48px;
        }
        .work-filter-btn {
          border: 1px solid #3a3a3a;
          color: #a0a0a0;
          background: transparent;
          padding: 8px 22px;
          font-size: clamp(12px, 1.5vw, 14px);
          font-weight: 400;
          font-family: "Jost", sans-serif;
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
          transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }
        .carousel-slide {
          flex: 0 0 calc(100% / var(--cpv));
          padding: 0 12px;
          box-sizing: border-box;
        }

        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1.5px solid #3a3a3a;
          background: #1a1a1a;
          color: #e0e0e0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
        }
        .carousel-arrow:hover {
          border-color: #E76F51;
          background: #E76F51;
          color: white;
          box-shadow: 0 6px 20px rgba(231, 111, 81, 0.35);
        }
        .carousel-arrow-prev {
          left: -20px;
        }
        .carousel-arrow-next {
          right: -20px;
        }
        .carousel-arrow svg {
          width: 18px;
          height: 18px;
        }

        .carousel-dots {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 20px;
        }
        .carousel-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #3a3a3a;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }
        .carousel-dot.active {
          background: #E76F51;
          width: 24px;
          border-radius: 4px;
          animation: dotPulse 0.4s ease;
        }
        .carousel-dot:hover:not(.active) {
          background: #6a6a6a;
          transform: scale(1.2);
        }

        .carousel-counter {
          text-align: left;
          margin-top: 10px;
          font-size: 13px;
          color: #5a5a5a;
          letter-spacing: 0.05em;
          font-weight: 400;
        }
        .carousel-counter span {
          color: #E76F51;
          font-weight: 600;
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

        #projects {
          width: 100%;
          padding: 0 24px;
          position: relative;
          overflow: visible;
          background: transparent;
        }

        #projects > div {
          position: relative;
          z-index: 1;
        }

        .projects-content {
          max-width: 1250px;
          margin: 0 auto;
        }

        /* ─── Light Mode ─────────────────────────────────────── */
        body.light-mode .work-title {
          color: #1a1a1a;
        }
        body.light-mode .work-sub {
          color: #6c6c6c;
        }
        body.light-mode .work-card {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          border-color: rgba(0, 0, 0, 0.15);
          box-shadow: 
            0 8px 32px 0 rgba(31, 38, 135, 0.10),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.5);
        }
        body.light-mode .prj-animate .work-card:hover {
          border-color: #E76F51;
          box-shadow: 
            0 8px 20px rgba(231, 111, 81, 0.1),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.8);
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
        body.light-mode .work-tech-tag.expandable {
          background: #E76F51;
          color: white;
          border-color: #E76F51;
        }
        body.light-mode .work-card-link {
          color: #E76F51;
          border-bottom: 1.5px solid #e0e0e0;
        }
        body.light-mode .work-card-link:hover {
          border-bottom-color: #E76F51;
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
        }
        body.light-mode .carousel-arrow {
          background: #ffffff;
          border-color: #d0d0d0;
          color: #1a1a1a;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        }
        body.light-mode .carousel-arrow:hover {
          background: #E76F51;
          border-color: #E76F51;
          color: white;
        }
        body.light-mode .carousel-dot {
          background: #d0d0d0;
        }
        body.light-mode .carousel-dot.active {
          background: #E76F51;
        }
        body.light-mode .carousel-counter {
          color: #9a9a9a;
        }

        /* ─── Desktop Split Layout (> 768px) ───────────────────── */
        @media (min-width: 769px) {
          .desktop-layout {
            display: grid;
            grid-template-columns: 1fr 2fr 1fr;
            gap: 40px;
            align-items: start;
            min-height: 600px;
          }

          .project-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
            position: sticky;
            top: 120px;
          }

          .project-list.left {
            align-items: flex-end;
            text-align: right;
          }

          .project-list.right {
            align-items: flex-start;
            text-align: left;
          }

          .project-name-item {
            padding: 12px 20px;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid transparent;
            background: transparent;
            max-width: 280px;
            width: 100%;
          }

          .project-name-item h4 {
            font-size: 16px;
            font-weight: 500;
            color: #b0b0b0;
            margin: 0;
            transition: all 0.3s ease;
            line-height: 1.4;
          }

          .project-name-item:hover h4 {
            color: #E76F51;
          }

          .project-name-item.active {
            background: rgba(231, 111, 81, 0.1);
            border-color: #E76F51;
          }

          .project-name-item.active h4 {
            color: #E76F51;
            font-weight: 600;
          }

          .center-card-display {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 500px;
            position: relative;
          }

          .center-placeholder {
            text-align: center;
            color: #5a5a5a;
            font-size: 15px;
            font-weight: 400;
            padding: 40px;
            border: 2px dashed #3a3a3a;
            border-radius: 20px;
            background: rgba(255, 255, 255, 0.02);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            animation: placeholderFadeIn 0.4s ease;
          }

          @keyframes placeholderFadeIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .center-card-wrapper {
            width: 100%;
            max-width: 500px;
            animation: cardPopIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          .center-card-wrapper.fade-out {
            animation: cardFadeOut 0.4s cubic-bezier(0.4, 0, 0.6, 1) forwards;
          }

          @keyframes cardPopIn {
            0% {
              opacity: 0;
              transform: scale(0.7) translateY(30px) rotateX(20deg);
            }
            60% {
              transform: scale(1.05) translateY(-5px) rotateX(0deg);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0) rotateX(0deg);
            }
          }

          @keyframes cardFadeOut {
            0% {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
            100% {
              opacity: 0;
              transform: scale(0.95) translateY(10px);
            }
          }

          .center-card-wrapper.pop-out {
            animation: cardPopOut 0.35s cubic-bezier(0.36, 0, 0.66, -0.56) forwards;
          }

          @keyframes cardPopOut {
            0% {
              opacity: 1;
              transform: scale(1) translateY(0) rotateX(0deg);
            }
            100% {
              opacity: 0;
              transform: scale(0.7) translateY(30px) rotateX(-20deg);
            }
          }

          .center-card-wrapper .work-card {
            margin: 0;
            height: auto;
            min-height: 400px;
            background: rgba(10, 10, 10, 0.5);
            backdrop-filter: blur(20px) saturate(200%);
            -webkit-backdrop-filter: blur(20px) saturate(200%);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 
              0 16px 48px rgba(0, 0, 0, 0.5),
              inset 0 1px 0 0 rgba(255, 255, 255, 0.1),
              0 0 0 1px rgba(255, 255, 255, 0.05);
            transform: translateY(0) scale(1);
            opacity: 1;
          }

          body.light-mode .project-name-item h4 {
            color: #6c6c6c;
          }

          body.light-mode .project-name-item:hover h4 {
            color: #E76F51;
          }

          body.light-mode .project-name-item.active {
            background: rgba(231, 111, 81, 0.12);
            border-color: #E76F51;
          }

          body.light-mode .project-name-item.active h4 {
            color: #E76F51;
          }

          body.light-mode .center-placeholder {
            color: #9a9a9a;
            border-color: #d0d0d0;
            background: rgba(0, 0, 0, 0.02);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
          }

          body.light-mode .center-card-wrapper .work-card {
            background: rgba(255, 255, 255, 0.6);
            backdrop-filter: blur(20px) saturate(200%);
            -webkit-backdrop-filter: blur(20px) saturate(200%);
            border: 1px solid rgba(0, 0, 0, 0.1);
            box-shadow: 
              0 16px 48px rgba(31, 38, 135, 0.15),
              inset 0 1px 0 0 rgba(255, 255, 255, 0.8),
              0 0 0 1px rgba(0, 0, 0, 0.05);
          }
        }

        @media (max-width: 768px) {
          .desktop-layout {
            display: none;
          }
        }

        @media (min-width: 769px) {
          .mobile-carousel {
            display: none;
          }
        }

        @media (max-width: 1024px) {
          #projects {
            padding: 0 20px;
          }
          .prj-header {
            margin-bottom: 48px;
          }
          .work-filters {
            margin-bottom: 36px;
          }
          .carousel-outer {
            padding: 0 22px;
          }
          .carousel-arrow-prev {
            left: -11px;
          }
          .carousel-arrow-next {
            right: -11px;
          }
          .prj-animate .carousel-slide:nth-child(2n + 1) .work-card {
            transition-delay: 0.30s;
          }
          .prj-animate .carousel-slide:nth-child(2n + 2) .work-card {
            transition-delay: 0.44s;
          }
        }

        @media (max-width: 768px) {
          #projects {
            padding: 0 16px;
          }
          .section-divider {
            margin: 40px 0;
          }
          .prj-header {
            margin-bottom: 40px;
          }
          .work-filters {
            gap: 8px;
            margin-bottom: 28px;
            flex-wrap: wrap;
          }
          .work-filter-btn {
            padding: 6px 14px;
            font-size: 12px;
          }
          .carousel-outer {
            padding: 0 20px;
          }
          .carousel-arrow {
            width: 36px;
            height: 36px;
          }
          .carousel-arrow-prev {
            left: -18px;
          }
          .carousel-arrow-next {
            right: -18px;
          }
          .carousel-slide {
            padding: 0 8px;
          }
          .work-card {
            padding: 20px;
          }
          .work-card-title {
            font-size: 16px;
          }
          .work-card-desc {
            font-size: 13px;
          }
          .prj-animate .carousel-slide .work-card {
            transition-delay: 0.30s;
          }
        }

        @media (max-width: 640px) {
          .carousel-arrow {
            display: none;
          }
          .carousel-outer {
            padding: 0;
          }
        }

        @media (max-width: 480px) {
          #projects {
            padding: 0 12px;
          }
          .section-divider {
            margin: 32px 0;
          }
          .prj-header {
            margin-bottom: 24px;
            padding: 0;
          }
          .work-filters {
            gap: 6px;
            margin-bottom: 20px;
          }
          .work-filter-btn {
            padding: 5px 10px;
            font-size: 11px;
            border-radius: 30px;
            letter-spacing: 0;
          }
          .carousel-slide {
            padding: 0 6px;
          }
          .work-card {
            padding: 16px 14px;
            border-radius: 16px;
          }
          .work-card-title {
            font-size: 15px;
          }
          .work-card-desc {
            font-size: 12.5px;
          }
          .work-tech-tag {
            font-size: 10px;
            padding: 4px 9px;
          }
          .carousel-dots {
            margin-top: 12px;
            gap: 6px;
          }
          .carousel-counter {
            font-size: 12px;
            margin-top: 8px;
          }
        }
      `}</style>

      <div id="projects">
        <div ref={sectionRef} className={isVisible ? "prj-animate" : ""}>
          <div className="projects-content">
            <div className="prj-header">
              <h2 className="work-title">Featured Projects</h2>
            </div>

            <div className="prj-filters-wrap">
              <div className="work-filters">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    className={`work-filter-btn ${activeCategory === cat ? "active" : ""
                      }`}
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

            {/* Desktop Layout: Names on sides, card in center */}
            {!isMobile && (
              <div className="prj-carousel-wrap desktop-layout">
                {/* Left Column */}
                <div className="project-list left">
                  {leftProjects.map((project) => (
                    <div
                      key={project.id}
                      className={`project-name-item ${
                        displayedProject?.id === project.id ? "active" : ""
                      }`}
                      onMouseEnter={() => handleProjectHover(project)}
                      onMouseLeave={handleProjectLeave}
                    >
                      <h4>{project.title}</h4>
                    </div>
                  ))}
                </div>

                {/* Center Card Display */}
                <div className="center-card-display">
                  {displayedProject ? (
                    <div 
                      className="center-card-wrapper"
                      key={displayedProject.id}
                      onMouseEnter={handleCardHover}
                      onMouseLeave={handleCardLeave}
                    >
                      <ProjectCard
                        project={displayedProject}
                        expandedTech={expandedTech}
                        toggleTechExpand={toggleTechExpand}
                      />
                    </div>
                  ) : (
                    <div className="center-placeholder">
                      Hover over a project name to preview
                    </div>
                  )}
                </div>

                {/* Right Column */}
                <div className="project-list right">
                  {rightProjects.map((project) => (
                    <div
                      key={project.id}
                      className={`project-name-item ${
                        displayedProject?.id === project.id ? "active" : ""
                      }`}
                      onMouseEnter={() => handleProjectHover(project)}
                      onMouseLeave={handleProjectLeave}
                    >
                      <h4>{project.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Mobile Carousel */}
            {isMobile && (
              <div className="prj-carousel-wrap mobile-carousel">
              <div className="carousel-outer">
                <button
                  className="carousel-arrow carousel-arrow-prev"
                  onClick={() => goTo("prev")}
                  aria-label="Previous projects"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>

                <div
                  className="carousel-viewport"
                  onMouseEnter={handleTrackEnter}
                  onMouseLeave={handleTrackLeave}
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >
                  <div
                    className="carousel-track"
                    style={{
                      transform: `translateX(${translateX}%)`,
                      "--cpv": cardsPerView,
                    }}
                  >
                    {filteredProjects.map((project) => (
                      <div
                        key={`${project.id}-${activeCategory}`}
                        className="carousel-slide"
                        style={{ "--cpv": cardsPerView }}
                      >
                        <ProjectCard
                          project={project}
                          expandedTech={expandedTech}
                          toggleTechExpand={toggleTechExpand}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  className="carousel-arrow carousel-arrow-next"
                  onClick={() => goTo("next")}
                  aria-label="Next projects"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>

              {dotCount > 1 && (
                <div className="carousel-dots">
                  {Array.from({ length: dotCount }).map((_, i) => (
                    <button
                      key={i}
                      className={`carousel-dot${i === currentIndex ? " active" : ""
                        }`}
                      onClick={() => goToIndex(i)}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              )}

              <p className="carousel-counter">
                <span>{Math.min(currentIndex + cardsPerView, total)}</span>{" "}
                / {total} projects
              </p>
            </div>
            )}
          </div>
        </div>

        <div className="section-divider"></div>
      </div>
    </>
  );
}

// Image Slideshow Component
function ImageSlideshow({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const slideIntervalRef = useRef(null);

  useEffect(() => {
    if (images && images.length > 1) {
      slideIntervalRef.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 2500); // Change image every 2.5 seconds

      return () => clearInterval(slideIntervalRef.current);
    }
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className="project-image-slideshow">
      <div className="slideshow-images">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Project screenshot ${idx + 1}`}
            className={`slideshow-image ${idx === currentImageIndex ? "active" : ""}`}
          />
        ))}
      </div>
      {images.length > 1 && (
        <div className="slideshow-indicators">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`slideshow-dot ${idx === currentImageIndex ? "active" : ""}`}
              onClick={() => setCurrentImageIndex(idx)}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Extracted ProjectCard Component
function ProjectCard({ project, expandedTech, toggleTechExpand }) {
  const isExpanded = expandedTech[project.id];
  const displayTech = isExpanded ? project.tech : project.tech.slice(0, 4);
  const hasMoreTech = project.tech.length > 4 && !isExpanded;

  return (
    <div className="work-card">
      {project.images && project.images.length > 0 && (
        <ImageSlideshow images={project.images} />
      )}
      
      <h3 className="work-card-title">{project.title}</h3>
      <p className="work-card-desc">{project.description}</p>

      <div className="work-card-tech">
        {displayTech.map((t, techIdx) => (
          <span
            key={t}
            className={`work-tech-tag${isExpanded && techIdx >= 4 ? " tech-tag-new" : ""
              }`}
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
      ) : (
        <span
          className="work-card-link"
          style={{ opacity: 0.6, cursor: "default" }}
        >
          Private Repository
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
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
}