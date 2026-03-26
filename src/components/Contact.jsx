// Contact.jsx
import { useState, useRef } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false,
    error: null,
  });

  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, loading: true, error: null });

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setFormStatus({ submitted: true, loading: false, error: null });
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus((prev) => ({ ...prev, submitted: false }));
      }, 5000);
    } catch (error) {
      setFormStatus({ submitted: false, loading: false, error: "Something went wrong. Please try again." });
    }
  };

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://facebook.com/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://instagram.com/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/prajinsingh/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      url: "https://github.com/Prazeen7",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700;800&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        @keyframes fadeUpContact {
          from {
            opacity: 0;
            transform: translateY(36px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        .contact-section {
          width: 100%;
          background: #fffcf8;
          font-family: 'Jost', sans-serif;
          position: relative;
          overflow-x: hidden;
        }

        .contact-container {
          max-width: 1300px;
          width: 100%;
          margin: 0 auto;
          padding: 80px 64px 100px;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 64px;
          opacity: 0;
          animation: fadeUpContact 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .contact-badge {
          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #b8aa9a;
          font-weight: 500;
          margin-bottom: 12px;
          display: inline-block;
        }

        .contact-title {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 700;
          color: #2c2820;
          margin: 0 0 16px 0;
          letter-spacing: -0.02em;
        }

        .contact-sub {
          font-size: 18px;
          color: #6b6258;
          max-width: 580px;
          margin: 0 auto;
          line-height: 1.5;
          font-weight: 400;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        /* Social Section */
        .social-section {
          opacity: 0;
          animation: slideInLeft 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.2s forwards;
        }

        .social-title {
          font-size: 28px;
          font-weight: 600;
          color: #2c2820;
          margin: 0 0 16px 0;
        }

        .social-description {
          font-size: 16px;
          color: #6b6258;
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .social-icons {
          display: flex;
          gap: 18px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }

        .social-icon-link {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: white;
          border: 1px solid #e0dad2;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          color: #5e554b;
          text-decoration: none;
        }

        .social-icon-link:hover {
          transform: translateY(-4px);
          border-color: #2c2820;
          color: #2c2820;
          background: #f6f2ec;
        }

        .social-icon-link svg {
          width: 22px;
          height: 22px;
        }

        .contact-info {
          margin-top: 0;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .contact-info-item {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .contact-info-icon {
          width: 48px;
          height: 48px;
          background: #f3efe9;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #5e554b;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .contact-info-item:hover .contact-info-icon {
          background: #2c2820;
          color: white;
          transform: scale(1.05);
        }

        .contact-info-icon svg {
          width: 20px;
          height: 20px;
        }

        .contact-info-text {
          flex: 1;
        }

        .contact-info-text h4 {
          font-size: 12px;
          font-weight: 600;
          color: #b8aa9a;
          margin: 0 0 4px 0;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .contact-info-text p {
          font-size: 16px;
          font-weight: 500;
          color: #2c2820;
          margin: 0;
          word-break: break-word;
        }

        .contact-info-text a {
          color: #2c2820;
          text-decoration: none;
          transition: color 0.2s;
        }

        .contact-info-text a:hover {
          color: #b8aa9a;
        }

        /* Form Section */
        .form-section {
          background: white;
          padding: 40px;
          border-radius: 24px;
          border: 1px solid #eee8e2;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
          opacity: 0;
          animation: slideInRight 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.3s forwards;
          width: 100%;
          box-sizing: border-box;
        }

        .form-group {
          margin-bottom: 24px;
        }

        .form-label {
          display: block;
          font-size: 14px;
          font-weight: 500;
          color: #5e554b;
          margin-bottom: 8px;
          letter-spacing: 0.02em;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 12px 16px;
          font-size: 15px;
          font-family: 'Jost', sans-serif;
          border: 1.5px solid #e8e2da;
          border-radius: 12px;
          background: #fefcf9;
          transition: all 0.2s ease;
          color: #2c2820;
          outline: none;
          box-sizing: border-box;
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: #b8aa9a;
          background: white;
          box-shadow: 0 0 0 3px rgba(184, 170, 154, 0.08);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          width: 100%;
          padding: 14px 28px;
          background: #2c2820;
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          font-family: 'Jost', sans-serif;
          cursor: pointer;
          transition: all 0.25s ease;
          margin-top: 8px;
          box-sizing: border-box;
        }

        .submit-btn:hover:not(:disabled) {
          background: #1e1b16;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .submit-btn:active:not(:disabled) {
          transform: translateY(0);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .success-message {
          background: #e8f5e9;
          color: #2e7d32;
          padding: 12px 16px;
          border-radius: 10px;
          margin-bottom: 20px;
          font-size: 14px;
          text-align: center;
          font-weight: 500;
        }

        .error-message {
          background: #ffebee;
          color: #c62828;
          padding: 12px 16px;
          border-radius: 10px;
          margin-bottom: 20px;
          font-size: 14px;
          text-align: center;
          font-weight: 500;
        }

        .loading-spinner {
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
          margin-right: 8px;
          vertical-align: middle;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .contact-container {
            padding: 60px 40px 80px;
          }
          .contact-content {
            gap: 48px;
          }
          .form-section {
            padding: 32px;
          }
        }

        @media (max-width: 768px) {
          .contact-container {
            padding: 48px 24px 60px;
          }
          .contact-content {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .social-section {
            text-align: center;
          }
          .social-icons {
            justify-content: center;
          }
          .contact-info {
            align-items: center;
          }
          .contact-info-item {
            width: 100%;
            max-width: 380px;
          }
          .form-section {
            padding: 28px;
          }
        }

        @media (max-width: 480px) {
          .contact-container {
            padding: 40px 20px 50px;
          }
          .contact-header {
            margin-bottom: 40px;
          }
          .form-section {
            padding: 24px;
          }
          .social-icon-link {
            width: 48px;
            height: 48px;
          }
          .social-icon-link svg {
            width: 20px;
            height: 20px;
          }
          .contact-info-icon {
            width: 44px;
            height: 44px;
          }
          .contact-info-text p {
            font-size: 14px;
          }
          .contact-title {
            font-size: 28px;
          }
          .contact-sub {
            font-size: 16px;
          }
        }
      `}</style>

      <section className="contact-section" id="contact">
        <div className="contact-container">
          <div className="contact-header">
            <span className="contact-badge">✦ GET IN TOUCH</span>
            <h2 className="contact-title">Let's Connect</h2>
            <p className="contact-sub">
              Have a project in mind or just want to say hello? I'd love to hear from you.
            </p>
          </div>

          <div className="contact-content">
            {/* Social & Contact Info Section */}
            <div className="social-section">
              <h3 className="social-title">Connect with me</h3>
              <p className="social-description">
                Feel free to reach out through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to collaborate.
              </p>

              <div className="social-icons">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-link"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 6L12 13L2 6M22 6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6l10 7l10-7z" stroke="currentColor" fill="none" />
                    </svg>
                  </div>
                  <div className="contact-info-text">
                    <h4>EMAIL</h4>
                    <p>
                      <a href="mailto:prajin.singh9@gmail.com">prajin.singh9@gmail.com</a>
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" fill="none" />
                    </svg>
                  </div>
                  <div className="contact-info-text">
                    <h4>PHONE</h4>
                    <p>
                      <a href="tel:+9779803222093">+977-9803222093</a>
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" fill="none" />
                      <circle cx="12" cy="10" r="3" stroke="currentColor" fill="none" />
                    </svg>
                  </div>
                  <div className="contact-info-text">
                    <h4>LOCATION</h4>
                    <p>Kathmandu, Nepal</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="form-section">
              <form ref={formRef} onSubmit={handleSubmit}>
                {formStatus.submitted && (
                  <div className="success-message">
                    ✨ Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                
                {formStatus.error && (
                  <div className="error-message">
                    ⚠️ {formStatus.error}
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="John Doe"
                    disabled={formStatus.loading}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="john@example.com"
                    disabled={formStatus.loading}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-textarea"
                    placeholder="Your message here..."
                    disabled={formStatus.loading}
                  />
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={formStatus.loading}
                >
                  {formStatus.loading ? (
                    <>
                      <span className="loading-spinner"></span>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}