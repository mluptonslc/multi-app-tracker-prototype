import React from 'react';
import ReactDOM from 'react-dom';
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

    render() {
        return (
            <BrowserRouter basename="/customer">
                <Switch>
                    <Route exact path="/page1" component={Home} />
                    <Route exact path="/page2" component={ApplicationTracker} />
                    <Route exact path="/page3" component={Application} />
                    <Route exact path="/page4" component={Profile} />
                    <Route exact path="/setup" component={Setup} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
