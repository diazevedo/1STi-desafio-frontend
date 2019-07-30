import React from "react"
import "./styles.css"

const InputText = ({ placeholderText = "", handleChange }) => (
  <input type="text" name="namecity" className="input-text" placeholder={placeholderText} onChange={(e) => handleChange(e)}/>
)

export default InputText;