import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  PlusCircle,
  Bell,
  User,
  LogOut,
  Menu,
  X,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';

import './StudentDashboard.css';

const StudentDashboard = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const student = {
    name: 'Aditya',
    email: 'student@gmail.com',
    studentId: 'STU-102'
  };

  const statistics = [
    {
      title: 'Total Complaints',
      value: '12',
      icon: FileText,
      className: 'blue'
    },
    {
      title: 'Pending',
      value: '3',
      icon: Clock,
      className: 'orange'
    },
    {
      title: 'In Progress',
      value: '4',
      icon: AlertCircle,
      className: 'purple'
    },
    {
      title: 'Resolved',
      value: '5',
      icon: CheckCircle,
      className: 'green'
    }
  ];

  const recentComplaints = [
    {
      id: 'CMP-2026-0194',
      title: 'Wi-Fi not working',
      department: 'IT Support',
      priority: 'HIGH',
      status: 'IN_PROGRESS',
      date: '01 Sep 2026'
    },
    {
      id: 'CMP-2026-0187',
      title: 'Classroom fan not working',
      department: 'Maintenance',
      priority: 'MEDIUM',
      status: 'ASSIGNED',
      date: '30 Aug 2026'
    },
    {
      id: 'CMP-2026-0179',
      title: 'Library AC issue',
      department: 'Maintenance',
      priority: 'LOW',
      status: 'RESOLVED',
      date: '27 Aug 2026'
    }
  ];

  const getStatusClass = (status) => {
    if (status === 'RESOLVED') return 'status-resolved';
    if (status === 'IN_PROGRESS') return 'status-progress';
    if (status === 'ASSIGNED') return 'status-assigned';

    return 'status-pending';
  };

  const getPriorityClass = (priority) => {
    if (priority === 'HIGH') return 'priority-high';
    if (priority === 'MEDIUM') return 'priority-medium';

    return 'priority-low';
  };

  return (
    <div className="student-dashboard">

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`student-sidebar ${
          sidebarOpen ? 'sidebar-open' : ''
        }`}
      >

        {/* Logo */}
        <div className="student-sidebar-logo">

          <div className="student-logo-badge">
            CC
          </div>

          <div>
            <h2>CampusCare</h2>
            <span>Student Portal</span>
          </div>

        </div>

        {/* Navigation */}
        <nav className="student-sidebar-nav">

          <p className="sidebar-section-title">
            MAIN MENU
          </p>

          <Link
            to="/student/dashboard"
            className="sidebar-link active"
            onClick={() => setSidebarOpen(false)}
          >
            <LayoutDashboard size={19} />
            <span>Dashboard</span>
          </Link>

          <Link
            to="/student/complaints"
            className="sidebar-link"
            onClick={() => setSidebarOpen(false)}
          >
            <FileText size={19} />
            <span>My Complaints</span>
          </Link>

          <Link
            to="/student/create-complaint"
            className="sidebar-link"
            onClick={() => setSidebarOpen(false)}
          >
            <PlusCircle size={19} />
            <span>Create Complaint</span>
          </Link>

          <p className="sidebar-section-title second-section">
            ACCOUNT
          </p>

          <Link
            to="/student/notifications"
            className="sidebar-link"
            onClick={() => setSidebarOpen(false)}
          >
            <Bell size={19} />
            <span>Notifications</span>
            <span className="notification-count">2</span>
          </Link>

          <Link
            to="/student/profile"
            className="sidebar-link"
            onClick={() => setSidebarOpen(false)}
          >
            <User size={19} />
            <span>My Profile</span>
          </Link>

        </nav>

        {/* Sidebar Bottom */}
        <div className="student-sidebar-bottom">

          <div className="student-mini-profile">

            <div className="student-avatar">
              A
            </div>

            <div>
              <strong>{student.name}</strong>
              <span>Student</span>
            </div>

          </div>

          <Link
            to="/"
            className="sidebar-logout"
          >
            <LogOut size={18} />
            <span>Log Out</span>
          </Link>

        </div>

      </aside>

      {/* MAIN CONTENT */}
      <main className="student-main">

        {/* TOP BAR */}
        <header className="student-topbar">

          <button
            className="student-mobile-menu"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={23} />
          </button>

          <div className="student-page-title">

            <span>
              STUDENT PORTAL
            </span>

            <h1>
              Dashboard
            </h1>

          </div>

          <div className="student-topbar-actions">

            <button className="notification-button">
              <Bell size={20} />

              <span className="notification-dot">
                2
              </span>
            </button>

            <div className="topbar-student">

              <div className="topbar-avatar">
                A
              </div>

              <div className="topbar-student-info">
                <strong>{student.name}</strong>
                <span>{student.studentId}</span>
              </div>

            </div>

          </div>

        </header>

        {/* CONTENT */}
        <div className="student-content">

          {/* Welcome */}
          <section className="student-welcome">

            <div>

              <span className="welcome-label">
                WELCOME BACK
              </span>

              <h2>
                Hello, {student.name} 👋
              </h2>

              <p>
                Here's an overview of your campus
                complaints and requests.
              </p>

            </div>

            <Link
              to="/student/create-complaint"
              className="create-complaint-button"
            >
              <PlusCircle size={18} />
              Create Complaint
            </Link>

          </section>

          {/* Statistics */}
          <section className="student-statistics">

            {statistics.map((stat) => {

              const Icon = stat.icon;

              return (
                <div
                  className="student-stat-card"
                  key={stat.title}
                >

                  <div
                    className={`student-stat-icon ${stat.className}`}
                  >
                    <Icon size={21} />
                  </div>

                  <div className="student-stat-info">

                    <span>
                      {stat.title}
                    </span>

                    <strong>
                      {stat.value}
                    </strong>

                  </div>

                </div>
              );
            })}

          </section>

          {/* Main Grid */}
          <div className="student-dashboard-grid">

            {/* Recent Complaints */}
            <section className="recent-complaints-card">

              <div className="section-header">

                <div>

                  <span className="section-small-title">
                    COMPLAINT ACTIVITY
                  </span>

                  <h3>
                    Recent Complaints
                  </h3>

                </div>

                <Link
                  to="/student/complaints"
                  className="view-all-link"
                >
                  View All
                  <ArrowRight size={15} />
                </Link>

              </div>

              <div className="complaints-list">

                {recentComplaints.map((complaint) => (

                  <Link
                    to={`/student/complaints/${complaint.id}`}
                    className="complaint-row"
                    key={complaint.id}
                  >

                    <div className="complaint-main">

                      <div className="complaint-icon">
                        <FileText size={18} />
                      </div>

                      <div>

                        <h4>
                          {complaint.title}
                        </h4>

                        <span>
                          {complaint.id} • {complaint.department}
                        </span>

                      </div>

                    </div>

                    <div className="complaint-meta">

                      <span
                        className={`priority-badge ${getPriorityClass(
                          complaint.priority
                        )}`}
                      >
                        {complaint.priority}
                      </span>

                      <span
                        className={`status-badge ${getStatusClass(
                          complaint.status
                        )}`}
                      >
                        {complaint.status.replace('_', ' ')}
                      </span>

                      <small>
                        {complaint.date}
                      </small>

                    </div>

                  </Link>

                ))}

              </div>

            </section>

            {/* AI CARD */}
            <section className="student-ai-card">

              <div className="ai-card-icon">
                <Sparkles size={23} />
              </div>

              <span className="ai-card-label">
                SMART COMPLAINT ASSISTANT
              </span>

              <h3>
                Let AI help route your complaint.
              </h3>

              <p>
                Describe your campus issue and
                CampusCare AI can suggest the
                category, department and priority
                before you submit it.
              </p>

              <Link
                to="/student/create-complaint"
                className="ai-card-button"
              >
                Analyze a Complaint
                <ArrowRight size={16} />
              </Link>

            </section>

          </div>

          {/* Status Journey */}
          <section className="status-journey-card">

            <div className="section-header">

              <div>

                <span className="section-small-title">
                  HOW IT WORKS
                </span>

                <h3>
                  Complaint Status Journey
                </h3>

              </div>

            </div>

            <div className="status-journey">

              <div className="journey-step completed">

                <div className="journey-icon">
                  <CheckCircle size={19} />
                </div>

                <span>
                  Submitted
                </span>

              </div>

              <div className="journey-line completed-line"></div>

              <div className="journey-step completed">

                <div className="journey-icon">
                  <CheckCircle size={19} />
                </div>

                <span>
                  Assigned
                </span>

              </div>

              <div className="journey-line active-line"></div>

              <div className="journey-step current">

                <div className="journey-icon">
                  <Clock size={19} />
                </div>

                <span>
                  In Progress
                </span>

              </div>

              <div className="journey-line"></div>

              <div className="journey-step">

                <div className="journey-icon">
                  <CheckCircle size={19} />
                </div>

                <span>
                  Resolved
                </span>

              </div>

              <div className="journey-line"></div>

              <div className="journey-step">

                <div className="journey-icon">
                  <CheckCircle size={19} />
                </div>

                <span>
                  Closed
                </span>

              </div>

            </div>

          </section>

        </div>

      </main>

    </div>
  );
};

export default StudentDashboard;