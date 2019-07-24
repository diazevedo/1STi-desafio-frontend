import React, { useState } from 'react'
import HeaderSti from '../HeaderSti'
import FormSearchCitySti from '../FormSearchCitySti'
import SectionCitieSti from "../SectionCitieSti"
import SectionCityWeather from "../SectionCityWeather"
//https://openweathermap.org/api


const App = () => {

  const [citySearched, setCitySearched] = useState(false);

  const handleClickSearch = (event) => {
    event.preventDefault();
    setCitySearched(true);
  }

  const handleClickClose = (event) => {
    event.preventDefault();
    setCitySearched(false);
  }

  return (
    <>
      <HeaderSti city={`${citySearched ? "-smaller" : ""}`}/>
      <SectionCityWeather display={`${citySearched ? "" : "-none"}`} handleClick={handleClickClose}/>
      <FormSearchCitySti  handleClick={handleClickSearch}/>
      <SectionCitieSti city={`${citySearched ? "-smaller" : ""}`}/>
    </>
  )
}

export default App;