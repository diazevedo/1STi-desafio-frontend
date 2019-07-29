import React, { useState, useEffect } from "react"
import SubtitleSti from "../SubtitleSti"
import TableCitiesSti from "../TableCitiesSti"
import axios from "axios"

import "./styles.css"

const { idCities } = require("../../helpers/idCities")

const SectionCitiesSti = ({classModifier}) => {

  const [citiesData, setCities] = useState([]);
  
  useEffect( () => {

    const ApiKey = `d6cfde10e216a6f677b7324f015fa9c7`;
    const lang = `pt`;
    const idCollections = idCities.map(({id}) => id);
    const urlGroupOfCities = `http://api.openweathermap.org/data/2.5/group?id=${idCollections.join()}&appid=${ApiKey}&units=metric&lang=${lang}}`

    axios.get(urlGroupOfCities)
      .then( res => {
        var forecastCities = res.data.list.map(({id, name, main}) => {
          return {
            id: id,
            name: name,
            min: `${main.temp_min.toFixed(0)}°`,
            max: `${main.temp_max.toFixed(0)}°`
          }
       })
       setCities(forecastCities)
      }) 
  }, [])

  return (
    <section className={`section-cities-sti ${classModifier}`}>
      <SubtitleSti />
      <div>
        <TableCitiesSti cities={citiesData.slice(0,5)} />

        <TableCitiesSti cities={citiesData.slice(5,10)} />
      </div>
    </section>
  );
}

export default SectionCitiesSti