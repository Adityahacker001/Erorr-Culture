import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Mail,
  Phone,
  ArrowUp,
} from 'lucide-react';
import './Landing.css';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="landing-footer">
      <div className="container">
        {/* Top 5-Column Grid */}
        <div className="footer-top-grid">
          {/* Brand Column */}
          <div className="footer-brand-column">
            <div className="brand-logo">
              <div className="logo-badge">CC</div>
              <div className="brand-text">
                <span className="brand-title">CampusCare</span>
                <span className="brand-subtitle">Smart Campus Management</span>
              </div>
            </div>
            <p className="footer-description">
              Empowering campuses with intelligent solutions for better management and
              stronger communities.
            </p>
            <div className="footer-social-links">
              {/* Facebook */}
              <a href="#facebook" className="social-icon-box" aria-label="Facebook">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                </svg>
              </a>
              {/* Twitter / X */}
              <a href="#twitter" className="social-icon-box" aria-label="Twitter">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#linkedin" className="social-icon-box" aria-label="LinkedIn">
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#instagram" className="social-icon-box" aria-label="Instagram">
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Platform Column */}
          <div className="footer-nav-column">
            <h4 className="footer-column-title">Platform</h4>
            <ul className="footer-link-list">
              <li className="footer-link-item">
                <a href="#home">Home</a>
              </li>
              <li className="footer-link-item">
                <a href="#about">About Us</a>
              </li>
              <li className="footer-link-item">
                <a href="#services">Services</a>
              </li>
              <li className="footer-link-item">
                <a href="#features">Features</a>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="footer-nav-column">
            <h4 className="footer-column-title">Support</h4>
            <ul className="footer-link-list">
              <li className="footer-link-item">
                <a href="#help">Help Center</a>
              </li>
              <li className="footer-link-item">
                <a href="#contact">Contact Us</a>
              </li>
              <li className="footer-link-item">
                <a href="#privacy">Privacy Policy</a>
              </li>
              <li className="footer-link-item">
                <a href="#terms">Terms of Service</a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="footer-nav-column">
            <h4 className="footer-column-title">Resources</h4>
            <ul className="footer-link-list">
              <li className="footer-link-item">
                <a href="#docs">Documentation</a>
              </li>
              <li className="footer-link-item">
                <a href="#guides">Guides</a>
              </li>
              <li className="footer-link-item">
                <a href="#blog">Blog</a>
              </li>
              <li className="footer-link-item">
                <a href="#api">API Reference</a>
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="footer-nav-column">
            <h4 className="footer-column-title">Contact Info</h4>
            <ul className="contact-info-list">
              <li className="contact-info-item">
                <MapPin size={16} className="contact-icon" />
                <span>Greenfield Institute of Technology</span>
              </li>
              <li className="contact-info-item">
                <Mail size={16} className="contact-icon" />
                <span>campuscare@gmail.com</span>
              </li>
              <li className="contact-info-item">
                <Phone size={16} className="contact-icon" />
                <span>+91 98765 43210</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>© 2024 CampusCare. All rights reserved.</p>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          className="back-to-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
