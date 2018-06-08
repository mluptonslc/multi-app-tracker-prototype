import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import data from '../../data.json';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { CustomerContext } from '../../context/CustomerContext';

class Application extends Component {

  constructor(props) {
    super(props)

    this.state = {
      application: this.props.location.state.application
    }

    this.getToDoItems = this.getToDoItems.bind(this);
    this.getToDoItemStatus = this.getToDoItemStatus.bind(this);
    this.getExtraOptions = this.getExtraOptions.bind(this);
    this.getPageHeader = this.getPageHeader.bind(this);
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

  getExtraOptions(showHeaders) {
    if (showHeaders) {
      return this.state.application.extraOptions.map((option, index) => {
        return <li className="action--secondary"><a className="action--secondary">{option.description}</a></li>
      })
    } else {
      return this.state.application.extraOptions.map((option, index) => {
        return <li className="action--secondary"><a className="action--secondary">Action link {index+1}</a></li>
      }) 
    }
  }

  getToDoItemStatus(toDoItem) {
    let toDoItemStatus = toDoItem.status;
    let statusClass = toDoItemStatus === 'complete' ? 'section__status_completed' : 'section__status_incomplete';
    return <span className={statusClass}>{toDoItemStatus.toUpperCase()}</span>
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
                <ol className="breadcrumbs" style={{ marginBottom: '30px' }}>
                  <li>
                    <Link to="page1">{this.getPageHeader('home', showHeaders)}</Link>
                  </li>
                  <li>
                    <Link to="page2">{this.getPageHeader('applicationTracker', showHeaders)}</Link>
                  </li>
                  <li>
                    {this.getPageHeader('application', showHeaders)}
                  </li>
                </ol>
                <div className="content">
                  <h2 className="heading--xxlarge">{this.state.application.modeOfStudy} {this.state.application.type} {this.state.application.name}</h2>
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
                    <section className="section" style={{ marginBottom: '15px' }}>
                      <div className="content">
                        <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '15px' }}>
                          {this.getExtraOptions(showHeaders)}
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
            <Footer />
          </div>
        )}
      </CustomerContext.Consumer>
    );
  }
}


export default Application;
