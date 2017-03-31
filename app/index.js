import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, hashHistory} from 'react-router';
import routes from './routes';
import './index.html';
import './css/style.css';

render(
    <Router history={hashHistory} routes={routes}/>,
    document.getElementById('app')
);