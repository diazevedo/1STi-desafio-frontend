import React from "react"
import { MdClear }from 'react-icons/md'

import "./styles.css"

const HeaderCurrentWeather = ({handleClick, size, text}) => (
   <header className="header-current-weather">
    <h3 className="title-current-weather">{ text }</h3>
    <button className="button-close" onClick={handleClick}><MdClear size={size}/></button>
  </header>
)

export default HeaderCurrentWeather