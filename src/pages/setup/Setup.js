import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import '../../index.css'
import data from '../../data.json';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { CustomerContext } from '../../context/CustomerContext';

class Setup extends Component {

    constructor(props) {
        super(props);

        this.getToggleState = this.getToggleState.bind(this);
    }

    getToggleState(showHeaders) {
        return showHeaders ? 'off' : 'on'
    }

    getCustomerName(index) {
        let activeCustomer = data.student[index]
        if (activeCustomer)
            return `Current Selection: ${data.student[index].name}`
        else return `Cannot find a student with ID: ${index}`

    }

    render() {
        return (
            <React.Fragment>
                <div className="site">
                    <Header />
                    <CustomerContext.Consumer>
                        {({ activeCustomer, showHeaders, toggleHeaders, changeCustomer }) => (
                            <main id="content" role="main" className="site-content">
                                <div className="container">
                                    <h2 className="heading--xxlarge--my-account heading--xxlarge">Setup</h2>
                                    <label htmlFor="customer" className="label">Active User</label>
                                    <p className="label__hint">Enter the customer number</p>
                                    <p className="label__hint">{this.getCustomerName(activeCustomer)}</p>
                                    <input id="customer" type="text" placeholder="0" className="text-input" onChange={changeCustomer} />
                                    <div className="checkbox__group">
                                        <input
                                            id="toggle-headers"
                                            type="checkbox"
                                            className="checkbox__input"
                                            checked={showHeaders}
                                            onClick={toggleHeaders} />
                                        <label htmlFor="toggle-headers" className="checkbox__label">
                                            Toggle Headers
                                        </label>
                                    </div>
                                    <div className="action-group">
                                        <Link to="page1" className="action--primary" style={{ marginTop: '30px' }}>Continue</Link>
                                    </div>
                                </div>
                            </main>
                        )}
                    </CustomerContext.Consumer>
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}

export default Setup;
