"use client";

import { companyEmail, companyNumber, promo } from "@/constants/string";
import { RiArrowDropDownLine } from "react-icons/ri";

const TopHeaderComponent = () => {
  const handleDropDown = () => {
    console.log("Dropdown clicked");
  };

  return (
    <div className="hidden md:flex flex-row justify-between w-full bg-white px-16 py-2 text-xs text-black">
      <div className="w-1/2 flex flex-row items-center justify-start">
        <p>English</p>
        <RiArrowDropDownLine
          className="ml-1"
          size={18}
          onClick={() => handleDropDown()}
        />
      </div>

      <div className="w-1/2 flex items-center justify-center">
        <p>{promo}</p>
      </div>

      <div className="w-1/2 flex items-center justify-end">
        <p>
          <span className="cursor-pointer hover:text-yellow-400">
            <a
              href={`tel:${companyNumber}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              {companyNumber}
            </a>
          </span>
          <span className="px-2">|</span>
          <span className="cursor-pointer hover:text-yellow-400">
            <a
              href={`mailto:${companyEmail}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              {companyEmail}
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default TopHeaderComponent;
