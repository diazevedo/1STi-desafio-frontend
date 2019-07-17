import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Beverage = () => (
  <div>
    <FontAwesomeIcon icon="check-square" />
    Favorite beverage: <FontAwesomeIcon icon={['fab', 'apple']} />
  </div>
)

export default Beverage