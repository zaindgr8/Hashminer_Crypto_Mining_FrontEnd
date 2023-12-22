import React from "react";
import Footer from "./Footer";
import TopSection from "./TopSection"
import Hero from "./Hero";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import { motion } from "framer-motion";
import SubBox from "./SubBox";




export default function Landing() {
  return (
    <div className="main-container">
      <TopSection />
      <main className="main-content">
        <Hero />
        <SecondSection />
        <ThirdSection />
      </main>
      <SubBox />
      <div>
  
      </div>
      <Footer />
    </div>
  );
}
