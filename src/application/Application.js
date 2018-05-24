import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Application extends Component {

  constructor(props) {
    super(props)

    this.state = {
      application: this.props.location.state.application
    }

    this.getToDoItems = this.getToDoItems.bind(this);
    this.getToDoItemStatus = this.getToDoItemStatus.bind(this);
    this.getExtraOptions = this.getExtraOptions.bind(this);
  }

  getToDoItems() {
    return this.state.application.toDoItems.map((toDoItem, index) => {
      return <li key={index} className="section__row">
        <h3 className="section__label">
          <Link to='/application'
            className="section__label action--secondary"
            style={{ textDecoration: 'none' }}>
            {toDoItem.description}
          </Link>
        </h3>
        {this.getToDoItemStatus(toDoItem)}
      </li>
    })
  }

  getExtraOptions() {
    return this.state.application.extraOptions.map((option, index) => {
      return <li className="action--secondary"><a className="action--secondary">{option.description}</a></li>
    })
  }

  getToDoItemStatus(toDoItem) {
    let toDoItemStatus = toDoItem.status;
    let statusClass = toDoItemStatus === 'complete' ? 'section__status_completed' : 'section__status_incomplete';
    return <span className={statusClass}>{toDoItemStatus}</span>
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
                <img src={require('../images/template/sfe-logo.svg')} alt="Student Finance England"
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
              <div className="content">
                <h3 className="heading--xxlarge">{this.state.application.modeOfStudy} {this.state.application.type} {this.state.application.name}</h3>
              </div>
              <div className="base2-2-3 mainbar">
                <section>
                  <ul className="section__list">
                    {this.getToDoItems()}
                  </ul>
                </section>
              </div>
              <div className="base2-1-3">
                <div className="sidebar">
                <section className="section" style={{marginBottom: '15px'}}>
                  <div className="content">
                    <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '15px'}}>
                      {this.getExtraOptions()}
                    </ul>
                  </div>
                </section>
                <section>
                  <div className="content">
                    <h3>Help us improve our online service</h3>
                    <a href="feedback">Tell us what you think of this service</a>
                  </div>
                </section>
                </div>
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


export default Application;
