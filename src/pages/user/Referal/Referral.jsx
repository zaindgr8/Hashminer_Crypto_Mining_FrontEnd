/* eslint-disable no-restricted-globals */
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
    event.preventDefault(); // Prevent the default browser behavior of opening the copied text in a new tab

    navigator.clipboard.writeText(referralCode);
  };

  const handleCopyLink = (event) => {
    event.preventDefault(); // Prevent the default browser behavior of opening the copied text in a new tab

    navigator.clipboard.writeText(referralLink);
  };

  return (
    <div className="w-screen h-screen overflow-hidden relative min-h-full">
      <Navbar className="absolute w-full z-10" />
      <div className="flex h-full">
        <Sidebar />
        <div className="p-10">
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
                <p className="font-bold">Referral Code</p>
                <div className="relative">
                  <div className="bg-gray-50 border flex justify-between border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 pl-10 ">
                    <p className="text-gray-500">{referralCode}</p>
                    <button
                      className=" text-blue-500 font-bold"
                      onClick={handleCopyCode}
                    >
                      Copy
                    </button>
                  </div>
                </div>
                <p className="font-bold">Referral Link</p>
                <div className="relative">
                  <div className="bg-gray-50 border flex justify-between border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 pl-10 ">
                    <p className="text-gray-500">{referralLink}</p>
                    <button
                      className=" text-blue-500 font-bold"
                      onClick={handleCopyLink}
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>

          <p className="text-blue-500 mt-5">
            *Share your referral link with your family, friends, and on social
            media, you will receive a 4.5% commission on all purchases from
            users who register through your referral link.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReferralForm;
