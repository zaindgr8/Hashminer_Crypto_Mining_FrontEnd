import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { IoIosAlert } from "react-icons/io";


const generateRandomCode = () => {
  // Your logic to generate a random code
  return "9WZH7C"; // Replace with your actual random code generation logic
};

const ReferralForm = () => {
  const [referralCode, setReferralCode] = useState(generateRandomCode());
  const [referralLink, setReferralLink] = useState(
    `https://hashminer.me?reference=${referralCode}`
  );

  const handleCopyCode = (event) => {
    navigator.clipboard.writeText(referralCode);
    event.preventDefault();
  };

  const handleCopyLink = (event) => {
    navigator.clipboard.writeText(referralLink);
    event.preventDefault();
  };

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
              <div className="flex flex-col gap-y-5">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                >
                  <p className="text-4xl font-bold text-blue-500">
                    Affiliate Details
                  </p>
                </label>
                <p>Referral Code</p>
                <div className="relative">
                  <div className="bg-gray-50 border flex justify-between border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 pl-10 ">
                    <p className="text-gray-500">{referralCode}</p>
                    <button
                      className=" text-blue-500 font-bold"
                      onClick={(e) => handleCopyCode(e)}
                    >
                      Copy
                    </button>
                  </div>
                </div>
                <p>Referral Link</p>
                <div className="relative">
                  <div className="bg-gray-50 border flex justify-between border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 pl-10 ">
                    <p className="text-gray-500">{referralLink}</p>
                    <button
                      className=" text-blue-500 font-bold"
                      onClick={(e) => handleCopyLink(e)}
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <p className="py-5 text-sm">
            <span className="text-red-500 mr-2">*</span>Share your referral link
            with your family, friends, and on social media, you will receive a
            4.5% commission on all purchases from users who register through
            your referral link.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReferralForm;
