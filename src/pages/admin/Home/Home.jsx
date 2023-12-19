import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Card from "../Cards/deposit_card";
import Card1 from "../Cards/withdraw_card"
import Card4 from "../Cards/package_card"
import Form from "./Form"
import './Home.scss';

function Home() {
    //
    return (
      <div className="home">
        <div className="home_sidebar">
          <Sidebar />
        </div>

        <div className="home_main">
          <Navbar />

          <div className="bg_color" />

          <div className="home_items">
            <Card
              title="Total Investments"
              description="50,000"
              button="Investment Record"
            />
            <Card4
              title="Wallet Setting"
              description1="Current Wallet: "
              button="Change Setting"
            />
            <Card1
              title="Total Investors"
              description="5000"
              button="List of Investors"
            />
          </div>
          <Form/>
        </div>
      </div>
    );
}

export default Home;
