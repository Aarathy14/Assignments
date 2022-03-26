import React, { Component } from 'react'

class Form extends Component {
  render() {
    return (
        <div className= 'w-50 m-5 p-5 border border-3 border-dark'>
      <div ></div>
    <form className ='row'>
        <div className='col-5'>
        <label> Name of passenger:</label>
        <input type= "text"></input>
        </div>
        <div className='col-5 '>
            <label>Age</label>
            <input type ="number"></input>
        </div>
        <div className='col-10'>

                        <div><label>Gender</label>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                    <label class="form-check-label" for="flexRadioDefault1">
                        Male
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"></input>
                    <label class="form-check-label" for="flexRadioDefault2">
                        Female
                    </label><br/></div> 
                </div>
                </div>
                <div className='col-10'><label>Source</label><br/>
          <select className='form-select'>
            <option></option>
            <option>Chennai</option>
            <option>Bangalore</option>
            <option>Hyderabad</option>
          </select>
         </div>

                <div className='col-10'>
                  <label>Destination</label><br/>
                  <select className='form-select'>
                    <option></option>
                    <option>Delhi</option>
                    <option>Kolkata</option>
                    <option>Smila</option>
                    
                  </select>
                </div>
                <div class ="form-check">
                  <input class="form-check-input"type="checkbox" value=""id="flexcheckdeafault"></input>
                  <label class ="form-check-label"for="flexCheckDeafault">i Agree all Tearms and Condition</label>

        </div>
        <button className='btn btn-success'>Submit</button>
       



    </form>
    </div>
      )
  }
}

export default Form