import CloseIcon from "@mui/icons-material/Close";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import { ColorContext } from '../../ColorContext/darkContext';
import { UserButton } from "@clerk/clerk-react";
import { CiEdit } from "react-icons/ci";
import { useUser } from "@clerk/clerk-react";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";


// import sass file
import "./navbar.scss";

// import images
import admin from "../Images/admin_pic.jpg";

function Navbar() {
  const { isSignedIn, user, isLoaded } = useUser();

  const [toggle, setToggle] = useState(false);
  // color state management using react context
  // const { darkMode, dispatch } = useContext(ColorContext);

  const handleToggle = () => {
    if (!user) {
      // User is not logged in, redirect or display login message
      
    }
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

          <Link to="/user" style={{ textDecoration: "none" }}>
            <h3 className="text_none">Dashboard</h3>
          </Link>
        </div>
        <div className="search">
          <input type="text" placeholder="Search.." />

          <SearchIcon className="search_icon" />
        </div>

        <div className="item_lists">
          <div className="item gap-x-1 items-center">
            <span className=" font-bold text-xl text-blue-500"></span>
          </div>

          <div className="item">
            <UserButton />
          </div>
        </div>
      </div>

      <div className="res_navbar">
        {toggle && (
          <div className="res_nav_menu">
            <div className="res_nav_menuu">
              <div className="links">
                <ul>
                  <p className="spann">Main</p>
                  <Link to="/user" style={{ textDecoration: "none" }}>
                    <li>
                      <DashboardIcon className="icon" /> Dashboard
                    </li>
                  </Link>

                  <p className="spann">lists</p>
                  <Link to="/referral" style={{ textDecoration: "none" }}>
                    <li>
                      <PersonIcon className="icon" /> Referrals
                    </li>
                  </Link>
                  {/* <li>
                                        <CreditCardIcon className="icon" /> Balance
                                    </li> */}
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
                  <li>
                    <LogoutIcon className="icon" /> Log Out
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
