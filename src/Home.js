import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './index.css'
import data from './data.json';

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
          <header id="page-header" role="banner">
            <a id="header-skip-link" href="#content" className="keyboard-link">Skip to main content</a>
            <div className="page-header">
              <div className="container">
                <div className="page-header__inner row">
                  <div className="page-header__title">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.gov.uk" className="page-header__title-content">GOV.UK</a>
                  </div>
                  <h1 className="page-header__content">Student Finance application</h1>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="base-1-3" style={{ float: 'left' }}>
                <img src={require('./images/template/sfe-logo.svg')} alt="Student Finance England"
                  className="secondary-logo" />
              </div>
              <div className="base-2-3" style={{ float: 'left' }}>
                <a className="nav-link">Logout</a>
              </div>
            </div>
          </header>

          <main id="content" role="main" className="site-content">
            <div className="container">
              <h2 className="heading--xxlarge--my-account heading--xxlarge">{data.student[0].name}'s Account</h2>
              <div className="base-2-3 mainbar">
                <ol className="categories-list">
                  <li>
                    <h3 className="home-nav">
                      <Link to="/application-tracker" className="home-nav-link action--secondary">My applications</Link>
                    </h3>
                    <p>Check the current status or make changes to your application</p>
                  </li>
                  <li>
                    <h3 className="home-nav"><a href="location" className="home-nav-link action--secondary">My profile</a></h3>
                    <p>Update your personal details or change your password</p>
                  </li>
                  <li>
                    <h3 className="home-nav"><a href="location" className="home-nav-link action--secondary">My finance</a></h3>
                    <p>Check when you'll next be paid, your past payments or update your bank details</p>
                  </li>
                  <li>
                    <h3 className="home-nav"><a href="location" className="home-nav-link action--secondary">My letters and emails</a></h3>
                    <p>View all letters and emails that have been sent to you by the Student Loans Company</p>
                  </li>
                </ol>
              </div>
              <div className="base2-1-3 sidebar">
                <h3 className="heading--small"><a href="new-app">Start a new application</a></h3>
                <h3 className="heading--small"><a href="new-app">Support a student's application</a></h3>
              </div>
            </div>
          </main>
          <footer className="page-footer" role="contentinfo">
            <div className="container">
              <div className="page-footer__inner">
                <div className="footer-navigation">
                  <h2 className="visually-hidden">Navigation Links</h2>
                  <ul className="footer-navigation__list">
                    <li>
                      <a href="cookies">Cookies</a>
                    </li>
                    <li>
                      <a href="e-privacy">e-Privacy</a>
                    </li>
                    <li>
                      <a href="termsofuse">Terms of use</a>
                    </li>
                    <li>
                      <a href="security">Security</a>
                    </li>
                    <li>
                      <a href="accessibility">Accessibility</a>
                    </li>
                  </ul>
                  <p className="developer-credit">Built by
                        <a href="http://www.slc.co.uk" target="_blank" rel="noopener noreferrer">Student Loans Company</a>
                  </p>
                </div>
                <div className="page-footer__service">
                  <a className="crown-copyright" target="_blank" rel="noopener noreferrer" href="http://www.nationalarchives.gov.uk/information-management/our-services/crown-copyright.htm">@Crown Copyright</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
