import React from 'react'
import mining3 from "../../assets/mining6.png";
import { CheckCircle2 } from "lucide-react";

const Miningpackages = ({title, investment, returns, src, imgSize, package1}) => {
  return (
    <div className="info-card">
      <img src={src} width={imgSize} alt="" className="info-card__icon" />
      <h3 className="info-card__title">
       {title}<span>{package1}</span>
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
        <a href="#" className="info-card__btn">
          Start mining <i className="fas fa-angle-right"></i>
        </a>
      </div>
    </div>
  );
}

export default Miningpackages