import React from "react";
import Dropdown from "../Dropdown/dropdown";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Packages from "../../components/packages";
import Upload from "./imageUpload"


function Form() {
  return (
    <div className="details">
      <div className="home_sidebar">
        <Sidebar />
      </div>
      <div className="detail_page_main">
        <Navbar />
        <div className="p-[10vh]">
          <Packages />
         
          <Upload />
        </div>
      </div>
    </div>
  );
}

export default Form;
