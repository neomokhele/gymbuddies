import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import {gymBuddiesBenefits} from "@/data/gymBuddieBenfits";
import { benefitsImage } from "@/constants/images";

const GymBuddiesBenefitComponent = () => {
    return (
      <div className="flex flex-col md:flex-row w-full gap-10">
        <div className="flex flex-row md:flex-col w-full md:w-1/2 gap-6 justify-start">
          {gymBuddiesBenefits.slice(0, 2).map((benefit) => (
            <div key={benefit.id} className="flex flex-col">
              <div className="flex items-center justify-center bg-yellow-500 rounded-full w-6 h-6 text-white text-sm">
                <p>{`0${benefit.id}`}</p>
              </div>
              <p className="text-lg font-bold py-2">{benefit.title}</p>
              <p className="text-sm text-gray-400">{benefit.description}</p>

              <div className="flex flex-row items-center gap-2 text-white capitalize mt-2">
                <p>learn more</p>
                <IoIosArrowRoundForward size={20} />
              </div>
            </div>
          ))}
        </div>
  
        <div className="w-full md:w-[70%] flex items-center justify-center">
          <Image
            src={benefitsImage}
            alt="benefitsImage"
            width={1000}
            height={1000}
            className="w-full md:w-2/3 h-96 object-cover rounded-lg"
            priority
          />
        </div>
  
        <div className="flex flex-row md:flex-col w-full md:w-1/2 gap-6 justify-start pb-4 md:pb-0">
          {gymBuddiesBenefits.slice(2, 4).map((benefit) => (
            <div key={benefit.id} className="flex flex-col ">
              <div className="flex items-center justify-center bg-yellow-500 rounded-full w-6 h-6 text-white text-sm">
                <p>{`0${benefit.id}`}</p>
              </div>
              <p className="text-lg font-bold py-2">{benefit.title}</p>
              <p className="text-sm text-gray-400">{benefit.description}</p>

              <div className="flex flex-row items-center gap-2 text-white capitalize mt-2">
                <p>learn more</p>
                <IoIosArrowRoundForward size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default GymBuddiesBenefitComponent;
