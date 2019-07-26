import React from 'react'
import { MdArrowDownward, MdArrowUpward } from 'react-icons/md'
import './styles.css'

const WeatherExtraInfo = ({min, max, feelsLike, wind, humidity}) => (
  <div className="weather-extra-info">
      
      <div className="icon-degree-sti flex">
        <MdArrowDownward size={26}/>
        <p className="paragraph-degree-sti">{min}</p>
      </div>
        
      <div className="icon-degree-sti flex m-right">
        <MdArrowUpward size={26}/>
        <p className="paragraph-degree-sti">{max}</p>
      </div>

      <p className="extra-info-sti">Sensação <span className="bold">{feelsLike}</span></p>
      <p className="extra-info-sti wider-div">Vento <span className="bold">{wind}</span></p>
      <p className="extra-info-sti">humidade <span className="bold">{humidity}</span></p>

  </div>
)

export default WeatherExtraInfo
