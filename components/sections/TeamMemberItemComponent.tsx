import Image from "next/image";
import Link from "next/link";
import { SiInstagram, SiYoutube } from "react-icons/si";
import { TeamMemberProps } from "@/types";

const fadeIn = `
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

const TeamMemberItemComponent = ({
  image,
  name,
  focus,
  socialLinks,
}: TeamMemberProps) => {
  return (
    <div className="flex flex-col gap-2" style={{ animation: `${fadeIn} 1s ease-in` }}>
      <Image
        src={image}
        alt={name}
        width={1000}
        height={1000}
        className="w-full h-72 md:h-96 object-cover"
        priority
      />

      <div className="flex flex-row justify-between text-white text-md">
        <p className="line-clamp-1">{name}</p>
        <div className="flex flex-row items-center justify-end gap-2">
          {socialLinks.map((link, index) => (
            <Link key={index} href={link.url}>
              {link.name === "instagram" ? (
                <SiInstagram size={14} className="cursor-pointer hover:text-yellow-500" />
              ) : (
                <SiYoutube size={14} className="cursor-pointer hover:text-yellow-500" />
              )}
            </Link>
          ))}
        </div>
      </div>

      <p className="text-xs opacity-50">{focus}</p>
    </div>
  );
};

export default TeamMemberItemComponent;
