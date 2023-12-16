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
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import { ColorContext } from '../../ColorContext/darkContext';
import { UserButton } from "@clerk/clerk-react";
import { CiEdit } from "react-icons/ci";
import { useUser } from "@clerk/clerk-react";

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

          <Link to="/" style={{ textDecoration: "none" }}>
            <h3 className="text_none">Dashboard</h3>
          </Link>
        </div>
        <div className="search">
          <input type="text" placeholder="Search.." />

          <SearchIcon className="search_icon" />
        </div>

        <div className="item_lists">
          {/* <div className="item item_lan">
                        <LanguageIcon className="item_icon" />
                        <p>Welcome</p>
                    </div> */}
          {/* <div className="item">
                        {!darkMode ? (
                            <DarkModeIcon
                                className="item_icon"
                                onClick={() => dispatch({ type: 'TOGGLE' })}
                            />
                        ) : (
                            <LightModeIcon
                                className="item_icon white"
                                onClick={() => dispatch({ type: 'TOGGLE' })}
                            />
                        )}
                    </div> */}
          {/* <div className="item">
                        <FullscreenExitIcon className="item_icon" />
                    </div> */}

          {/* <div className="item">
                        <ChatBubbleOutlineIcon className="item_icon" />
                        <span className="badge">2</span>
                    </div> */}
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
                  {/* <li>
                                        <CreditCardIcon className="icon" /> Balance
                                    </li> */}
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
