import React, {Component} from 'react';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';

class Header extends Component {
    constructor(props) {
        super(props);
    }
	
	onLogOut() {
        appConfig.onLogOut();
    }
	
	goToClient() {
		return;
		let item = {};
		item.id = '555';
		item.name = 'Coolworld';
		hashHistory.push("/client-details/" + item.id + "/" + item.name);
	}
	
	render() {
		return (
			<div className="brandname">
				<span className="route" onClick={this.goToClient.bind(this)}>
					 Socket 
				</span>
				<span className="routeSplitter">|</span>
				<span className="route" onClick={this.onLogOut.bind(this)}>
					Logout
				</span>	
			</div>
		);
	}
};

export default Header;