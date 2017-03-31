import React, {Component} from 'react';
import App from './App';

class VisibleCards extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        console.log(this.props.routeParams);
    }

    render() {
        return (
            <div>
                <div style={{float: 'left', margin: 100+'px'}}>
                    <App />
                </div>
                <div style={{
                    float: 'right',
                    //borderStyle: 'solid',
                    margin: 100+'px'
                }}>
                    Deck ID - {this.props.routeParams.deckId}
                </div>
            </div>
        );
    }
}

export default VisibleCards;