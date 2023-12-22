import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Card from "../Cards/deposit_card";
import Card1 from "../Cards/withdraw_card";
import Card2 from "../Cards/nobutton_card";
import Card4 from "../Cards/package_card";
import Comp from "./Comp";
import "./Home.scss";

function Home({ user }) {
  return (
    <div className="w-screen h-screen overflow-hidden relative min-h-full">
      {/* Navbar */}
      <Navbar className="absolute w-full z-10" user={user} />
      {/* Main Content */}
      <div className="flex h-full">
        <Sidebar />
        <div className="flex flex-col p-8">
          <div className="flex gap-x-5">
            <Card
              user={user}
              title="Available Balance"
              description="5.00"
              button="Deposit Now"
            />
            <Card1
              title="Available Withdrawal"
              description="00.00"
              button="Withdraw Now"
            />
            <Card4
              title="Package Status"
              description="Invested: "
              description1="Package: "
              button="Upgrade"
            />
            <Card2
              title="Referral Balance"
              description="0"
              button="Withdraw Now"
            />
          </div>
          <Comp user={user} />
        </div>
      </div>
    </div>
  );
}

export default Home;
