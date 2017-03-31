import React, {Component} from 'react';
import Header from './Header';
import Login from './Login';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showProgress: false,
            isLoggedIn: false
        }
    }

    onLogin() {
        console.log('onLogin');
        this.setState({
            isLoggedIn: true
        });
    }

    render() {
        if (this.state.isLoggedIn) {
            return (
                <div>
                    <Header />
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