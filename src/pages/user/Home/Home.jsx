import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Card from "../Cards/deposit_card";
import Card1 from "../Cards/withdraw_card";
import Card2 from "../Cards/nobutton_card";
import Card4 from "../Cards/package_card";
import { SiMinutemailer } from "react-icons/si";
import Comp from "./Comp";

function Home({ user }) {
    const [showChatButton, setShowChatButton] = useState(false);

    useEffect(() => {
      setShowChatButton(true);
    }, []);

    const handleChatButtonClick = () => {
      window.location.href =
        "mailto:hashminers@proton.me?subject=Inquiry&body=Drop%20us%20a%20message";
    };
  
  return (
    <div className="w-screen h-screen overflow-hidden relative min-h-full">
      <Navbar className="absolute w-full z-10" user={user} />
      <div className="flex h-full">
        <Sidebar />
        <div className="flex flex-col p-8">
          <div className="flex flex-wrap gap-x-7 gap-y-7">
            <Card
              user={user}
              title="Available Balance"
              description="5.00"
              button="Invest Now"
              className="w-full md:w-1/2 lg:w-1/4"
            />
            <Card1
              title="Available Withdrawal"
              description="00.00"
              button="Withdraw Now"
              className="w-full md:w-1/2 lg:w-1/4"
            />
            <Card4
              title="Package Status"
              description="Invested: "
              description1="Package: "
              button="Upgrade"
              className="w-full md:w-1/2 lg:w-1/4"
            />
            <Card2
              title="Referral Balance"
              description="0"
              button="Withdraw Now"
              className="w-full md:w-1/2 lg:w-1/4"
            />
          </div>

          <Comp user={user} />
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
      </div>
    </div>
  );
}

export default Home;
