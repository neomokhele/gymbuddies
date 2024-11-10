import { quoteActionText, quoteText } from "@/constants/string";
import { IoIosArrowRoundForward } from "react-icons/io";

const QuoteComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[30vh] md:h-[25vh] bg-dark-1 px-10 md:px-56 lg:px-80 gap-6">
      <p className="text-md md:text-lg lg:text-xl italic text-center text-white">
        {quoteText}
      </p>

      <p className="text-xs md:text-sm lg:text-md text-center text-white cursor-pointer flex flex-row gap-1 items-center hover:bg-yellow-500 rounded-full px-4 py-2">
        {quoteActionText} <span><IoIosArrowRoundForward className="text-sm md:text-md lg:text-lg text-white"/></span>
      </p>
    </div>
  );
};

export default QuoteComponent;
