import React from "react";
import HeaderCurrentWeather from "../HeaderCurrentWeather";
import NextDays from "../NextDays";
import SectionWatherDegreeCondition from "../SectionWatherDegreeCondition";

import "./styles.css";

const SectionCityWeather = ({ handleClick, currentWeather }) => {
  console.log(currentWeather);
  if (Object.keys(currentWeather).length === 0) return "";

  const { currentCondition } = currentWeather;

  return (
    <article className="article-weather">
      <HeaderCurrentWeather
        handleClick={handleClick}
        text={currentWeather.name}
        size={30}
      />

      <SectionWatherDegreeCondition
        degrees={currentCondition.degrees}
        condition={currentCondition.condition}
        min={currentCondition.min}
        max={currentCondition.max}
        feelsLike={currentCondition.feelsLike}
        wind={currentCondition.wind}
        humidity={currentCondition.humidity}
      />

      <NextDays forecast={currentWeather.forecast} />
    </article>
  );
};

export default SectionCityWeather;
