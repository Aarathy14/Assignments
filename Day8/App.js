import React, { Component } from 'react'
// import Rabbit from'./Rabbit';
import Confirm from'./Confirm';
import Radio from'./Radio';
import Hide from './Hide';
export class App extends Component {
  render() {
    return (
      <div>
        
        <Confirm/> 
        <Radio/>
        <Hide/>
      </div>
    )
  }
}

export default App