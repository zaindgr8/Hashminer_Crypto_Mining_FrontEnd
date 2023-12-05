import React from "react";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import logo from "../assets/Logo11.svg"
import {MapPin} from "lucide-react"

function Footer() {
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(".headline7", {
      duration: 2000,
      origin: "left",
      distance: "20px",
    });
  }, []);
   useEffect(() => {
     const sr = ScrollReveal();
     sr.reveal(".headline7a", {
       duration: 2000,
       origin: "bottom",
       distance: "20px",
     });
   }, []);


  return (
    <footer className="main-footer ">
      <div className="footer-container">
        <img
          src={logo}
          alt="CRAPPO company logo"
          className="headline7 w-[30vh]"
        />
        <nav className="main-footer-navbar headline7">
          <ul className="main-footer-navbar__nav">
            <li className="main-footer-navbar__nav__item">
              <h3 className="main-footer-navbar__nav__title">Quick Link</h3>
            </li>
            <li className="main-footer-navbar__nav__item">
              <a href="#" className="main-footer-navbar__nav__link">
                Home
              </a>
            </li>
            <li className="main-footer-navbar__nav__item">
              <a href="#products" className="main-footer-navbar__nav__link">
                Packages
              </a>
            </li>
            <li className="main-footer-navbar__nav__item">
              <a href="#about" className="main-footer-navbar__nav__link">
                Why Us
              </a>
            </li>
            <li className="main-footer-navbar__nav__item">
              <a href="#features" className="main-footer-navbar__nav__link">
                Get Started
              </a>
            </li>
          </ul>
          <ul className="main-footer-navbar__nav">
            <li className="main-footer-navbar__nav__item">
              <h3 className="main-footer-navbar__nav__title text-2xl">
                Location
              </h3>
            </li>
            <li className="main-footer-navbar__nav__item">
              <a  className="main-footer-navbar__nav__link flex">
                <MapPin width={70} className="space-x-2 mr-2 text-blue-500" />
                Las Vegas, USA Office, 6374 Main, Street 38, NV 89101
                United States
              </a>
            </li>
          </ul>
        </nav>
        <div className="payment-systems headline7">
          <h3 className="payment-systems__title">
            We accept following payment systems
          </h3>
          <div className="payment-systems-icons">
            <i className="fab fa-cc-visa"></i>
            <i className="fab fa-cc-mastercard"></i>
            <i className="fab fa-bitcoin"></i>
          </div>
        </div>

        <div className="copy-and-social headline7a">
          <h3 className="copy-and-social__copy">
            ©2023 Hash Miner. All rights reserved
          </h3>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
