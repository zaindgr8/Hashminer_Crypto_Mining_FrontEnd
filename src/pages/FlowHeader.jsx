import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo22.png";
import { Menu } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
function FlowHeader() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  // Use useEffect to close the menu when the component first renders
  useEffect(() => {
    setMenuOpen(false);
  }, []);
  const loginHandle = () => {
    // Login Functionality
    navigate("/Login");
  };
  return (
    <nav className="flex flex-col lg:flex-row items-center justify-between headline mb-16 lg:mb-0">
      <div className="flex items-center gap-x-3">
        <img
          src={Logo}
          alt="Crypto logo"
          className=" mb-4 w-[25vh] lg:w-[45vh]"
        />
        {/* Menu button for small screens */}
        <button
          onClick={toggleMenu}
          className="main-header-navbar__menu-button block lg:hidden"
        >
          <Menu />
        </button>
      </div>
      {menuOpen || !window.matchMedia("(max-width: 1024px)").matches ? (
        <ul className="main-header-navbar__nav flex flex-wrap text-center lg:flex-nowrap lg:text-left">
          <li className="main-header-navbar__nav__item mb-2 lg:mb-0 lg:mr-4">
            <a href="#products" className="main-header-navbar__nav__link">
              Packages
            </a>
          </li>
          <li className="main-header-navbar__nav__item mb-2 lg:mb-0 lg:mr-4">
            <a href="#features" className="main-header-navbar__nav__link">
              Get Started
            </a>
          </li>
          <li className="main-header-navbar__nav__item mb-2 lg:mb-0 lg:mr-4">
            <a href="#about" className="main-header-navbar__nav__link">
              Why Us
            </a>
          </li>
          <li className="main-header-navbar__nav__item mb-2 lg:mb-0">
            <a href="#contact" className="main-header-navbar__nav__link">
              Contact Us
            </a>
          </li>
        </ul>
      ) : null}

      <div className="main-header-navbar__login lg:ml-4">
        <button
          onClick={loginHandle}
          className="main-header-navbar__login__login-btn block mb-2 lg:mb-0 lg:inline-block"
        >
          Login
        </button>
        <Link
          to="/register"
          className="main-header-navbar__login__register-btn"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}
export default FlowHeader;
