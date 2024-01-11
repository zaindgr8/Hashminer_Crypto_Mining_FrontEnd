import React, { useEffect, useState } from "react";
import Dropdown from "../Dropdown/dropdown";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Packages from "../../components/packages";
import { SiMinutemailer } from "react-icons/si";

function Form() {
   const [showChatButton, setShowChatButton] = useState(false);

   useEffect(() => {
     setShowChatButton(true);
   }, []);

   const handleChatButtonClick = () => {
     window.location.href =
       "mailto:hashminers@proton.me?subject=Inquiry&body=Drop%20us%20a%20message";
   };
  return (
    <div className="w-screen h-screen overflow-hidden relative min-h-full">
      <Navbar className="absolute w-full z-10" />
      <div className="flex h-full">
        <Sidebar />
        <div className="p-10">
          <Packages />
        </div>
      </div>
      {showChatButton && (
        <div
          className="flex items-center gap-x-3 fixed bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded cursor-pointer"
          onClick={handleChatButtonClick}
        >
          <SiMinutemailer />
          <p>Want to subscribe via bank or other mean? Get Help!</p>
        </div>
      )}
    </div>
  );
}

export default Form;
