import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './index.css'
import data from './data.json';

class ApplicationTracker extends Component {

  constructor(props) {
    super(props)

    this.state = {
      noApps: false
    }
    this.getMain = this.getMain.bind(this);
  }

  getApplicationsForYear(academicYear) {
    return data.student[0].applications.filter(application =>
      application.academicYear === academicYear
    );
  }

  getFEApplications() {
    return data.student[0].applications.filter(application =>
      application.type === 'FE'
    );
  }

  getSponsees() {
    return data.student[0].applications.filter(application =>
      application.type === 'sponsor'
    );
  }

  getApplicationHeaders(applications) {
    return applications.map((application, key) =>
      this.getApplicationHeader(application, key))
  }

  getSponsorApplicationHeaders(applications) {
    return applications.map((application, key) =>
      this.getSponsorApplicationHeader(application, key))
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

  getSponsorApplicationHeader(application, key) {
    return (
      <li key={key} className="section__row">
        <h3 className="section__label">
          <Link to={{
            pathname: '/application',
            state: { application: application }
          }}
            className="section__label action--secondary"
            style={{ textDecoration: 'none' }}>
            {application.name}
          </Link>
        </h3>
        <h3 className="section__label" style={{ clear: 'left' }}>{application.location}</h3>
        {this.getApplicationStatus(application)}
      </li>
    )
  }

  getMain() {
    let main;
    if (this.state.noApps) {
      main = (
        <main id="content" role="main" className="site-content">
          <div className="container">
          <Link to="/home" className="back-link" style={{marginTop: '30px'}}>Back</Link>
          <h2 className="heading--xlarge">You have no active applications</h2>
          <form>
            <div className="content">
            <fieldset className="radio">
            <legend className="radio__legend">Would you like to apply for student finance or support another student's application?</legend>
            <div className="radio__group">
              <input className="radio__input" id="apply" type="radio" name="appType" value="apply"/>
              <label htmlFor="apply" className="radio__label">
              Apply for student finance
            </label>
            </div>
            <div className="radio__group">
              <input className="radio__input" id="support" type="radio" name="appType" value="support"/>
              <label htmlFor="support" className="radio__label">
              Support a student's application
            </label>
            </div>
            </fieldset>
            </div>
            <div>
              <input type="submit" className="action--primary" value="Start Now"/>
            </div>
          </form>
          </div>
        </main>
      )
    } else {
      main = (
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
            <section className="section">
              <h3 className="heading--large">Further Education Applications</h3>
              <ul className="section__list">
                {this.getApplicationHeaders(this.getFEApplications())}
              </ul>
            </section>
            <section className="section">
              <h3 className="heading--large">Students who's applications you are supporting</h3>
              <ul className="section__list">
                {this.getSponsorApplicationHeaders(this.getSponsees())}
              </ul>
            </section>
            <button type="button" onClick={() => { this.toggleApps() }}>Toggle Apps on/off</button>
          </div>
        </main>
      )
    }

    return main
  }

  toggleApps() {
    this.setState({
      noApps: !this.state.noApps
    })
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
          {this.getMain()}
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
