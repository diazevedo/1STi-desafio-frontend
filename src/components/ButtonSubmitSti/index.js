import React from "react"
import { MdSearch } from 'react-icons/md'
import './styles.css'

const ButtonSubmitSti = ({ size, nameClass = "search-icon-sti" }) => (
  <button type="submit" className="button-submit-sti">
    <MdSearch size={34} className={nameClass}/>
  </button>
)

export default ButtonSubmitSti