import React from "react"
import SubtitleSti from "../SubtitleSti"
import ListSti from "../ListSti"

import "./styles.css"

const cities = [
  {
    cityName: 'Rio de Janeiro',
    min: "18°",
    max: "27°"
  },
  {
    cityName: 'Salvador',
    min: "23°",
    max: "37°" 
  },
  {
    cityName: 'São Paulo',
    min: "14°",
    max: "22°"
  },
  {
    cityName: 'Curitiba',
    min: "5°",
    max: "14°" 
  },
  {
    cityName: 'Belo Horizonte',
    min: "21°",
    max: "32°"
  },
  {
    cityName: 'Fortaleza',
    min: "21°",
    max: "32°" 
  },
  {
    cityName: 'Brasília',
    min: "24°",
    max: "37°" 
  },
  {
    cityName: 'Manaus',
    min: "24°",
    max: "37°"
  },
  {
    cityName: 'Belém',
    min: "24°",
    max: "37°" 
  },
  {
    cityName: 'João Pessoa',
    min: "28°",
    max: "40°"
  }
]


var itemKey = 0;

const SectionCitieSti = () => (
  <section className="section-cities-sti">
    <div className="container">
      <SubtitleSti />
      <ul className="list-sti min-max-li"> 
        <li className="degree-li-sti label">Min</li>
        <li className="degree-li-sti label">Máx</li>
      </ul>
      <ul className="list-sti min-max-li"> 
        <li className="degree-li-sti label">Min</li>
        <li className="degree-li-sti label">Máx</li>
      </ul>
      
      {cities.map(({min, max, cityName}) => (
        <ListSti
          key={itemKey++}
          min={min}
          max={max}
          cityName={cityName}
        />
      ))}
    </div>
  </section>
)

export default SectionCitieSti