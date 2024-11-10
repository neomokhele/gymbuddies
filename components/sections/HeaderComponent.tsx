"use client";

import { IoIosArrowRoundForward } from "react-icons/io";
import ButtonComponent from "../common/ButtonComponent";
import NavigationComponent from "../layout/NavigationComponent";
import { bannerImage } from "@/constants/images";
import {
  companyFreeTrialButtonText,
  companyName,
  companySlogan,
} from "@/constants/string";

const HeaderComponent = () => {
  return (
    <section
      id="#header"
      className="relative flex flex-col pt-6 pb-0 px-6 md:px-16 lg:px-16 h-[70vh] md:h-[70.5vh] w-full"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat h-full w-full"
        style={{ backgroundImage: `url(${bannerImage})`, opacity: 0.5 }}
      ></div>

      <div className="relative z-10 flex flex-col justify-between">
        <NavigationComponent />

        <div className="absolute top-72 inset-0 flex flex-col gap-6 md:gap-10 w-56 md:w-[36rem]">
          <h1 className="text-2xl md:text-6xl font-bold text-start text-white">
            {companyName} - {companySlogan}
          </h1>

          <div className="w-full md:w-1/3">
            <ButtonComponent
              isPurple={true}
              isYellow={false}
              label={companyFreeTrialButtonText}
              onClick={() => console.log("Book Now")}
              iconPosition="left"
              icon={<IoIosArrowRoundForward size={20} />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderComponent;
