import React, { useState } from "react"
import InputText from "../InputText"
import ButtonSubmit from "../ButtonSubmit"

import "./styles.css"

const FormSearchCity = ({ handleClick, classModifier }) => {
  
const [citySearched, setCitySearched] = useState("")
  
  const handleChange = event => {
    setCitySearched(event.target.value);
  }
  
  return (
    <form className={`form-city ${classModifier}`} onSubmit={(event) => handleClick(event, citySearched)}>
      <div className="container-input">
        <InputText handleChange={handleChange} placeholderText="Insira aqui o nome da cidade" />
        <ButtonSubmit size={34} nameClass="search-icon" />
      </div>
    </form>
  ) 
}

export default FormSearchCity