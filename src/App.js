import React, { Component } from 'react'
import Form from './Components/form'
import Weather from './Components/weather'
const api_key = "bc6a57e2ee7c34c874ed55a5f4de1350"

export class App extends Component {

  state={
    data :[]
  }
  

componentDidMount(){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${api_key}`)
  .then(response =>{
   return response.json()})
  .then(data =>{
    this.setState(data)})
}

  render() {
    return (
      <div>
        <Form/>
        <Weather data={this.state.data}/>
      </div>
    )
  }
}

export default App

