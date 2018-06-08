import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import data from '../../data.json';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { CustomerContext } from '../../context/CustomerContext';

class ApplicationTracker extends Component {

  constructor(props) {
    super(props)

    this.state = {
      noApps: false
    }
    this.getMain = this.getMain.bind(this);
    this.getPageHeader = this.getPageHeader.bind(this);
    this.getUndergradApplications = this.getUndergradApplications.bind(this);
    this.getPostgradApplications = this.getPostgradApplications.bind(this);
    this.getFEApplications = this.getFEApplications.bind(this);
    this.getApplicationHeader = this.getApplicationHeader.bind(this);
    this.getApplicationHeaders = this.getApplicationHeaders.bind(this);
    this.getApplicationStatus = this.getApplicationStatus.bind(this);
    this.getApplicationSection = this.getApplicationSection.bind(this);
  }

  getUndergradApplications(studentIndex) {
    return data.student[studentIndex].applications.filter(application =>
      application.type.toLowerCase() === 'undergraduate'
    );
  }

  getPostgradApplications(studentIndex) {
    return data.student[studentIndex].applications.filter(application =>
      application.type.toLowerCase() === 'postgraduate'
    );
  }

  getApplicationsForYear(applications, academicYear) {
    return applications.filter(application =>
      application.academicYear === academicYear
    );
  }

  getFEApplications(studentIndex) {
    return data.student[studentIndex].applications.filter(application =>
      application.type.toLowerCase() === 'fe'
    );
  }

  getApplicationHeaders(applications) {
    return applications.map((application, key) =>
      this.getApplicationHeader(application, key))
  }

  getApplicationHeader(application, key) {
    return (
      <li key={key} className="section__row">
        <h3 className="section__label">
          <Link to={{
            pathname: '/page3',
            state: { application: application }
          }}
            className="section__label action--secondary"
            style={{ textDecoration: 'none' }}>
            {application.modeOfStudy} {application.type} {application.name}
          </Link>
        </h3>
        <h3 className="section__label" style={{ clear: 'left', fontWeight: 'normal' }}>{application.location}</h3>
        <h3 className="section__label" style={{ clear: 'left', fontWeight: 'normal' }}>Last updated: {application.lastUpdated}</h3>
        {this.getApplicationStatus(application)}
      </li>
    )
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

  getApplicationSection(applications, header, subsection) {

    let section;
    let sectionClass = 'section'
    if(subsection && subsection === true) sectionClass = 'section--no-border'

    if(applications !== undefined && applications.length > 0) {
      section = (
        <section className={sectionClass}>
          <h4 className="heading">{header}</h4>
          <ul className="section__list">
            {this.getApplicationHeaders(applications)}
          </ul>
        </section>
      )
    }
    return section;
  }

  getPageHeader(page, showTitle) {
    let header;
    if (showTitle) {
      header = data.pages[page];
    } else {
      header = 'Page Title'
    }
    return header
  }

  getMain() {
    let main;
    if (this.state.noApps) {
      main = (
        <main id="content" role="main" className="site-content">
          <div className="container">
            <Link to="/page1" className="back-link" style={{ marginTop: '30px' }}>Back</Link>
            <form>
              <div className="content">
                <fieldset className="radio">
                  <legend className="heading--xlarge">Would you like to apply for student finance or support another student's application?</legend>
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
        <CustomerContext.Consumer>
          {({ activeCustomer, showHeaders }) => (
            <main id="content" role="main" className="site-content">
              <div className="container">
                <ol className="breadcrumbs" style={{ marginBottom: '30px' }}>
                  <li>
                    <Link to="page1">{this.getPageHeader('home', showHeaders)}</Link>
                  </li>
                  <li>
                    {this.getPageHeader('applicationTracker', showHeaders)}
                </li>
                </ol>
                <h2 className="heading--xxlarge">{this.getPageHeader('applicationTracker', showHeaders)}</h2>
                <div className="base2-2-3 mainbar">
                  {this.getApplicationSection(this.getPostgradApplications(activeCustomer), 'Postgraduate')}
                  <section className="section">
                    <h3 className="heading--large">Undergraduate</h3>
                    {this.getApplicationSection(this.getApplicationsForYear(this.getUndergradApplications(activeCustomer), "1819"), 'Academic Year 2018 to 2019', true)}
                    {this.getApplicationSection(this.getApplicationsForYear(this.getUndergradApplications(activeCustomer), "1718"), 'Academic Year 2017 to 2018', true)}
                  </section>
                  {this.getApplicationSection(this.getFEApplications(activeCustomer), 'Further Education')}
                  <button type="button" onClick={() => { this.toggleApps() }}>Toggle Apps on/off</button>
                </div>
                <div className="base2-1-3">
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
          )}
        </CustomerContext.Consumer>
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
