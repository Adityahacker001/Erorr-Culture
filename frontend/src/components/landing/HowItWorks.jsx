import React from 'react';
import { motion } from 'framer-motion';
import { FileEdit, Cpu, CheckCircle2 } from 'lucide-react';
import './Landing.css';

const HowItWorks = () => {
  const steps = [
    {
      step: '01',
      title: 'Submit Request',
      description:
        'Fill out a simple form with details about your request and submit it.',
      color: 'purple',
      icon: FileEdit,
    },
    {
      step: '02',
      title: 'We Process',
      description:
        'Our AI system analyzes and assigns your request to the right department.',
      color: 'orange',
      icon: Cpu,
    },
    {
      step: '03',
      title: 'Get Resolved',
      description:
        'Track progress in real-time and get notified when it\'s completed.',
      color: 'green',
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="how-it-works" className="how-it-works-section">
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
            How <span className="gradient-text-purple-blue">CampusCare</span> Works
          </h2>
          <p className="section-subtitle">
            Three simple steps to get your campus requests resolved.
          </p>
        </motion.div>

        {/* Timeline Process */}
        <div className="process-timeline-container">
          <div className="process-connector-line" />

          <div className="process-steps-grid">
            {steps.map((stepItem, index) => {
              const Icon = stepItem.icon;
              return (
                <motion.div
                  key={stepItem.step}
                  className={`process-step-item ${stepItem.color}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="process-icon-circle">
                    <Icon size={38} />
                  </div>
                  <span className="step-number-tag">{stepItem.step}</span>
                  <h3 className="step-title">{stepItem.title}</h3>
                  <p className="step-description">{stepItem.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
