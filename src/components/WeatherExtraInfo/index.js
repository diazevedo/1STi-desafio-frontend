import React from 'react'
import { MdArrowDownward, MdArrowUpward } from 'react-icons/md'
import ParagraphDegreeCondition from '../ParagraphDegreeCondition'

import './styles.css'

const WeatherExtraInfo = ({min, max, feelsLike, wind, humidity}) => (
  <div className="weather-extra-info">
      
      <div className="wrapper-degree-condition-flex">
        <ParagraphDegreeCondition degree={min}>
          <MdArrowDownward size={26}/>
        </ParagraphDegreeCondition>
        <ParagraphDegreeCondition degree={max}>
          <MdArrowUpward size={26}/>
        </ParagraphDegreeCondition>
      </div>

      <p className="extra-info-sti">Sensação <span className="bold">{feelsLike}</span></p>
      <p className="extra-info-sti">Vento <span className="bold">{wind}</span></p>
      <p className="extra-info-sti">humidade <span className="bold">{humidity}</span></p>
  </div>
)

export default WeatherExtraInfo
