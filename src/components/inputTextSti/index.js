import React from "react"
import "./styles.css"

const InputTextSti = ({ placeholderText = "" }) => (
  <input type="text" className="input-text-sti" placeholder={placeholderText} />
)

export default InputTextSti;