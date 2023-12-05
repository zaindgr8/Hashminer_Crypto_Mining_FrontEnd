import React from 'react'
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

function SubBox() {

useEffect(() => {
  const sr = ScrollReveal();
  sr.reveal(".headline6", {
    duration: 2000,
    origin: "bottom",
    distance: "20px",
  });
}, []);

  return (
    <aside className="cta-section headline6" id="contact">
      <div className="cta-section__content">
        <h3 className="cta-section__content__title">Start mining now</h3>
        <p className="cta-section__content__description">
          Join now with Hash Miner community & get the latest news. Happy Mining!
        </p>
      </div>
      <div className="cta-section__subscribe">
        <input
          type="email"
          className="cta-section__subscribe__input"
          placeholder="Enter your email"
        />
        <a href="#" className="cta-section__subscribe__btn">
          Subscribe
        </a>
      </div>
    </aside>
  );
}

export default SubBox