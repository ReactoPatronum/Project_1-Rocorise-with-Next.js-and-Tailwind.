import React from "react";
import R from "/public/R.png"
import Image from "next/image";

const Posts = ({
  time,
  title,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
  text9,
}) => {
  return (
    <div className="w-full bg-slate-100 space-y-2 p-4 rounded-md">
      <div className="flex items-center justify-between">
      <Image className="rounded-full" alt="profil" width={50} height={50} src={R}/>
      <h2 className="text-red-500 mb-10  text-xl  font-semibold">{title}</h2>
      <p className=" font-semibold">{time&&time}</p>
      </div>
      <div className="overflow-auto space-y-2">
      <p>&emsp;{text1 && text1}</p>
      <p>{text2 && text2}</p>
      <p>{text3 && text3}</p>
      <p>{text4 && text4}</p>
      <p>{text5 && text5}</p>
      <p>{text6 && text6}</p>
      <p>{text7 && text7}</p>
      <p>{text8 && text8}</p>
      <p>{text9 && text9}</p>
      </div>
    </div>
  );
};

export default Posts;
