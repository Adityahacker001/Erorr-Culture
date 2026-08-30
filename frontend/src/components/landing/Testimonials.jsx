import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import studentImg from '../../assets/images/student_role.jpg';
import staffImg from '../../assets/images/staff_role.jpg';
import adminImg from '../../assets/images/admin_role.jpg';
import './Landing.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote:
        'CampusCare has made reporting issues so easy. I now know how I can track the status in real-time and get updates instantly.',
      name: 'Priya Sharma',
      role: 'B.Tech Student',
      rating: 5,
      avatar: studentImg,
    },
    {
      id: 2,
      quote:
        'Honestly, it\'s so much easier to manage requests now. The dashboard is intuitive and saves us a lot of time.',
      name: 'Rajesh Kumar',
      role: 'Maintenance Staff',
      rating: 5,
      avatar: staffImg,
    },
    {
      id: 3,
      quote:
        'The analytics and reports help us identify patterns and improve campus facilities continuously.',
      name: 'Dr. Anil Verma',
      role: 'Administrator',
      rating: 5,
      avatar: adminImg,
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <h2 className="section-heading">
            What Our <span className="gradient-text-purple-blue">Users Say</span>
          </h2>
          <p className="section-subtitle">Real feedback from real people</p>
        </motion.div>

        {/* Carousel & Cards Wrapper */}
        <div className="testimonials-carousel-wrapper">
          <button
            className="carousel-nav-btn prev"
            onClick={handlePrev}
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="testimonials-grid">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.id}
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div>
                  <Quote className="quote-icon" />
                  <p className="testimonial-quote">"{item.quote}"</p>
                </div>

                <div className="testimonial-author-row">
                  <div className="author-info-group">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="author-avatar"
                    />
                    <div className="author-details">
                      <span className="author-name">{item.name}</span>
                      <span className="author-role">{item.role}</span>
                    </div>
                  </div>

                  <div className="author-stars">
                    {[...Array(item.rating)].map((_, sIdx) => (
                      <Star
                        key={sIdx}
                        size={14}
                        fill="#eab308"
                        stroke="#eab308"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            className="carousel-nav-btn next"
            onClick={handleNext}
            aria-label="Next Testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="testimonial-dots">
          {testimonials.map((_, dotIdx) => (
            <span
              key={dotIdx}
              className={`dot-indicator ${currentIndex === dotIdx ? 'active' : ''}`}
              onClick={() => setCurrentIndex(dotIdx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
