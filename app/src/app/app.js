import React, {Component} from 'react';
import AppContainer from './appContainer';
import Login from './Login';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showProgress: false,
            isLoggedIn: false
        }
		
		window.appConfig = {
            access_token: '',
			url: 'http://jwt-base.herokuapp.com/',
			users: {
                refresh: false
            },
			phones: {
                refresh: false
            }	
        };
    }

    onLogin() {
        console.log('onLogin');
        this.setState({isLoggedIn: true});
    }
    
	onLogOut() {
        console.log('onLogOut');
        this.setState({isLoggedIn: false});
    }
	
    render() {
        if (this.state.isLoggedIn) {
            return (
                <div>
                    <AppContainer onLogOut={this.onLogOut.bind(this)}/>
                    {this.props.children}
                </div>
            )
        } else {
            return (
                <Login onLogin={this.onLogin.bind(this)}/>
            )
        }
    }
}

export default App;