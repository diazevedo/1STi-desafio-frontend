import React from "react";
import ParagraphWeather from "../ParagraphWeather";
import WeatherExtraInfo from "../WeatherExtraInfo";
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";
import ParagraphDegreeCondition from "../ParagraphDegreeCondition";
import "./styles.css";

const SectionWatherDegreeCondition = ({
  degrees,
  condition,
  min,
  max,
  feelsLike,
  wind,
  humidity
}) => (
  <section className="wather-degree-condition">
    <ParagraphWeather>
      {degrees} {condition}
    </ParagraphWeather>

    <div className="wrapper-min-max">
      <ParagraphDegreeCondition degree={min} modifierClass="-min">
        <MdArrowDownward size={26} />
      </ParagraphDegreeCondition>
      <ParagraphDegreeCondition degree={max} modifierClass="-max">
        <MdArrowUpward size={26} />
      </ParagraphDegreeCondition>
    </div>

    <p className="feels-like">
      sensação <span className="bold">{feelsLike}</span>
    </p>

    <p className="wind">
      vento <span className="bold">{wind}</span>
    </p>
    <p className="humidity">
      humidade <span className="bold">{humidity}</span>
    </p>
  </section>
);

export default SectionWatherDegreeCondition;
