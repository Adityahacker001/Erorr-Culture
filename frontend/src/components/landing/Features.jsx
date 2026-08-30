import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Activity,
  Cpu,
  BarChart2,
  ArrowRight,
  Layers,
  Building2,
  Users2,
  Smile,
} from 'lucide-react';
import './Landing.css';

const Features = () => {
  const featureList = [
    {
      id: 1,
      title: 'Easy Request',
      description:
        'Submit any campus request in seconds with a simple and intuitive interface.',
      color: 'purple',
      icon: Sparkles,
    },
    {
      id: 2,
      title: 'Real-time Tracking',
      description:
        'Track the status of your request in real-time and get notified at every update.',
      color: 'orange',
      icon: Activity,
    },
    {
      id: 3,
      title: 'Smart Assignment',
      description:
        'AI-powered system assigns requests to the right department instantly.',
      color: 'blue',
      icon: Cpu,
    },
    {
      id: 4,
      title: 'Data-Driven Insights',
      description:
        'Analytics and reports to help administrators make smarter decisions.',
      color: 'green',
      icon: BarChart2,
    },
  ];

  const statsList = [
    {
      value: '10K+',
      label: 'Requests Resolved',
      icon: Layers,
      color: 'purple',
    },
    {
      value: '50+',
      label: 'Departments',
      icon: Building2,
      color: 'orange',
    },
    {
      value: '5K+',
      label: 'Active Users',
      icon: Users2,
      color: 'blue',
    },
    {
      value: '98%',
      label: 'Satisfaction Rate',
      icon: Smile,
      color: 'green',
    },
  ];

  return (
    <section id="features" className="features-section">
      {/* Glowing Horizon Line */}
      <div className="horizon-glow-line" />

      <div className="container">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <h2 className="section-heading">
            Why <span className="gradient-text-purple-blue">CampusCare?</span>
          </h2>
          <p className="section-subtitle">
            A smart, simple, and efficient way to manage campus requests and operations.
          </p>
        </motion.div>

        {/* 4 Feature Cards Grid */}
        <div className="features-grid">
          {featureList.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.id}
                className={`feature-card ${feat.color}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`feature-icon-box ${feat.color}`}>
                  <Icon size={24} />
                </div>
                <h3 className="feature-title">{feat.title}</h3>
                <p className="feature-description">{feat.description}</p>
                <div className="feature-arrow-btn">
                  <ArrowRight size={16} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 4 Statistics Horizontal Glass Bar */}
        <motion.div
          className="stats-bar-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {statsList.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="stat-item">
                <div className={`stat-icon-wrapper ${stat.color}`}>
                  <Icon size={24} />
                </div>
                <div className="stat-info">
                  <span className="stat-number">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
