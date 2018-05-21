import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch  } from 'react-router-dom'


import Application from './application/Application'
import ApplicationTracker from './ApplicationTracker';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';
import './styles/customer-portal.css';
import './styles/new-transport.css';
import './styles/pattern-library.css';

ReactDOM.render(
    <BrowserRouter basename="/customer">
        <React.Fragment>
            <Switch>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/application-tracker" component={ApplicationTracker} />
                <Route exact path="/application" component={Application} />
            </Switch>
        </React.Fragment>
    </BrowserRouter>,
     document.getElementById('root'));
registerServiceWorker();
