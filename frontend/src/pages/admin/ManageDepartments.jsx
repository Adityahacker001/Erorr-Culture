import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Building2,
  BarChart3,
  UserCog,
  LogOut,
  ArrowLeft,
  Plus,
  Edit,
  Trash2
} from "lucide-react";

import "./ManageDepartments.css";


function ManageDepartments() {

  const [search, setSearch] = useState("");

  const departments = [
    {
      id: "DEP001",
      name: "Computer Science",
      code: "CSE",
      head: "Dr. Amit Sen",
      complaints: 24,
      status: "Active"
    },
    {
      id: "DEP002",
      name: "Information Technology",
      code: "IT",
      head: "Dr. Neha Roy",
      complaints: 18,
      status: "Active"
    },
    {
      id: "DEP003",
      name: "Electronics & Communication",
      code: "ECE",
      head: "Dr. Rahul Das",
      complaints: 15,
      status: "Active"
    },
    {
      id: "DEP004",
      name: "Mechanical Engineering",
      code: "ME",
      head: "Dr. Arindam Ghosh",
      complaints: 11,
      status: "Active"
    },
    {
      id: "DEP005",
      name: "Administration",
      code: "ADMIN",
      head: "Mr. Rajesh Kumar",
      complaints: 8,
      status: "Active"
    }
  ];


  const filteredDepartments = departments.filter((department) => {

    return (
      department.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      department.code
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      department.head
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      department.id
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  });


  return (

    <div className="manage-departments-page">


      {/* SIDEBAR */}

      <aside className="manage-departments-sidebar">

        <div className="manage-departments-logo">

          <div className="manage-departments-logo-badge">
            CC
          </div>

          <div>

            <h2>CampusCare</h2>

            <span>
              ADMIN PORTAL
            </span>

          </div>

        </div>


        <nav className="manage-departments-nav">

          <p className="manage-departments-section-title">
            MAIN MENU
          </p>


          <a
            href="/admin/dashboard"
            className="manage-departments-link"
          >
            <LayoutDashboard size={17} />
            <span>Dashboard</span>
          </a>


          <a
            href="/admin/users"
            className="manage-departments-link"
          >
            <Users size={17} />
            <span>Manage Users</span>
          </a>


          <a
            href="/admin/departments"
            className="manage-departments-link active"
          >
            <Building2 size={17} />
            <span>Departments</span>
          </a>


          <a
            href="/admin/analytics"
            className="manage-departments-link"
          >
            <BarChart3 size={17} />
            <span>Analytics</span>
          </a>


          <p className="manage-departments-section-title manage-departments-account-title">
            ACCOUNT
          </p>


          <a
            href="/"
            className="manage-departments-link"
          >
            <UserCog size={17} />
            <span>Profile</span>
          </a>

        </nav>


        <div className="manage-departments-sidebar-bottom">

          <div className="manage-departments-profile">

            <div className="manage-departments-avatar">
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


          <a
            href="/"
            className="manage-departments-logout"
          >
            <LogOut size={16} />
            <span>Log Out</span>
          </a>

        </div>

      </aside>



      {/* MAIN */}

      <main className="manage-departments-main">


        {/* HEADER */}

        <header className="manage-departments-header">

          <div>

            <a
              href="/admin/dashboard"
              className="manage-departments-back"
            >
              <ArrowLeft size={14} />
              Back to Dashboard
            </a>


            <span className="manage-departments-label">
              ADMINISTRATION
            </span>


            <h1>
              Manage Departments
            </h1>


            <p>
              View and manage departments across the campus.
            </p>

          </div>


          <div className="manage-departments-header-icon">

            <Building2 size={25} />

          </div>

        </header>



        {/* CONTENT */}

        <section className="manage-departments-content">


          {/* SUMMARY */}

          <div className="manage-departments-summary">


            <div className="manage-departments-summary-card">

              <div className="department-summary-icon blue">
                <Building2 size={20} />
              </div>

              <div>

                <span>
                  Total Departments
                </span>

                <strong>
                  5
                </strong>

              </div>

            </div>


            <div className="manage-departments-summary-card">

              <div className="department-summary-icon purple">
                <Users size={20} />
              </div>

              <div>

                <span>
                  Total Staff
                </span>

                <strong>
                  42
                </strong>

              </div>

            </div>


            <div className="manage-departments-summary-card">

              <div className="department-summary-icon orange">
                <Building2 size={20} />
              </div>

              <div>

                <span>
                  Active Departments
                </span>

                <strong>
                  5
                </strong>

              </div>

            </div>


            <div className="manage-departments-summary-card">

              <div className="department-summary-icon green">
                <BarChart3 size={20} />
              </div>

              <div>

                <span>
                  Total Complaints
                </span>

                <strong>
                  76
                </strong>

              </div>

            </div>

          </div>



          {/* DEPARTMENT CARD */}

          <div className="manage-departments-card">


            <div className="manage-departments-card-header">

              <div>

                <span>
                  DEPARTMENT DIRECTORY
                </span>

                <h2>
                  All Departments
                </h2>

              </div>


              <button className="manage-departments-add-button">

                <Plus size={15} />

                Add Department

              </button>

            </div>



            {/* SEARCH */}

            <div className="manage-departments-search">

              <Building2 size={16} />

              <input
                type="text"
                placeholder="Search by department, code or head..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

            </div>



            {/* TABLE */}

            <div className="manage-departments-table-wrapper">

              <table className="manage-departments-table">

                <thead>

                  <tr>

                    <th>
                      DEPARTMENT
                    </th>

                    <th>
                      DEPARTMENT ID
                    </th>

                    <th>
                      CODE
                    </th>

                    <th>
                      DEPARTMENT HEAD
                    </th>

                    <th>
                      COMPLAINTS
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

                  {filteredDepartments.map((department) => (

                    <tr key={department.id}>


                      <td>

                        <div className="department-info">

                          <div className="department-avatar">
                            <Building2 size={16} />
                          </div>

                          <div>

                            <strong>
                              {department.name}
                            </strong>

                            <span>
                              Campus Department
                            </span>

                          </div>

                        </div>

                      </td>


                      <td>

                        <span className="department-id">
                          {department.id}
                        </span>

                      </td>


                      <td>

                        <span className="department-code">
                          {department.code}
                        </span>

                      </td>


                      <td>

                        <span className="department-head">
                          {department.head}
                        </span>

                      </td>


                      <td>

                        <span className="department-complaints">
                          {department.complaints}
                        </span>

                      </td>


                      <td>

                        <span className="department-status">
                          {department.status}
                        </span>

                      </td>


                      <td>

                        <div className="department-actions">

                          <button
                            className="department-action edit"
                            title="Edit Department"
                          >
                            <Edit size={14} />
                          </button>


                          <button
                            className="department-action delete"
                            title="Delete Department"
                          >
                            <Trash2 size={14} />
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>



              {filteredDepartments.length === 0 && (

                <div className="manage-departments-empty">

                  <Building2 size={35} />

                  <strong>
                    No departments found
                  </strong>

                  <span>
                    Try changing your search.
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


export default ManageDepartments;