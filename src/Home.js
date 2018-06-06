import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './index.css'
import data from './data.json';
import Header from './components/Header';
import Footer from './components/Footer';

class Home extends Component {

  constructor(props) {
    super(props)

    this.getApplicationHeaders = this.getApplicationHeaders.bind(this);
    this.getApplicationsForYear = this.getApplicationsForYear.bind(this);
    this.getApplicationHeader = this.getApplicationHeader.bind(this);
    this.getApplicationStatus = this.getApplicationStatus.bind(this);
  }

  getApplicationsForYear(academicYear) {
    return data.student[0].applications.filter(application =>
      application.academicYear === academicYear
    );
  }

  getApplicationHeaders(applications) {
    return applications.map((application, key) =>
      this.getApplicationHeader(application, key))
  }

  getApplicationStatus(application) {
    let applicationStatus = application.status;
    let statusClass = applicationStatus === 'complete' ? 'section__status_completed' : 'section__status_incomplete';
    return <span className={statusClass}>{application.status}</span>
  }

  getApplicationHeader(application, key) {
    return (
      <li key={key} className="section__row">
        <h3 className="section__label">
          <Link to={{
            pathname: '/application',
            state: { application: application }
          }}
            className="section__label action--secondary"
            style={{ textDecoration: 'none' }}>
            {application.modeOfStudy} {application.type} {application.name}
          </Link>
        </h3>
        <h3 className="section__label" style={{ clear: 'left' }}>{application.location}</h3>
        {this.getApplicationStatus(application)}
      </li>
    )
  }

  render() {
    return (
      <React.Fragment>
        <div className="site">
          <Header />
          <main id="content" role="main" className="site-content">
            <div className="container">
              <h2 className="heading--xxlarge--my-account heading--xxlarge">{data.student[0].name}'s Account</h2>
              <h3 className="heading--xsmall" style={{ marginBottom: '50px' }}>
                <div style={{ display: 'inline-block' }}>
                  <span>Your Customer Reference Number (CRN) : </span>
                  <span>20124471022</span>
                </div>
              </h3>
              <ol className="categories-list content">
                <li>
                  <h3 className="home-nav">
                    <Link to="/application-tracker" className="home-nav-link action--secondary">Applications and Support</Link>
                  </h3>
                  <p>Manage your applications and your support applications</p>
                </li>
                <li>
                  <h3 className="home-nav"><a href="new-app">Start a new application</a></h3>
                  <p>Begin a new student finance application to help fund your studies</p>
                </li>
                <li>
                  <h3 className="home-nav"><a href="new-app">Support an application</a></h3>
                  <p>Provide details to support a student who is applying for student finance</p>
                </li>
                <li>
                  <h3 className="home-nav"><a href="location" className="home-nav-link action--secondary">Letters and emails</a></h3>
                  <p>View all letters and emails that have been sent to you by the Student Loans Company</p>
                </li>
                <li>
                  <h3 className="home-nav">
                    <Link to="/profile" className="home-nav-link action--secondary">My Profile</Link>
                  </h3>
                  <p>Update your personal details or change your password</p>
                </li>
                <li>
                  <h3 className="home-nav"><a href="location" className="home-nav-link action--secondary">Payments</a></h3>
                  <p>Check when you'll next be paid or your past payments</p>
                </li>
                <li>
                  <h3 className="home-nav"><a href="location" className="home-nav-link action--secondary">Finance</a></h3>
                  <p>Update your bank details</p>
                </li>
              </ol>
            </div>
          </main>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
