import React from 'react'
import ParagraphWeather from "../ParagraphWeather"
import WeatherExtraInfo from '../WeatherExtraInfo'
import './styles.css'

const SectionWatherDegreeCondition = ({degrees, condition, min, max, feelsLike, wind, humidity }) => (
  
  <section className="wather-degree-condition">
    <div className="grid-two-columns">
      <ParagraphWeather>{ degrees }</ParagraphWeather>
      <ParagraphWeather>{ condition }</ParagraphWeather>
    </div>
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
