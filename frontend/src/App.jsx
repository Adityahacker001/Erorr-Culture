import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// LANDING PAGE
import Home from "./pages/Home";

// AUTH
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// STUDENT
import StudentDashboard from "./pages/student/StudentDashboard";
import MyComplaints from "./pages/student/MyComplaints";
import CreateComplaint from "./pages/student/CreateComplaint";
import ComplaintDetails from "./pages/student/ComplaintDetails";

// STAFF
import StaffDashboard from "./pages/staff/StaffDashboard";
import AssignedComplaints from "./pages/staff/AssignedComplaints";
import StaffComplaintDetails from "./pages/staff/StaffComplaintDetails";

// ADMIN
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageUsers from "./pages/admin/ManageUsers";
import ManageDepartments from "./pages/admin/ManageDepartments";
import Analytics from "./pages/admin/Analytics";

import "./App.css";


function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* =========================
            LANDING PAGE
        ========================= */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* =========================
            AUTH
        ========================= */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />


        {/* =========================
            STUDENT
        ========================= */}

        <Route
          path="/student/dashboard"
          element={<StudentDashboard />}
        />

        <Route
          path="/student/complaints"
          element={<MyComplaints />}
        />

        <Route
          path="/student/create-complaint"
          element={<CreateComplaint />}
        />

        <Route
          path="/student/complaints/:id"
          element={<ComplaintDetails />}
        />


        {/* =========================
            STAFF
        ========================= */}

        <Route
          path="/staff/dashboard"
          element={<StaffDashboard />}
        />

        <Route
          path="/staff/complaints"
          element={<AssignedComplaints />}
        />

        <Route
          path="/staff/complaints/:id"
          element={<StaffComplaintDetails />}
        />


        {/* =========================
            ADMIN
        ========================= */}

        <Route
          path="/admin/dashboard"
          element={<AdminDashboard />}
        />

        <Route
          path="/admin/users"
          element={<ManageUsers />}
        />

        <Route
          path="/admin/departments"
          element={<ManageDepartments />}
        />

        <Route
          path="/admin/analytics"
          element={<Analytics />}
        />


      </Routes>

    </BrowserRouter>

  );

}


export default App;