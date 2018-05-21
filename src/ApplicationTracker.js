import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './index.css'
import data from './data.json';

class ApplicationTracker extends Component {

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
                <Link to="home" className="nav-link">My Account</Link>
              </div>
            </div>
          </header>

          <main id="content" role="main" className="site-content">
            <div className="container">
              <h2 className="heading--xxlarge">My Applications</h2>
              <section className="section">
                <h3 className="heading--large">Applications for Academic Year 2018 to 2019</h3>
                <ul className="section__list">
                  {this.getApplicationHeaders(this.getApplicationsForYear("1819"))}
                </ul>
              </section>
              <section className="section">
                <h3 className="heading--large">Applications for Academic Year 2017 to 2018</h3>
                <ul className="section__list">
                  {this.getApplicationHeaders(this.getApplicationsForYear("1718"))}
                </ul>
              </section>
              <h2 className="heading"><a href="old-apps">Applications for previous years</a></h2>
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

export default ApplicationTracker;
