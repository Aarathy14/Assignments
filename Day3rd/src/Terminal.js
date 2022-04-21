import React, { Component } from 'react';
import './Terminal.css';
class Terminal extends Component {
    state = {
        name: "Aarathy",
        age: 21
    }
    render() {
        return (
            <div>

                <p> My name is : <span class='a'>{this.state.name}</span> <br></br> My age is: <span class='b'>{this.state.age}</span></p>
            </div>
        )

    }
}
export default Terminal;

