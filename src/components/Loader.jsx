// Loader.jsx
import { useEffect, useState } from "react";
import logo from "../assets/Logo.png";

export default function Loader({ onLoadingComplete, theme, isThemeLoaded }) {
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Only start loading animation after theme is loaded
    if (!isThemeLoaded) return;

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        if (onLoadingComplete) onLoadingComplete();
      }, 500);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [onLoadingComplete, isThemeLoaded]);

  // Don't render until theme is loaded to prevent flash
  if (!isThemeLoaded) {
    return null;
  }

  return (
    <>
      <style>{`
        @keyframes pulseOpacity {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes pulseScale {
          0%, 100% {
            transform: scale(0.95);
          }
          50% {
            transform: scale(1.08);
          }
        }

        @keyframes glowPulse {
          0%, 100% {
            filter: drop-shadow(0 0 10px rgba(231, 111, 81, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 30px rgba(231, 111, 81, 0.6));
          }
        }

        @keyframes textGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes fadeOutLoader {
          from {
            opacity: 1;
            visibility: visible;
          }
          to {
            opacity: 0;
            visibility: hidden;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        /* Dark Theme Styles */
        .loader-container.dark {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
        }

        .loader-container.dark .loading-bar-bg {
          background: rgba(231, 111, 81, 0.2);
        }

        .loader-container.dark .loading-bar-fill {
          background: linear-gradient(90deg, #E76F51, #F4A261, #E9C46A);
        }

        .loader-container.dark .tagline {
          color: rgba(231, 111, 81, 0.6);
        }

        .loader-container.dark .loader-text {
          background: linear-gradient(135deg, #E76F51, #F4A261, #E9C46A, #E76F51);
          background-size: 300% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .loader-container.dark .dot {
          background: #E76F51;
        }

        .loader-container.dark .loading-percentage {
          color: #E76F51;
        }

        /* Light Theme Styles */
        .loader-container.light {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
        }

        .loader-container.light .loading-bar-bg {
          background: rgba(231, 111, 81, 0.1);
        }

        .loader-container.light .tagline {
          color: rgba(231, 111, 81, 0.5);
        }

        .loader-container.light .loader-text {
          background: linear-gradient(135deg, #E76F51, #F4A261, #E9C46A, #E76F51);
          background-size: 300% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .loader-container.light .dot {
          background: #E76F51;
        }

        .loader-container.light .loading-bar-fill {
          background: linear-gradient(90deg, #E76F51, #F4A261, #E9C46A);
        }

        .loader-container.light .loading-percentage {
          color: #E76F51;
        }

        /* Common Styles */
        .loader-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
        }

        .loader-container.fade-out {
          animation: fadeOutLoader 0.5s ease-in-out forwards;
        }

        .loader-content {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
        }

        .logo-wrapper {
          animation: bounce 2s ease-in-out infinite;
        }

        .logo-image {
          width: 120px;
          height: 120px;
          object-fit: contain;
          animation: pulseScale 2s ease-in-out infinite, glowPulse 2s ease-in-out infinite;
          border-radius: 50%;
        }

        .text-wrapper {
          position: relative;
          overflow: hidden;
        }

        .loader-text {
          font-family: 'Jost', sans-serif;
          font-size: 36px;
          font-weight: 800;
          background-size: 300% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          animation: pulseOpacity 2s ease-in-out infinite, textGradient 3s ease infinite;
          letter-spacing: 3px;
          text-transform: uppercase;
          position: relative;
        }

        .dot-container {
          display: inline-block;
          margin-left: 5px;
        }

        .dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin: 0 2px;
          animation: pulseOpacity 1.5s ease-in-out infinite;
        }

        .dot:nth-child(1) {
          animation-delay: 0s;
        }

        .dot:nth-child(2) {
          animation-delay: 0.3s;
        }

        .dot:nth-child(3) {
          animation-delay: 0.6s;
        }

        .loading-container {
          width: 250px;
          margin-top: 20px;
        }

        .loading-bar-bg {
          width: 100%;
          height: 4px;
          border-radius: 4px;
          overflow: hidden;
        }

        .loading-bar-fill {
          height: 100%;
          width: 0%;
          border-radius: 4px;
          transition: width 0.1s linear;
          position: relative;
          overflow: hidden;
        }

        .loading-bar-fill::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 255, 255, 0.3), 
            transparent
          );
          animation: shimmer 1.5s infinite;
        }

        .loading-percentage {
          text-align: center;
          margin-top: 12px;
          font-family: 'Jost', sans-serif;
          font-size: 14px;
          font-weight: 500;
          animation: pulseOpacity 1.5s ease-in-out infinite;
        }

        .tagline {
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-top: 10px;
          animation: pulseOpacity 2s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .logo-image {
            width: 90px;
            height: 90px;
          }
          .loader-text {
            font-size: 24px;
            letter-spacing: 2px;
          }
          .loading-container {
            width: 200px;
          }
          .tagline {
            font-size: 10px;
          }
        }
      `}</style>

      <div className={`loader-container ${theme} ${fadeOut ? 'fade-out' : ''}`}>
        <div className="loader-content">
          <div className="logo-wrapper">
            <img src={logo} alt="Prajin Singh Logo" className="logo-image" />
          </div>
          <div className="text-wrapper">
            <span className="loader-text">
              PRAJIN SINGH
            </span>
          </div>
          <div className="loading-container">
            <div className="loading-bar-bg">
              <div 
                className="loading-bar-fill" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="loading-percentage">
              {progress}%
            </div>
          </div>
          <div className="tagline">
            Building digital experiences
          </div>
        </div>
      </div>
    </>
  );
}