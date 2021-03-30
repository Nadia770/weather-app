import React from "react";

export default function Weather(props) {
  return (
    <section>
      <div className="location-box">
        <h1 className="date">{new Date().toDateString()}</h1>
        <h1 className="location">{props.data.name}</h1>
      </div>
      <div className="weather-box">
        {/* <h2nclassName="temp">{props.data.main.temp}</h2> */}
        {/* <h2 className"weather">{props.data.weather[0].description}</h2> */}
      </div>
    </section>
  );
}
