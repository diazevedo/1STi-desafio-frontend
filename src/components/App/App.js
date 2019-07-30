import React, { useState } from 'react'
import HeaderSti from '../HeaderSti'
import FormSearchCitySti from '../FormSearchCitySti'
import SectionCitieSti from "../SectionCitieSti"
import SectionCityWeather from "../SectionCityWeather"

const { api } = require ("../../helpers/apiCall")
const { conditions } = require ("../../helpers/conditions")
const { cityObject } = require ("../../helpers/cityObject")

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
        let forescast = cityObject(JSON.parse(data));
        forescast.currentCondition.condition = conditions(forescast.currentCondition.condition);
        setCityCurrentWeather(forescast);
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