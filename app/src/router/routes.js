import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Root from './root';
import Socket from '../socket/socket';

export default (
    <Route path="/" component={Root}>
        <IndexRoute component={Socket}/>
        <Route path="socket" component={Socket}/>
    </Route>
);