import React, { Component } from 'react'

export class Cute extends Component {
    state={
        name:"Welcome"
    }
    handlechange=()=>{
        if (this.state.name === "Welcome"){
            this.setState({name:"Hello world"})
        }
        else{
            this.setState({name:"Welcome"})
        }
    }
  render() {
    return (
      <div>{this.state.name}
          <button onClick={this.handlechange}>change</button>
      </div>
    )
  }
}

export default Cute