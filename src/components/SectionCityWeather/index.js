import React from "react"
import { MdClear, MdArrowDownward, MdArrowUpward } from 'react-icons/md'
import NextDays from "../NextDays"

import "./styles.css"

const SectionCityWeather = ({ handleClick, currentWeather }) => {
  

    if(Object.keys(currentWeather).length === 0)
      return (""); 
    
    return(

      <article className="article-weather-sti">
        
        <header>
          <h3 className="text-h3">
            {currentWeather.name}
          </h3>
          <button className="button-close-sti" onClick={handleClick}><MdClear size={30}/></button>
        </header>

        <section className="current-weather-sti">
      
          <p className="today-weather-sti">
            {currentWeather.currentCondition.degrees}
          </p>
          <p className="today-weather-sti">
            {currentWeather.currentCondition.condition}
          </p>

          <article className="article-today-sti flex">
            
            <div className="div-first-line flex">
            
              <div className="flex">
                
                <div className="icon-degree-sti flex">
                  <MdArrowDownward size={26}/>
                  <p className="paragraph-degree-sti">{currentWeather.currentCondition.min}</p>
                </div>
                
                <div className="icon-degree-sti flex m-right">
                  <MdArrowUpward size={26}/>
                  <p className="paragraph-degree-sti">{currentWeather.currentCondition.max}</p>
                </div>

              </div>

              <p className="extra-info-sti">Sensação <span>{currentWeather.currentCondition.feelsLike}</span></p>

            </div>
            
            <p className="extra-info-sti wider-div">Vento <span>{currentWeather.currentCondition.wind}</span></p>
            <p className="extra-info-sti">humidade <span></span>{currentWeather.currentCondition.humidity}</p>

          </article>

        </section>
        <NextDays forecast={currentWeather.forecast}/>
      </article>
    )
}

export default SectionCityWeather