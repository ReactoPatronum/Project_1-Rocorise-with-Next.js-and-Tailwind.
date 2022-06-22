import React from "react";
import { useState } from "react";
import { database } from "/components/firebase";
import { getDocs, collection } from "firebase/firestore";
import Posts from "/components/Posts";
import { useEffect } from "react";
import {MailIcon} from "@heroicons/react/outline"


const Duyurular = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  async function getData() {
    const ref = await getDocs(collection(database, "Duyuru"));

    const items = [];
    ref.forEach((doc) => {
      items.push(doc.data());
    });
    setData(items);
    setLoader(false);
  }
  useEffect(() => {
    getData();
    
  }, []);

  return (
    <div className="flex flex-col items-center justify-start min-h-[90vh] pt-10 p-2 bg-blue-200">
     <div className="flex space-x-2">
       <MailIcon className="w-8 bg text-blue-600"/>
     <h2 className="text-3xl font-semibold">DUYURU PANELİ</h2>
     </div>
      <div className="space-y-10 w-full  md:w-2/3 max-w-4xl min-h-[60vh] shadow-2xl p-4 rounded-md ">
        {loader === false &&
          data.map((dev) => (
            <Posts
              key={dev.id}
              time={dev.time}
              title={dev.title}
              text1={dev.text1}
              text2={dev.text2}
              text3={dev.text3}
              text4={dev.text4}
              text5={dev.text5}
              text6={dev.text6}
              text7={dev.text7}
              text8={dev.text8}
              text9={dev.text9}
              
              
            />
          ))}
      </div>
    </div>
  );
};

export default Duyurular;
