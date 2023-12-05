import React, { useState } from "react";
import { LuBitcoin } from "react-icons/lu";
import { BiBitcoin } from "react-icons/bi";
import { FaEthereum } from "react-icons/fa";
import { SiLitecoin } from "react-icons/si";
import { RiCoinsLine } from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";

const Dropdown = () => {
  const [selectedGateway, setSelectedGateway] = useState(null);

  const handleGatewaySelect = (gateway) => {
    setSelectedGateway(gateway);
    // You can perform any additional actions based on the selected gateway
  };

  const handleDropdownToggle = () => {
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("hidden");
  };

  return (
    <>
      {/* Dropdown button */}
      <div className="flex flex-col">
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="text-gray-500 border-2 bg-gray-100 border-gray-400
          hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 
          font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center
          light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800 gap-x-3"
          type="button"
          onClick={handleDropdownToggle}
        >
          {selectedGateway ? (
            <>
              {selectedGateway.icon}
              {selectedGateway.label}
            </>
          ) : (
            <>
              <LuBitcoin />
              Select Gateway
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </>
          )}
        </button>
      </div>

      {/* Dropdown menu */}
      <div
        id="dropdown"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 light:bg-gray-700"
      >
        <ul className="py-2 text-sm text-gray-700 light:text-gray-200">
          {gateways.map((gateway) => (
            <li key={gateway.value}>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 light:hover:bg-gray-600 light:hover:text-white"
                onClick={() => handleGatewaySelect(gateway)}
              >
                <span className="flex items-center gap-x-2">
                  {gateway.icon}
                  {gateway.label}
                </span>{" "}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const gateways = [
  { value: "btc", label: "BTC - Bitcoin", icon: <BiBitcoin /> },
  { value: "eth", label: "ETH - Ethereum", icon: <FaEthereum /> },
  { value: "ltc", label: "LTC - Litecoin", icon: <SiLitecoin /> },
  { value: "usdt_trc20", label: "USDT - TRC 20", icon: <RiCoinsLine /> },
  { value: "usd", label: "USD - US Dollar", icon: <BsCurrencyDollar /> },
];

export default Dropdown;
