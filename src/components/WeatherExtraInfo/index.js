import React from "react";

import "./styles.css";

const WeatherExtraInfo = ({ min, max, feelsLike, wind, humidity }) => (
  <>
    <div className="weather-extra-info">
      <div className="wrapper-degree-condition-flex"></div>
      <p className="extra-info feels-like">
        Sensação <span className="bold">{feelsLike}</span>
      </p>
      <p className="extra-info wind">
        Vento <span className="bold">{wind}</span>
      </p>
      <p className="extra-info humidity">
        humidade <span className="bold">{humidity}</span>
      </p>
    </div>
  </>
);

export default WeatherExtraInfo;
