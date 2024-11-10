"use client";

import { IoIosArrowRoundForward } from "react-icons/io";
import { ButtonComponent } from "@/components";
import { notFoundImage } from "@/constants/images";

const NotFoundPage = () => {
  return (
    <div className="relative flex flex-col pt-6 pb-0 px-6 md:px-16 lg:px-16 h-screen w-full">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat h-full w-full"
        style={{ backgroundImage: `url(${notFoundImage})`, opacity: 0.5 }}
      ></div>

      <div className="relative z-10 flex flex-col justify-between">
        <div className="absolute top-52 inset-0 flex flex-col gap-6 md:gap-10 w-full md:w-1/2">
          <h1 className="text-3xl md:text-6xl font-bold text-start text-white leading-tight">
            Oops! Page Not Found.
          </h1>

          <p className="text-lg md:text-xl text-white opacity-90">
            The page you're looking for no longer exists or has been moved.
            Don't worry! You can return to the home page and continue browsing
            our site.
          </p>

          <div className="w-2/4 md:w-1/3 mt-8">
            <ButtonComponent
              isPurple={true}
              isYellow={false}
              label="Return Home"
              onClick={() => (window.location.href = "/")}
              iconPosition="left"
              icon={<IoIosArrowRoundForward size={20} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
