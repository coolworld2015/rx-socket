import React, {Component} from 'react';
import Header from './Header';
import Login from './Login';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showProgress: false,
            isLoggedIn: true
        }
    }

    onLogin() {
        console.log('onLogin');
        this.setState({
            isLoggedIn: true
        });
    }
	
	onLogOut() {
        this.props.onLogOut();
    }
	
    render() {
        if (this.state.isLoggedIn) {
            return (
                <div>
                    <Header onLogOut={this.onLogOut.bind(this)}/>
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