import React, {Component} from 'react';

class AppContainer extends Component {
	constructor(props) {
		super(props);
		
        this.state = {
            access_token: window.appConfig.access_token
        }		
	}
	
	onLogOut() {
        this.props.onLogOut();
    }

	render() {
		return (
			<div>
				<div onClick={this.onLogOut.bind(this)}>
					Logout
				</div>
				<hr/>
				<div>
					{this.state.access_token}
				</div>
			</div>
		);
	}
}

export default AppContainer;