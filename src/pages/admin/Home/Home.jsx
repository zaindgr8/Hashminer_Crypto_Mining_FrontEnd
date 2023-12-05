import React from 'react';
import Chart from '../Chart/Chart';
import ItemLists from '../ItemLists/ItemLists';
import Navbar from '../Navbar/Navbar';
import ProgressBar from '../ProgressBar/ProgressBar';
import Sidebar from '../Sidebar/Sidebar';
import TableList from '../TableList/TableList';
import Card from "../Cards/deposit_card";
import Card1 from "../Cards/withdraw_card"
import Card2 from "../Cards/nobutton_card"
import Card3 from "../Cards/earning_card"
import Card4 from "../Cards/package_card"
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

            {/* <ItemLists type="user" /> */}
            {/* <ItemLists type="orders" /> */}
            {/* <ItemLists type="products" />
            <ItemLists type="balance" /> */}
          </div>

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
