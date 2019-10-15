import React from "react";
import "./styles.css";

const ParagraphDegreeCondition = ({ degree, children, modifierClass = "" }) => (
  <div className={`icon-degree ${modifierClass}`}>
    {children}
    <p>{degree}</p>
  </div>
);

export default ParagraphDegreeCondition;
