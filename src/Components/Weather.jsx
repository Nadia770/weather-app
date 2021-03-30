import React from "react";


export default function Weather(props) {
  return (
    <section>
      <div className="location-box">
        <h1 className="date">{new Date().toDateString()}</h1>
        <h1 className="location">
          {props.data.name}, {props.data.sys.country}
        </h1>
      </div>
      <div><img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}/></div>
      <div className="weather-box">
        <h2 className="temp">
          {Math.floor(props.data.main.temp - 273.15)}&deg;c
        </h2>
        <h2 className="min-max-temp">
          Max:{Math.floor(props.data.main.temp_max - 273.15)}&deg;c, Min:
          {Math.floor(props.data.main.temp_min - 273.15)}&deg;c
        </h2>
        <h2 className="weather">{props.data.weather[0].description}</h2>
      </div>
    </section>
  );
}
