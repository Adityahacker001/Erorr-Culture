
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  LayoutDashboard,
  ClipboardList,
  Bell,
  User,
  LogOut,
  FileText,
  ArrowLeft,
  Clock,
  CheckCircle,
  AlertCircle,
  MapPin,
  UserCircle,
  Calendar,
  Building2
} from 'lucide-react';

import './StaffComplaintDetails.css';

const StaffComplaintDetails = () => {

  const { id } = useParams();

  const [status, setStatus] = useState('IN_PROGRESS');

  const complaint = {
    id: id || 'CMP-2026-0194',
    title: 'Wi-Fi not working',
    student: 'Aditya Sharma',
    email: 'aditya@gmail.com',
    department: 'IT Support',
    location: 'Main Academic Building',
    date: '01 Sep 2026',
    priority: 'HIGH',
    description:
      'The Wi-Fi connection is not working properly in the Main Academic Building. The connection keeps disconnecting and students are unable to access online classes, submit assignments and use campus resources.',
    assignedTo: 'Rahul',
    staffId: 'STF-204'
  };

  const getStatusClass = () => {

    if (status === 'RESOLVED') {
      return 'details-status-resolved';
    }

    if (status === 'IN_PROGRESS') {
      return 'details-status-progress';
    }

    return 'details-status-assigned';
  };

  return (

    <div className="staff-details-page">

      {/* SIDEBAR */}

      <aside className="details-sidebar">

        <div className="details-sidebar-logo">

          <div className="details-logo-badge">
            CC
          </div>

          <div>
            <h2>CampusCare</h2>
            <span>Staff Portal</span>
          </div>

        </div>


        <nav className="details-sidebar-nav">

          <p className="details-sidebar-title">
            MAIN MENU
          </p>


          <Link
            to="/staff/dashboard"
            className="details-sidebar-link"
          >
            <LayoutDashboard size={19} />
            <span>Dashboard</span>
          </Link>


          <Link
            to="/staff/complaints"
            className="details-sidebar-link active"
          >
            <ClipboardList size={19} />
            <span>Assigned Complaints</span>
          </Link>


          <Link
            to="/staff/notifications"
            className="details-sidebar-link"
          >
            <Bell size={19} />
            <span>Notifications</span>

            <span className="details-notification-count">
              3
            </span>
          </Link>


          <p className="details-account-title">
            ACCOUNT
          </p>


          <Link
            to="/staff/profile"
            className="details-sidebar-link"
          >
            <User size={19} />
            <span>My Profile</span>
          </Link>

        </nav>


        <div className="details-sidebar-bottom">

          <div className="details-profile">

            <div className="details-avatar">
              R
            </div>

            <div>
              <strong>Rahul</strong>
              <span>IT Support</span>
            </div>

          </div>


          <Link
            to="/"
            className="details-logout"
          >
            <LogOut size={18} />
            <span>Log Out</span>
          </Link>

        </div>

      </aside>


      {/* MAIN */}

      <main className="details-main">


        {/* HEADER */}

        <header className="details-header">

          <div>

            <Link
              to="/staff/complaints"
              className="details-back"
            >
              <ArrowLeft size={16} />
              Back to Assigned Complaints
            </Link>


            <span className="details-label">
              COMPLAINT DETAILS
            </span>


            <h1>
              {complaint.title}
            </h1>


            <p>
              Complaint ID: {complaint.id}
            </p>

          </div>


          <div className="details-header-icon">
            <FileText size={24} />
          </div>

        </header>


        {/* CONTENT */}

        <div className="details-content">


          {/* TOP INFORMATION */}

          <div className="details-grid">


            {/* COMPLAINT INFORMATION */}

            <section className="details-card">


              <div className="details-card-heading">

                <div>
                  <span>COMPLAINT INFORMATION</span>

                  <h2>
                    Issue Details
                  </h2>
                </div>

                <FileText size={20} />

              </div>


              <div className="details-description">

                <h3>
                  Description
                </h3>

                <p>
                  {complaint.description}
                </p>

              </div>


              <div className="details-info-grid">


                <div className="details-info-item">

                  <Calendar size={17} />

                  <div>
                    <span>Submitted On</span>
                    <strong>{complaint.date}</strong>
                  </div>

                </div>


                <div className="details-info-item">

                  <MapPin size={17} />

                  <div>
                    <span>Location</span>
                    <strong>{complaint.location}</strong>
                  </div>

                </div>


                <div className="details-info-item">

                  <Building2 size={17} />

                  <div>
                    <span>Department</span>
                    <strong>{complaint.department}</strong>
                  </div>

                </div>


                <div className="details-info-item">

                  <AlertCircle size={17} />

                  <div>
                    <span>Priority</span>

                    <strong className="details-high">
                      {complaint.priority}
                    </strong>

                  </div>

                </div>

              </div>

            </section>


            {/* STUDENT */}

            <section className="details-card">


              <div className="details-card-heading">

                <div>
                  <span>STUDENT</span>

                  <h2>
                    Student Information
                  </h2>
                </div>

                <UserCircle size={20} />

              </div>


              <div className="student-profile">

                <div className="student-large-avatar">
                  A
                </div>

                <div>

                  <h3>
                    {complaint.student}
                  </h3>

                  <p>
                    {complaint.email}
                  </p>

                </div>

              </div>


              <div className="student-detail-row">

                <span>
                  Department
                </span>

                <strong>
                  Computer Applications
                </strong>

              </div>


              <div className="student-detail-row">

                <span>
                  Complaint ID
                </span>

                <strong>
                  {complaint.id}
                </strong>

              </div>

            </section>

          </div>


          {/* STATUS SECTION */}

          <section className="details-card status-card">


            <div className="details-card-heading">

              <div>

                <span>COMPLAINT STATUS</span>

                <h2>
                  Update Status
                </h2>

              </div>

              <span
                className={`details-status-badge ${getStatusClass()}`}
              >
                {status.replace('_', ' ')}
              </span>

            </div>


            <div className="status-options">


              <button
                className={
                  status === 'ASSIGNED'
                    ? 'status-option selected'
                    : 'status-option'
                }
                onClick={() => setStatus('ASSIGNED')}
              >

                <div className="status-icon assigned">
                  <ClipboardList size={18} />
                </div>

                <div>
                  <strong>Assigned</strong>
                  <span>Complaint received</span>
                </div>

              </button>


              <button
                className={
                  status === 'IN_PROGRESS'
                    ? 'status-option selected'
                    : 'status-option'
                }
                onClick={() => setStatus('IN_PROGRESS')}
              >

                <div className="status-icon progress">
                  <Clock size={18} />
                </div>

                <div>
                  <strong>In Progress</strong>
                  <span>Working on the issue</span>
                </div>

              </button>


              <button
                className={
                  status === 'RESOLVED'
                    ? 'status-option selected'
                    : 'status-option'
                }
                onClick={() => setStatus('RESOLVED')}
              >

                <div className="status-icon resolved">
                  <CheckCircle size={18} />
                </div>

                <div>
                  <strong>Resolved</strong>
                  <span>Issue has been resolved</span>
                </div>

              </button>

            </div>


            <div className="status-note">

              <AlertCircle size={16} />

              <span>
                Status changes are currently temporary.
                They will be connected to the backend later.
              </span>

            </div>

          </section>


          {/* ASSIGNMENT */}

          <section className="details-card assignment-card">


            <div className="details-card-heading">

              <div>

                <span>ASSIGNMENT</span>

                <h2>
                  Assigned Staff
                </h2>

              </div>

            </div>


            <div className="assignment-content">

              <div className="assignment-avatar">
                R
              </div>

              <div className="assignment-info">

                <strong>
                  {complaint.assignedTo}
                </strong>

                <span>
                  {complaint.department}
                </span>

                <small>
                  Staff ID: {complaint.staffId}
                </small>

              </div>

              <div className="assignment-status">

                <CheckCircle size={16} />

                Assigned to you

              </div>

            </div>

          </section>


        </div>

      </main>

    </div>

  );

};

export default StaffComplaintDetails;

