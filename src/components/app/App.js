import React from 'react'
import HeaderSti from '../HeaderSti'
import InputTextSti from "../InputTextSti"
import { FaSistrix } from "react-icons/fa"

const App = () => (
  <>
    <HeaderSti />
    <section className="section-search-sti">
      <InputTextSti />
      <FaSistrix size={30} className="search-icon-sti"/>
    </section>
  </>
)

export default App;