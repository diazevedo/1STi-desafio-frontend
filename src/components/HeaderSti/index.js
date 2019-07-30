import React from "react"
import Title from "../Title"
import "./styles.css"

const Header = ({classModifier}) => {
  return (
    <header className={`header ${classModifier}`} >
      <Title classModifier={classModifier}/>
    </header>
  )
}

export default Header