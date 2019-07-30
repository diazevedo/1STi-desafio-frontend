import React from "react"
import "./styles.css"

const Title = ({classModifier}) => (
  <h1 className={`title ${classModifier}`}>
    Previsão do tempo
  </h1>
)

export default Title