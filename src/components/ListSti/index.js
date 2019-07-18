import React from "react"
import "./styles.css"

const ListSti = ({ min, max, cityName }) => (
    <ul className="list-sti">
      <li>{ min }</li>
      <li>{ max }</li>
      <li>{ cityName }</li>
    </ul>
)
/*
cities.map(({min, max, cityName}) => (
        <li>{ min }</li>
        <li>{ max }</li>
        <li>{ cityName }</li>
      )*/
export default ListSti