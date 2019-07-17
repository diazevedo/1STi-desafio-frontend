import React from "react"
import InputTextSti from "../InputTextSti"
import ButtonSubmitSti from "../ButtonSubmitSti"

import "./styles.css"

const FormSearchCitySti = () => (
  <form className="form-city-sti">
    <div className="container-input">
      <InputTextSti placeholderText="Insira aqui o nome da cidade" />
      <ButtonSubmitSti size={30} nameClass="search-icon-sti"/>
    </div>
  </form>
)

export default FormSearchCitySti