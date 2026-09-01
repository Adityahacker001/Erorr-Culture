import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Building2,
  BarChart3,
  Settings,
  LogOut,
  Bell,
  FileText,
  ArrowRight,
  AlertTriangle,
  UserCog,
  CheckCircle,
  Clock,
  Menu,
  X
} from "lucide-react";

import "./AdminDashboard.css";

function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const complaints = [
    {
      title: "Water Supply Issue",
      student: "Rahul Sharma",
      priority: "High",
      status: "Pending",
      date: "Today"
    },
    {
      title: "Classroom Fan Not Working",
      student: "Priya Das",
      priority: "Medium",
      status: "Assigned",
      date: "Yesterday"
    },
    {
      title: "Library Access Problem",
      student: "Arjun Roy",
      priority: "Low",
      status: "In Progress",
      date: "2 days ago"
    },
    {
      title: "Hostel Maintenance",
      student: "Sneha Gupta",
      priority: "High",
      status: "Resolved",
      date: "3 days ago"
    }
  ];

  return (
    <div className="admin-dashboard">

      {/* MOBILE OVERLAY */}
      {sidebarOpen && (
        <div
          className="admin-sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* ================= SIDEBAR ================= */}

      <aside
        className={`admin-sidebar ${
          sidebarOpen ? "admin-sidebar-open" : ""
        }`}
      >

        <div className="admin-sidebar-logo">
          <div className="admin-logo-badge">
            CC
          </div>

          <div>
            <h2>CampusCare</h2>
            <span>ADMIN PORTAL</span>
          </div>
        </div>

        <nav className="admin-sidebar-nav">

          <p className="admin-sidebar-section-title">
            MAIN MENU
          </p>

          <a
            href="/admin"
            className="admin-sidebar-link active"
          >
            <LayoutDashboard size={17} />
            <span>Dashboard</span>
          </a>

          <a
            href="/admin/users"
            className="admin-sidebar-link"
          >
            <Users size={17} />
            <span>Manage Users</span>
          </a>

          <a
            href="/admin/departments"
            className="admin-sidebar-link"
          >
            <Building2 size={17} />
            <span>Departments</span>
          </a>

          <a
            href="/admin/analytics"
            className="admin-sidebar-link"
          >
            <BarChart3 size={17} />
            <span>Analytics</span>
          </a>


          <p className="admin-sidebar-section-title admin-account-section">
            ACCOUNT
          </p>

          <a
            href="#settings"
            className="admin-sidebar-link"
          >
            <Settings size={17} />
            <span>Settings</span>
          </a>

        </nav>


        {/* SIDEBAR BOTTOM */}

        <div className="admin-sidebar-bottom">

          <div className="admin-mini-profile">

            <div className="admin-avatar">
              A
            </div>

            <div>
              <strong>Admin</strong>
              <span>Administrator</span>
            </div>

          </div>

          <a
            href="/"
            className="admin-logout-link"
          >
            <LogOut size={16} />
            <span>Logout</span>
          </a>

        </div>

      </aside>


      {/* ================= MAIN ================= */}

      <main className="admin-main">

        {/* TOPBAR */}

        <header className="admin-topbar">

          <div className="admin-page-title">

            <button
              className="admin-mobile-menu"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>

            <div>
              <span>ADMINISTRATION</span>
              <h1>Dashboard</h1>
            </div>

          </div>


          <div className="admin-topbar-actions">

            <button className="admin-notification-button">
              <Bell size={17} />

              <span className="admin-notification-count">
                4
              </span>
            </button>


            <div className="admin-topbar-profile">

              <div className="admin-topbar-avatar">
                A
              </div>

              <div className="admin-topbar-info">
                <strong>Admin</strong>
                <span>Administrator</span>
              </div>

            </div>

          </div>

        </header>


        {/* ================= CONTENT ================= */}

        <section className="admin-content">


          {/* WELCOME */}

          <div className="admin-welcome">

            <div>

              <span className="admin-welcome-label">
                CAMPUSCARE ADMIN
              </span>

              <h2>
                Welcome, Admin
              </h2>

              <p>
                Monitor campus activities and manage the complaint system.
              </p>

            </div>


            <a
              href="/admin/analytics"
              className="admin-analytics-button"
            >
              <BarChart3 size={15} />
              View Analytics
              <ArrowRight size={14} />
            </a>

          </div>


          {/* ================= STATISTICS ================= */}

          <div className="admin-statistics">

            <div className="admin-stat-card">

              <div className="admin-stat-icon blue">
                <FileText size={20} />
              </div>

              <div className="admin-stat-info">
                <span>Total Complaints</span>
                <strong>128</strong>
              </div>

            </div>


            <div className="admin-stat-card">

              <div className="admin-stat-icon orange">
                <Clock size={20} />
              </div>

              <div className="admin-stat-info">
                <span>Pending Complaints</span>
                <strong>24</strong>
              </div>

            </div>


            <div className="admin-stat-card">

              <div className="admin-stat-icon green">
                <CheckCircle size={20} />
              </div>

              <div className="admin-stat-info">
                <span>Resolved</span>
                <strong>89</strong>
              </div>

            </div>


            <div className="admin-stat-card">

              <div className="admin-stat-icon purple">
                <Users size={20} />
              </div>

              <div className="admin-stat-info">
                <span>Total Users</span>
                <strong>542</strong>
              </div>

            </div>

          </div>


          {/* ================= MAIN GRID ================= */}

          <div className="admin-dashboard-grid">


            {/* RECENT COMPLAINTS */}

            <div className="admin-recent-card">

              <div className="admin-section-header">

                <div>
                  <span className="admin-section-small-title">
                    SYSTEM ACTIVITY
                  </span>

                  <h3>
                    Recent Complaints
                  </h3>
                </div>

                <a
                  href="/staff/assigned"
                  className="admin-view-all-link"
                >
                  View All
                  <ArrowRight size={13} />
                </a>

              </div>


              <div className="admin-complaints-list">

                {complaints.map((complaint, index) => (

                  <div
                    className="admin-complaint-row"
                    key={index}
                  >

                    <div className="admin-complaint-main">

                      <div className="admin-complaint-icon">
                        <FileText size={16} />
                      </div>

                      <div>

                        <h4>
                          {complaint.title}
                        </h4>

                        <span>
                          Submitted by {complaint.student}
                        </span>

                      </div>

                    </div>


                    <div className="admin-complaint-meta">

                      <span
                        className={`admin-priority-badge admin-priority-${complaint.priority.toLowerCase()}`}
                      >
                        {complaint.priority}
                      </span>

                      <span
                        className={`admin-status-badge ${
                          complaint.status === "Resolved"
                            ? "admin-status-resolved"
                            : complaint.status === "In Progress"
                            ? "admin-status-progress"
                            : complaint.status === "Assigned"
                            ? "admin-status-assigned"
                            : "admin-status-pending"
                        }`}
                      >
                        {complaint.status}
                      </span>

                      <small>
                        {complaint.date}
                      </small>

                    </div>

                  </div>

                ))}

              </div>

            </div>


            {/* MANAGEMENT CARD */}

            <div className="admin-management-card">

              <div className="admin-management-icon">
                <UserCog size={21} />
              </div>

              <span className="admin-management-label">
                ADMINISTRATION
              </span>

              <h3>
                Manage Campus
              </h3>

              <p>
                Manage users, departments and monitor
                the overall campus complaint system.
              </p>


              <div className="admin-management-buttons">

                <a
                  href="/admin/users"
                  className="admin-management-button"
                >
                  <Users size={14} />
                  Users
                </a>

                <a
                  href="/admin/departments"
                  className="admin-management-button"
                >
                  <Building2 size={14} />
                  Departments
                </a>

              </div>

            </div>

          </div>


          {/* ================= ALERT ================= */}

          <div className="admin-alert-card">

            <div className="admin-alert-icon">
              <AlertTriangle size={21} />
            </div>

            <div className="admin-alert-content">

              <span>
                ATTENTION REQUIRED
              </span>

              <h3>
                24 complaints are waiting for action
              </h3>

              <p>
                Review pending complaints and assign them
                to the appropriate staff members.
              </p>

            </div>

            <a
              href="/staff/assigned"
              className="admin-alert-button"
            >
              Review
              <ArrowRight size={13} />
            </a>

          </div>


          {/* ================= OVERVIEW ================= */}

          <div className="admin-overview-section">

            <div className="admin-section-header">

              <div>
                <span className="admin-section-small-title">
                  CAMPUS OVERVIEW
                </span>

                <h3>
                  System Overview
                </h3>
              </div>

            </div>


            <div className="admin-overview-grid">


              <div className="admin-overview-card">

                <div className="admin-overview-card-top">

                  <div className="admin-overview-small-icon users">
                    <Users size={17} />
                  </div>

                </div>

                <span>
                  Registered Users
                </span>

                <strong>
                  542
                </strong>

                <p>
                  Students and staff registered
                  in CampusCare.
                </p>

              </div>


              <div className="admin-overview-card">

                <div className="admin-overview-card-top">

                  <div className="admin-overview-small-icon departments">
                    <Building2 size={17} />
                  </div>

                </div>

                <span>
                  Departments
                </span>

                <strong>
                  8
                </strong>

                <p>
                  Active campus departments
                  managing complaints.
                </p>

              </div>


              <div className="admin-overview-card">

                <div className="admin-overview-card-top">

                  <div className="admin-overview-small-icon resolved">
                    <CheckCircle size={17} />
                  </div>

                </div>

                <span>
                  Resolution Rate
                </span>

                <strong>
                  69.5%
                </strong>

                <p>
                  Overall complaint resolution
                  performance.
                </p>

              </div>


            </div>

          </div>


        </section>

      </main>

    </div>
  );
}

export default AdminDashboard;