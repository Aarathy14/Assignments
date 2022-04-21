import { Component } from "react"
import './Form.css'
class Form extends Component {
    state = {
        firstname: '', lastname: '', email: '', bnum: '', cname: '', jname: '', street: '', city: '', pstate: '', zip: '', country: '', topic: ''
      }
    render() {
        return (
            <div className="m">
                <h2>Contact Us</h2>
                <div className="aa">
                    <div><label>First Name</label><br />
                        <input type="text "value={this.state.firstname}></input></div>

                    <div><label>Last Name</label> <br />
                        <input type="text" value={this.state.lastname}></input></div>
                </div>

                <div className="bb">
                    <div><label>Email</label><br />
                        <input type="text" value={this.state.email}></input></div>

                    <div><label>Business Phone</label><br />
                        <input type="text" value={this.state.BusinessPhone}></input></div>
                        
                </div>

                <div className="ff">
                    <label>street 1 </label><br />
                    <input type="text" value={this.state.street}></input></div>

                <div className="cc">
                    <div><label> City </label><br />
                    <input type="text" value={this.state.city}></input></div>

                    <div><label> State /Province</label><br />
                        <input type="text" value={this.state.pstate}></input></div></div>


                <div className="dd"><div><label> Zip/PostalCode</label><br />
                    <input type="text" value={this.state.zip}></input></div>

                    <div><label> Country/Region</label><br />
                        <input type="text" value={this.state.country}></input></div></div>

                <div className="ee"><label>Topic</label><br />
                    <input type="text"value={this.state.topic}></input></div>
            </div>

        )
    }
}
export default Form;