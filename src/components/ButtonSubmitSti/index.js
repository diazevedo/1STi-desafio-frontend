import React from "react"
import { MdSearch } from 'react-icons/md'
import './styles.css'

const ButtonSubmitSti = ({ size, nameClass = "search-icon-sti", handleClick}) => (
  <button type="submit" className="button-submit-sti" onClick={handleClick}>
    <MdSearch size={34} className={nameClass}/>
  </button>
)

export default ButtonSubmitSti