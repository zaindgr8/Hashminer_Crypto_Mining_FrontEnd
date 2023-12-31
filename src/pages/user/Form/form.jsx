import React from "react";
import Dropdown from "../Dropdown/dropdown";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Packages from "../../components/packages";



function Form() {
  return (
    <div className="w-screen h-screen overflow-hidden relative min-h-full">
      <Navbar className="absolute w-full z-10" />
      <div className="flex h-full">
        <Sidebar />
        <div className="p-10">
          <Packages />
        </div>
      </div>
    </div>
  );
}

export default Form;
