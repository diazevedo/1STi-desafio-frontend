import React, { useState } from "react"
import InputTextSti from "../InputTextSti"
import ButtonSubmitSti from "../ButtonSubmitSti"

import "./styles.css"

const FormSearchCitySti = ({ handleClick, classModifier }) => {
  
const [citySearched, setCitySearched] = useState("")
  
  const handleChange = event => {
    setCitySearched(event.target.value);
  }
  
  return (
    <form className={`form-city-sti ${classModifier}`} onSubmit={(event) => handleClick(event, citySearched)}>
      <div className="container-input">
        <InputTextSti handleChange={handleChange} placeholderText="Insira aqui o nome da cidade" />
        <ButtonSubmitSti size={34} nameClass="search-icon-sti" />
      </div>
    </form>
  ) 
}

export default FormSearchCitySti