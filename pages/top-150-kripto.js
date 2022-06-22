import React, { useState, useEffect } from "react";
import millify from "millify";
import { FireIcon } from "@heroicons/react/outline";

const Top_100_kripto = ({ datas, trends }) => {
 
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    setCoins(datas);
  }, [datas]);
  const [search, setSearch] = useState("");
  const filtered = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  

  return (
    <div className=" bg-[#F1F2F5] min-h-[80vh]">
      <div className="p-2">
        <div className="p-2 flex flex-col items-start space-y-3 bg-green-300 rounded-md max-w-sm">
          <div className="flex items-center ">
          <FireIcon className="w-7  text-red-600"/>
          <h2 className="text-lg trendh2 font-semibold">GÜNÜN TREND COİNLERİ</h2>
          <FireIcon className="w-7  text-red-600"/>
          </div>
          <div className="ml-3 text-sm">
          {Object.keys(trends.coins)
            .map((key) => trends.coins[key])
            .map((coin, index) => (
              <p className="text-base tracking-wide" key={index}>
                {coin.item.name}
                <span className="font-semibold"> ({coin.item.symbol})</span>
              </p>
            ))}
          </div>
        </div>
        <div className="text-center">
          <h1 className="font-semibold text-3xl"><span className="sınıf">TOP 150</span></h1>
          <input
            className="mt-4"
            type="text"
            onChange={handleChange}
            placeholder="Coin Ara"
          ></input>
        </div>
      </div>
      <div className=" sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 md:px-32 lg:px-60  xl:px-60 2xl:px-64 ">
        {filtered
          ? filtered.map((data) => (
              <div
                className="py-20   flex items-center justify-center "
                key={data.id}
              >
                <div className="w-60 h-44 shadow-lg bg-white p-2">
                  <div className="shadow-sm h-14 w-full  flex items-center justify-between">
                    <div className="flex font-semibold">
                      <p>{data.market_cap_rank}-</p>
                      <p>{data.name}</p>
                    </div>
                    <div>
                      <img alt={data.id} src={data.image} width="40px"></img>
                    </div>
                  </div>
                  <div className="text-left space-y-2 pt-2">
                    <p className="">
                      Son Fiyat:
                      <span className="font-semibold">
                        {" "}
                        $ {millify(data.current_price, { precision: 5 })}
                      </span>
                    </p>
                    <p>
                      Piyasa değeri:{" "}
                      <span className="font-semibold">
                        {" "}
                        $ {millify(data.market_cap)}
                      </span>
                    </p>
                    <p>
                      24s Değişim:
                      {data.price_change_percentage_24h < 0 ? (
                        <span className="coin-percent red ml-2 font-semibold">
                          {data.price_change_percentage_24h.toFixed(2)}%
                        </span>
                      ) : (
                        <span className="coin-percent green ml-2 font-semibold">
                          {data.price_change_percentage_24h.toFixed(2)}%
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))
          : "Bir Hata Meydana Geldi"}
      </div>
    </div>
  );
};

export default Top_100_kripto;

export async function getStaticProps({ res }) {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=150&page=1&sparkline=false"
    );
    const datas = await response.json();
    const response1 = await fetch(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    const trends = await response1.json();
    return {
      props: { datas, trends },
      revalidate: 60,
    };
  } catch (error) {
    res.statusCode = 404;
    return { props: {} };
  }
}
