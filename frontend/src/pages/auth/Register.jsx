
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Users,
  ShieldCheck,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowLeft
} from 'lucide-react';

import './Register.css';

const Register = () => {

  const [selectedRole, setSelectedRole] = useState('student');

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


  const handleSubmit = (e) => {

    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {

      alert('Passwords do not match.');

      return;
    }


    console.log('Registration Data:', {
      role: selectedRole,
      name: formData.name,
      email: formData.email,
      password: formData.password
    });


    /*
      Later this will be connected to FastAPI:

      POST /api/auth/register

      {
        name,
        email,
        password,
        role
      }
    */


    alert(
      `Account registration for ${
        selectedRole.charAt(0).toUpperCase() +
        selectedRole.slice(1)
      }`
    );

  };


  return (

    <div className="register-page">

      {/* Background Decoration */}

      <div className="register-circle register-circle-one"></div>

      <div className="register-circle register-circle-two"></div>


      {/* Back To Home */}

      <Link
        to="/"
        className="register-back-home"
      >

        <ArrowLeft size={18} />

        <span>
          Back to Home
        </span>

      </Link>



      <div className="register-container">


        {/* LEFT SECTION */}

        <div className="register-info">


          {/* Logo */}

          <div className="register-logo">

            <div className="register-logo-badge">
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



          {/* Main Message */}

          <div className="register-message">

            <span className="register-tag">
              GET STARTED
            </span>

            <h2>

              Create your
              <br />

              <span>
                CampusCare account.
              </span>

            </h2>

            <p>

              Join CampusCare and make campus
              services easier, faster and more
              organized.

            </p>

          </div>



          {/* Benefits */}

          <div className="register-points">

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



        {/* RIGHT SECTION */}

        <div className="register-card">


          {/* Header */}

          <div className="register-card-header">

            <h2>
              Create Account
            </h2>

            <p>
              Select your role and create your account.
            </p>

          </div>



          {/* ROLE SELECTION */}

          <div className="register-role-section">

            <label className="register-role-label">
              I am a
            </label>


            <div className="register-role-options">


              {/* STUDENT */}

              <button
                type="button"
                className={`register-role-option ${
                  selectedRole === 'student'
                    ? 'selected'
                    : ''
                }`}
                onClick={() =>
                  setSelectedRole('student')
                }
              >

                <div className="register-role-icon">

                  <GraduationCap size={22} />

                </div>

                <span>
                  Student
                </span>

              </button>



              {/* STAFF */}

              <button
                type="button"
                className={`register-role-option ${
                  selectedRole === 'staff'
                    ? 'selected'
                    : ''
                }`}
                onClick={() =>
                  setSelectedRole('staff')
                }
              >

                <div className="register-role-icon">

                  <Users size={22} />

                </div>

                <span>
                  Staff
                </span>

              </button>



              {/* ADMIN */}

              <button
                type="button"
                className={`register-role-option ${
                  selectedRole === 'admin'
                    ? 'selected'
                    : ''
                }`}
                onClick={() =>
                  setSelectedRole('admin')
                }
              >

                <div className="register-role-icon">

                  <ShieldCheck size={22} />

                </div>

                <span>
                  Admin
                </span>

              </button>

            </div>

          </div>



          {/* FORM */}

          <form onSubmit={handleSubmit}>


            {/* NAME */}

            <div className="register-input-group">

              <label htmlFor="name">
                Full Name
              </label>


              <div className="register-input-wrapper">

                <User size={18} />

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>



            {/* EMAIL */}

            <div className="register-input-group">

              <label htmlFor="email">
                Email Address
              </label>


              <div className="register-input-wrapper">

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

            <div className="register-input-group">

              <label htmlFor="password">
                Password
              </label>


              <div className="register-input-wrapper">

                <Lock size={18} />

                <input
                  type={
                    showPassword
                      ? 'text'
                      : 'password'
                  }
                  id="password"
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />


                <button
                  type="button"
                  className="register-password-toggle"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
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



            {/* CONFIRM PASSWORD */}

            <div className="register-input-group">

              <label htmlFor="confirmPassword">
                Confirm Password
              </label>


              <div className="register-input-wrapper">

                <Lock size={18} />

                <input
                  type={
                    showConfirmPassword
                      ? 'text'
                      : 'password'
                  }
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />


                <button
                  type="button"
                  className="register-password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                >

                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}

                </button>

              </div>

            </div>



            {/* TERMS */}

            <div className="register-terms">

              <label>

                <input
                  type="checkbox"
                  required
                />

                <span>
                  I agree to the CampusCare terms
                  and conditions.
                </span>

              </label>

            </div>



            {/* CREATE ACCOUNT */}

            <button
              type="submit"
              className="register-submit"
            >

              Create Account as{' '}

              {
                selectedRole.charAt(0).toUpperCase() +
                selectedRole.slice(1)
              }

            </button>

          </form>



          {/* LOGIN LINK */}

          <div className="already-account">

            <span>
              Already have an account?
            </span>

            <Link to="/login">
              Log In
            </Link>

          </div>



          {/* SECURITY */}

          <div className="register-security">

            🔒 Your information is protected by secure authentication.

          </div>


        </div>

      </div>

    </div>

  );

};


export default Register;

