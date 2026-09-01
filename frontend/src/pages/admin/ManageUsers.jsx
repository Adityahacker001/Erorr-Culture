import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Users,
  LayoutDashboard,
  BarChart3,
  Building2,
  UserCog,
  LogOut,
  Search,
  Filter,
  UserPlus,
  Edit,
  Trash2,
  ArrowLeft,
  Shield,
  GraduationCap,
  Briefcase
} from "lucide-react";

import "./ManageUsers.css";


function ManageUsers() {

  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");


  // Temporary user data
  // Later this will come from FastAPI

  const users = [

    {
      id: "STU001",
      name: "Aarav Sharma",
      email: "aarav.sharma@campuscare.com",
      role: "Student",
      department: "Computer Science",
      status: "Active"
    },

    {
      id: "STU002",
      name: "Priya Das",
      email: "priya.das@campuscare.com",
      role: "Student",
      department: "Information Technology",
      status: "Active"
    },

    {
      id: "STF001",
      name: "Rahul Sen",
      email: "rahul.sen@campuscare.com",
      role: "Staff",
      department: "Administration",
      status: "Active"
    },

    {
      id: "STF002",
      name: "Neha Roy",
      email: "neha.roy@campuscare.com",
      role: "Staff",
      department: "Maintenance",
      status: "Active"
    },

    {
      id: "ADM001",
      name: "Admin",
      email: "admin@campuscare.com",
      role: "Admin",
      department: "Administration",
      status: "Active"
    }

  ];


  // Search + role filter

  const filteredUsers = users.filter((user) => {

    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.id.toLowerCase().includes(search.toLowerCase());

    const matchesRole =
      roleFilter === "All" ||
      user.role === roleFilter;

    return matchesSearch && matchesRole;

  });


  return (

    <div className="manage-users-page">


      {/* ================= SIDEBAR ================= */}

      <aside className="manage-users-sidebar">


        {/* LOGO */}

        <div className="manage-users-logo">

          <div className="manage-users-logo-badge">
            CC
          </div>

          <div>

            <h2>
              CampusCare
            </h2>

            <span>
              ADMIN PORTAL
            </span>

          </div>

        </div>


        {/* NAVIGATION */}

        <nav className="manage-users-nav">

          <p className="manage-users-section-title">
            MAIN MENU
          </p>


          <Link
            to="/admin/dashboard"
            className="manage-users-link"
          >

            <LayoutDashboard size={17} />

            <span>
              Dashboard
            </span>

          </Link>


          <Link
            to="/admin/users"
            className="manage-users-link active"
          >

            <Users size={17} />

            <span>
              Manage Users
            </span>

          </Link>


          <Link
            to="/admin/departments"
            className="manage-users-link"
          >

            <Building2 size={17} />

            <span>
              Departments
            </span>

          </Link>


          <Link
            to="/admin/analytics"
            className="manage-users-link"
          >

            <BarChart3 size={17} />

            <span>
              Analytics
            </span>

          </Link>


          <p className="manage-users-section-title manage-users-account-title">
            ACCOUNT
          </p>


          <Link
            to="/admin/profile"
            className="manage-users-link"
          >

            <UserCog size={17} />

            <span>
              Profile
            </span>

          </Link>

        </nav>


        {/* SIDEBAR BOTTOM */}

        <div className="manage-users-sidebar-bottom">


          <div className="manage-users-profile">

            <div className="manage-users-avatar">
              A
            </div>

            <div>

              <strong>
                Admin
              </strong>

              <span>
                Administrator
              </span>

            </div>

          </div>


          <Link
            to="/"
            className="manage-users-logout"
          >

            <LogOut size={16} />

            <span>
              Log Out
            </span>

          </Link>


        </div>


      </aside>



      {/* ================= MAIN ================= */}

      <main className="manage-users-main">


        {/* HEADER */}

        <header className="manage-users-header">


          <div>


            <Link
              to="/admin/dashboard"
              className="manage-users-back"
            >

              <ArrowLeft size={14} />

              Back to Dashboard

            </Link>


            <span className="manage-users-label">
              ADMINISTRATION
            </span>


            <h1>
              Manage Users
            </h1>


            <p>
              View and manage students, staff and administrators.
            </p>


          </div>


          <div className="manage-users-header-icon">

            <Users size={25} />

          </div>


        </header>



        {/* CONTENT */}

        <section className="manage-users-content">


          {/* ================= SUMMARY ================= */}

          <div className="manage-users-summary">


            {/* TOTAL USERS */}

            <div className="manage-users-summary-card">

              <div className="summary-icon blue">

                <Users size={20} />

              </div>

              <div>

                <span>
                  Total Users
                </span>

                <strong>
                  5
                </strong>

              </div>

            </div>


            {/* STUDENTS */}

            <div className="manage-users-summary-card">

              <div className="summary-icon purple">

                <GraduationCap size={20} />

              </div>

              <div>

                <span>
                  Students
                </span>

                <strong>
                  2
                </strong>

              </div>

            </div>


            {/* STAFF */}

            <div className="manage-users-summary-card">

              <div className="summary-icon orange">

                <Briefcase size={20} />

              </div>

              <div>

                <span>
                  Staff
                </span>

                <strong>
                  2
                </strong>

              </div>

            </div>


            {/* ADMINS */}

            <div className="manage-users-summary-card">

              <div className="summary-icon green">

                <Shield size={20} />

              </div>

              <div>

                <span>
                  Admins
                </span>

                <strong>
                  1
                </strong>

              </div>

            </div>


          </div>



          {/* ================= USERS CARD ================= */}

          <div className="manage-users-card">


            {/* CARD HEADER */}

            <div className="manage-users-card-header">


              <div>

                <span>
                  USER DIRECTORY
                </span>

                <h2>
                  All Users
                </h2>

              </div>


              <button
                type="button"
                className="manage-users-add-button"
              >

                <UserPlus size={15} />

                Add User

              </button>


            </div>



            {/* ================= FILTERS ================= */}

            <div className="manage-users-filters">


              {/* SEARCH */}

              <div className="manage-users-search">

                <Search size={16} />

                <input
                  type="text"
                  placeholder="Search by name, email or ID..."
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                />

              </div>


              {/* ROLE FILTER */}

              <div className="manage-users-filter-box">

                <Filter size={15} />

                <select
                  value={roleFilter}
                  onChange={(e) =>
                    setRoleFilter(e.target.value)
                  }
                >

                  <option value="All">
                    All Roles
                  </option>

                  <option value="Student">
                    Student
                  </option>

                  <option value="Staff">
                    Staff
                  </option>

                  <option value="Admin">
                    Admin
                  </option>

                </select>

              </div>


            </div>



            {/* ================= TABLE ================= */}

            <div className="manage-users-table-wrapper">


              <table className="manage-users-table">


                <thead>

                  <tr>

                    <th>
                      USER
                    </th>

                    <th>
                      USER ID
                    </th>

                    <th>
                      ROLE
                    </th>

                    <th>
                      DEPARTMENT
                    </th>

                    <th>
                      STATUS
                    </th>

                    <th>
                      ACTION
                    </th>

                  </tr>

                </thead>


                <tbody>


                  {filteredUsers.map((user) => (

                    <tr key={user.id}>


                      {/* USER */}

                      <td>

                        <div className="manage-user-info">


                          <div className="manage-user-avatar">

                            {user.name.charAt(0)}

                          </div>


                          <div>

                            <strong>
                              {user.name}
                            </strong>

                            <span>
                              {user.email}
                            </span>

                          </div>


                        </div>

                      </td>



                      {/* ID */}

                      <td>

                        <span className="manage-user-id">

                          {user.id}

                        </span>

                      </td>



                      {/* ROLE */}

                      <td>

                        <span
                          className={`role-badge role-${user.role.toLowerCase()}`}
                        >

                          {user.role}

                        </span>

                      </td>



                      {/* DEPARTMENT */}

                      <td>

                        <span className="manage-user-department">

                          {user.department}

                        </span>

                      </td>



                      {/* STATUS */}

                      <td>

                        <span className="user-status-active">

                          {user.status}

                        </span>

                      </td>



                      {/* ACTION */}

                      <td>

                        <div className="manage-user-actions">


                          <button
                            type="button"
                            className="user-action edit"
                            title="Edit User"
                          >

                            <Edit size={14} />

                          </button>


                          <button
                            type="button"
                            className="user-action delete"
                            title="Delete User"
                          >

                            <Trash2 size={14} />

                          </button>


                        </div>

                      </td>


                    </tr>

                  ))}


                </tbody>


              </table>



              {/* NO USERS */}

              {filteredUsers.length === 0 && (

                <div className="manage-users-empty">

                  <Users size={35} />

                  <strong>
                    No users found
                  </strong>

                  <span>
                    Try changing your search or filter.
                  </span>

                </div>

              )}


            </div>


          </div>


        </section>


      </main>


    </div>

  );

}


export default ManageUsers;