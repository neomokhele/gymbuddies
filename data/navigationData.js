import { IoHome } from "react-icons/io5";
import { SiOpenaigym, SiGoogleclassroom } from "react-icons/si";
import { MdFeaturedPlayList } from "react-icons/md";
import { ImPriceTags } from "react-icons/im";

export const topNavData = [
    {
        id: 1,
        label: "Home",
        href: "#home",
        icons: IoHome,
    },
    {
        id: 2,
        label: "About",
        href: "#about",
        icons: SiOpenaigym,
    },
    {
        id: 3,
        label: "Features",
        href: "#features",
        icons: MdFeaturedPlayList,
    },
    {
        id: 4,
        label: "Classes",
        href: "#classes",
        icons: SiGoogleclassroom,
    },
    {
        id: 5,
        label: "Pricing",
        href: "#pricing",
        icons: ImPriceTags,
        
    }
]