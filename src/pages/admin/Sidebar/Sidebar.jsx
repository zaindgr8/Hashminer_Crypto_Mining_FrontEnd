
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BarChartIcon from '@mui/icons-material/BarChart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import TableChartIcon from '@mui/icons-material/TableChart';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { ColorContext } from '../../ColorContext/darkContext';
import { GiMoneyStack } from "react-icons/gi";
import { FaWallet } from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";
import { FaTicket } from "react-icons/fa6";



import './Sidebar.scss';

function Sidebar() {
    // const { darkMode, dispatch } = useContext(ColorContext);

    return (
      <div className="sidebar">
        <div className="logo">
          <Link to="/succubus" style={{ textDecoration: "none" }}>
            <h3 className="text_none">HASH MINER</h3>
          </Link>
        </div>

        <div className="links">
          <ul>
            <p className="spann">Main</p>
            <Link to="/succubus" style={{ textDecoration: "none" }}>
              <li>
                <DashboardIcon className="icon" /> Dashboard
              </li>
            </Link>
            <Link to="/admin_referral" style={{ textDecoration: "none" }}>
              <li>
                <BsPeopleFill className="icon" /> Referral Code
              </li>
            </Link>
            <p className="spann">PAYMENTS</p>
            {/* <Link to="/form" style={{ textDecoration: "none" }}>
              <li>
                <CurrencyExchangeIcon className="icon" /> Manage Deposits
              </li>
            </Link> */}
            <Link to="/Withdraw_Admin" style={{ textDecoration: "none" }}>
              <li>
                <CreditCardIcon className="icon" /> Manage Withdraw
              </li>
            </Link>
            <Link to="/manage_investor" style={{ textDecoration: "none" }}>
              <li>
                <BsPeopleFill className="icon" /> Manage Investors
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
            <Link to="/passwordSetting_Admin">
              <li>
                <SettingsRoundedIcon className="icon" /> Change Password
              </li>
            </Link>
            <Link to="/wallet_Admin">
              <li>
                <FaWallet className="icon" /> Wallet Address
              </li>
            </Link>
            <li>
              <LogoutIcon className="icon" /> Log Out
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Sidebar;
