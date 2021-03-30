import React, { Component } from "react";
import Form from "./Components/Form";
import Weather from "./Components/Weather";
const api_key = "bc6a57e2ee7c34c874ed55a5f4de1350";

export class App extends Component {
  state = {
    weatherData: [],
  };

  componentDidMount() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${api_key}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ weatherData: data });
      });
  }

  submitForm=(city) =>{
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ weatherData: data });
      });
  }

  render() {
    return (
      <div className="app">
        <main>
        <Form onSubmitForm={this.submitForm} />
        <Weather data={this.state.weatherData} />
        </main>
      </div>
    );
  }
}

export default App;
