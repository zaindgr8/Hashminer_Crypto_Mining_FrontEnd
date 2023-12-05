import React from "react";
import Dropdown from "../Dropdown/dropdown_wallet";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const Setting = () => {
  return (
    <div className="details">
      <div className="home_sidebar">
        <Sidebar />
      </div>
      <div className="detail_page_main">
        <Navbar />

        <form className="px-[8vh] py-[5vh] font-bold text-blue-500">
          <div className="mb-6">
            <h1 className="text-4xl mb-5">Wallet Address</h1>

            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
            >
              Currency
            </label>
            <Dropdown />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
            >
              Wallet Address
            </label>
            <input
              type="password"
              placeholder="Enter Your Wallet Address"
              id="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500 light:shadow-sm-light"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="repeat-password"
              className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
            >
              Password
            </label>
            <input
            placeholder="Enter Your Password"
              type="password"
              id="repeat-password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500 light:shadow-sm-light"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="repeat-password"
              className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
            >
              Verification Code
            </label>

            <input
              type=""
              id="repeat-password"
              placeholder="Enter Email For OTP"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500 light:shadow-sm-light"
              required
            />
            <button className="text-red-500 cursor-pointer p-1 rounded-lg mt-2 border-red-500 hover:text-blue-500 hover:border-blue-500 border-2">
              Get OTP
            </button>
          </div>

          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 light:bg-gray-700 light:border-gray-600 light:focus:ring-blue-600 light:ring-offset-gray-800 light:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor="terms"
              className="ms-2 text-sm font-medium text-gray-900 light:text-gray-300"
            >
              I agree with the{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline light:text-blue-500"
              >
                terms and conditions
              </a>
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Setting;
