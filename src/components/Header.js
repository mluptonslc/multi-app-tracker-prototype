import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {


  render() {
    return (
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
        <div class="container">
          <div class="feedback">
            <p><span class="phase-tag">PROTOTYPE</span> We're always trying to improve our service – <a href="" target="_blank">your
              feedback</a> helps us do this.</p>
          </div>
        </div>
        <div className="container">
          <div className="base-1-3" style={{ float: 'left' }}>
            <img src={require('../images/template/sfe-logo.svg')} alt="Student Finance England"
              className="secondary-logo" />
          </div>
          <div className="base-2-3" style={{ float: 'left' }}>
            <a className="nav-link">Logout</a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
