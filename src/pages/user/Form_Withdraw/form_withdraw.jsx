import React from "react";
import Dropdown from "../Dropdown/dropdown";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { MdAttachMoney } from "react-icons/md";
import { IoIosAlert } from "react-icons/io";
import { MdSecurity } from "react-icons/md";
import { IoIosWallet } from "react-icons/io";



function Form() {
  return (
    <div className="details">
      <div className="home_sidebar">
        <Sidebar />
      </div>
      <div className="detail_page_main">
        <Navbar />
        <div className="p-[10vh]">
          <form>
            <div className="flex flex-col gap-y-4">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                >
                  Amount
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-10 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                    placeholder="Minimum 50 USD"
                    required
                  />
                  <MdAttachMoney className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-10 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                    placeholder="Enter Password"
                    required
                  />
                  <MdSecurity className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                >
                  Wallet Address
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-10 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                    placeholder="Enter Address"
                    required
                  />
                  <IoIosWallet className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              <h3 className="text-sm">Withdrawal Gateway</h3>
              <Dropdown />
              {/* ... other input fields ... */}
            </div>

            {/* ... other input fields ... */}

            <div className="flex flex-col items-start mb-6 mt-5">
              <span className="text-sm flex gap-x-2 items-center">
                <IoIosAlert />
                0% Charge on Withdraw
              </span>
              <span className="text-sm flex gap-x-2 items-center">
                <IoIosAlert />
                Minimum Withdraw can be $100 USD
              </span>
              <div>
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 light:bg-gray-700 light:border-gray-600 light:focus:ring-blue-600 light:ring-offset-gray-800"
                    required
                  />
                  <label
                    htmlFor="remember"
                    className="ms-2 text-sm font-medium text-gray-900 light:text-gray-300"
                  >
                    I agree with the{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:underline light:text-blue-500"
                    >
                      terms and conditions
                    </a>
                    .
                  </label>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-green-700 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
