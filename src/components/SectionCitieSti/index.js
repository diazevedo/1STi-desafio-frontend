import React, { useState, useEffect } from "react"
import SubtitleSti from "../SubtitleSti"
import TableCitiesSti from "../TableCitiesSti"
import axios from "axios"

import "./styles.css"

//it will be imported
const idCities = [
  {
    id: 3451190,
    name: "Rio de Janeiro",
    country: "BR",
    min: "18°",
    max: "27°"
  },
  {
    id: 3448439,
    name: "São Paulo",
    country: "BR",
    min: "14°",
    max: "22°"
    
  },
  {
    id: 3405814,
    name: "Belo Horizonte",
    country: "BR",
    min: "21°",
    max: "32°"
    
  },
  {
    id: 3410315,
    name: "Brasília",
    country: "BR",
    min: "24°",
    max: "37°" 
  },
  {
    id: 3470154,
    name: "Belém",
    country: "BR",
    min: "24°",
    max: "37°" 
  },
  {
    id: 6321026,
    name: "Salvador",
    country: "BR",
    min: "23°",
    max: "37°"
  },
  {
    id: 6322752,
    name: "Curitiba",
    country: "BR",
    min: "5°",
    max: "14°" 
  },
  {
    id: 3399415,
    name: "Fortaleza",
    country: "BR",
    min: "21°",
    max: "32°" 
  },
  {
    id: 3663517,
    name: "Manaus",
    country: "BR",
    min: "24°",
    max: "37°"
  },
  {
    id: 3397277,
    name: "Joao Pessoa",
    country: "BR",
    min: "28°",
    max: "40°"
  }
]

const SectionCitiesSti = (city) => {

  const ApiKey = `d6cfde10e216a6f677b7324f015fa9c7`;
  const lang = `pt`;
  const [citiesData, setCities] = useState([]);
  const idCollections = idCities.map(({id}) => id);

  const urlGroupOfCities = `http://api.openweathermap.org/data/2.5/group?id=${idCollections.join()}&appid=${ApiKey}&units=metric&lang=${lang}}`

  useEffect( () => {
    // axios.get(`${url}London&appid=${ApiKey}&lang=${lang}`)
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
    <section className={`section-cities-sti ${city.city}`}>
      <SubtitleSti />
      <TableCitiesSti cities={citiesData} />
    </section>
  );
}

export default SectionCitiesSti