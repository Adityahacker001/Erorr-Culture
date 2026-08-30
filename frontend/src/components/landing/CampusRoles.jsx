import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Wrench,
  ShieldCheck,
  Check,
  ArrowRight,
} from 'lucide-react';
import studentImg from '../../assets/images/student_role.jpg';
import staffImg from '../../assets/images/staff_role.jpg';
import adminImg from '../../assets/images/admin_role.jpg';
import './Landing.css';

const CampusRoles = () => {
  const roles = [
    {
      id: 'students',
      title: 'For Students',
      color: 'purple',
      icon: GraduationCap,
      description:
        'Report issues, track progress, and stay informed — all in one place.',
      bullets: [
        'Easy request submission',
        'Real-time tracking',
        'Instant notifications',
        'Feedback & ratings',
      ],
      image: studentImg,
      imageAlt: 'College Student with Smartphone',
    },
    {
      id: 'staff',
      title: 'For Staff',
      color: 'orange',
      icon: Wrench,
      description:
        'Manage assigned requests, update status, and communicate with students efficiently.',
      bullets: [
        'Assigned request management',
        'Status updates',
        'Student communication',
        'Performance tracking',
      ],
      image: staffImg,
      imageAlt: 'Campus Staff with Tablet',
    },
    {
      id: 'administrators',
      title: 'For Administrators',
      color: 'blue',
      icon: ShieldCheck,
      description:
        'Oversee all campus operations, monitor performance, and make data-driven decisions.',
      bullets: [
        'Analytics & insights',
        'Department Management',
        'User Management',
        'System Overview',
      ],
      image: adminImg,
      imageAlt: 'University Administrator in Suit',
    },
  ];

  return (
    <section id="roles" className="roles-section">
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
            Made for <span className="gradient-text-purple-blue">Every Campus Role</span>
          </h2>
          <p className="section-subtitle">
            Tailored experiences for students, staff, and administrators.
          </p>
        </motion.div>

        {/* 3 Role Cards Grid */}
        <div className="roles-grid">
          {roles.map((role, idx) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={role.id}
                className={`role-card ${role.color}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                {/* Header */}
                <div className="role-header">
                  <div className={`role-icon-box ${role.color}`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="role-card-title">{role.title}</h3>
                </div>

                {/* Summary */}
                <p className="role-summary">{role.description}</p>

                {/* Feature Bullets */}
                <ul className="role-feature-list">
                  {role.bullets.map((item, bIdx) => (
                    <li key={bIdx} className="role-feature-item">
                      <div className={`check-bullet ${role.color}`}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom Arrow Action */}
                <div className="role-bottom-action">
                  <div className="role-arrow-circle">
                    <ArrowRight size={18} />
                  </div>
                </div>

                {/* Person Portrait in right corner */}
                <div className="role-image-wrapper">
                  <img
                    src={role.image}
                    alt={role.imageAlt}
                    className="role-person-img"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CampusRoles;
