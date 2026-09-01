
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  PlusCircle,
  Bell,
  User,
  LogOut,
  ArrowLeft,
  Clock,
  CheckCircle,
  AlertCircle,
  MapPin
} from 'lucide-react';

import './ComplaintDetails.css';

const ComplaintDetails = () => {

  const { id } = useParams();

  // Temporary complaint data
  // Later this will come from FastAPI

  const complaint = {
    id: id || 'CMP-2026-0194',
    title: 'Wi-Fi not working',
    description:
      'The Wi-Fi connection is not working in Lab 4. I have tried reconnecting several times but the internet is still unavailable.',
    department: 'IT Support',
    category: 'IT',
    priority: 'HIGH',
    location: 'Lab 4, Block A',
    status: 'IN_PROGRESS',
    submittedDate: '01 Sep 2026',
    assignedDate: '01 Sep 2026',
    resolvedDate: '-'
  };


  const getStatusClass = (status) => {

    if (status === 'RESOLVED') {
      return 'details-status-resolved';
    }

    if (status === 'IN_PROGRESS') {
      return 'details-status-progress';
    }

    if (status === 'ASSIGNED') {
      return 'details-status-assigned';
    }

    return 'details-status-pending';
  };


  return (

    <div className="complaint-details-page">


      {/* SIDEBAR */}

      <aside className="details-sidebar">

        <div className="details-sidebar-logo">

          <div className="details-logo-badge">
            CC
          </div>

          <div>
            <h2>CampusCare</h2>
            <span>Student Portal</span>
          </div>

        </div>


        <nav className="details-sidebar-nav">

          <p className="details-sidebar-title">
            MAIN MENU
          </p>


          <Link
            to="/student/dashboard"
            className="details-sidebar-link"
          >
            <LayoutDashboard size={19} />
            <span>Dashboard</span>
          </Link>


          <Link
            to="/student/complaints"
            className="details-sidebar-link active"
          >
            <FileText size={19} />
            <span>My Complaints</span>
          </Link>


          <Link
            to="/student/create-complaint"
            className="details-sidebar-link"
          >
            <PlusCircle size={19} />
            <span>Create Complaint</span>
          </Link>


          <p className="details-sidebar-title account-title">
            ACCOUNT
          </p>


          <Link
            to="/student/notifications"
            className="details-sidebar-link"
          >
            <Bell size={19} />
            <span>Notifications</span>

            <span className="details-notification-count">
              2
            </span>
          </Link>


          <Link
            to="/student/profile"
            className="details-sidebar-link"
          >
            <User size={19} />
            <span>My Profile</span>
          </Link>

        </nav>


        <div className="details-sidebar-bottom">

          <div className="details-student-profile">

            <div className="details-avatar">
              A
            </div>

            <div>
              <strong>Aditya</strong>
              <span>Student</span>
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



      {/* MAIN CONTENT */}

      <main className="details-main">


        {/* HEADER */}

        <header className="details-header">

          <div>

            <Link
              to="/student/complaints"
              className="details-back"
            >
              <ArrowLeft size={17} />
              Back to My Complaints
            </Link>


            <span className="details-small-label">
              COMPLAINT DETAILS
            </span>


            <h1>
              {complaint.title}
            </h1>


            <p>
              Complaint ID: {complaint.id}
            </p>

          </div>


          <span
            className={`details-status ${getStatusClass(
              complaint.status
            )}`}
          >
            {complaint.status.replace('_', ' ')}
          </span>

        </header>



        {/* CONTENT */}

        <div className="details-content">


          {/* LEFT SIDE */}

          <section className="details-card">


            <div className="details-card-heading">

              <div>
                <span>COMPLAINT INFORMATION</span>
                <h2>Issue Description</h2>
              </div>

              <FileText size={20} />

            </div>


            <div className="details-description">

              <p>
                {complaint.description}
              </p>

            </div>


            <div className="details-information-grid">


              <div className="details-info-item">

                <span>Category</span>

                <strong>
                  {complaint.category}
                </strong>

              </div>


              <div className="details-info-item">

                <span>Department</span>

                <strong>
                  {complaint.department}
                </strong>

              </div>


              <div className="details-info-item">

                <span>Priority</span>

                <strong className="details-priority">
                  <AlertCircle size={15} />
                  {complaint.priority}
                </strong>

              </div>


              <div className="details-info-item">

                <span>Location</span>

                <strong className="details-location">
                  <MapPin size={15} />
                  {complaint.location}
                </strong>

              </div>

            </div>

          </section>



          {/* RIGHT SIDE */}

          <section className="details-status-card">

            <div className="details-card-heading">

              <div>
                <span>STATUS</span>
                <h2>Complaint Progress</h2>
              </div>

              <Clock size={20} />

            </div>


            <div className="details-timeline">


              {/* SUBMITTED */}

              <div className="timeline-item completed">

                <div className="timeline-icon">
                  <CheckCircle size={17} />
                </div>

                <div>
                  <strong>Complaint Submitted</strong>
                  <span>
                    {complaint.submittedDate}
                  </span>
                </div>

              </div>


              {/* ASSIGNED */}

              <div className="timeline-item completed">

                <div className="timeline-icon">
                  <CheckCircle size={17} />
                </div>

                <div>
                  <strong>Assigned to Department</strong>
                  <span>
                    {complaint.assignedDate}
                  </span>
                </div>

              </div>


              {/* IN PROGRESS */}

              <div className="timeline-item current">

                <div className="timeline-icon">
                  <Clock size={17} />
                </div>

                <div>
                  <strong>Work in Progress</strong>
                  <span>
                    Currently being handled
                  </span>
                </div>

              </div>


              {/* RESOLVED */}

              <div className="timeline-item">

                <div className="timeline-icon">
                  <CheckCircle size={17} />
                </div>

                <div>
                  <strong>Resolved</strong>
                  <span>
                    {complaint.resolvedDate}
                  </span>
                </div>

              </div>

            </div>

          </section>



          {/* ACTIVITY */}

          <section className="details-activity-card">

            <div className="details-card-heading">

              <div>
                <span>COMPLAINT ACTIVITY</span>
                <h2>Latest Update</h2>
              </div>

            </div>


            <div className="latest-update">

              <div className="update-icon">
                <Clock size={18} />
              </div>

              <div>

                <strong>
                  Your complaint is currently being handled.
                </strong>

                <p>
                  The IT Support department has started
                  working on your complaint. You will be
                  notified when there is a new update.
                </p>

                <small>
                  Updated on 01 Sep 2026
                </small>

              </div>

            </div>

          </section>


        </div>

      </main>

    </div>

  );

};

export default ComplaintDetails;

