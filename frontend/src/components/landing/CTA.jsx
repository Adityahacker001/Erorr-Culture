import React from 'react';
import { motion } from 'framer-motion';
import { Send, ArrowRight } from 'lucide-react';
import studentImg from '../../assets/images/student_role.jpg';
import staffImg from '../../assets/images/staff_role.jpg';
import adminImg from '../../assets/images/admin_role.jpg';
import './Landing.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <motion.div
          className="cta-banner-card"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Left Side: Icon & Text */}
          <div className="cta-left-content">
            <div className="cta-paper-plane-icon">
              <Send size={32} />
            </div>
            <div className="cta-text-group">
              <h2 className="cta-heading">Ready to Transform Your Campus?</h2>
              <p className="cta-subtitle">
                Join thousands of campuses already using CampusCare to create smarter,
                more connected communities.
              </p>
            </div>
          </div>

          {/* Right Side: Avatars & Action Buttons */}
          <div className="cta-right-actions">
            <div className="cta-avatars-row">
              <div className="avatar-stack">
                <div
                  className="trust-avatar"
                  style={{ backgroundImage: `url(${studentImg})` }}
                  title="Student"
                />
                <div
                  className="trust-avatar"
                  style={{ backgroundImage: `url(${staffImg})` }}
                  title="Staff"
                />
                <div
                  className="trust-avatar"
                  style={{ backgroundImage: `url(${adminImg})` }}
                  title="Admin"
                />
              </div>
            </div>

            <div className="cta-button-pair">
              <a href="#student-login" className="btn-cta-primary">
                Get Started Now
              </a>
              <a href="#features" className="btn-cta-secondary">
                Learn More
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
