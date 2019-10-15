import React from "react";
import "./styles.css";

const ParagraphWeather = ({ children, modifierClass = "" }) => (
  <p className={`today-weather ${modifierClass}`}>{children}</p>
);

export default ParagraphWeather;
