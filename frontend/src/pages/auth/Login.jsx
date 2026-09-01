
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  GraduationCap,
  Users,
  ShieldCheck,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowLeft
} from 'lucide-react';

import './Login.css';


const Login = () => {

  const [selectedRole, setSelectedRole] = useState('student');

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


  const handleSubmit = (e) => {

    e.preventDefault();

    console.log('Login Data:', {
      role: selectedRole,
      email: formData.email,
      password: formData.password
    });


    /*
      Later this will be connected to FastAPI:

      POST /api/auth/login

      {
        email,
        password,
        role
      }
    */


    alert(
      `Login attempted as ${
        selectedRole.charAt(0).toUpperCase() +
        selectedRole.slice(1)
      }`
    );

  };


  return (

    <div className="login-page">

      {/* ================= BACKGROUND ================= */}

      <div className="login-circle login-circle-one"></div>

      <div className="login-circle login-circle-two"></div>


      {/* ================= BACK TO HOME ================= */}

      <Link
        to="/"
        className="login-back-home"
      >

        <ArrowLeft size={18} />

        <span>
          Back to Home
        </span>

      </Link>



      {/* ================= MAIN CONTAINER ================= */}

      <div className="login-container">


        {/* ================= LEFT SECTION ================= */}

        <div className="login-info">


          {/* LOGO */}

          <div className="login-logo-section">

            <div className="login-logo-badge">
              CC
            </div>

            <div>

              <h1>
                CampusCare
              </h1>

              <p>
                Smart Campus Management
              </p>

            </div>

          </div>



          {/* MESSAGE */}

          <div className="login-message">

            <span className="login-tag">
              WELCOME BACK
            </span>

            <h2>

              Login to your
              <br />

              <span>
                CampusCare account.
              </span>

            </h2>

            <p>

              Access your campus services, track
              complaints and stay connected with
              your campus community.

            </p>

          </div>



          {/* FEATURES */}

          <div className="login-points">

            <div>

              <span>
                01
              </span>

              <p>
                Report campus issues easily
              </p>

            </div>


            <div>

              <span>
                02
              </span>

              <p>
                Track complaint progress
              </p>

            </div>


            <div>

              <span>
                03
              </span>

              <p>
                Stay updated with notifications
              </p>

            </div>

          </div>


        </div>



        {/* ================= RIGHT SECTION ================= */}

        <div className="login-card">


          {/* HEADER */}

          <div className="login-card-header">

            <h2>
              Login
            </h2>

            <p>
              Select your role and login to your account.
            </p>

          </div>



          {/* ================= ROLE SELECTION ================= */}

          <div className="login-role-section">

            <label className="login-role-label">
              I am a
            </label>


            <div className="login-role-options">


              {/* STUDENT */}

              <button
                type="button"
                className={`login-role-option ${
                  selectedRole === 'student'
                    ? 'selected'
                    : ''
                }`}
                onClick={() =>
                  setSelectedRole('student')
                }
              >

                <div className="login-role-icon">

                  <GraduationCap size={21} />

                </div>

                <span>
                  Student
                </span>

              </button>



              {/* STAFF */}

              <button
                type="button"
                className={`login-role-option ${
                  selectedRole === 'staff'
                    ? 'selected'
                    : ''
                }`}
                onClick={() =>
                  setSelectedRole('staff')
                }
              >

                <div className="login-role-icon">

                  <Users size={21} />

                </div>

                <span>
                  Staff
                </span>

              </button>



              {/* ADMIN */}

              <button
                type="button"
                className={`login-role-option ${
                  selectedRole === 'admin'
                    ? 'selected'
                    : ''
                }`}
                onClick={() =>
                  setSelectedRole('admin')
                }
              >

                <div className="login-role-icon">

                  <ShieldCheck size={21} />

                </div>

                <span>
                  Admin
                </span>

              </button>


            </div>

          </div>



          {/* ================= FORM ================= */}

          <form onSubmit={handleSubmit}>


            {/* EMAIL */}

            <div className="login-input-group">

              <label htmlFor="email">
                Email Address
              </label>


              <div className="login-input-wrapper">

                <Mail size={18} />

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="student@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>



            {/* PASSWORD */}

            <div className="login-input-group">

              <div className="login-password-label">

                <label htmlFor="password">
                  Password
                </label>

                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  Forgot Password?
                </a>

              </div>


              <div className="login-input-wrapper">

                <Lock size={18} />

                <input
                  type={
                    showPassword
                      ? 'text'
                      : 'password'
                  }
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />


                <button
                  type="button"
                  className="login-password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >

                  {showPassword ? (

                    <EyeOff size={18} />

                  ) : (

                    <Eye size={18} />

                  )}

                </button>

              </div>

            </div>



            {/* REMEMBER ME */}

            <div className="login-remember">

              <label>

                <input
                  type="checkbox"
                />

                <span>
                  Remember me
                </span>

              </label>

            </div>



            {/* LOGIN BUTTON */}

            <button
              type="submit"
              className="login-submit"
            >

              Login as{' '}

              {
                selectedRole.charAt(0).toUpperCase() +
                selectedRole.slice(1)
              }

            </button>


          </form>



          {/* ================= REGISTER ================= */}

          <div className="login-register">

            <span>
              Don't have an account?
            </span>

            <Link to="/register">
              Create Account
            </Link>

          </div>



          {/* ================= SECURITY ================= */}

          <div className="login-security">

            🔒 Your information is protected by secure authentication.

          </div>


        </div>

      </div>

    </div>

  );

};


export default Login;
