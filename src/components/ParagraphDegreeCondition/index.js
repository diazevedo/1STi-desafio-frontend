import React from 'react'
import './styles.css'


const ParagraphDegreeCondition = ({degree, children}) => (
  <div className="icon-degree">
    { children }
    <p>{ degree }</p>
  </div>
)

export default ParagraphDegreeCondition