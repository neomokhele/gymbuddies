"use client";

import { downloadImage } from "@/constants/images"
import ButtonComponent from "../common/ButtonComponent"
import { IoIosArrowRoundForward } from "react-icons/io"

const DownloadAppComponent = () => {
  return (
    <section
    id="#download"
    className="relative flex flex-col pt-6 pb-0 px-6 md:px-16 lg:px-16 h-[60vh] md:h-[70.5vh] w-full"
  >
    <div
      className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat h-full w-full"
      style={{ backgroundImage: `url(${downloadImage})`, opacity: 0.5 }}
    ></div>
      
      <div className="relative z-10 flex flex-col justify-between">
        <div className="absolute inset-0 flex flex-col w-[36rem] pt-6">
          <h1 className="text-3xl w-64 font-bold text-start text-white">
            Your pace, your space & your practice.
          </h1>

          <p className="text-white text-sm pt-2 pb-6">We care about your fitness.</p>

          <div className="w-1/3">
            <ButtonComponent
              isPurple={false}
              isYellow={true}
              label="Download App Now"
              onClick={() => console.log("Download App Now")}
              iconPosition="left"
              icon={<IoIosArrowRoundForward size={20}/>}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DownloadAppComponent
