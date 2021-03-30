import React, { Component } from 'react'

export class Form extends Component {
state ={
  city: "London"
}

  render() {
    return (
      <div className="search-box">
       <form onSubmit={this.handleSubmit}> 
         <input type="text" className="search-bar" placeholder="Search City..." onChange={this.handleChange} ></input>
         <button >Enter</button>
       </form>
      </div>
    )
  }
  handleChange=(event)=>{
    const value = event.target.value
    this.setState({city: value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmitForm(this.state.city)
  }
}

export default Form
