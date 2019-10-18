import React from "react";
import { MdSearch } from "react-icons/md";
import "./styles.css";

const ButtonSubmit = ({ size, nameClass, buttonMod = "" }) => (
  <button type="submit" className={`button-submit ${buttonMod}`}>
    <MdSearch size={size} className={nameClass} />
  </button>
);

export default ButtonSubmit;
