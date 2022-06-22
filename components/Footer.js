import React from "react";
import Image from "next/image";
import youtube from "/public/youtube.png";
import instagram from "/public/instagram.png";


const Footer = () => {
  return (
   <>
    <div className="bg-[#262626] w-full h-16 flex items-center justify-center">
      <div className="flex items-center justify-center space-x-6 px-2">
        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCicp4SHOA-sXqhMTDEF0z7Q"><div className=" ">
          <Image width={50} height={50} src={youtube} alt="youtube" />
        </div></a>
        <div>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/rocorise/?hl=tr"><Image width={55} height={55} src={instagram} alt="instagram" /></a>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-white font-semibold">rocowithrise@gmail.com</p>
          <p className="text-white text-xs">Reklam ve işbirliği için</p>
        </div>
      </div>
    </div>
    <div className="text-white flex items-center bg-[#1E1E1E] justify-around w-full h-20">
    <p className="font-semibold">&copy;rocoRise 2022 </p>
    <p className="font-semibold">Made By EmOn</p>
  </div>
   </>
  );
};

export default Footer;
