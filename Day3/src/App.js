import React, {Component} from 'react';
import Print from './Print';
import Terminal from './Terminal';
import Form from './Form';
import Register from './Register';
// import Welcome from './Welcome';

class App extends Component{
  render(){
    return(
      <div>
        
        <Print/>
        <Terminal/>
        <Form/>
        <Register/>
        {/* <Welcome/> */}
        
      </div>
    )
  }
}
export default App;