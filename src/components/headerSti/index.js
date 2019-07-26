import React from "react"
import TitleSti from "../TitleSti"
import "./styles.css"

const HeaderSti = ({city}) => {
  return (
    <header className={`header-sti${city}`} >
      <TitleSti city={city}/>
    </header>
  )
}

export default HeaderSti