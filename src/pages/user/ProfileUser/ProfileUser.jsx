import Chart from "../Chart/Chart";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import TableList from "../TableList/TableList";
import userPic from "../Images/man2.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { CiMoneyCheck1 } from "react-icons/ci";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import React, { useState } from "react";
import { IoSaveOutline } from "react-icons/io5";
import { FaWallet } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { FaMoneyBill } from "react-icons/fa";
import { MdEmail } from "react-icons/md";






function Profile() {

  // const { userId, productId } = useParams();
  return (
    <div className="details">
      <div className="home_sidebar">
        <Sidebar />
      </div>

      <div className="detail_page_main">
        <Navbar />

        <div className="p-[12vh] ">
          <div className="max-w-sm rounded overflow-hidden shadow-lg text-center">
            <img
              className="w-full h-64 object-cover object-center"
              src={userPic} // Replace with your image URL
              alt="User Profile"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Rafay Tariq</div>
              <p className="text-gray-700 flex items-center gap-x-2 text-base mb-2">
                <FaLocationDot />
                Los Angeles, CA
              </p>
              <p className="text-gray-700 flex items-center gap-x-2 text-base mb-2">
               <MdEmail />
                rafay@gmail.com
              </p>
              <p className="text-gray-700 flex items-center gap-x-2 text-base mb-2">
                <FaMoneyBill />
                1000
                <MdOutlineAttachMoney />
              </p>
              <p className="text-gray-700 flex items-center gap-x-2 text-base mb-2">
                <FaWallet />
                Wallet Address
              </p>
              <p className="text-gray-700 flex items-center gap-x-2 text-base mb-2">
                <FaLockOpen />
                Change Password
              </p>

              {/* <div className="flex gap-x-2 items-center">
                <FaLocationDot />
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border p-2 rounded-xl"
                    />
                    <button
                      onClick={handleSaveClick}
                      className="ml-2  text-black  p-2"
                    >
                      <IoSaveOutline />
                    </button>
                  </>
                ) : (
                  <>
                    <span className="mr-2 flex items-center">{email}</span>
                    <button
                      onClick={handleEditClick}
                      className=" text-black p-2"
                    >
                      <MdEdit />
                    </button>
                  </>
                )}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
