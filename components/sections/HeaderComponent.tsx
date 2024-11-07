"use client";

import { IoIosArrowRoundForward } from "react-icons/io";

import ButtonComponent from "../common/ButtonComponent";
import NavigationComponent from "../layout/NavigationComponent";
import { bannerImage } from "@/constants/images";

const HeaderComponent = () => {
  return (
    <section
      id="header"
      className="relative flex flex-col pt-6 pb-0 px-6 md:px-16 lg:px-16 h-[70vh] md:h-[70.5vh] w-full"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat h-full w-full"
        style={{ backgroundImage: `url(${bannerImage})`, opacity: 0.5 }}
      ></div>

      <div className="relative z-10 flex flex-col justify-between">
        <NavigationComponent />

        <div className="absolute top-72 inset-0 flex flex-col gap-10 w-[36rem]">
          <h1 className="text-6xl font-bold text-start text-white">
            GymBuddies - Your Personal Trainer
          </h1>

          <div className="w-1/3">
            <ButtonComponent
              isPurple={true}
              isYellow={false}
              label="Start your Free Trial"
              onClick={() => console.log("Book Now")}
              iconPosition="left"
              icon={<IoIosArrowRoundForward size={20}/>}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderComponent;
