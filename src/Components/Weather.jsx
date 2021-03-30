import React from "react";

export default function Weather(props) {
  return (
    <section>
      <div className="location-box">
        <h1 className="date">{new Date().toDateString()}</h1>
        <h1 className="location">{props.data.name}, {props.data.sys.country}</h1>
      </div>
      <div className="weather-box">
        <h2 className="temp">{props.data.main.temp}</h2>
        <h2 className="weather">{props.data.weather[0].description}</h2>
      </div>
    </section>
  );
}
