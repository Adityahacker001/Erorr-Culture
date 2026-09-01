
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  ClipboardList,
  Bell,
  User,
  LogOut,
  FileText,
  Search,
  Filter,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  Eye
} from 'lucide-react';

import './AssignedComplaints.css';

const AssignedComplaints = () => {

  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [priorityFilter, setPriorityFilter] = useState('ALL');

  const staff = {
    name: 'Rahul',
    staffId: 'STF-204',
    department: 'IT Support'
  };

  const complaints = [
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
    },
    {
      id: 'CMP-2026-0169',
      title: 'Printer not responding',
      student: 'Riya',
      department: 'IT Support',
      priority: 'MEDIUM',
      status: 'ASSIGNED',
      date: '27 Aug 2026'
    },
    {
      id: 'CMP-2026-0162',
      title: 'Computer lab network issue',
      student: 'Kabir',
      department: 'IT Support',
      priority: 'HIGH',
      status: 'PENDING',
      date: '26 Aug 2026'
    }
  ];

  const getStatusClass = (status) => {
    if (status === 'RESOLVED') {
      return 'assigned-status-resolved';
    }

    if (status === 'IN_PROGRESS') {
      return 'assigned-status-progress';
    }

    if (status === 'ASSIGNED') {
      return 'assigned-status-assigned';
    }

    return 'assigned-status-pending';
  };

  const getPriorityClass = (priority) => {
    if (priority === 'HIGH') {
      return 'assigned-priority-high';
    }

    if (priority === 'MEDIUM') {
      return 'assigned-priority-medium';
    }

    return 'assigned-priority-low';
  };

  const filteredComplaints = complaints.filter((complaint) => {

    const matchesSearch =
      complaint.title.toLowerCase().includes(search.toLowerCase()) ||
      complaint.id.toLowerCase().includes(search.toLowerCase()) ||
      complaint.student.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === 'ALL' ||
      complaint.status === statusFilter;

    const matchesPriority =
      priorityFilter === 'ALL' ||
      complaint.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  return (

    <div className="assigned-complaints-page">

      {/* SIDEBAR */}

      <aside className="assigned-sidebar">

        <div className="assigned-sidebar-logo">

          <div className="assigned-logo-badge">
            CC
          </div>

          <div>
            <h2>CampusCare</h2>
            <span>Staff Portal</span>
          </div>

        </div>


        <nav className="assigned-sidebar-nav">

          <p className="assigned-sidebar-title">
            MAIN MENU
          </p>

          <Link
            to="/staff/dashboard"
            className="assigned-sidebar-link"
          >
            <LayoutDashboard size={19} />
            <span>Dashboard</span>
          </Link>


          <Link
            to="/staff/complaints"
            className="assigned-sidebar-link active"
          >
            <ClipboardList size={19} />
            <span>Assigned Complaints</span>
          </Link>


          <Link
            to="/staff/notifications"
            className="assigned-sidebar-link"
          >
            <Bell size={19} />
            <span>Notifications</span>
            <span className="assigned-notification-count">
              3
            </span>
          </Link>


          <p className="assigned-sidebar-title assigned-account-title">
            ACCOUNT
          </p>


          <Link
            to="/staff/profile"
            className="assigned-sidebar-link"
          >
            <User size={19} />
            <span>My Profile</span>
          </Link>

        </nav>


        <div className="assigned-sidebar-bottom">

          <div className="assigned-profile">

            <div className="assigned-avatar">
              R
            </div>

            <div>
              <strong>{staff.name}</strong>
              <span>{staff.department}</span>
            </div>

          </div>


          <Link
            to="/"
            className="assigned-logout"
          >
            <LogOut size={18} />
            <span>Log Out</span>
          </Link>

        </div>

      </aside>


      {/* MAIN */}

      <main className="assigned-main">

        {/* HEADER */}

        <header className="assigned-header">

          <div>

            <Link
              to="/staff/dashboard"
              className="assigned-back-link"
            >
              <ArrowLeft size={15} />
              Back to Dashboard
            </Link>

            <span className="assigned-small-label">
              STAFF PORTAL
            </span>

            <h1>
              Assigned Complaints
            </h1>

            <p>
              Review and manage complaints assigned to your department.
            </p>

          </div>

          <div className="assigned-header-icon">
            <ClipboardList size={25} />
          </div>

        </header>


        {/* CONTENT */}

        <div className="assigned-content">

          {/* SUMMARY */}

          <div className="assigned-summary">

            <div className="assigned-summary-card">

              <div className="assigned-summary-icon blue">
                <ClipboardList size={20} />
              </div>

              <div>
                <span>Total Assigned</span>
                <strong>{complaints.length}</strong>
              </div>

            </div>


            <div className="assigned-summary-card">

              <div className="assigned-summary-icon orange">
                <Clock size={20} />
              </div>

              <div>
                <span>Pending</span>
                <strong>
                  {complaints.filter(c => c.status === 'PENDING').length}
                </strong>
              </div>

            </div>


            <div className="assigned-summary-card">

              <div className="assigned-summary-icon purple">
                <AlertCircle size={20} />
              </div>

              <div>
                <span>In Progress</span>
                <strong>
                  {complaints.filter(c => c.status === 'IN_PROGRESS').length}
                </strong>
              </div>

            </div>


            <div className="assigned-summary-card">

              <div className="assigned-summary-icon green">
                <CheckCircle size={20} />
              </div>

              <div>
                <span>Resolved</span>
                <strong>
                  {complaints.filter(c => c.status === 'RESOLVED').length}
                </strong>
              </div>

            </div>

          </div>


          {/* COMPLAINT CARD */}

          <section className="assigned-card">

            <div className="assigned-card-header">

              <div>
                <span>COMPLAINT MANAGEMENT</span>
                <h2>Complaint Queue</h2>
              </div>

              <span className="assigned-result-count">
                {filteredComplaints.length} complaints
              </span>

            </div>


            {/* FILTERS */}

            <div className="assigned-filters">

              <div className="assigned-search">

                <Search size={18} />

                <input
                  type="text"
                  placeholder="Search complaint, ID or student..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

              </div>


              <div className="assigned-filter-box">

                <Filter size={16} />

                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="ALL">All Status</option>
                  <option value="ASSIGNED">Assigned</option>
                  <option value="PENDING">Pending</option>
                  <option value="IN_PROGRESS">In Progress</option>
                  <option value="RESOLVED">Resolved</option>
                </select>

              </div>


              <div className="assigned-filter-box">

                <select
                  value={priorityFilter}
                  onChange={(e) => setPriorityFilter(e.target.value)}
                >
                  <option value="ALL">All Priority</option>
                  <option value="HIGH">High</option>
                  <option value="MEDIUM">Medium</option>
                  <option value="LOW">Low</option>
                </select>

              </div>

            </div>


            {/* TABLE */}

            <div className="assigned-table-wrapper">

              <table className="assigned-table">

                <thead>

                  <tr>
                    <th>Complaint</th>
                    <th>Student</th>
                    <th>Priority</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>

                </thead>


                <tbody>

                  {filteredComplaints.length > 0 ? (

                    filteredComplaints.map((complaint) => (

                      <tr key={complaint.id}>

                        <td>

                          <div className="assigned-complaint-name">

                            <div className="assigned-file-icon">
                              <FileText size={17} />
                            </div>

                            <div>

                              <strong>
                                {complaint.title}
                              </strong>

                              <span>
                                {complaint.id}
                              </span>

                            </div>

                          </div>

                        </td>


                        <td>
                          <span className="assigned-student">
                            {complaint.student}
                          </span>
                        </td>


                        <td>

                          <span
                            className={`assigned-badge ${
                              getPriorityClass(complaint.priority)
                            }`}
                          >
                            {complaint.priority}
                          </span>

                        </td>


                        <td>

                          <span
                            className={`assigned-badge ${
                              getStatusClass(complaint.status)
                            }`}
                          >
                            {complaint.status.replace('_', ' ')}
                          </span>

                        </td>


                        <td>

                          <span className="assigned-date">
                            {complaint.date}
                          </span>

                        </td>


                        <td>

                          <Link
                            to={`/staff/complaints/${complaint.id}`}
                            className="assigned-view-button"
                          >
                            <Eye size={15} />
                            View
                          </Link>

                        </td>

                      </tr>

                    ))

                  ) : (

                    <tr>

                      <td
                        colSpan="6"
                        className="assigned-empty"
                      >

                        <Search size={30} />

                        <strong>
                          No complaints found
                        </strong>

                        <span>
                          Try changing your search or filters.
                        </span>

                      </td>

                    </tr>

                  )}

                </tbody>

              </table>

            </div>

          </section>

        </div>

      </main>

    </div>

  );

};

export default AssignedComplaints;

