import React from "react"
import "./styles.css"

const ListSti = ({ min, max, cityName }) => (
    <ul className="list-sti">
      <li className="degree-li-sti">{ min }</li>
      <li className="degree-li-sti">{ max }</li>
      <li className="city-name-li-sti">{ cityName }</li>
    </ul>
)

export default ListSti