import React from "react";
import {
  LayoutDashboard,
  Users,
  Building2,
  BarChart3,
  UserCog,
  LogOut,
  ArrowLeft,
  FileText,
  CheckCircle,
  Clock,
  AlertCircle
} from "lucide-react";

import "./Analytics.css";


function Analytics() {

  return (

    <div className="analytics-page">


      {/* ================= SIDEBAR ================= */}

      <aside className="analytics-sidebar">

        <div className="analytics-logo">

          <div className="analytics-logo-badge">
            CC
          </div>

          <div>
            <h2>CampusCare</h2>
            <span>ADMIN PORTAL</span>
          </div>

        </div>


        <nav className="analytics-nav">

          <p className="analytics-section-title">
            MAIN MENU
          </p>


          <a
            href="/admin/dashboard"
            className="analytics-link"
          >
            <LayoutDashboard size={17} />
            <span>Dashboard</span>
          </a>


          <a
            href="/admin/users"
            className="analytics-link"
          >
            <Users size={17} />
            <span>Manage Users</span>
          </a>


          <a
            href="/admin/departments"
            className="analytics-link"
          >
            <Building2 size={17} />
            <span>Departments</span>
          </a>


          <a
            href="/admin/analytics"
            className="analytics-link active"
          >
            <BarChart3 size={17} />
            <span>Analytics</span>
          </a>


          <p className="analytics-section-title analytics-account-title">
            ACCOUNT
          </p>


          <a
            href="/admin/profile"
            className="analytics-link"
          >
            <UserCog size={17} />
            <span>Profile</span>
          </a>

        </nav>


        <div className="analytics-sidebar-bottom">

          <div className="analytics-profile">

            <div className="analytics-avatar">
              A
            </div>

            <div>
              <strong>Admin</strong>
              <span>Administrator</span>
            </div>

          </div>


          <a
            href="/"
            className="analytics-logout"
          >
            <LogOut size={16} />
            <span>Log Out</span>
          </a>

        </div>

      </aside>



      {/* ================= MAIN ================= */}

      <main className="analytics-main">


        {/* ================= HEADER ================= */}

        <header className="analytics-header">

          <div>

            <a
              href="/admin/dashboard"
              className="analytics-back"
            >
              <ArrowLeft size={14} />
              Back to Dashboard
            </a>


            <span className="analytics-label">
              ADMINISTRATION
            </span>


            <h1>
              Analytics
            </h1>


            <p>
              View complaint statistics and campus service performance.
            </p>

          </div>


          <div className="analytics-header-icon">
            <BarChart3 size={25} />
          </div>

        </header>



        {/* ================= CONTENT ================= */}

        <section className="analytics-content">


          {/* ================= SUMMARY ================= */}

          <div className="analytics-summary">


            <div className="analytics-summary-card">

              <div className="analytics-summary-icon blue">
                <FileText size={20} />
              </div>

              <div>
                <span>Total Complaints</span>
                <strong>248</strong>
              </div>

            </div>


            <div className="analytics-summary-card">

              <div className="analytics-summary-icon purple">
                <Clock size={20} />
              </div>

              <div>
                <span>In Progress</span>
                <strong>64</strong>
              </div>

            </div>


            <div className="analytics-summary-card">

              <div className="analytics-summary-icon orange">
                <AlertCircle size={20} />
              </div>

              <div>
                <span>Pending</span>
                <strong>27</strong>
              </div>

            </div>


            <div className="analytics-summary-card">

              <div className="analytics-summary-icon green">
                <CheckCircle size={20} />
              </div>

              <div>
                <span>Resolved</span>
                <strong>157</strong>
              </div>

            </div>


          </div>



          {/* ================= MAIN ANALYTICS CARD ================= */}

          <div className="analytics-card">


            <div className="analytics-card-header">

              <div>

                <span>COMPLAINT OVERVIEW</span>

                <h2>
                  Complaint Statistics
                </h2>

              </div>

              <BarChart3 size={20} />

            </div>



            {/* ================= STATUS ================= */}

            <div className="analytics-section">

              <h3>
                Complaint Status
              </h3>


              <div className="analytics-status-list">


                <div className="analytics-status-item">

                  <div className="analytics-status-name">

                    <span className="status-dot resolved"></span>

                    <span>
                      Resolved
                    </span>

                  </div>

                  <strong>
                    157
                  </strong>

                </div>


                <div className="analytics-status-item">

                  <div className="analytics-status-name">

                    <span className="status-dot progress"></span>

                    <span>
                      In Progress
                    </span>

                  </div>

                  <strong>
                    64
                  </strong>

                </div>


                <div className="analytics-status-item">

                  <div className="analytics-status-name">

                    <span className="status-dot pending"></span>

                    <span>
                      Pending
                    </span>

                  </div>

                  <strong>
                    27
                  </strong>

                </div>


              </div>

            </div>



            {/* ================= PROGRESS BAR ================= */}

            <div className="analytics-section">

              <h3>
                Resolution Rate
              </h3>


              <div className="analytics-progress-wrapper">

                <div className="analytics-progress-info">

                  <span>
                    Complaints Resolved
                  </span>

                  <strong>
                    63%
                  </strong>

                </div>


                <div className="analytics-progress">

                  <div
                    className="analytics-progress-fill"
                    style={{ width: "63%" }}
                  ></div>

                </div>

              </div>

            </div>



            {/* ================= DEPARTMENTS ================= */}

            <div className="analytics-section">

              <h3>
                Complaints by Department
              </h3>


              <div className="analytics-department-list">


                <div className="analytics-department-row">

                  <span>
                    IT Support
                  </span>

                  <div className="department-bar">
                    <div
                      className="department-bar-fill"
                      style={{ width: "78%" }}
                    ></div>
                  </div>

                  <strong>
                    82
                  </strong>

                </div>


                <div className="analytics-department-row">

                  <span>
                    Maintenance
                  </span>

                  <div className="department-bar">
                    <div
                      className="department-bar-fill"
                      style={{ width: "62%" }}
                    ></div>
                  </div>

                  <strong>
                    65
                  </strong>

                </div>


                <div className="analytics-department-row">

                  <span>
                    Administration
                  </span>

                  <div className="department-bar">
                    <div
                      className="department-bar-fill"
                      style={{ width: "48%" }}
                    ></div>
                  </div>

                  <strong>
                    51
                  </strong>

                </div>


                <div className="analytics-department-row">

                  <span>
                    Library
                  </span>

                  <div className="department-bar">
                    <div
                      className="department-bar-fill"
                      style={{ width: "31%" }}
                    ></div>
                  </div>

                  <strong>
                    32
                  </strong>

                </div>


                <div className="analytics-department-row">

                  <span>
                    Security
                  </span>

                  <div className="department-bar">
                    <div
                      className="department-bar-fill"
                      style={{ width: "17%" }}
                    ></div>
                  </div>

                  <strong>
                    18
                  </strong>

                </div>


              </div>

            </div>


          </div>


        </section>


      </main>


    </div>

  );

}


export default Analytics;