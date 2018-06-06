import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import data from '../../data.json';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

class Profile extends Component {


  render() {
    return (
      <React.Fragment>
        <div className="site">
          <Header />
          <main id="content" role="main" className="site-content">
            <div className="container">
              <h2 className="heading--xxlarge--my-account heading--xxlarge">{data.pages.profile}</h2>
            </div>
          </main>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Profile;
