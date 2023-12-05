import React from 'react'

import FirstSection from './FirstSection'
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import Header from "./Header"


function TopSection() {

useEffect(() => {
  const sr = ScrollReveal();
  sr.reveal(".headline", {
    duration: 2000,
    origin: "bottom",
    distance: "20px",
  });
}, []);

  return (
    <header classNameName="main-header">
      <div className="header-container">
       
        <Header/>
        <FirstSection />
      </div>
    </header>
  );
}

export default TopSection