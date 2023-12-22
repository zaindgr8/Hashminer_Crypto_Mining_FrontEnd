
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsPeopleFill } from "react-icons/bs";
import { FaTicket } from "react-icons/fa6";

function Sidebar() {
  return (
    <div className="sidebar text-gray-800 border-r-2 ml-2 hidden md:block">
      <div className="font-bold text-md md:text-xl lg:text-2xl ml-4 mt-4 text-blue-500">
        <Link to="/user" style={{ textDecoration: "none" }}>
          <h3 className="text_none">HASH MINER</h3>
        </Link>
      </div>

      <div className=" transition-all duration-200 ease-in-out font-semibold items-center ml-3 cursor-pointer text:xl md:text-2xl flex mx-3">
        <ul className="py-5">
          <p className="uppercase text-gray-500 my-2 text-lg md:text-2xl">
            Main
          </p>

          <Link to="/user" style={{ textDecoration: "none" }}>
            <li className="flex items-center mb-2 ">
              <DashboardIcon className="mr-3 text-blue-500 " /> Dashboard
            </li>
          </Link>
          <Link to="/ticket" style={{ textDecoration: "none" }}>
            <li className="flex items-center mb-2">
              <FaTicket className="mr-3 text-blue-500" /> Ticket
            </li>
          </Link>
          <Link to="/referral" style={{ textDecoration: "none" }}>
            <li className="flex items-center">
              <BsPeopleFill className="mr-3 text-blue-500" /> Referral
            </li>
          </Link>
          <p className="uppercase text-gray-500 my-2 text-lg md:text-2xl">
            PAYMENTS
          </p>
          <Link to="/form" style={{ textDecoration: "none" }}>
            <li className="flex items-center mb-2">
              <CurrencyExchangeIcon className="mr-3 text-blue-500" /> Manage
              Deposits
            </li>
          </Link>

          <Link to="/withdraw" style={{ textDecoration: "none" }}>
            <li className="flex items-center">
              <CreditCardIcon className="mr-3 text-blue-500" /> Manage Withdraw
            </li>
          </Link>

          <p className="uppercase text-gray-500 my-2 text-lg md:text-2xl">
            Settings
          </p>

          <Link to="/" className="flex items-center">
            <li>
              <LogoutIcon className="mr-3 text-blue-500" /> Go to Home Page
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
