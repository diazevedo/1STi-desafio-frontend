import React from "react"
import { MdSearch } from 'react-icons/md'
import './styles.css'

const ButtonSubmitSti = ({ size, nameClass }) => (
  <button type="submit" className="button-submit-sti">
    <MdSearch size={size} className={nameClass}/>
  </button>
)

export default ButtonSubmitSti