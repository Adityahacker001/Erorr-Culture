
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  PlusCircle,
  Bell,
  User,
  LogOut,
  ArrowLeft,
  Sparkles,
  MapPin,
  FileText as DescriptionIcon,
  Send,
  AlertTriangle,
  CheckCircle,
  Copy
} from 'lucide-react';

import './CreateComplaint.css';

const CreateComplaint = () => {

  const [selectedRole] = useState('student');

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: ''
  });

  const [analyzing, setAnalyzing] = useState(false);

  const [analyzed, setAnalyzed] = useState(false);

  const [submitted, setSubmitted] = useState(false);


  /*
    Temporary AI result.

    Later this will come from:

    POST /api/complaints/analyze
  */

  const [aiResult, setAiResult] = useState({
    category: 'IT',
    department: 'IT Support',
    priority: 'HIGH',
    confidence: 0.94,
    similarComplaints: ['CMP-0172', 'CMP-0181']
  });


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


  /*
    Analyze Complaint

    This currently simulates the AI service.

    Later:

    React
       ↓
    FastAPI
       ↓
    AI Service
       ↓
    FastAPI
       ↓
    React
  */

  const handleAnalyze = (e) => {

    e.preventDefault();

    if (
      !formData.title ||
      !formData.description ||
      !formData.location
    ) {

      alert('Please fill in all complaint details.');

      return;
    }


    setAnalyzing(true);

    setAnalyzed(false);


    setTimeout(() => {

      setAiResult({
        category: 'IT',
        department: 'IT Support',
        priority: 'HIGH',
        confidence: 0.94,
        similarComplaints: [
          'CMP-0172',
          'CMP-0181'
        ]
      });

      setAnalyzing(false);

      setAnalyzed(true);

    }, 1500);

  };


  /*
    Submit Complaint

    Later this will call:

    POST /api/complaints
  */

  const handleSubmitComplaint = () => {

    if (!analyzed) {

      alert(
        'Please analyze the complaint before submitting.'
      );

      return;
    }


    /*
      Temporary submission.

      Later the backend will:

      1. Validate JWT
      2. Generate complaint ID
      3. Determine final category
      4. Determine department
      5. Determine priority
      6. Calculate SLA
      7. Set status = SUBMITTED
      8. Store complaint in PostgreSQL
    */

    console.log('Complaint Submitted:', {

      title: formData.title,

      description: formData.description,

      location: formData.location,

      ai_category: aiResult.category,

      ai_department: aiResult.department,

      ai_priority: aiResult.priority

    });


    setSubmitted(true);

  };


  if (submitted) {

    return (

      <div className="complaint-success-page">

        <div className="complaint-success-card">

          <div className="success-icon">

            <CheckCircle size={45} />

          </div>


          <span className="success-label">
            COMPLAINT SUBMITTED
          </span>


          <h1>
            Your complaint has been submitted.
          </h1>


          <p>
            Your complaint has been successfully
            recorded. You can track its progress from
            your complaints dashboard.
          </p>


          <div className="generated-complaint-id">

            <span>
              Complaint ID
            </span>

            <strong>
              CMP-2026-0194
            </strong>

          </div>


          <div className="success-buttons">

            <Link
              to="/student/complaints"
              className="success-primary-button"
            >
              View My Complaints
            </Link>


            <Link
              to="/student/dashboard"
              className="success-secondary-button"
            >
              Back to Dashboard
            </Link>

          </div>

        </div>

      </div>

    );

  }


  return (

    <div className="create-complaint-page">


      {/* SIDEBAR */}

      <aside className="complaint-sidebar">


        {/* Logo */}

        <div className="complaint-sidebar-logo">

          <div className="complaint-logo-badge">
            CC
          </div>

          <div>

            <h2>
              CampusCare
            </h2>

            <span>
              Student Portal
            </span>

          </div>

        </div>


        {/* Navigation */}

        <nav className="complaint-sidebar-nav">

          <p className="complaint-sidebar-title">
            MAIN MENU
          </p>


          <Link
            to="/student/dashboard"
            className="complaint-sidebar-link"
          >

            <LayoutDashboard size={19} />

            <span>
              Dashboard
            </span>

          </Link>


          <Link
            to="/student/complaints"
            className="complaint-sidebar-link"
          >

            <FileText size={19} />

            <span>
              My Complaints
            </span>

          </Link>


          <Link
            to="/student/create-complaint"
            className="complaint-sidebar-link active"
          >

            <PlusCircle size={19} />

            <span>
              Create Complaint
            </span>

          </Link>


          <p className="complaint-sidebar-title account-title">
            ACCOUNT
          </p>


          <Link
            to="/student/notifications"
            className="complaint-sidebar-link"
          >

            <Bell size={19} />

            <span>
              Notifications
            </span>

            <span className="complaint-notification-count">
              2
            </span>

          </Link>


          <Link
            to="/student/profile"
            className="complaint-sidebar-link"
          >

            <User size={19} />

            <span>
              My Profile
            </span>

          </Link>

        </nav>


        {/* Bottom */}

        <div className="complaint-sidebar-bottom">

          <div className="complaint-student-profile">

            <div className="complaint-avatar">
              A
            </div>

            <div>

              <strong>
                Aditya
              </strong>

              <span>
                Student
              </span>

            </div>

          </div>


          <Link
            to="/"
            className="complaint-logout"
          >

            <LogOut size={18} />

            <span>
              Log Out
            </span>

          </Link>

        </div>

      </aside>



      {/* MAIN CONTENT */}

      <main className="create-complaint-main">


        {/* Header */}

        <header className="create-complaint-header">

          <div>

            <Link
              to="/student/dashboard"
              className="back-dashboard"
            >

              <ArrowLeft size={17} />

              Back to Dashboard

            </Link>


            <span className="create-small-label">
              CAMPUSCARE ASSISTANT
            </span>


            <h1>
              Create a Complaint
            </h1>


            <p>
              Describe your issue and let our AI
              suggest the appropriate department
              and priority.
            </p>

          </div>


          <div className="create-header-icon">

            <Sparkles size={23} />

          </div>

        </header>



        {/* FORM + AI */}

        <div className="create-complaint-layout">


          {/* LEFT FORM */}

          <section className="complaint-form-card">


            <div className="form-card-heading">

              <div>

                <span>
                  STEP 01
                </span>

                <h2>
                  Describe your issue
                </h2>

              </div>

              <FileText size={20} />

            </div>


            <form onSubmit={handleAnalyze}>


              {/* TITLE */}

              <div className="complaint-form-group">

                <label htmlFor="title">
                  Complaint Title
                </label>


                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="e.g. Wi-Fi not working"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />

              </div>



              {/* DESCRIPTION */}

              <div className="complaint-form-group">

                <label htmlFor="description">
                  Description
                </label>


                <div className="textarea-wrapper">

                  <DescriptionIcon size={18} />

                  <textarea
                    id="description"
                    name="description"
                    placeholder="Describe your problem in detail..."
                    value={formData.description}
                    onChange={handleChange}
                    rows="7"
                    required
                  ></textarea>

                </div>


                <small>
                  Include useful details such as what
                  happened, where it happened and how
                  it is affecting you.
                </small>

              </div>



              {/* LOCATION */}

              <div className="complaint-form-group">

                <label htmlFor="location">
                  Location
                </label>


                <div className="input-icon-wrapper">

                  <MapPin size={18} />

                  <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="e.g. Lab 4, Block A"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>



              {/* ANALYZE BUTTON */}

              <button
                type="submit"
                className="analyze-button"
                disabled={analyzing}
              >

                {analyzing ? (

                  <>
                    <span className="loading-spinner"></span>

                    Analyzing Complaint...

                  </>

                ) : (

                  <>

                    <Sparkles size={18} />

                    Analyze Complaint

                  </>

                )}

              </button>


            </form>


            <div className="ai-note">

              <Sparkles size={15} />

              <span>
                AI analysis helps route your complaint.
                You can review the result before submitting.
              </span>

            </div>

          </section>



          {/* RIGHT AI RESULT */}

          <section
            className={`ai-analysis-card ${
              analyzed ? 'analysis-visible' : ''
            }`}
          >


            <div className="ai-analysis-header">

              <div className="ai-analysis-icon">

                <Sparkles size={21} />

              </div>


              <div>

                <span>
                  STEP 02
                </span>

                <h2>
                  AI Analysis
                </h2>

              </div>

            </div>



            {!analyzed ? (

              <div className="analysis-empty">

                <div className="analysis-empty-icon">

                  <Sparkles size={27} />

                </div>


                <h3>
                  Waiting for your complaint
                </h3>


                <p>
                  Fill in the complaint details and
                  click <strong>Analyze Complaint</strong>
                  to see the AI prediction.
                </p>

              </div>

            ) : (

              <div className="analysis-result">


                {/* CATEGORY */}

                <div className="analysis-item">

                  <span>
                    Category
                  </span>

                  <strong>
                    {aiResult.category}
                  </strong>

                </div>


                {/* DEPARTMENT */}

                <div className="analysis-item">

                  <span>
                    Department
                  </span>

                  <strong>
                    {aiResult.department}
                  </strong>

                </div>


                {/* PRIORITY */}

                <div className="analysis-item priority-analysis">

                  <span>
                    Priority
                  </span>

                  <strong>
                    <AlertTriangle size={15} />

                    {aiResult.priority}

                  </strong>

                </div>


                {/* CONFIDENCE */}

                <div className="confidence-section">

                  <div className="confidence-heading">

                    <span>
                      AI Confidence
                    </span>

                    <strong>
                      {Math.round(
                        aiResult.confidence * 100
                      )}%
                    </strong>

                  </div>


                  <div className="confidence-bar">

                    <div
                      className="confidence-progress"
                      style={{
                        width: `${
                          aiResult.confidence * 100
                        }%`
                      }}
                    ></div>

                  </div>

                </div>



                {/* SIMILAR COMPLAINTS */}

                <div className="similar-section">

                  <div className="similar-heading">

                    <span>
                      Similar Complaints
                    </span>

                    <strong>
                      {
                        aiResult.similarComplaints.length
                      }
                    </strong>

                  </div>


                  {aiResult.similarComplaints.map(
                    (id) => (

                      <div
                        className="similar-complaint"
                        key={id}
                      >

                        <Copy size={14} />

                        <span>
                          {id}
                        </span>

                        <span>
                          Similar issue
                        </span>

                      </div>

                    )
                  )}

                </div>



                {/* SUBMIT */}

                <button
                  type="button"
                  className="submit-complaint-button"
                  onClick={handleSubmitComplaint}
                >

                  <Send size={17} />

                  Submit Complaint

                </button>


                <p className="submit-note">

                  Your complaint will be submitted with
                  the AI suggestions shown above.

                </p>

              </div>

            )}

          </section>

        </div>


        {/* PROCESS INFORMATION */}

        <section className="complaint-process">

          <div>

            <span>
              01
            </span>

            <strong>
              Describe
            </strong>

            <p>
              Tell us what happened.
            </p>

          </div>


          <div className="process-arrow">
            →
          </div>


          <div>

            <span>
              02
            </span>

            <strong>
              AI Analysis
            </strong>

            <p>
              AI suggests routing details.
            </p>

          </div>


          <div className="process-arrow">
            →
          </div>


          <div>

            <span>
              03
            </span>

            <strong>
              Submit
            </strong>

            <p>
              Send your complaint to campus staff.
            </p>

          </div>

        </section>


      </main>

    </div>

  );

};


export default CreateComplaint;

