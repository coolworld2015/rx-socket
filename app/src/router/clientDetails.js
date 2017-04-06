import React, {Component} from 'react';
import {hashHistory} from 'react-router';

class ClientDetails extends Component {
    constructor(props) {
        super(props);
		console.log(this.props.routeParams);
    }
	
	goToSocket() {
		hashHistory.push("/socket");
	}
	
    render() {
        return (
			<div>
				<center>
				<br/>
				<div className="brandname">
					{this.props.routeParams.id} <br />
					{this.props.routeParams.name}
				</div>
				<div onClick={this.goToSocket.bind(this)}>
					<br/>
					<button className="button">Socket</button>
					<br/>
					<br/>
					<hr/>
				</div>		
				</center>				
			</div>		
        );
    }
}

export default ClientDetails;