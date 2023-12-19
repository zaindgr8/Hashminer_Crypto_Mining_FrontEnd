
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { ColorContext } from '../../ColorContext/darkContext';
import { FaWallet } from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";
import { FaTicket } from "react-icons/fa6";



import './Sidebar.scss';

function Sidebar() {
    // const { darkMode, dispatch } = useContext(ColorContext);

    return (
      <div className="sidebar">
        <div className="logo">
          <Link to="/user" style={{ textDecoration: "none" }}>
            <h3 className="text_none">HASH MINER</h3>
          </Link>
        </div>

        <div className="links">
          <ul>
            <p className="spann">Main</p>
            <Link to="/user" style={{ textDecoration: "none" }}>
              <li>
                <DashboardIcon className="icon" /> Dashboard
              </li>
            </Link>
            <Link to="/referral" style={{ textDecoration: "none" }}>
              <li>
                <BsPeopleFill className="icon" /> Referral
              </li>
            </Link>
            <Link to="/ticket" style={{ textDecoration: "none" }}>
              <li>
                <FaTicket className="icon" /> Ticket
              </li>
            </Link>
            <p className="spann">PAYMENTS</p>
            <Link to="/form" style={{ textDecoration: "none" }}>
              <li>
                <CurrencyExchangeIcon className="icon" /> Manage Deposits
              </li>
            </Link>
            <Link to="/withdraw" style={{ textDecoration: "none" }}>
              <li>
                <CreditCardIcon className="icon" /> Manage Withdraw
              </li>
            </Link>
            {/* <li>
                        <CreditCardIcon className="icon" /> Balance
                    </li> */}
            {/* <li>
                        <BarChartIcon className="icon" /> Bonuses
                    </li> */}

            <p className="spann">Settings</p>
            {/* <Link to="/pu">
              <li>
                <AccountCircleIcon className="icon" /> Profile
              </li>
            </Link> */}
            {/* <Link to="/password">
              <li>
                <SettingsRoundedIcon className="icon" /> Change Password
              </li>
            </Link> */}
            {/* <Link to="/wallet">
              <li>
                <FaWallet className="icon" /> Wallet Address
              </li>
            </Link> */}
            <Link to="/">
              <li>
                <LogoutIcon className="icon" /> Go to Home Page
              </li>
            </Link>
          </ul>
        </div>
      </div>
    );
}

export default Sidebar;
