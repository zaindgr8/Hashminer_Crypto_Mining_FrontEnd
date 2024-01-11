import React, { useEffect, useState } from 'react'
import mining3 from "../../assets/mining6.png";
import { CheckCircle2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Miningpackages = ({title,bonus, investment, returns, src, imgSize, package1}) => {
    const [token, setToken] = useState("");
     const navigate = useNavigate();


const handleStartMiningClick = () => {
  if (token) {
    console.log("token found");
    navigate("/form");
  } else {
    navigate("/login");
    console.log("token not found");
  }
};

     useEffect(() => {
       const storedToken = localStorage.getItem("apiToken");
       if (storedToken) {
         setToken(storedToken);
       }
     }, []);
  return (
    <div className="info-card">
      <img src={src} width={imgSize} alt="" className="info-card__icon" />
      <h3 className="info-card__title">
        {title}
        <span className="px-2">{package1}</span>
      </h3>
      <div>
        <div className="border-t pt-2 pb-2 flex space-x-2 items-center">
          <span className="text-green-500">
            <CheckCircle2 />
          </span>
          <p className="hover:text-white lg:text-2xl md:text-xl sm:text-md text-gray-700">
            Investment
          </p>
          <p className="px-5 lg:text-xl md:text-md sm:text-sm">{investment}</p>
        </div>
        <div className="border-t pt-2 pb-2 flex space-x-2 items-center">
          <span className="text-green-500">
            <CheckCircle2 />
          </span>
          <p className="hover:text-white lg:text-2xl md:text-xl sm:text:md text-gray-700">
            Daily Returns
          </p>
          <p className="px-5 lg:text-xl md:text-md sm:text-sm ">{returns}</p>
        </div>
        <div className="border-t pt-2 pb-2 flex space-x-2 items-center">
          <span className="text-green-500">
            <CheckCircle2 />
          </span>
          <p className="hover:text-white lg:text-2xl md:text-xl sm:text:md text-gray-700">
            Payout
          </p>
          <p className="px-5 lg:text-xl md:text-md sm:text-sm ">
            Every 24 Hours
          </p>
        </div>
        <div className="border-t pt-2 pb-2 flex space-x-2 items-center">
          <span className="text-green-500">
            <CheckCircle2 />
          </span>
          <p className="hover:text-white lg:text-2xl md:text-xl sm:text-md text-gray-700">
            Joining Bonus
          </p>
          <p className="px-5 lg:text-xl md:text-md sm:text-sm">{bonus}</p>
        </div>
        <button onClick={handleStartMiningClick}
         className="info-card__btn">
          Start mining <i className="fas fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Miningpackages