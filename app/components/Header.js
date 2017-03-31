import React, {Component} from 'react';
import {Link} from 'react-router';

const Header = () => {
    return (
        <nav>
            <Link to="/home">Home</Link>
            {" | "}
            <Link to="/about">About</Link>
            {" | "}
            <Link to="/clients">Clients</Link>
            {" | "}
            <Link to="/client-details/1/cool">Client-details</Link>
        </nav>
    );
};

export default Header;

