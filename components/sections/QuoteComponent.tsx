import { IoIosArrowRoundForward } from "react-icons/io";

const QuoteComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[30vh] md:h-[25vh] bg-dark-1 px-6 md:px-56 lg:px-80 gap-6">
      <p className="text-md md:text-lg lg:text-xl italic text-center text-white">
        Our platform is built to help you stay motivated and focused. We offer
        personalised workout plans, easy customisation, and access to exclusive
        resources. Elevate your fitness and achieve your goals. Join our journey with us.
      </p>

      <p className="text-xs md:text-sm lg:text-md text-center text-white cursor-pointer flex flex-row gap-1 items-center hover:bg-yellow-500 rounded-full px-4 py-2">
        Learn more <span><IoIosArrowRoundForward className="text-sm md:text-md lg:text-lg text-white"/></span>
      </p>
    </div>
  );
};

export default QuoteComponent;
