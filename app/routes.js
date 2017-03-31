import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Clients from './components/Clients';
import ClientDetails from './components/ClientDetails';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="about" component={AboutPage}/>
        <Route path="home" component={HomePage}/>
        <Route path="clients" component={Clients}/>
        <Route path="client-details">
            <Route path=":id/:name" component={ClientDetails}/>
        </Route>
    </Route>
);
