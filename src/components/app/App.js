import React, { useState } from 'react'
import HeaderSti from '../HeaderSti'
import FormSearchCitySti from '../FormSearchCitySti'
import SectionCitieSti from "../SectionCitieSti"
import SectionCityWeather from "../SectionCityWeather"

const { api } = require ("../../helpers/apiCall")
const { conditions } = require ("../../helpers/conditions")

const App = () => {

  const [cityCurrentWeather, setCityCurrentWeather] = useState({});

  const handleClickSearch = (event, citySearchedName) => {
    
    event.preventDefault();

    if(citySearchedName.length == 0)
      return;

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
            condition: conditions(forData.current_observation.condition.code),
            min: `${forData.forecasts[0].low}°`,
            max: `${forData.forecasts[0].high}°`,
            wind: `${forData.current_observation.wind.speed.toFixed(0)}km/h`,
            feelsLike: Math.floor((forData.current_observation.wind.chill -32) * 5 / 9) + 'º',
            humidity: `${forData.current_observation.atmosphere.humidity}%`,
          },
          forecast: forData.forecasts.slice(1, 5)
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
      <HeaderSti classModifier={`${Object.keys(cityCurrentWeather).length > 0 ? "-smaller" : ""}`}/>
      
      <SectionCityWeather 
        currentWeather={cityCurrentWeather} 
        handleClick={handleClickClose}
      />

      <FormSearchCitySti 
        handleClick={handleClickSearch}
        classModifier={`${Object.keys(cityCurrentWeather).length > 0 ? "-smaller" : ""}`}  
      />
      
      <SectionCitieSti classModifier={`${Object.keys(cityCurrentWeather).length > 0 ? "-smaller" : ""}`}/>
    </>
  )
}

export default App;