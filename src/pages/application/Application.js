import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer';
import Header from '../../components/Header';

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
          <Header />
          <main id="content" role="main" className="site-content">
            <div className="container">
              <div className="breadcrumb">
                <ol className="breadcrumb__list">
                  <li className="breadcrumb__list__item">
                    <Link to="home">home</Link>
                  </li>
                  <li className="breadcrumb__list__item">
                    <Link to="application-tracker">applications</Link>
                  </li>
                  <li className="breadcrumb__list__item">
                    application
                  </li>
                </ol>
              </div>
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
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}


export default Application;
