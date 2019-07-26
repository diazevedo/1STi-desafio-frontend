import React from 'react'
import ParagraphWeather from "../ParagraphWeather"
import WeatherExtraInfo from '../WeatherExtraInfo'
import './styles.css'

const SectionWatherDegreeCondition = ({degrees, condition, min, max, feelsLike, wind, humidity }) => (
  <section className="wather-degree-condition">
    <ParagraphWeather>{ degrees }</ParagraphWeather>
    <ParagraphWeather>{ condition }</ParagraphWeather>
    <WeatherExtraInfo 
      min={min}
      max={max}
      feelsLike={feelsLike}
      wind={wind}
      humidity={humidity}
    />
  </section>
)

export default SectionWatherDegreeCondition
