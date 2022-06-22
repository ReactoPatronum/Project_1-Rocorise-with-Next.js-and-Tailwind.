import Image from "next/image";
import React from "react";
import icon from "/public/kripto.jpg";

const SetRoco = ({
  setCommon,
  setUncommon,
  setRare,
  setEpic,
  setHeroic,
  setMythic,
  setLegendary,
  
}) => {
  const tokenData = [
    {
      name: "Common",
      state: setCommon,
      image: icon,
      cName: "w-full h-4 bg-gray-400",
      value: 0.01,
    },
    {
      name: "Uncommon",
      state: setUncommon,
      image: icon,
      cName: "w-full h-4 bg-green-400 ",
      value: 0.02,
    },
    {
      name: "Rare",
      state: setRare,
      image: icon,
      cName: "w-full h-4 bg-blue-400",
      value: 0.05,
    },
    {
      name: "Epic",
      state: setEpic,
      image: icon,
      cName: "w-full h-4 bg-purple-400",
      value: 0.1,
    },
    {
      name: "Heroic",
      state: setHeroic,
      image: icon,
      cName: "w-full h-4 bg-yellow-300",
      value: 0.5,
    },
    {
      name: "Mythic",
      state: setMythic,
      image: icon,
      cName: "w-full h-4 bg-orange-400",
      value: 1,
    },
    {
      name: "Legendary",
      state: setLegendary,
      image: icon,
      cName: "w-full h-4 bg-red-500",
      value: 5,
    },
  ];

  return (
    <div className=" sm:grid md:grid-cols-2 xl:grid-cols-3 ">
      {tokenData.map((data) => (
        <div className="py-8  flex items-center justify-center " key={data.name}>
          <div className="w-80 h-80 bg-slate-100 " >
          <div className={data.cName}> </div>

          <div className="">
            <Image alt="icon" src={data.image} width={320} height={205} />
          </div>

          <div className=" py-1 px-2 ">
            <div className="py-1 ">
              <p>
                Token Türü: <span className="font-semibold">{data.name}</span>
              </p>
              <p>Token Değeri: <span className="font-semibold">{data.value} Roco</span></p>
            </div>
            <input
              className="w-3/5"
              type="number"
              min="0"
              max="1000"
              placeholder="Token Miktarı"
              onChange={(e) => data.state(e.target.value)}
            ></input>
          </div>
        </div>
        </div>
       
       
      ))}
      
      
    </div>
  );
};

export default SetRoco;
