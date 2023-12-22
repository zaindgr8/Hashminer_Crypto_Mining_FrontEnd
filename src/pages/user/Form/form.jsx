import React from "react";
import Dropdown from "../Dropdown/dropdown";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Packages from "../../components/packages";



function Form() {
  return (
    <div className="grid grid-cols-[17%,83%]">
      <div className="home_sidebar">
        <Sidebar />
      </div>
      <div className="detail_page_main">
        <Navbar />
        <div className="p-[10vh]">
          <Packages />
        </div>
      </div>
    </div>
  );
}

export default Form;
