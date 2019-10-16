import React from "react";
import "./styles.css";
var { translateDays } = require("../../helpers/translateDay");

const NextDays = ({ forecast }) => {
  return (
    <aside className="next-days">
      {forecast.map(function({ day, low, high }, index) {
        var positionDiv = "",
          positionH3 = "";

        if (index + 1 === forecast.length) positionH3 = "last";

        return (
          <div key={index} className={`next-day ${positionDiv}`}>
            <h3 className={positionH3}>{translateDays(day)}</h3>
            <p>{`${low}° ${high}°`}</p>
          </div>
        );
      })}
    </aside>
  );
};

export default NextDays;
