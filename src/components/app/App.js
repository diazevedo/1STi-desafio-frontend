import React, { useState, useEffect } from 'react'
import HeaderSti from '../HeaderSti'
import FormSearchCitySti from '../FormSearchCitySti'
import SectionCitieSti from "../SectionCitieSti"
import SectionCityWeather from "../SectionCityWeather"
import axios from "axios"
//https://openweathermap.org/api
/*
grnd_level: 1014.45
humidity: 95
pressure: 1014.38
sea_level: 1014.38
temp: 292.22
temp_kf: 0.8
temp_max: 292.22
temp_min: 291.422
*/

/*
humidity: 100
pressure: 1013
temp: 292.25
temp_max: 294.26
temp_min: 290.93*/


const urlCurrentWeather = `https://api.openweathermap.org/data/2.5/weather?q=`;
const urlForecastWeather = `https://api.openweathermap.org/data/2.5/forecast?q=`;

const ApiKey = `d6cfde10e216a6f677b7324f015fa9c7`;
const lang = `pt`;

const App = () => {

  const [cityCurrentWeather, setCityCurrentWeather] = useState([]);
  const [citySearched, setCitySearched] = useState(false);

  const handleClickSearch = (event, citySearchedName) => {
    
    event.preventDefault();
    // var urlCurrentDay = `${urlCurrentWeather}${citySearchedName}&appid=${ApiKey}&lang=${lang}`;
    var urlCurrentDay = ``;

    var urlForecast = `${urlForecastWeather}${citySearchedName}&appid=${ApiKey}&lang=${lang}`;

    axios.get(urlCurrentDay).then( res => console.log(res.data))
    axios.get(urlForecast).then( res => console.log(res.data.list));
  }

  const handleClickClose = (event) => {
    event.preventDefault();
    setCitySearched(false);
  }

  return (
    <>
      <HeaderSti city={`${cityCurrentWeather.length > 0 ? "-smaller" : ""}`}/>
      <SectionCityWeather currentWeather={cityCurrentWeather} display={`${cityCurrentWeather.length > 0 ? "" : "-none"}`} handleClick={handleClickClose}/>
      <FormSearchCitySti handleClick={handleClickSearch}/>
      <SectionCitieSti city={`${citySearched ? "-smaller" : ""}`}/>
    </>
  )
}

export default App;