'use strict';

import React, { Component } from 'react';
import ListItem from './listItem';

class Socket extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			messages: [],
			messageText: '',
			showProgress: true
		}
		
		window.ws = new WebSocket('ws://ui-socket.herokuapp.com');
		
		ws.onerror = (e) => {
			this.message = 'error'
		};
		
		ws.onopen = () => {
			ws.send('Hello ' + appConfig.socket.name + ' !!!'); 
			this.setState({
				showProgress: false
			});
		};

		ws.onmessage = (e) => {
			let d = new Date; 
			let messageObject = e.data;
			this.state.messages.unshift({
				id: +new Date(),
				name: messageObject.split('###')[1],
				date: d.toTimeString().split(' ')[0],
				message: messageObject.split('###')[0]
			})
			
			this.setState({
				showProgress: false
			});
		};
		
	}
 
 	goSend() {
		if (this.state.messageText == '') {
			this.setState({
				invalidValue: true
			});
			return;
		}
		
		let messageObject;
		messageObject = this.state.messageText + '###' + appConfig.socket.name;
		
		ws.send(messageObject); //TODO
		this.setState({
			messageText: '',
			showProgress: true
		});
	}
	
    onChangeText(text) {
        this.setState({
            messageText: text
        })
    }

    showMessages() {
        return this.state.messages.map((item) => {
            return (
                <ListItem
                    key={item.id}
                    item={item}
				/>
            )
        })
    }
	
	render() {
        var errorCtrl, loader;

        if (this.state.serverError) {
            errorCtrl = 'Something went wrong.'
        }

        if (this.state.showProgress) {
            loader = <div className="loading">
                Loading ...
            </div>;
        }
		
		return (
			<div>
				<center>
				<div className="inputarea">
					<div>
						<hr/>
						<textarea rows="5" type="text" className="textarea"
							onChange={(event) => {
							this.setState({
								messageText: event.target.value,
							})
						}}/>
						<br/>
					</div>	
	 
					<div onClick={this.goSend.bind(this)}>
						<br/>
						<button className="button">Send</button>
						<br/>
						<br/>
						<hr/>
					</div>			
                </div>			
				
 				<div className="showMessages">
					{loader}
					
					{this.showMessages()}
				</div>
				</center>
			</div>
		);
	}
}

export default Socket;