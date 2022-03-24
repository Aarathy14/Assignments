import React, { Component } from 'react'
import'./Voting.css'
export class Voting extends Component {
    state={
        count:0,
        counta:0,
        countb:0,
        countc:0,
    }
    handleIncrement = () =>{
        this.setState({count:this.state.count+1})
    }
    handleIncrement1 = () =>{
      this.setState({counta:this.state.counta+1})
  }
  handleIncrement2 = () =>{
    this.setState({countb:this.state.countb+1})
}
handleIncrement3 = () =>{
  this.setState({countc:this.state.countc+1})
}
  render() {
    return (
      <div>
         <div className='Kill'>
  
          <div className='sell'>
          <h2> C voting is:{this.state.count}</h2>
          <button class="oppas" onClick={this.handleIncrement}>Vote</button>
          </div>
          <div className='hell'>
          <h2> C++ voting is:{this.state.counta}</h2>
          <button class="oppas1" onClick={this.handleIncrement1}>Vote</button>
          </div>
          <div className='bell'>
          <h2> java voting is:{this.state.countb}</h2>
          <button class="oppas2" onClick={this.handleIncrement2}>Vote</button>
          </div>
          <div className='cell'>
          <h2> python voting is:{this.state.countc}</h2>
          <button class="oppas3" onClick={this.handleIncrement3}>Vote</button>
          </div>
      </div>
      </div>
      
    
    )
  }
}

export default Voting