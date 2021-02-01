//import { render } from '@testing-library/react';
import { Component } from "react";

class ClockUpdate extends Component {
    constructor(props){
        super(props)
        this.state = {
            date:new Date()};
    }
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            3000
        );
    }
    tick(){
        this.setState({
            date: new Date()
        })
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
        alert("going on....")
    }
    render(){
        return (
            <h1>{this.state.date.toLocaleTimeString()}</h1>
        );
    }
}

export default ClockUpdate;