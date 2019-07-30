import React from "react"
import TitleSti from "../TitleSti"
import "./styles.css"

const HeaderSti = ({classModifier}) => {
  return (
    <header className={`header-sti ${classModifier}`} >
      <TitleSti classModifier={classModifier}/>
    </header>
  )
}

export default HeaderSti