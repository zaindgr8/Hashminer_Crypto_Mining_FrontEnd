import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import TopSection from "./TopSection";
import Hero from "./Hero";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import SubBox from "./SubBox";
import { SiMinutemailer } from "react-icons/si";

export default function Landing() {
  const [showChatButton, setShowChatButton] = useState(false);

 useEffect(() => {
   setShowChatButton(true);

 }, []);

  const handleChatButtonClick = () => {
    window.location.href =
      "mailto:hashminers@proton.me?subject=Inquiry&body=Drop%20us%20a%20message";
  };

  return (
    <div className="main-container">
      <TopSection />
      <main className="main-content">
        <Hero />
        <SecondSection />
        <ThirdSection />
      </main>
      <SubBox />
      <div></div>
      <Footer />

      {/* Render the chat button based on the state */}
      {showChatButton && (
        <div
          className="flex items-center gap-x-3 fixed bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded cursor-pointer"
          onClick={handleChatButtonClick}
        >
          <SiMinutemailer />
          <p>Inquiry? Get Instant Help</p>
        </div>
      )}
    </div>
  );
}
