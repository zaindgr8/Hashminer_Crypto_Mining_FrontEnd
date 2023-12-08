import React from "react";
import Dropdown from "../Dropdown/dropdown";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { MdAttachMoney } from "react-icons/md";
import { IoIosAlert } from "react-icons/io";
import Miningpackages from "../../components/miningpackages1";
import mining1 from "../../../assets/mining1.png";
import mining2 from "../../../assets/mining2.png";
import mining3 from "../../../assets/mining6.png";
import mining2a from "../../../assets/mining2a.png";
import mining2b from "../../../assets/mining2b.png";
import mining2c from "../../../assets/mining2c.png";

function Form() {
  return (
    <div className="details">
      <div className="home_sidebar">
        <Sidebar />
      </div>
      <div className="detail_page_main">
        <Navbar />
        <div className="p-[10vh]">
       {/* <Miningpackages/> */}
        </div>
      </div>
    </div>
  );
}

export default Form;
