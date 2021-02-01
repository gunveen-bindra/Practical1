import { Component } from 'react';

class Pizza extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'Italian',
            price: 25,
            shape: 'Circular',
        }
    };

    changePizzaType = () => {
        this.setState({
            type: 'American'
        });
    }
    render() {
        return (
            <>
            <h1>{this.state.type} Pizza</h1>
        <p>It cost {this.state.price}</p>
        <p>Ans its shape is {this.state.shape}</p>
        <button type="button" onClick={this.changePizzaType}>Change to American</button>
            </>
        );
    }
}

export default Pizza;