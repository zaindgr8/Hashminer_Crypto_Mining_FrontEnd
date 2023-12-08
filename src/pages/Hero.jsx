import React from 'react'
import whyUS from '../assets/why-us-section-assets/why-us-Illustration.svg'
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import {CheckCircle} from "lucide-react"
import {Lock} from "lucide-react"
import {Laptop2} from "lucide-react"
import {Bitcoin} from "lucide-react"
import {Gem} from "lucide-react"
import {CircleDollarSign} from "lucide-react"

function Hero() {

useEffect(() => {
  const sr = ScrollReveal();
  sr.reveal(".headline3", {
    duration: 2000,
    origin: "bottom",
    distance: "20px",
  });
}, []);

useEffect(() => {
  const sr = ScrollReveal();
  sr.reveal(".headline3a", {
    duration: 2000,
    origin: "left",
    distance: "10px",
  });
}, []);

  return (
    <section className="why-us-wrapper">
      {/* <!-- Stats --> */}
      <div className="stats-section headline3">
        <div className="stats-section__reference">
          <i className="fas fa-chart-line"></i>
          <h3 className="stats-section__reference__title">$30B</h3>
          <p className="stats-section__reference__description">
            Digital Currency Exchanged
          </p>
        </div>
        <div className="stats-section__reference">
          <i className="fas fa-user"></i>
          <h3 className="stats-section__reference__title">10M+</h3>
          <p className="stats-section__reference__description">
            Trusted Wallets Investor
          </p>
        </div>
        <div className="stats-section__reference">
          <i className="fas fa-globe"></i>
          <h3 className="stats-section__reference__title">195</h3>
          <p className="stats-section__reference__description">
            Countries Supported
          </p>
        </div>
      </div>

      <div className="why-us-section headline3a my-16" id="about">
        <div className="why-us-section__content">
          <h2 className="text-6xl mb-4">
            Why you should choose{" "}
            <span className="text-blue-400">Hash Miner</span> Today
          </h2>
          <p className="text-2xl my-2 flex-col space-y-3">
            <span className="flex gap-x-2">
              <Lock className="text-green-500" />
              Secure and automated Bitcoin mining solution
            </span>
            <span className="flex gap-x-2">
              <Laptop2 className="text-green-500" />
              Cutting-edge hardware for efficient mining
            </span>
            <span className="flex gap-x-2">
              <Bitcoin className="text-green-500" />
              Strong focus on maximizing profit returns
            </span>
            <span className="flex gap-x-2">
              <Gem className="text-green-500" />
              Referral bonuses for additional rewards
            </span>
            <span className="flex gap-x-2">
              <CircleDollarSign className="text-green-500" />
              Daily payouts for hassle-free access to your earnings
            </span>
          </p>
          <a href="#features" className="why-us-section__content__btn">
            Learn More
          </a>
        </div>
        <img
          src={whyUS}
          alt=""
          className="
    why-us-section__illustration          "
        />
      </div>

      <div className="benefits-section headline3">
        <h2 className="benefits-section__title">
          Check how much you can <span>earn</span>
        </h2>
        <p className="benefits-section__description">
          Let's assess your hash rate to determine today's potential earnings.
          Engage with us and experience the possibilities.
        </p>

        <div className="card-info">
          <h4 className="card-info__title">ESTIMATED 24 HOUR REVENUE:</h4>
          <p className="card-info__description">
            0.055 130 59 ETH <span>($1275)</span>
          </p>
          <span className="card-info__advice">
            Revenue will change based on mining difficulty and Ethereumprice.
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero