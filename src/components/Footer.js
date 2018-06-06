import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Footer extends Component {


  render() {
    return (
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
    );
  }
}

export default Footer;
