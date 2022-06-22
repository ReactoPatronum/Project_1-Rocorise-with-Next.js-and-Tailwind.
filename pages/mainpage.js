import React from "react";
import Heroes from "../components/Heroes";
import video from "/public/RO Video.mp4";
const Mainpage = () => {
  return (
    <div id="mainpage" className="flex items-center justify-center flex-col">
      <div className="overflow-hidden max-h-[800px] ">
        <video autoPlay loop muted>
          <source src={video} type="video/mp4"></source>
        </video>
      </div>
      <Heroes />
    </div>
  );
};

export default Mainpage;
