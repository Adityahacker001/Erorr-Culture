
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Features', href: '#features' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`landing-navbar-wrapper ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="container">

        <div className="navbar-content">

          {/* Brand Logo */}
          <a
            href="#home"
            className="brand-logo"
            onClick={() => setActiveTab('Home')}
          >
            <div className="logo-badge">
              CC
            </div>

            <div className="brand-text">
              <span className="brand-title">
                CampusCare
              </span>

              <span className="brand-subtitle">
                Smart Campus Management
              </span>
            </div>
          </a>


          {/* Center Navigation Links */}
          <nav>
            <ul className="nav-links-list">

              {navLinks.map((link) => (

                <li key={link.name}>

                  <a
                    href={link.href}
                    className={`nav-link-item ${
                      activeTab === link.name ? 'active' : ''
                    }`}
                    onClick={() => setActiveTab(link.name)}
                  >

                    {link.name}

                    {activeTab === link.name && (

                      <motion.div
                        layoutId="activeNavDot"
                        className="active-nav-dot"
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 30
                        }}
                      />

                    )}

                  </a>

                </li>

              ))}

            </ul>
          </nav>


          {/* Right Action Buttons */}
          <div className="nav-actions">

            {/* Sign In → Register Page */}
            <Link
              to="/register"
              className="btn-student-login"
            >
              Sign In
            </Link>


            {/* Log In → Login Page */}
            <Link
              to="/login"
              className="btn-admin-login"
            >
              <User size={15} />
              <span>
                Log In
              </span>
            </Link>

          </div>


          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >

            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}

          </button>

        </div>


        {/* Mobile Navigation Drawer */}
        <AnimatePresence>

          {mobileMenuOpen && (

            <motion.div
              initial={{
                opacity: 0,
                height: 0
              }}
              animate={{
                opacity: 1,
                height: 'auto'
              }}
              exit={{
                opacity: 0,
                height: 0
              }}
              transition={{
                duration: 0.3
              }}
              className="mobile-nav-drawer"
            >

              {/* Mobile Navigation Links */}

              {navLinks.map((link) => (

                <a
                  key={link.name}
                  href={link.href}
                  className={`nav-link-item ${
                    activeTab === link.name ? 'active' : ''
                  }`}
                  onClick={() => {
                    setActiveTab(link.name);
                    setMobileMenuOpen(false);
                  }}
                >
                  {link.name}
                </a>

              ))}


              {/* Mobile Buttons */}

              <div className="mobile-nav-buttons">

                {/* Sign In → Register */}
                <Link
                  to="/register"
                  className="btn-student-login"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </Link>


                {/* Log In → Login */}
                <Link
                  to="/login"
                  className="btn-admin-login"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <User size={15} />

                  <span>
                    Log In
                  </span>

                </Link>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>
    </motion.header>
  );
};

export default Navbar;

