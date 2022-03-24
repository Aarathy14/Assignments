import React, { Component } from 'react'
import Pros from './Pros';
import Emp from './Emp';
import Cute from './Cute';
import Peacock from'./Peacock';
export class App extends Component {
  state={
    title:"surya"
  }
  render() {
    return (
      <div>
    <Pros movie={this.state.title}/>
    <Emp name="archana" salary={100000000}/>
    <Cute/>
    <Peacock/>
    </div>
    )
  }
}

export default App