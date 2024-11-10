import Link from "next/link";
import {
  companySocialMediaData,
  contentLinkData,
  fitnessLinkData,
  inspirationLinkData,
} from "@/data/footerData";
import LogoComponent from "../common/LogoComponent";
import {
  companyName,
  footerContentTitle,
  footerDescription,
  footerDeveloperText,
  footerFitnessTitle,
  footerInspirationTitle,
} from "@/constants/string";

const FooterComponent = () => {
  return (
    <footer className="flex flex-col pt-10 px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-6">
        <div className="flex flex-col gap-4">
          <LogoComponent hideIcon={true} />
          <p className="text-white text-xs md:text-sm">{footerDescription}</p>

          <div className="flex flex-row gap-2">
            {companySocialMediaData.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="h-6 w-6 flex items-center justify-center border-2 hover:border-none rounded-full bg-transparent hover:bg-yellow-500"
              >
                <item.icon size={10} />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-white text-md md:text-md font-bold">
            {footerFitnessTitle}
          </h3>

          <div className="flex flex-col gap-2">
            {fitnessLinkData.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-white text-xs md:text-sm hover:text-yellow-500"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-white text-md md:text-md font-bold">
            {footerInspirationTitle}
          </h3>

          <div className="flex flex-col gap-2">
            {inspirationLinkData.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-white text-xs md:text-sm hover:text-yellow-500"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-white text-md md:text-md font-bold">
            {footerContentTitle}
          </h3>

          <div className="flex flex-col gap-2">
            {contentLinkData.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-white text-xs md:text-sm hover:text-yellow-500"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border border-white w-full my-6" />

      <div className="flex flex-col gap-1 pb-3 items-center justify-center text-center text-white text-xs md:text-sm w-full">
        <p>
          &copy; {companyName} {new Date().getFullYear() === 2024 ? "" : "-"}
          {new Date().getFullYear()}
        </p>
        <p>{footerDeveloperText}</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
