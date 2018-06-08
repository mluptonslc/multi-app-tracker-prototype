import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import data from '../../data.json';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { CustomerContext } from '../../context/CustomerContext';

class Profile extends Component {

  constructor(props) {
    super(props)

    this.getPageHeader = this.getPageHeader.bind(this);
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

  render() {
    return (
      <CustomerContext.Consumer>
        {({ activeCustomer, showHeaders }) => (
        <div className="site">
          <Header />
          <main id="content" role="main" className="site-content">
            <div className="container">
              <ol className="breadcrumbs" style={{marginBottom: '30px'}}>
                <li>
                  <Link to="page1">{this.getPageHeader('home', showHeaders)}</Link>
                </li>
                <li>
                  {this.getPageHeader('applicationTracker', showHeaders)}
                </li>
              </ol>
              <h2 className="heading--xxlarge--my-account heading--xxlarge">{this.getPageHeader('profile', showHeaders)}</h2>
              <div className="base2-2-3 mainbar">
              <ul className="review" style={{ borderTop: 'solid 1px #bfc1c3' }}>
                <li className="review__row">
                  <p className="base-1-3 column">Name</p>
                  <p className="base-1-3 column heading">{data.student[0].name}</p>
                  <a className="action--secondary review__change">Change</a>
                </li>
                <li className="review__row">
                  <p className="base-1-3 column">Email</p>
                  <p className="base-1-3 column heading">{data.student[0].email}</p>
                  <a className="action--secondary review__change">Change</a>
                </li>
                <li className="review__row">
                  <p className="base-1-3 column">Home telephone</p>
                  <p className="base-1-3 column heading">{data.student[0].homeTelephone}</p>
                  <a className="action--secondary review__change">Change</a>
                </li>
                <li className="review__row">
                  <p className="base-1-3 column">Mobile telephone</p>
                  <p className="base-1-3 column heading">{data.student[0].mobileTelephone}</p>
                  <a className="action--secondary review__change">Change</a>
                </li>
                <li className="review__row">
                  <p className="base-1-3 column">Home address</p>
                  <p className="base-1-3 column heading">{data.student[0].homeAddress}</p>
                  <a className="action--secondary review__change">Change</a>
                </li>
                <li className="review__row">
                  <p className="base-1-3 column">Contact address</p>
                  <p className="base-1-3 column heading">{data.student[0].contactAddress}</p>
                  <a className="action--secondary review__change">Change</a>
                </li>
                <li className="review__row">
                  <p className="base-1-3 column">Braille/large font</p>
                  <p className="base-1-3 column heading">{data.student[0].braile}</p>
                  <a className="action--secondary review__change">Change</a>
                </li>
                <li className="review__row">
                  <p className="base-1-3 column">Password</p>
                  <p className="base-1-3 column heading">{data.student[0].password}</p>
                  <a className="action--secondary review__change">Change</a>
                </li>
                <li className="review__row">
                  <p className="base-1-3 column">Secret Answer</p>
                  <p className="base-1-3 column heading">{data.student[0].secret}</p>
                  <a className="action--secondary review__change">Change</a>
                </li>
              </ul>
              </div>
              <div className="base2-1-3">
                  <div className="sidebar">
                    <ol className="categories-list content">
                      <li>
                        <h3 className="heading--large">Tell us your mobile number</h3>
                        <p>We'll keep you updated about your student finance application by text.</p>
                      </li>
                      <li>
                        <h3 className="heading--large">Keep your contact details up-to-date</h3>
                        <p>We'll use these details to update you on your application – so make sure you keep them up-to-date.</p>
                      </li>
                    </ol>
                  </div>
                </div>
            </div>
          </main>
          <Footer />
        </div>
      )}
      </CustomerContext.Consumer>
    );
  }
}

export default Profile;
