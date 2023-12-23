import React from 'react'
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import {CheckCircle} from "lucide-react"
import reg1 from "../assets/reg3.svg"
import reg2 from "../assets/reg2.svg";
import sec from "../assets/sec.svg";
import daily from "../assets/daily.svg";
import bonus from "../assets/bonus.svg";
import { Link } from 'react-router-dom';



function ThirdSection() {

useEffect(() => {
  const sr = ScrollReveal();
  sr.reveal(".headline5", {
    duration: 2000,
    origin: "top",
    distance: "20px",
  });
}, []);

useEffect(() => {
  const sr = ScrollReveal();
  sr.reveal(".headline5a", {
    duration: 2000,
    origin: "left",
    distance: "20px",
  });
}, []);

useEffect(() => {
  const sr = ScrollReveal();
  sr.reveal(".headline5b", {
    duration: 2000,
    origin: "right",
    distance: "20px",
  });
}, []);



  return (
    <section className="features-section" id="features">
      <h2 className="features-section__title headline5">
        Getting Started with <span className="text-blue-400">Cloud Mining</span>{" "}
        Today
      </h2>
      <article className="invest-smart-article ">
        <div className="invest-smart-article__content headline5a">
          <h3 className="invest-smart-article__content__title">
            <div className="flex items-center gap-x-3">
              <CheckCircle className="text-green-500" /> Registration in a
              Minute
            </div>
          </h3>
          <p className="invest-smart-article__content__description">
            Get started with our cloud mining service in just one minute. Our
            user-friendly sign-up procedure ensures you're mining in no time.
          </p>
          <Link to="/register" className="invest-smart-article__content__btn">
            Start Mining
          </Link>
        </div>

        <img
          src={reg1}
          alt="Crypto stats"
          className="invest-smart-article__graphic headline5b"
          width={150}
        />
      </article>

      <article className="detailed-stats-article">
        <div className="detailed-stats-article__content headline5b">
          <h3 className="detailed-stats-article__content__title">
            <div className="flex items-center gap-x-3">
              <CheckCircle className="text-green-500" /> Plan Selection
            </div>
          </h3>

          <p className="detailed-stats-article__content__description">
            Explore and select from a range of plans to find the one that
            perfectly matches your mining goals and preferences.
          </p>
        <Link to="/register"  className="detailed-stats-article__content__btn">
            Start Mining
          </Link>
        </div>

        <img
          src={reg2}
          alt="Detailed statistics"
          className="detailed-stats-article__graphic headline5a"
        />
      </article>

      <article className="grow-profit-article">
        <div className="grow-profit-article__content headline5a">
          <h3 className="grow-profit-article__content__title">
            <div className="flex items-center gap-x-3">
              <CheckCircle className="text-green-500" /> Secure Deposit
            </div>
          </h3>
          <p className="grow-profit-article__content__description">
            Deposit funds securely and complete your chosen package payment with
            ease. We prioritize the safety and convenience of your transactions.
          </p>
         <Link to="/register" className="grow-profit-article__content__btn">
            Start Mining
          </Link>
        </div>

        <img
          src={sec}
          alt="Profit graphic"
          className="grow-profit-article__graphic headline5b"
        />
      </article>

      <article className="detailed-stats-article">
        <div className="detailed-stats-article__content headline5b">
          <h3 className="detailed-stats-article__content__title">
            <div className="flex items-center gap-x-3">
              <CheckCircle className="text-green-500" /> Daily Payouts
            </div>
          </h3>
          <p className="detailed-stats-article__content__description">
            Receive your earnings every day, providing you with a steady and
            reliable stream of income from your cloud mining endeavors.
          </p>
         <Link to="/register"  className="detailed-stats-article__content__btn">
            Start Mining
          </Link>
        </div>

        <img
          src={daily}
          alt="Detailed statistics"
          className="detailed-stats-article__graphic headline5a"
        />
      </article>

      <article className="grow-profit-article">
        <div className="grow-profit-article__content headline5a">
          <h3 className="grow-profit-article__content__title">
            <div className="flex items-center gap-x-3">
              <CheckCircle className="text-green-500" />
              Referal Bonus - 20$
            </div>
          </h3>
          <p className="grow-profit-article__content__description">
            Invite friends and acquaintances to join our cloud mining platform
            and enjoy an instant bonus of $20 for every successful 1st referral.
            Share the wealth and maximize your profits.
          </p>
          <Link to="/register" className="grow-profit-article__content__btn">
            Start Mining
          </Link>
        </div>

        <img
          src={bonus}
          alt="Profit graphic"
          className="grow-profit-article__graphic headline5b"
        />
      </article>
   
    </section>
  );
}

export default ThirdSection