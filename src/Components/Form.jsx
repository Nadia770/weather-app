import React, { Component } from 'react'

export class Form extends Component {
state ={
  city: "London"
}

  render() {
    return (
      <div className="App">
       <form> 
         <input type="text" placeholder="Enter City..."></input>
         <button>Submit</button>
       </form>
      </div>
    )
  }
}

export default Form
