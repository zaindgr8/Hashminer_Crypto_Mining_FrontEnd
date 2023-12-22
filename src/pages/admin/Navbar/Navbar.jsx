import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BarChartIcon from "@mui/icons-material/BarChart";
import CloseIcon from "@mui/icons-material/Close";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import React, {useState } from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import "./navbar.scss";
import admin from "../Images/admin_pic.jpg";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="navbar">
      <div className="navbar_main">
        <div className="menu_logo">
          {toggle ? (
            <CloseIcon className="menu_icon" onClick={handleToggle} />
          ) : (
            <MenuIcon className="menu_icon" onClick={handleToggle} />
          )}
          <Link to="/" style={{ textDecoration: "none" }}>
            <h3 className="text_none">Dashboard</h3>
          </Link>
        </div>
      </div>
      <div className="res_navbar">
        {toggle && (
          <div className="res_nav_menu">
            <div className="res_nav_menuu">
              <div className="links">
                <ul>
                  <p className="spann">Main</p>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <li>
                      <DashboardIcon className="icon" /> Dashboard
                    </li>
                  </Link>
                  <p className="spann">lists</p>
                  <Link to="/users" style={{ textDecoration: "none" }}>
                    <li>
                      <PersonIcon className="icon" /> Referrals
                    </li>
                  </Link>
                  <Link to="/orders" style={{ textDecoration: "none" }}>
                    <li>
                      <CreditCardIcon className="icon" /> Daily Transactions
                    </li>
                  </Link>
                  <li>
                    <BarChartIcon className="icon" /> Bonuses
                  </li>

                  <p className="spann">Setings</p>
                  <li>
                    <AccountCircleIcon className="icon" /> Profile
                  </li>
                  <li>
                    <SettingsRoundedIcon className="icon" /> Setting
                  </li>
                  <li>
                    <LogoutIcon className="icon" />Home Screen
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
