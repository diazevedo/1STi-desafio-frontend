import React from "react"
import { MdSearch } from 'react-icons/md'
import './styles.css'

const ButtonSubmit = ({ size, nameClass }) => (
  <button type="submit" className="button-submit">
    <MdSearch size={size} className={nameClass}/>
  </button>
)

export default ButtonSubmit