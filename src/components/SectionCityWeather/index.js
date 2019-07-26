import React from "react"
import { MdClear, MdArrowDownward, MdArrowUpward } from 'react-icons/md'

import "./styles.css"

const SectionCityWeather = ({ display, handleClick, currentWeather }) => {
  

    if(Object.keys(currentWeather).length === 0)
      return (""); 
    
    return(

      <article className={`article-weather-sti ${display}`}>
        
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
            <p className="extra-info-sti">Humidade <span></span>{currentWeather.currentCondition.humidity}</p>

          </article>

        </section>
        
        <aside className="next-days flex">
          <div className="next-day first">
            <h3 className="">Terça</h3>
            <p>18° 26°</p>
          </div>
          <div className="next-day">
            <h3>Quarta</h3>
            <p>18° 28°</p>
          </div>
          <div className="next-day">
            <h3>Quinta</h3>
            <p>19° 30°</p>
          </div>
          <div className="next-day">
            <h3 className="last">Sexta</h3>
            <p>23° 35°</p>
          </div>
        </aside>

      </article>
    )
}

export default SectionCityWeather