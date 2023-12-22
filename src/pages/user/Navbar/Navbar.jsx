import CloseIcon from "@mui/icons-material/Close";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { ColorContext } from '../../ColorContext/darkContext';
import { UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import "./navbar.scss";
import { jwtDecode } from "jwt-decode";
import { GiRamProfile } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { FaTicket } from "react-icons/fa6";

function Navbar() {
  const { isSignedIn, user, isLoaded } = useUser();
  const [user1, setUser1] = useState(null);
    useEffect(() => {
      // Function to get the token from local storage
      const getAuthToken = () => {
        const token = localStorage.getItem("apiToken");
        return token;
      };
      const decodeToken = (token) => {
        try {
          const decoded = jwtDecode(token);
          return decoded;
        } catch (error) {
          console.error("Error decoding token:", error.message);
          return null;
        }
      };

      // Get the token from local storage
      const token = getAuthToken();

      if (token) {
        // Decode the token
        const decoded = decodeToken(token);

        if (decoded) {
          setUser1((prev) => ({
            ...prev,
            ...decoded,
          }));
        }
      }
    }, []);


  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    if (!user) {      
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
        <span className="flex gap-x-3 items-center justify-center ">
          <GiRamProfile />
          Greetings and welcome
          <p className="text-green-700">{user1?.name}</p>
          <span className="hidden md:block md:flex gap-x-3 items-center justify-center">
            <MdOutlineSecurity />
            <p className="text-green-700 ">{user1?.user_id}</p>
            <MdEmail />
            <p className="text-green-700 ">{user1?.email}</p>
          </span>
        </span>
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
                  <Link to="/ticket" style={{ textDecoration: "none" }}>
                    <li>
                      <FaTicket className="icon" /> Ticket
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
                      <CreditCardIcon className="icon" /> Manage Withdrawals
                    </li>
                  </Link>
                  <Link to="/">
                    <li>
                      <LogoutIcon className="icon" /> Go to Home
                    </li>
                  </Link>
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
