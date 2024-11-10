import { companyName } from "@/constants/string";
import { SiOpenaigym } from "react-icons/si";

const LogoComponent = ({hideIcon}: {hideIcon?: boolean}) => {
  return (
    <div className="flex flex-row gap-2 items-center justify-start">
      {!hideIcon && <SiOpenaigym size={35} />}
      <p className="text-2xl md:text-3xl lg:text-4xl text-white font-extrabold">
        {companyName}
      </p>
    </div>
  );
};

export default LogoComponent;
