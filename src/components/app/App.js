import React, { useState, useEffect } from 'react'
import HeaderSti from '../HeaderSti'
import FormSearchCitySti from '../FormSearchCitySti'
import SectionCitieSti from "../SectionCitieSti"
import SectionCityWeather from "../SectionCityWeather"
const { api } = require ("../../helpers/apiCall")

const App = () => {

  const [cityCurrentWeather, setCityCurrentWeather] = useState({});
  const [citySearched, setCitySearched] = useState(false);

  const handleClickSearch = (event, citySearchedName) => {
    
    event.preventDefault();
    api.get(
      `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${citySearchedName}&format=json&u=c`,
      null,
      null,
      function (err, data, result) {
        let forData = JSON.parse(data);
        
        let cityForescast = {
         
          name: `${forData.location.city}, ${forData.location.region} - ${forData.location.country}`,
          currentCondition: {
            degrees: `${forData.current_observation.condition.temperature}°C`,
            condition: `${forData.current_observation.condition.text}`,
            min: `${forData.forecasts[0].low}°C`,
            max: `${forData.forecasts[0].high}°C`,
            wind: `${forData.current_observation.wind.speed.toFixed(0)}Km/h`,
            feelsLike: Math.floor((forData.current_observation.wind.chill -32) * 5 / 9) + 'ºC',
            humidity: `${forData.current_observation.atmosphere.humidity}%`,
          },
          forecast: forData.forecasts.slice(1, 6)
        }

        setCityCurrentWeather(cityForescast);
      }
    )
  }

  const handleClickClose = (event) => {
    event.preventDefault();
    setCityCurrentWeather({});
  }

  return (
    <>
      <HeaderSti city={`${cityCurrentWeather.length > 0 ? "-smaller" : ""}`}/>
      <SectionCityWeather currentWeather={cityCurrentWeather} display={`${Object.keys(cityCurrentWeather).length > 0 ? "" : "-none"}`} handleClick={handleClickClose}/>
      <FormSearchCitySti handleClick={handleClickSearch}/>
      <SectionCitieSti city={`${citySearched ? "-smaller" : ""}`}/>
    </>
  )
}

export default App;