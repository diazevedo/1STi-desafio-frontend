import React from "react"
import "./styles.css"

const InputTextSti = ({ placeholderText = "", handleChange }) => (
  <input type="text" name="namecity" className="input-text-sti" placeholder={placeholderText} onChange={(e) => handleChange(e)}/>
)

export default InputTextSti;