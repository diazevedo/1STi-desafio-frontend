import React from "react"
import SubtitleSti from "../SubtitleSti"
import TableCitiesSti from "../TableCitiesSti"

import "./styles.css"

const cities = [
  {
    name: 'Rio de Janeiro',
    min: "18°",
    max: "27°"
  },
  {
    name: 'São Paulo',
    min: "14°",
    max: "22°"
    
  },
  {
    name: 'Belo Horizonte',
    min: "21°",
    max: "32°"
    
  },
  {
    name: 'Brasília',
    min: "24°",
    max: "37°" 
  },
  {
    name: 'Belém',
    min: "24°",
    max: "37°" 
  },
  {
    name: 'Salvador',
    min: "23°",
    max: "37°"
  },
  {
    name: 'Curitiba',
    min: "5°",
    max: "14°" 
  },
  {
    name: 'Fortaleza',
    min: "21°",
    max: "32°" 
  },
  {
    name: 'Manaus',
    min: "24°",
    max: "37°"
  },
  {
    name: 'João Pessoa',
    min: "28°",
    max: "40°"
  }
]

const SectionCitieSti = () => (
  <section className="section-cities-sti">
    <SubtitleSti />
    <TableCitiesSti cities={cities} />
  </section>
)

export default SectionCitieSti