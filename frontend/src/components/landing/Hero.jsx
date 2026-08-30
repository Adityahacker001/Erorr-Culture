import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Play,
  Star,
  Search,
  Bell,
  ChevronDown,
  LayoutDashboard,
  Inbox,
  Building2,
  Users,
  BarChart3,
  Settings,
  FileText,
  Clock,
  RotateCw,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';
import adminImg from '../../assets/images/admin_role.jpg';
import studentImg from '../../assets/images/student_role.jpg';
import staffImg from '../../assets/images/staff_role.jpg';
import './Landing.css';

/* ─── animation variants ─────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] } },
});
const fadeRight = {
  hidden: { opacity: 0, x: 48, scale: 0.96 },
  show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const Hero = () => {
  const [activeMenu, setActiveMenu] = useState('Dashboard');

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Requests', icon: Inbox },
    { name: 'Departments', icon: Building2 },
    { name: 'Users', icon: Users },
    { name: 'Analytics', icon: BarChart3 },
    { name: 'Notifications', icon: Bell },
    { name: 'Settings', icon: Settings },
  ];

  const stats = [
    { label: 'Total Requests', value: '2,145', pct: '+12.5%', icon: FileText, color: 'purple' },
    { label: 'Pending Requests', value: '320', pct: '+8.2%', icon: Clock, color: 'orange' },
    { label: 'In Progress', value: '180', pct: '+5.6%', icon: RotateCw, color: 'blue' },
    { label: 'Resolved', value: '1,645', pct: '+16.3%', icon: CheckCircle2, color: 'green' },
  ];

  return (
    <section id="home" className="hero-section">

      {/* ── Background atmosphere ── */}
      <div className="hero-bg-orb hero-bg-orb--purple" />
      <div className="hero-bg-orb hero-bg-orb--blue" />
      <div className="hero-bg-orb hero-bg-orb--pink" />
      <div className="hero-bg-orb hero-bg-orb--cyan" />

      {/* ── Floating decorations ── */}
      <motion.span className="deco-sphere deco-sphere--purple"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.span className="deco-sphere deco-sphere--blue"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.span className="deco-crystal"
        animate={{ rotate: [18, 32, 18], y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      {/* ── Main hero grid ── */}
      <div className="hero-container">
        <div className="hero-grid">

          {/* ════ LEFT: marketing content ════ */}
          <motion.div className="hero-left" variants={fadeUp(0)} initial="hidden" animate="show">

            {/* Pill badge */}
            <motion.div className="hero-badge" variants={fadeUp(0.05)} initial="hidden" animate="show">
              <span className="hero-badge__dot" />
              <span>Connected Campus. Smarter Tomorrow.</span>
            </motion.div>

            {/* Heading */}
            <motion.h1 className="hero-heading" variants={fadeUp(0.15)} initial="hidden" animate="show">
              One Platform.<br />
              Every Campus<br />
              <span className="hero-heading--magenta">Limitless</span><br />
              <span className="hero-heading--aurora">Possibilities.</span>
            </motion.h1>

            {/* Description */}
            <motion.p className="hero-desc" variants={fadeUp(0.25)} initial="hidden" animate="show">
              Empowering students, staff, and administrators with an intelligent platform
              to report, track, and resolve campus requests — efficiently and transparently.
            </motion.p>

            {/* CTA buttons */}
            <motion.div className="hero-cta-row" variants={fadeUp(0.35)} initial="hidden" animate="show">
              <a href="#features" className="btn-primary-hero">
                Explore CampusCare <ArrowRight size={17} />
              </a>
              <a href="#how-it-works" className="btn-ghost-hero">
                <span className="btn-ghost-hero__icon"><Play size={10} fill="currentColor" /></span>
                Watch Demo
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div className="hero-proof" variants={fadeUp(0.45)} initial="hidden" animate="show">
              <div className="hero-proof__avatars">
                <img src={studentImg} alt="student" className="proof-avatar" />
                <img src={staffImg}   alt="staff"   className="proof-avatar" />
                <img src={adminImg}   alt="admin"   className="proof-avatar" />
                <span className="proof-avatar proof-avatar--more">+</span>
              </div>
              <div className="hero-proof__text">
                <div className="proof-stars">
                  {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#FBBF24" stroke="#FBBF24" />)}
                </div>
                <p>Trusted by 1000+ students &amp; campus teams</p>
              </div>
            </motion.div>
          </motion.div>

          {/* ════ RIGHT: dashboard preview ════ */}
          <motion.div className="hero-right" variants={fadeRight} initial="hidden" animate="show">
            <motion.div
              className="dash-card"
              whileHover={{ y: -5, boxShadow: '0 32px 80px -12px rgba(124,58,237,0.55), 0 0 60px rgba(99,102,241,0.35)' }}
              transition={{ duration: 0.3 }}
            >
              {/* Sidebar */}
              <aside className="dash-side">
                <div className="dash-side__logo">CC</div>
                <nav className="dash-side__nav">
                  {menuItems.map(({ name, icon: Icon }) => (
                    <button
                      key={name}
                      className={`dash-nav-item ${activeMenu === name ? 'dash-nav-item--active' : ''}`}
                      onClick={() => setActiveMenu(name)}
                    >
                      <Icon size={13} />
                      <span>{name}</span>
                    </button>
                  ))}
                </nav>
              </aside>

              {/* Main content */}
              <div className="dash-body">

                {/* Header row */}
                <div className="dash-header-row">
                  <div>
                    <p className="dash-header-row__title">Welcome back, Admin 👋</p>
                    <p className="dash-header-row__sub">Here's what's happening on your campus today.</p>
                  </div>
                  <div className="dash-header-row__actions">
                    <button className="dash-icon-btn"><Search size={13} /></button>
                    <button className="dash-icon-btn dash-icon-btn--notif">
                      <Bell size={13} />
                      <span className="notif-dot" />
                    </button>
                    <img src={adminImg} alt="admin" className="dash-avatar" />
                  </div>
                </div>

                {/* Stat cards */}
                <div className="dash-stats">
                  {stats.map(({ label, value, pct, icon: Icon, color }) => (
                    <div key={label} className={`dash-stat dash-stat--${color}`}>
                      <div className="dash-stat__top">
                        <span className="dash-stat__label">{label}</span>
                        <span className={`dash-stat__icon-wrap dash-stat__icon-wrap--${color}`}><Icon size={11} /></span>
                      </div>
                      <div className="dash-stat__value">{value}</div>
                      <div className={`dash-stat__pct dash-stat__pct--${color}`}>
                        <TrendingUp size={10} /> {pct}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Charts row */}
                <div className="dash-charts">

                  {/* Area chart */}
                  <div className="dash-panel">
                    <div className="dash-panel__head">
                      <span className="dash-panel__title">Requests Overview</span>
                      <div className="dash-panel__pill">This Week <ChevronDown size={11} /></div>
                    </div>
                    <div className="dash-chart-area">
                      <div className="chart-yaxis">
                        {['1000','750','500','250','0'].map(v => <span key={v}>{v}</span>)}
                      </div>
                      <div className="chart-plot">
                        <svg viewBox="0 0 280 90" preserveAspectRatio="none" className="chart-svg">
                          <defs>
                            <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%"   stopColor="#c026d3" stopOpacity="0.55"/>
                              <stop offset="60%"  stopColor="#7c3aed" stopOpacity="0.22"/>
                              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0"/>
                            </linearGradient>
                            <linearGradient id="lineStroke" x1="0" y1="0" x2="1" y2="0">
                              <stop offset="0%"   stopColor="#38bdf8"/>
                              <stop offset="40%"  stopColor="#8b5cf6"/>
                              <stop offset="75%"  stopColor="#d946ef"/>
                              <stop offset="100%" stopColor="#f43f5e"/>
                            </linearGradient>
                          </defs>
                          {/* grid */}
                          {[8,26,44,62,80].map(y => (
                            <line key={y} x1="0" y1={y} x2="280" y2={y} stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3"/>
                          ))}
                          {/* area */}
                          <path d="M0 78 C40 70,70 50,110 36 S160 32,200 44 S240 14,280 36 L280 90 L0 90Z"
                            fill="url(#areaFill)"/>
                          {/* line */}
                          <path d="M0 78 C40 70,70 50,110 36 S160 32,200 44 S240 14,280 36"
                            fill="none" stroke="url(#lineStroke)" strokeWidth="2.8" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                    <div className="chart-xaxis">
                      {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d => <span key={d}>{d}</span>)}
                    </div>
                  </div>

                  {/* Donut chart */}
                  <div className="dash-panel">
                    <div className="dash-panel__head">
                      <span className="dash-panel__title">Top Categories</span>
                    </div>
                    <div className="donut-wrap">
                      <div className="donut-ring-wrap">
                        <svg viewBox="0 0 36 36" className="donut-svg">
                          <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="4.5"/>
                          <circle cx="18" cy="18" r="14" fill="none" stroke="#a855f7" strokeWidth="5" strokeDasharray="37 51" strokeDashoffset="0"/>
                          <circle cx="18" cy="18" r="14" fill="none" stroke="#3b82f6" strokeWidth="5" strokeDasharray="21 67" strokeDashoffset="-37"/>
                          <circle cx="18" cy="18" r="14" fill="none" stroke="#06b6d4" strokeWidth="5" strokeDasharray="16 72" strokeDashoffset="-58"/>
                          <circle cx="18" cy="18" r="14" fill="none" stroke="#10b981" strokeWidth="5" strokeDasharray="14 74" strokeDashoffset="-74"/>
                        </svg>
                        <div className="donut-center">
                          <span className="donut-center__num">2,145</span>
                          <span className="donut-center__sub">Total</span>
                        </div>
                      </div>
                      <ul className="donut-legend">
                        {[
                          { color: '#a855f7', label: 'Maintenance', pct: '42%' },
                          { color: '#3b82f6', label: 'Electrical',  pct: '24%' },
                          { color: '#06b6d4', label: 'Cleanliness', pct: '18%' },
                          { color: '#10b981', label: 'Security',    pct: '16%' },
                        ].map(({ color, label, pct }) => (
                          <li key={label} className="donut-legend__item">
                            <span className="donut-legend__dot" style={{ background: color }} />
                            <span className="donut-legend__label">{label}</span>
                            <span className="donut-legend__pct">{pct}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>{/* /dash-charts */}
              </div>{/* /dash-body */}
            </motion.div>{/* /dash-card */}
          </motion.div>{/* /hero-right */}

        </div>{/* /hero-grid */}
      </div>{/* /hero-container */}

      {/* ── Glowing curved horizon separator ── */}
      <div className="hero-horizon">
        <div className="hero-horizon__flare" />
     <svg
  className="hero-horizon__svg"
  viewBox="0 0 1440 120"
  preserveAspectRatio="none"
  mb-10
>
  <defs>

    {/* Main rainbow gradient */}
    <linearGradient
      id="horizonGrad"
      x1="0%"
      y1="0%"
      x2="100%"
      y2="0%"
    >
      <stop offset="0%" stopColor="#6D28D9" />
      <stop offset="20%" stopColor="#8B5CF6" />
      <stop offset="38%" stopColor="#D946EF" />
      <stop offset="50%" stopColor="#F43F5E" />
      <stop offset="60%" stopColor="#FB923C" />
      <stop offset="72%" stopColor="#D946EF" />
      <stop offset="86%" stopColor="#8B5CF6" />
      <stop offset="100%" stopColor="#3B82F6" />
    </linearGradient>

    {/* Strong neon glow */}
        {/* Main wave glow */}
    <filter
      id="horizonGlow"
      x="-30%"
      y="-300%"
      width="160%"
      height="700%"
    >
      <feGaussianBlur
        stdDeviation="7"
        result="blur"
      />

      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    {/* Moving colored light glow */}
    <filter
      id="movingLightGlow"
      x="-100%"
      y="-500%"
      width="300%"
      height="1100%"
    >
      <feGaussianBlur
        stdDeviation="9"
        result="blur1"
      />

      <feMerge>
        <feMergeNode in="blur1" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

  </defs>


  {/* =====================================================
      SOFT GLOW BEHIND WAVE
  ====================================================== */}

  <path
    d="
      M0 82
      C180 115, 330 100, 500 76
      C680 50, 790 50, 930 72
      C1080 96, 1200 82, 1330 55
      C1380 45, 1420 40, 1440 43
    "
    fill="none"
    stroke="url(#horizonGrad)"
    strokeWidth="12"
    opacity="0.20"
    filter="url(#horizonGlow)"
  />


  {/* =====================================================
      MAIN NEON WAVE
  ====================================================== */}

  <path
    id="horizonWave"
    d="
      M0 82
      C180 115, 330 100, 500 76
      C680 50, 790 50, 930 72
      C1080 96, 1200 82, 1330 55
      C1380 45, 1420 40, 1440 43
    "
    fill="none"
    stroke="url(#horizonGrad)"
    strokeWidth="3.5"
    strokeLinecap="round"
    filter="url(#horizonGlow)"
  />


  {/* =====================================================
      MOVING COLORED LIGHT
      Uses the SAME gradient as the wave
  ====================================================== */}

  <path
    d="
      M0 82
      C180 115, 330 100, 500 76
      C680 50, 790 50, 930 72
      C1080 96, 1200 82, 1330 55
      C1380 45, 1420 40, 1440 43
    "
    fill="none"
    stroke="url(#horizonGrad)"
    strokeWidth="4"
    strokeLinecap="round"
    strokeDasharray="25 1415"
    filter="url(#movingLightGlow)"
    opacity="0.95"
  >
    <animate
      attributeName="stroke-dashoffset"
      from="1440"
      to="0"
      dur="5s"
      repeatCount="indefinite"
    />
  </path>


  {/* =====================================================
      SOFT TRAILING COLORED LIGHT
  ====================================================== */}

  <path
    d="
      M0 82
      C180 115, 330 100, 500 76
      C680 50, 790 50, 930 72
      C1080 96, 1200 82, 1330 55
      C1380 45, 1420 40, 1440 43
    "
    fill="none"
    stroke="url(#horizonGrad)"
    strokeWidth="4"
    strokeLinecap="round"
    strokeDasharray="25 1415"
    filter="url(#movingLightGlow)"
    opacity="0.45"
  >
    <animate
      attributeName="stroke-dashoffset"
      from="1440"
      to="0"
      dur="5s"
      repeatCount="indefinite"
    />
  </path>


</svg>
</div>
    </section>
  );
};

export default Hero;
