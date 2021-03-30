import React, { Component } from "react";
import Form from "./Components/Form";
import Weather from "./Components/Weather";
import LoadingIndicator from "./Components/LoadingIndicator";
const api_key = "bc6a57e2ee7c34c874ed55a5f4de1350";

export class App extends Component {
  state = {
    weatherData: [],
    isLoading: true,
  };

  componentDidMount() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${api_key}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ weatherData: data, isLoading: false });
      });
  }

  submitForm = (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ weatherData: data, isLoading: false });
      });
  };

  render() {
    const { isLoading, weatherData } = this.state;
    return (
      <div>
        {weatherData.cod === "404" ? (
          <div className="container-error"> <p className="error">Error: Please refresh the page and type in a city.</p>
          <LoadingIndicator />
          </div>
        ) : isLoading ? (
          <LoadingIndicator />
        ) : (
          <div className={weatherData.main.temp > 293.15 ? "app-warm" : "app"}>
            <main>
              <Form onSubmitForm={this.submitForm} />
              <Weather data={weatherData} />
            </main>
          </div>
        )}
      </div>
    );
  }
}

export default App;
