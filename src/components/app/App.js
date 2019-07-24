import React from 'react'
import HeaderSti from '../HeaderSti'
import FormSearchCitySti from '../FormSearchCitySti'
import SectionCitieSti from "../SectionCitieSti"
import SectionCityWeather from "../SectionCityWeather"
//https://openweathermap.org/api

const cityForecast = {
  searched: true
}

const App = () => (
  <>
    <HeaderSti city={`${cityForecast.searched ? "-smaller" : ""}`}/>
    <SectionCityWeather />
    <FormSearchCitySti />
    <SectionCitieSti city={`${cityForecast.searched ? "-smaller" : ""}`}/>
  </>
)

export default App;