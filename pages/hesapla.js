import React, { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import SetRoco from "../components/SetRoco";
import svg from "/public/treasure.png";
import shortpaper from "/public/shortpaper.jpg";

const Hesapla = ({ data }) => {
  const [common, setCommon] = useState(0);
  const [uncommon, setUncommon] = useState(0);
  const [rare, setRare] = useState(0);
  const [epic, setEpic] = useState(0);
  const [heroic, setHeroic] = useState(0);
  const [mythic, setMythic] = useState(0);
  const [legendary, setLegendary] = useState(0);
  const [dollar, setDollar] = useState([]);
  
  useEffect(()=>{
    const DollarTl = () => {
      fetch(
        `https://free.currconv.com/api/v7/convert?q=USD_TRY&compact=ultra&apiKey=50cf60bbd268c61c26f1`
      )
        .then((r) => r.json())
        .then((r) => setDollar(r.USD_TRY.toFixed(2)))
        .catch(() => setDollar("Hesaplanıyor.."));
    };
    DollarTl()
  },[])
  
  function TotalRoco() {
    return (
      common * 0.01 +
      uncommon * 0.02 +
      rare * 0.05 +
      epic * 0.1 +
      heroic * 0.5 +
      mythic * 1 +
      legendary * 5
    );
  }
  function RocoDollar() {
    return TotalRoco() * data.market_data.current_price.usd;
  }
  function RocoTL() {
    return RocoDollar() * dollar;
  }
  
  return (
    <div className="hesapla ">
      <div className="">
        <Image alt="coin" src={shortpaper} layout="responsive" />
      </div>
      <div className="flex space-x-20 text-white px-2 pt-2">
        <p>Roco: $ <span className="font-semibold">{data.market_data.current_price.usd.toFixed(2)}</span></p>
        <p>Dolar/TL: <span className="font-semibold">{dollar}</span></p>
      </div>
      <p className="text-white  px-2 pt-1 text-xs">Roco token görselleri ilerleyen süreçte yüklenecektir.</p>
      <div className="p-2 pt-10 md:px-12 lg:px-44  xl:px-32 2xl:px-64">
        {
          <SetRoco
            setCommon={setCommon}
            setUncommon={setUncommon}
            setRare={setRare}
            setEpic={setEpic}
            setHeroic={setHeroic}
            setMythic={setMythic}
            setLegendary={setLegendary}
          />
        }
      </div>

      <div className="text-white w-full bg-[#0E3241] flex items-center justify-center p-10 px-4 ">
        <div className="h-42 flex flex-col bg-red-500 rounded-md w-full   sm:w-2/3 md:w-2/4 lg:w-1/3 xl:w-1/4 p-4 space-y-4">
          <div className="flex items-center justify-center">
            <Image className="hover:scale-105 transition-all" alt="hasılat" src={svg} width={60} height={50} />
          </div>

          <div className="space-y-1">
            <p>Toplam Roco Sayısı = &gt;&ensp;<span className="font-semibold">{TotalRoco().toLocaleString()} Adet</span></p>
            <p>Dolar Olarak Değeri = &gt;&ensp;<span className="font-semibold"> {RocoDollar().toFixed(2)} $</span></p>
            <p>TL Olarak Değeri = &gt;&ensp;<span className="font-semibold">{RocoTL().toFixed(2)} TL</span> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hesapla;

export async function getStaticProps({ res }) {
  try {
      const result = await fetch("https://api.coingecko.com/api/v3/coins/roco-finance");
      const data = await result.json();

      return {
          props: { data },
          revalidate: 60 // 10 seconds 
      };
  } catch (error) {
      res.statusCode = 404;
      return { props: {} };
  }
}


