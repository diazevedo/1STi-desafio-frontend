import React, { useState } from 'react'
import HeaderSti from '../HeaderSti'
import FormSearchCitySti from '../FormSearchCitySti'
import SectionCitieSti from "../SectionCitieSti"
import SectionCityWeather from "../SectionCityWeather"

const { api } = require ("../../helpers/apiCall")

function translateCondition(id) {
    
  var conditions = {
    0: "tornado",
    1: "tempestade tropical",
    2: "furacões",
    3: "trovoadas severas",
    4: "trovoadas",
    5: "chuva e neve misturadas",
    6: "chuva e granizo",
    7: "neve e granizo mistos",
    8: "chuviscos congelantes",
    9: "chuvisco",
    10: "chuva congelante",
    11: "chuveiros",
    12: "chuva",
    13: "rajadas de neve",
    14: "chuvas de neve fraca",
    15: "soprando neve",
    16: "neve",
    17: "granizo",
    18: "granizo",
    19: "pó",
    20: "nevoeiro",
    21: "neblina",
    22: "esfumaçado",
    23: "tempestuoso",
    24: "ventoso",
    25: "frio",
    26: "nublado",
    // 27: "predominantemente nublado",
    27: "nublado",
    // 28: "predominantemente nublado",
    28: "nublado",
    29: "parcialmente nublado",
    30: "parcialmente nublado",
    31: "claro",
    32: "ensolarado",
    33: "claro",
    34: "claro",
    35: "chuva mista e granizo",
    36: "quente",
    37: "tempestades isoladas",
    38: "tempestades dispersas",
    39: "chuvas espalhadas",
    40: "chuva forte",
    41: "chuveiros de neve dispersos",
    42: "neve pesada",
    43: "nevasca",
    44: "não disponível",
    45: "chuvas espalhadas",
    46: "chuveiros de neve dispersos",
    47: "trovoadas dispersas"
  }

  return conditions[id];
}

console.log(translateCondition(28));

const App = () => {

  const [cityCurrentWeather, setCityCurrentWeather] = useState({});

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
            condition: translateCondition(forData.current_observation.condition.code),
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
        display={`${Object.keys(cityCurrentWeather).length > 0 ? "" : "-none"}`} 
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