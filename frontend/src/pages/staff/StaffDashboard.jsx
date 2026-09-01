
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  ClipboardList,
  Bell,
  User,
  LogOut,
  Menu,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Users,
  AlertTriangle
} from 'lucide-react';

import './StaffDashboard.css';

const StaffDashboard = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);


  // Temporary staff information
  // Later this will come from FastAPI

  const staff = {
    name: 'Rahul',
    email: 'staff@campuscare.com',
    staffId: 'STF-204',
    department: 'IT Support'
  };


  // Temporary complaint statistics
  // Later these values will come from the backend

  const statistics = [
    {
      title: 'Assigned Complaints',
      value: '18',
      icon: ClipboardList,
      className: 'blue'
    },
    {
      title: 'Pending',
      value: '5',
      icon: Clock,
      className: 'orange'
    },
    {
      title: 'In Progress',
      value: '7',
      icon: AlertCircle,
      className: 'purple'
    },
    {
      title: 'Resolved',
      value: '6',
      icon: CheckCircle,
      className: 'green'
    }
  ];


  // Temporary recent complaints

  const recentComplaints = [
    {
      id: 'CMP-2026-0194',
      title: 'Wi-Fi not working',
      student: 'Aditya',
      department: 'IT Support',
      priority: 'HIGH',
      status: 'IN_PROGRESS',
      date: '01 Sep 2026'
    },
    {
      id: 'CMP-2026-0188',
      title: 'Computer system not starting',
      student: 'Sana',
      department: 'IT Support',
      priority: 'HIGH',
      status: 'ASSIGNED',
      date: '31 Aug 2026'
    },
    {
      id: 'CMP-2026-0181',
      title: 'Projector not working',
      student: 'Arjun',
      department: 'IT Support',
      priority: 'MEDIUM',
      status: 'IN_PROGRESS',
      date: '30 Aug 2026'
    },
    {
      id: 'CMP-2026-0175',
      title: 'Internet connection issue',
      student: 'Mehak',
      department: 'IT Support',
      priority: 'LOW',
      status: 'RESOLVED',
      date: '28 Aug 2026'
    }
  ];


  const getStatusClass = (status) => {

    if (status === 'RESOLVED') {
      return 'staff-status-resolved';
    }

    if (status === 'IN_PROGRESS') {
      return 'staff-status-progress';
    }

    if (status === 'ASSIGNED') {
      return 'staff-status-assigned';
    }

    return 'staff-status-pending';
  };


  const getPriorityClass = (priority) => {

    if (priority === 'HIGH') {
      return 'staff-priority-high';
    }

    if (priority === 'MEDIUM') {
      return 'staff-priority-medium';
    }

    return 'staff-priority-low';
  };


  return (

    <div className="staff-dashboard">


      {/* MOBILE OVERLAY */}

      {sidebarOpen && (

        <div
          className="staff-sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>

      )}



      {/* SIDEBAR */}

      <aside
        className={`staff-sidebar ${
          sidebarOpen ? 'staff-sidebar-open' : ''
        }`}
      >


        {/* LOGO */}

        <div className="staff-sidebar-logo">

          <div className="staff-logo-badge">
            CC
          </div>

          <div>

            <h2>
              CampusCare
            </h2>

            <span>
              Staff Portal
            </span>

          </div>

        </div>



        {/* NAVIGATION */}

        <nav className="staff-sidebar-nav">

          <p className="staff-sidebar-section-title">
            MAIN MENU
          </p>


          <Link
            to="/staff/dashboard"
            className="staff-sidebar-link active"
            onClick={() => setSidebarOpen(false)}
          >

            <LayoutDashboard size={19} />

            <span>
              Dashboard
            </span>

          </Link>


          <Link
            to="/staff/complaints"
            className="staff-sidebar-link"
            onClick={() => setSidebarOpen(false)}
          >

            <ClipboardList size={19} />

            <span>
              Assigned Complaints
            </span>

          </Link>


          <Link
            to="/staff/notifications"
            className="staff-sidebar-link"
            onClick={() => setSidebarOpen(false)}
          >

            <Bell size={19} />

            <span>
              Notifications
            </span>

            <span className="staff-notification-count">
              3
            </span>

          </Link>



          <p className="staff-sidebar-section-title staff-account-section">
            ACCOUNT
          </p>


          <Link
            to="/staff/profile"
            className="staff-sidebar-link"
            onClick={() => setSidebarOpen(false)}
          >

            <User size={19} />

            <span>
              My Profile
            </span>

          </Link>

        </nav>



        {/* SIDEBAR BOTTOM */}

        <div className="staff-sidebar-bottom">

          <div className="staff-mini-profile">

            <div className="staff-avatar">
              R
            </div>

            <div>

              <strong>
                {staff.name}
              </strong>

              <span>
                {staff.department}
              </span>

            </div>

          </div>


          <Link
            to="/"
            className="staff-logout"
          >

            <LogOut size={18} />

            <span>
              Log Out
            </span>

          </Link>

        </div>

      </aside>



      {/* MAIN CONTENT */}

      <main className="staff-main">


        {/* TOP BAR */}

        <header className="staff-topbar">


          <button
            className="staff-mobile-menu"
            onClick={() => setSidebarOpen(true)}
          >

            <Menu size={23} />

          </button>


          <div className="staff-page-title">

            <span>
              STAFF PORTAL
            </span>

            <h1>
              Dashboard
            </h1>

          </div>


          <div className="staff-topbar-actions">


            <button className="staff-notification-button">

              <Bell size={20} />

              <span className="staff-notification-dot">
                3
              </span>

            </button>


            <div className="staff-topbar-profile">

              <div className="staff-topbar-avatar">
                R
              </div>

              <div className="staff-topbar-info">

                <strong>
                  {staff.name}
                </strong>

                <span>
                  {staff.staffId}
                </span>

              </div>

            </div>

          </div>

        </header>



        {/* CONTENT */}

        <div className="staff-content">


          {/* WELCOME */}

          <section className="staff-welcome">

            <div>

              <span className="staff-welcome-label">
                STAFF OVERVIEW
              </span>

              <h2>
                Hello, {staff.name} 👋
              </h2>

              <p>
                Here's an overview of the complaints
                assigned to your department.
              </p>

            </div>


            <Link
              to="/staff/complaints"
              className="staff-view-complaints-button"
            >

              <ClipboardList size={18} />

              View Assigned Complaints

            </Link>

          </section>



          {/* STATISTICS */}

          <section className="staff-statistics">

            {statistics.map((stat) => {

              const Icon = stat.icon;

              return (

                <div
                  className="staff-stat-card"
                  key={stat.title}
                >

                  <div
                    className={`staff-stat-icon ${stat.className}`}
                  >

                    <Icon size={21} />

                  </div>


                  <div className="staff-stat-info">

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



          {/* MAIN GRID */}

          <div className="staff-dashboard-grid">


            {/* RECENT COMPLAINTS */}

            <section className="staff-recent-card">


              <div className="staff-section-header">

                <div>

                  <span className="staff-section-small-title">
                    COMPLAINT ACTIVITY
                  </span>

                  <h3>
                    Recent Assigned Complaints
                  </h3>

                </div>


                <Link
                  to="/staff/complaints"
                  className="staff-view-all-link"
                >

                  View All

                  <ArrowRight size={15} />

                </Link>

              </div>



              <div className="staff-complaints-list">


                {recentComplaints.map((complaint) => (

                  <Link
                    key={complaint.id}
                    to={`/staff/complaints/${complaint.id}`}
                    className="staff-complaint-row"
                  >


                    <div className="staff-complaint-main">

                      <div className="staff-complaint-icon">

                        <FileText size={18} />

                      </div>


                      <div>

                        <h4>
                          {complaint.title}
                        </h4>

                        <span>
                          {complaint.id} • Student: {complaint.student}
                        </span>

                      </div>

                    </div>



                    <div className="staff-complaint-meta">


                      <span
                        className={`staff-priority-badge ${
                          getPriorityClass(
                            complaint.priority
                          )
                        }`}
                      >

                        {complaint.priority}

                      </span>


                      <span
                        className={`staff-status-badge ${
                          getStatusClass(
                            complaint.status
                          )
                        }`}
                      >

                        {complaint.status.replace(
                          '_',
                          ' '
                        )}

                      </span>


                      <small>
                        {complaint.date}
                      </small>

                    </div>

                  </Link>

                ))}

              </div>

            </section>



            {/* STAFF QUICK ACTION CARD */}

            <section className="staff-action-card">


              <div className="staff-action-icon">

                <ClipboardList size={23} />

              </div>


              <span className="staff-action-label">
                STAFF WORKSPACE
              </span>


              <h3>
                Manage assigned complaints.
              </h3>


              <p>
                Review student complaints, check
                priority levels and update the status
                of issues assigned to your department.
              </p>


              <Link
                to="/staff/complaints"
                className="staff-action-button"
              >

                Open Complaint Queue

                <ArrowRight size={16} />

              </Link>

            </section>

          </div>



          {/* PRIORITY ALERT */}

          <section className="staff-priority-card">


            <div className="staff-priority-icon">

              <AlertTriangle size={22} />

            </div>


            <div className="staff-priority-content">

              <span>
                HIGH PRIORITY
              </span>

              <h3>
                2 complaints require immediate attention.
              </h3>

              <p>
                Please review high-priority complaints
                and update their status as soon as possible.
              </p>

            </div>


            <Link
              to="/staff/complaints"
              className="staff-priority-button"
            >

              Review Now

              <ArrowRight size={15} />

            </Link>

          </section>



          {/* WORKFLOW */}

          <section className="staff-workflow-card">


            <div className="staff-section-header">

              <div>

                <span className="staff-section-small-title">
                  WORKFLOW
                </span>

                <h3>
                  Complaint Handling Process
                </h3>

              </div>

            </div>


            <div className="staff-workflow">


              <div className="staff-workflow-step completed">

                <div className="staff-workflow-icon">
                  <CheckCircle size={18} />
                </div>

                <span>
                  Complaint Assigned
                </span>

              </div>


              <div className="staff-workflow-line completed-line"></div>


              <div className="staff-workflow-step completed">

                <div className="staff-workflow-icon">
                  <FileText size={18} />
                </div>

                <span>
                  Review Issue
                </span>

              </div>


              <div className="staff-workflow-line active-line"></div>


              <div className="staff-workflow-step current">

                <div className="staff-workflow-icon">
                  <Clock size={18} />
                </div>

                <span>
                  Work on Issue
                </span>

              </div>


              <div className="staff-workflow-line"></div>


              <div className="staff-workflow-step">

                <div className="staff-workflow-icon">
                  <CheckCircle size={18} />
                </div>

                <span>
                  Resolve
                </span>

              </div>

            </div>

          </section>


        </div>

      </main>

    </div>

  );

};

export default StaffDashboard;

