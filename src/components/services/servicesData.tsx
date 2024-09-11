import { ReactNode } from "react";
import { BsFire } from "react-icons/bs";
import { GiSoundWaves } from "react-icons/gi";
import { IoIosGitNetwork } from "react-icons/io";
import { PiSecurityCamera } from "react-icons/pi";
import { TbSmartHome } from "react-icons/tb";
import { TfiAnnouncement } from "react-icons/tfi";
import { WiSmoke } from "react-icons/wi";


interface Service {
  Icon: ReactNode;
  key: number
}

export const services: Service[] = [
  {
    Icon: <BsFire />,
    key: 1,
  },
  {
    Icon: <IoIosGitNetwork />,
    key: 2,
  },
  {
    Icon: <PiSecurityCamera />,
    key: 3,
  },
  { 
    Icon: <WiSmoke />,
    key: 4,
  },
  {
    Icon: <TfiAnnouncement />,
    key: 5,
  },
  {
    Icon: <GiSoundWaves />,
    key: 6,
  },
  {
    Icon: <TbSmartHome />,
    key: 7,
  },
];
