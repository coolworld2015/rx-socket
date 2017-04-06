import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Root from './root';
import Socket from '../socket/socket';
import ClientDetails from './ClientDetails';

export default (
    <Route path="/" component={Root}>
        <IndexRoute component={Socket}/>
        <Route path="socket" component={Socket}/>
		<Route path="client-details">
            <Route path=":id/:name" component={ClientDetails}/>
        </Route>
    </Route>
);