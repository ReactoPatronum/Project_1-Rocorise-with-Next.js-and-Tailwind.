import Image from "next/image";
import React, { useState } from "react";
import logo from "/public/video-game.png"
import { MenuIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/outline";
import { NavData } from "./NavData";
import Link from "next/link";

const Header = () => {
  const [isTrue, setIsTrue] = useState(false);

  const changeIt = () => {
    setIsTrue(!isTrue);
  };
  return (
    <header>
      <div className="wrapper shadow-md">
        <div className="navlogo py-2 bg-[#1E1E1E]">
          <div className="flex items-center justify-around">
            <div className="flex items-center space-x-1 justify-center cursor-pointer">
              <Image
                width={80}
                height={80}
                quality={100}
                alt="rocoRise"
                src={logo}
              />
              <h1 className="text-2xl text-slate-300 lg:text-4xl">rocorise <span className="text-xs">v1.0</span></h1>
            </div>
            <div className="lg:hidden  text-white" onClick={changeIt}>
              {!isTrue ? (
                <MenuIcon className="h-8 w-8 lg:hidden" />
              ) : (
                <XIcon className="h-8 w-8 lg:hidden" />
              )}
            </div>

            <ul className="hidden lg:flex items-center justify-center space-x-5">
              {NavData.map((data) => (
                <Link href={data.url} key={data.title}>
                  <a href={data.url}>
                    <li className={data.className}>{data.title}</li>
                  </a>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="lg:hidden ">
        <ul  id="dropdown" 
          className={
            !isTrue
              ? "hidden   "
              : "flex flex-col items-center justify-center space-y-3 py-3 bg-[#262626] "
          }
        >
          {NavData.map((data) => (
            <Link href={data.url} key={data.title}>
              <a  href={data.url}>
                <li className="text-white hover:text-blue-300 hover:scale-105">{data.title}</li>
              </a>
            </Link>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
