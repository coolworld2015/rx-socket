'use strict';

import React, { Component } from 'react';

class ListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
		if (this.props.item.message != 'still alive') {
			if (this.props.item.name == appConfig.socket.name) {
				return (
					<div>
						<br/>
						<div className="socket1">
							{this.props.item.message}<br/>
							<div className="span">{this.props.item.date}</div>
							<div className="span1">{this.props.item.name}</div>
						</div>
					</div>
				);
			} else {
				return (
					<div>
						<br/>
						<div className="socket">
							{this.props.item.message}<br/>
							<div className="span">{this.props.item.date}</div>
							<div className="span1">{this.props.item.name}</div>
						</div>
					</div>
				);				
			}
		} else {
			return null;
		}
    }
}

export default ListItem;