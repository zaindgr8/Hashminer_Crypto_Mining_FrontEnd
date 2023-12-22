
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsPeopleFill } from "react-icons/bs";
import { FaTicket } from "react-icons/fa6";


import './Sidebar.scss';

function Sidebar() {


    return (
      <div className="sidebar text-white border-r-2 ml-2 hidden md:block">
        <div className="font-bold text-md md:text-xl lg:text-2xl ml-4 mt-4 text-blue-500">
          <Link to="/user" style={{ textDecoration: "none" }}>
            <h3 className="text_none">HASH MINER</h3>
          </Link>
        </div>

        <div className="transition-all duration-200 ease-in-out font-semibold items-center ml-3 cursor-pointer text:xl md:text-2xl flex mx-3">
          <ul>
            <p className="uppercase text-gray-500 my-2 text-lg md:text-2xl">
              Main
            </p>

            <Link to="/user" style={{ textDecoration: "none" }}>
              <li>
                <DashboardIcon className="" /> Dashboard
              </li>
            </Link>

            <Link to="/referral" className="flex items-center">
              <li>
                <BsPeopleFill className="" /> <p>Referral</p>
              </li>
            </Link>

            <Link to="/ticket" style={{ textDecoration: "none" }}>
              <li>
                <FaTicket className="" /> Ticket
              </li>
            </Link>
            <p className="uppercase text-gray-500 my-2 text-lg md:text-2xl">
              PAYMENTS
            </p>
            <Link to="/form" style={{ textDecoration: "none" }}>
              <li>
                <CurrencyExchangeIcon className="" /> Manage Deposits
              </li>
            </Link>
            <Link to="/withdraw" style={{ textDecoration: "none" }}>
              <li>
                <CreditCardIcon className="" /> Manage Withdraw
              </li>
            </Link>

            <p className="uppercase text-gray-500 my-2 text-lg md:text-2xl">
              Settings
            </p>

            <Link to="/">
              <li>
                <LogoutIcon className="" /> Go to Home Page
              </li>
            </Link>
          </ul>
        </div>
      </div>
    );
}

export default Sidebar;
