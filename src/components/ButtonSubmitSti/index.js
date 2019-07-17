import React from "react"
import { FaSistrix } from "react-icons/fa"
import './styles.css'

const ButtonSubmitSti = ({ size, nameClass = "search-icon-sti" }) => (
  <button type="submit" className="button-submit-sti fa fa-input">
    <FaSistrix size={size} className={nameClass}/>
  </button>
)

export default ButtonSubmitSti