import React, { Component } from 'react'

export class Orbitchild extends Component {
    state={
        showinfo:false
    }
    handleshow=(e)=>{this.setState({showinfo:!this.state.showinfo})}
  render() {
    return (
      <div className='aaru'>
          <div><h4>{this.props.title}<button className='dhanu'onClick={this.handleshow}>{this.state.showinfo?'-':'+'}</button></h4></div>
        {   this.state.showinfo && <div className='Archu'>
               {this.props.info}
               </div>
  }
      </div>
    )
  }
}

export default Orbitchild