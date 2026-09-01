import React from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  PlusCircle,
  Bell,
  User,
  LogOut,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowRight
} from 'lucide-react';

import './MyComplaints.css';

const MyComplaints = () => {

  const complaints = [
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
    if (status === 'RESOLVED') return 'my-status-resolved';
    if (status === 'IN_PROGRESS') return 'my-status-progress';
    if (status === 'ASSIGNED') return 'my-status-assigned';

    return 'my-status-pending';
  };

  const getPriorityClass = (priority) => {
    if (priority === 'HIGH') return 'my-priority-high';
    if (priority === 'MEDIUM') return 'my-priority-medium';

    return 'my-priority-low';
  };

  return (
    <div className="my-complaints-page">

      {/* SIDEBAR */}

      <aside className="my-complaints-sidebar">

        <div className="my-sidebar-logo">

          <div className="my-logo-badge">
            CC
          </div>

          <div>
            <h2>CampusCare</h2>
            <span>Student Portal</span>
          </div>

        </div>


        <nav className="my-sidebar-nav">

          <p>MAIN MENU</p>

          <Link
            to="/student/dashboard"
            className="my-sidebar-link"
          >
            <LayoutDashboard size={19} />
            <span>Dashboard</span>
          </Link>


          <Link
            to="/student/complaints"
            className="my-sidebar-link active"
          >
            <FileText size={19} />
            <span>My Complaints</span>
          </Link>


          <Link
            to="/student/create-complaint"
            className="my-sidebar-link"
          >
            <PlusCircle size={19} />
            <span>Create Complaint</span>
          </Link>


          <p className="my-account-title">
            ACCOUNT
          </p>


          <Link
            to="/student/notifications"
            className="my-sidebar-link"
          >
            <Bell size={19} />
            <span>Notifications</span>

            <span className="my-notification-count">
              2
            </span>
          </Link>


          <Link
            to="/student/profile"
            className="my-sidebar-link"
          >
            <User size={19} />
            <span>My Profile</span>
          </Link>

        </nav>


        <div className="my-sidebar-bottom">

          <div className="my-student-profile">

            <div className="my-avatar">
              A
            </div>

            <div>
              <strong>Aditya</strong>
              <span>Student</span>
            </div>

          </div>


          <Link
            to="/"
            className="my-logout"
          >
            <LogOut size={18} />
            <span>Log Out</span>
          </Link>

        </div>

      </aside>


      {/* MAIN CONTENT */}

      <main className="my-complaints-main">

        <header className="my-complaints-header">

          <div>

            <span>
              STUDENT PORTAL
            </span>

            <h1>
              My Complaints
            </h1>

            <p>
              View and track all your campus complaints.
            </p>

          </div>


          <Link
            to="/student/create-complaint"
            className="my-create-button"
          >
            <PlusCircle size={18} />
            Create Complaint
          </Link>

        </header>


        <div className="my-complaints-content">

          {/* SUMMARY */}

          <div className="my-summary">

            <div>
              <span>Total Complaints</span>
              <strong>12</strong>
            </div>

            <div>
              <span>Pending</span>
              <strong>3</strong>
            </div>

            <div>
              <span>In Progress</span>
              <strong>4</strong>
            </div>

            <div>
              <span>Resolved</span>
              <strong>5</strong>
            </div>

          </div>


          {/* COMPLAINT LIST */}

          <section className="my-complaints-card">

            <div className="my-card-header">

              <div>

                <span>
                  COMPLAINT ACTIVITY
                </span>

                <h2>
                  All Complaints
                </h2>

              </div>

            </div>


            <div className="my-complaints-list">

              {complaints.map((complaint) => (

                <Link
                  key={complaint.id}
                  to={`/student/complaints/${complaint.id}`}
                  className="my-complaint-item"
                >

                  <div className="my-complaint-left">

                    <div className="my-complaint-icon">
                      <FileText size={19} />
                    </div>


                    <div>

                      <h3>
                        {complaint.title}
                      </h3>

                      <p>
                        {complaint.id} • {complaint.department}
                      </p>

                      <small>
                        Submitted on {complaint.date}
                      </small>

                    </div>

                  </div>


                  <div className="my-complaint-right">

                    <span
                      className={`my-priority ${getPriorityClass(
                        complaint.priority
                      )}`}
                    >
                      {complaint.priority}
                    </span>


                    <span
                      className={`my-status ${getStatusClass(
                        complaint.status
                      )}`}
                    >
                      {complaint.status.replace('_', ' ')}
                    </span>


                    <ArrowRight size={17} />

                  </div>

                </Link>

              ))}

            </div>

          </section>

        </div>

      </main>

    </div>
  );
};

export default MyComplaints;