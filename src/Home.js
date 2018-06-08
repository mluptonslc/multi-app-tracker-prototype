import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './index.css'
import data from './data.json';
import Header from './components/Header';
import Footer from './components/Footer';
import { CustomerContext } from './context/CustomerContext';

class Home extends Component {

  constructor(props) {
    super(props)

    this.getPageHeader = this.getPageHeader.bind(this);
    this.getApplicationHeaders = this.getApplicationHeaders.bind(this);
    this.getApplicationHeader = this.getApplicationHeader.bind(this);
    this.getApplicationStatus = this.getApplicationStatus.bind(this);
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

  getPageHeader(pageHeader, showTitle) {
    let header;
    if (showTitle) {
      header = pageHeader
    } else {
      header = 'Page Title'
    }
    return header
  }

  filterLink(linkName, show) {
    let content = 'Page Link';
    if(show) {
      content = linkName;
    }
    return content;
  }

  render() {
    return (
      <CustomerContext.Consumer>
        {({ activeCustomer, showHeaders }) => (
          <div className="site">
            <Header />
            <main id="content" role="main" className="site-content">
              <div className="container">
                <h2 className="heading--xxlarge--my-account heading--xxlarge">{this.getPageHeader(data.student[activeCustomer].name + `'s Account`, showHeaders)}</h2>
                <h3 className="heading--xsmall" style={{ marginBottom: '50px' }}>
                  <div style={{ display: 'inline-block' }}>
                    <span>Your Customer Reference Number (CRN) : </span>
                    <span>20124471022</span>
                  </div>
                </h3>
                <ol className="categories-list content">
                  <li>
                    <h3 className="home-nav">
                      <Link to="/page2" className="home-nav-link action--secondary">{this.filterLink('Applications and Support', showHeaders)}</Link>
                    </h3>
                    <p>Manage your applications and your support applications</p>
                  </li>
                  <li>
                    <h3 className="home-nav"><a>{this.filterLink('Start a new application', showHeaders)}</a></h3>
                    <p>Begin a new student finance application to help fund your studies</p>
                  </li>
                  <li>
                    <h3 className="home-nav"><a>{this.filterLink('Support an application', showHeaders)}</a></h3>
                    <p>Provide details to support a student who is applying for student finance</p>
                  </li>
                  <li>
                    <h3 className="home-nav"><a>{this.filterLink('Letters and emails', showHeaders)}</a></h3>
                    <p>View all letters and emails that have been sent to you by the Student Loans Company</p>
                  </li>
                  <li>
                    <h3 className="home-nav">
                      <Link to="/page4">{this.filterLink('My Profile', showHeaders)}</Link>
                    </h3>
                    <p>Update your personal details or change your password</p>
                  </li>
                  <li>
                    <h3 className="home-nav"><a>{this.filterLink('Payments', showHeaders)}</a></h3>
                    <p>Check when you'll next be paid or your past payments</p>
                  </li>
                  <li>
                    <h3 className="home-nav"><a>{this.filterLink('Finance', showHeaders)}</a></h3>
                    <p>Update your bank details</p>
                  </li>
                </ol>
              </div>
            </main>
            <Footer />
          </div>
        )}
      </CustomerContext.Consumer>
    );
  }
}

export default Home;
