import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Card from "../Cards/deposit_card";
import Card1 from "../Cards/withdraw_card"
import Card2 from "../Cards/nobutton_card"
import Card4 from "../Cards/package_card"
import Comp from "./Comp"
import './Home.scss';

function Home({ user }) {
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
            title="Total Referrals"
            description="0"
            button="Withdraw Now"
          />

          {/* <ItemLists type="user" /> */}
          {/* <ItemLists type="orders" /> */}
          {/* <ItemLists type="products" />
            <ItemLists type="balance" /> */}
        </div>
        <Comp user={user} />
        {/* <div className="chart_sec">
                    <ProgressBar />
                    <Chart height={450} title="Revenue" />
                </div> */}

        {/* <div className="table">
                    <div className="title">Latest Transactions</div>
                    <TableList />
                </div> */}
      </div>
    </div>
  );
}

export default Home;
