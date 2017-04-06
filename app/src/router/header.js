import React, {Component} from 'react';
import {Link} from 'react-router';

class Header extends Component {
    constructor(props) {
        super(props);
    }
	
	onLogOut() {
        appConfig.onLogOut();
    }
	
	render() {
		return (
			<nav>
				<Link to="/socket">Socket</Link>
				{" | "}
				<Link to="/socket" onClick={this.onLogOut.bind(this)}>Logout</Link>
			</nav>
		);
	}
};

export default Header;