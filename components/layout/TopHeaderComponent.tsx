"use client";

import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { companyEmail, companyNumber, promo } from "@/constants/string";

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
            <Link
              href={`tel:${companyNumber}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              {companyNumber}
            </Link>
          </span>
          <span className="px-2">|</span>
          <span className="cursor-pointer hover:text-yellow-400">
            <Link
              href={`mailto:${companyEmail}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              {companyEmail}
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default TopHeaderComponent;
