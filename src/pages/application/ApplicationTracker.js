import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import data from '../../data.json';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

class ApplicationTracker extends Component {

  constructor(props) {
    super(props)

    this.state = {
      noApps: false
    }
    this.getMain = this.getMain.bind(this);
  }

  getUndergradApplications() {
    return data.student[0].applications.filter(application =>
      application.type.toLowerCase() === 'undergraduate'
    );
  }


  getPostgradApplications() {
    return data.student[0].applications.filter(application =>
      application.type.toLowerCase() === 'postgraduate'
    );
  }

  getApplicationsForYear(applications, academicYear) {
    return applications.filter(application =>
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
    if (applicationStatus === 'complete') {
      statusClass = 'section__status_completed';
    } else if (applicationStatus === 'incomplete') {
      statusClass = 'section__status_incomplete';
    } else {
      statusClass = 'background-black section__status_incomplete'
    }
    return <span className={statusClass}>{application.status.toUpperCase()}</span>
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
        <h3 className="section__label" style={{ clear: 'left' }}>Last updated: {application.lastUpdated}</h3>
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
        <h3 className="section__label" style={{ clear: 'left' }}>Last updated: {application.lastUpdated}</h3>
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
            <Link to="/home" className="back-link" style={{ marginTop: '30px' }}>Back</Link>
            <h2 className="heading--xlarge">You have no active applications</h2>
            <form>
              <div className="content">
                <fieldset className="radio">
                  <legend className="radio__legend">Would you like to apply for student finance or support another student's application?</legend>
                  <div className="radio__group">
                    <input className="radio__input" id="apply" type="radio" name="appType" value="apply" />
                    <label htmlFor="apply" className="radio__label">
                      Apply for student finance
            </label>
                  </div>
                  <div className="radio__group">
                    <input className="radio__input" id="support" type="radio" name="appType" value="support" />
                    <label htmlFor="support" className="radio__label">
                      Support a student's application
            </label>
                  </div>
                </fieldset>
              </div>
              <div>
                <input type="submit" className="action--primary" value="Start Now" />
              </div>
            </form>
          </div>
        </main>
      )
    } else {
      main = (
        <main id="content" role="main" className="site-content">
          <div className="container">
            <div className="breadcrumb">
              <ol className="breadcrumb__list">
                <li className="breadcrumb__list__item">
                  <Link to="home">home</Link>
                </li>
                <li className="breadcrumb__list__item">
                  applications
                </li>
              </ol>
            </div>
            <h2 className="heading--xxlarge">Applications</h2>
            <div className="base2-2-3 mainbar">
              <section className="section">
                <h3 className="heading--large">Postgraduate</h3>
                <ul className="section__list">
                  {this.getApplicationHeaders(this.getPostgradApplications())}
                </ul>
              </section>
              <section className="section">
                <h3 className="heading--large">Undergraduate</h3>
                <section className="section--no-border">
                  <h4 className="heading">Academic Year 2018 to 2019</h4>
                  <ul className="section__list">
                    {this.getApplicationHeaders(this.getApplicationsForYear(this.getUndergradApplications(), "1819"))}
                  </ul>
                </section>
                <section>
                  <h4 className="heading">Academic Year 2017 to 2018</h4>
                  <ul className="section__list">
                    {this.getApplicationHeaders(this.getApplicationsForYear(this.getUndergradApplications(), "1718"))}
                  </ul>
                </section>
              </section>
              <section className="section">
                <h3 className="heading--large">Further Education</h3>
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
            <div className="base-1-3 column">
              <div className="sidebar">
                <ol className="categories-list content">
                  <li>
                    <h3 className="home-nav"><a href="new-app">Start a new application</a></h3>
                    <p>Begin a new student finance application to help fund your studies</p>
                  </li>
                  <li>
                    <h3 className="home-nav"><a href="new-app">Support an application</a></h3>
                    <p>Provide details to support a student who is applying for student finance</p>
                  </li>
                </ol>
              </div>
            </div>
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
          <Header />
          {this.getMain()}
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default ApplicationTracker;
