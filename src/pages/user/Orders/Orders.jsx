
import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import TableList from "../TableList/TableList";
import Timer from "../Timer/Timer";
import "./orders.scss";

function Orders() {
  return (
    <div className="orders">
      <div className="home_sidebar">
        <Sidebar />
      </div>
      <div className="orders_main">
        <Navbar />
        <Timer />
      </div>
    </div>
  );
}

export default Orders;
