import React from 'react'
import Illustration from "../assets/header-assets/header-Illustration.svg";
import ScrollReveal from "scrollreveal";
import {useEffect } from "react";

function FirstSection() {

useEffect(() => {
  const sr = ScrollReveal();
  sr.reveal(".headline2", {
    duration: 2000,
    origin: "left",
    distance: "20px",
  });
}, []);


  return (
    <div className="main-header-content-container headline2">
      <div className="main-header-content-principal">
        <div className="discount-section">
          <span className="discount-section__discount">75%+ Profit</span>
          <span className="discount-section__description">
            Daily Transactions And Bonuses
          </span>
        </div>
        <h1 className="main-header-content-principal__title">
          Hash Miner : A <span>Cloud-Based</span> Cryptocurrency{" "}
          <span>Mining Solution</span>
        </h1>
        <p className="main-header-content-principal__description">
          A leading hashpower marketplace, offers state-of-the-art
          mining solutions. Our mining machines are ready for you. Start cloud
          mining in a few clicks. Our mission: Accessibility to cloud mining for
          all.
        </p>
        <a href="#products" className="main-header-content-principal__btn">
          Start Mining<i className="fas fa-angle-right"></i>
        </a>
      </div>
      <img
        src={Illustration}
        alt=""
        className="
        main-header-content-principal__illustration"
      />
    </div>
  );
}

export default FirstSection;