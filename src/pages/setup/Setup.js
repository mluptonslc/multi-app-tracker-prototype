import React, { Component } from 'react';

import '../../index.css'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { CustomerContext } from '../../context/CustomerContext';

class Setup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            customer: {
                name: 'Test'
            },
            updateDetails: this.updateDetails
        }

        this.setName = this.setName.bind(this)
    }

    setName(event) {
        this.setState({
            customer: {
                name: event.target.value
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="site">
                    <Header />
                    <CustomerContext.Consumer>
                        {({ customer, updateDetails }) => (
                            <main id="content" role="main" className="site-content">
                                <div className="container">
                                    <h2 className="heading--xxlarge--my-account heading--xxlarge">Register User</h2>
                                    <form>
                                        <label className="label" htmlFor="customer-name">Name</label>
                                        <input id="customer-name" className="text-input" placeholder="Jane" type="text" value={this.state.customer.name} onChange={this.setName} />
                                        <React.Fragment>
                                            <h2 className="heading--xxlarge--my-account heading--xxlarge">{customer.name}'s Account</h2>
                                            <button className="action--primary" type="button" onClick={() => { customer.name = this.state.customer.name }}>Create User</button>
                                        </React.Fragment>
                                    </form>
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
