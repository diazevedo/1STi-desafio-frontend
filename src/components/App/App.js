import React, { useState } from "react";
import Header from "../Header";
import FormSearchCity from "../FormSearchCity";
import SectionCities from "../SectionCities";
import SectionCityWeather from "../SectionCityWeather";

const { api } = require("../../helpers/apiCall");
const { conditions } = require("../../helpers/conditions");
const { cityObject } = require("../../helpers/cityObject");

const App = () => {
  const [cityCurrentWeather, setCityCurrentWeather] = useState({});
  const [searchingCity, setSearchingCity] = useState(false);

  const handleClickSearch = (event, citySearchedName) => {
    event.preventDefault();

    setSearchingCity(true);

    if (citySearchedName.length === 0) {
      setSearchingCity(false);
      return;
    }

    api.get(
      `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${citySearchedName}&format=json&u=c`,
      null,
      null,
      async (err, data, result) => {
        const response = JSON.parse(data);

        if (Object.entries(response.location).length > 0) {
          let forescast = cityObject(response);

          forescast.currentCondition.condition = conditions(
            forescast.currentCondition.condition
          );

          setCityCurrentWeather(forescast);
          setSearchingCity(false);
        }
      }
    );
  };

  const handleClickClose = event => {
    event.preventDefault();
    setCityCurrentWeather({});
  };

  return (
    <>
      <Header
        classModifier={`${
          Object.keys(cityCurrentWeather).length > 0 ? "-smaller" : ""
        }`}
      />

      <SectionCityWeather
        currentWeather={cityCurrentWeather}
        handleClick={handleClickClose}
      />

      <FormSearchCity
        handleClick={handleClickSearch}
        classModifier={`${
          Object.keys(cityCurrentWeather).length > 0 ? "-smaller" : ""
        }`}
        buttonMod={`${searchingCity ? "-disabled" : ""}`}
      />

      <SectionCities
        classModifier={`${
          Object.keys(cityCurrentWeather).length > 0 ? "-smaller" : ""
        }`}
      />
    </>
  );
};

export default App;
