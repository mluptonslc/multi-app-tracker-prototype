import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Application from './pages/application/Application'
import ApplicationTracker from './pages/application/ApplicationTracker';
import Home from './Home';
import './styles/customer-portal.css';
import './styles/new-transport.css';
import './styles/pattern-library.css';
import Profile from './pages/miniapps/Profile';
import Setup from './pages/setup/Setup';
import { CustomerContext } from './context/CustomerContext';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.changeCustomer = event => {
            this.setState(
                { activeCustomer: event.target.value }
            )
        }

        this.toggleHeaders = event => {
            this.setState({
                showHeaders: event.target.checked
            })
        }

        this.state = {
            activeCustomer: 0,
            showHeaders: true,
            toggleHeaders: this.toggleHeaders,
            changeCustomer: this.changeCustomer
        }

        this.toggleHeaders = this.toggleHeaders.bind(this);
        this.changeCustomer = this.changeCustomer.bind(this);
    }

    render() {
        return (
            <CustomerContext.Provider value={this.state}>
                <BrowserRouter basename="/customer">
                    <Switch>
                        <Route exact path="/page1" component={Home} />
                        <Route exact path="/page2" component={ApplicationTracker} />
                        <Route exact path="/page3" component={Application} />
                        <Route exact path="/page4" component={Profile} />
                        <Route exact path="/setup" component={Setup} />
                    </Switch>
                </BrowserRouter>
            </CustomerContext.Provider>
        );
    }
}

export default App;
