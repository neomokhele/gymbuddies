"use client";

import { IoIosArrowRoundForward } from "react-icons/io";
import ButtonComponent from "../common/ButtonComponent";
import { liveSessionBenefits } from "@/data/gymBuddieBenfits";
import { liveSessionButtonText, quoteText } from "@/constants/string";

const LiveSessionComponent = () => {
  return (
    <div className="flex flex-col items-start justify-center bg-dark-1 px-6 md:px-16 py-10 gap-8">
      <p className="text-md md:text-xl italic text-white">
        {quoteText}
      </p>

      <div>
        <ButtonComponent
          isPurple={true}
          isYellow={false}
          label={liveSessionButtonText}
          onClick={() => console.log("See Live Class Schedule")}
          iconPosition="left"
          icon={<IoIosArrowRoundForward size={20} />}
        />
      </div>

      <div className="border-[0.2px] border-white w-full" />

      <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-8">
        {liveSessionBenefits.map((item) => (
          <div key={item.id} className="flex flex-col gap-2">
            <p className="text-white text-2xl font-bold">{item.benefit}</p>
            <p className="text-white text-xs opacity-50">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveSessionComponent;
