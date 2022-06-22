import React from "react";
import Image from "next/image";
import assasin from "/public/assassin.png";
import archer from "/public/archer.png";
import warrior from "/public/warrior.png";
import priest from "/public/priest.png";
import mage from "/public/mage.png";

const Heroes = () => {
  const heroData = [
    {
      name: "Archer",
      image: archer,
      text: "Büyücülerden sonra en iyi menzilli hasar vuran sınıflardan biridir. Büyücülere nazaran hareket kabiliyeti ve savunmaları daha yüksektir. Okçular, uzun menzilli saldırılarla hem tek hem de birden fazla düşmanla savaşmada uzmanlaşmıştır.",
    },
    {
      name: "Assassin",
      image: assasin,
      text: "Suikastçiler tekli hedeflere inanılmaz derecede yüksek hasar vururlar. Rakiplerini beklenmedik bir şekilde yakalayarak saldırmalarını sağlayan kamuflaj yeteneği bulunur. Büyücülerin korkulu rüyalarıdır.",
    },
    {
      name: "Warrior",
      image: warrior,
      text: "Tüm savaşların vazgeçilmezi ve en ön saflarda yer alan birimleridir. Tek el ve iki el ile kullanılabilen birçok silahta uzmanlaşmıştır. Krallıklar arası savaşlarda kırılma anına hep bu savaşçılar neden olmuştur.",
    },
    {
      name: "Priest",
      image: priest,
      text: "Tekli ve grup iyileştirme yetenekleri ile diğer güçlendirme yetenekleri sayesinde yakınındaki birçok savaşçıyı koruması altına alır ve hayatta kalma şanslarını arttırır. Güçsüzleştirme yeteneklerine sahip olanlar ise rakibin savunmasını kırmada olmazsa olmazlardandır.",
    },
    {
      name: "Mage",
      image: mage,
      text: "Büyücüler, iki krallık arasındaki tüm savaşların bel kemiğidir. Büyücüler oldukça geniş menzile sahip büyülere sahiptir. Grup düşman birliklerini yok etmede son derece etkilidir, ancak sağlıkları ve savunmaları düşüktür.",
    },
  ];
  return (
    <div className="flex items-center justify-center flex-col heroes p-4 sm:p-8 lg:p-12 space-y-10 max-w-2xl xl:max-w-4xl ">
      <div>
        <h2 className="text-2xl text-white md:text-5xl sınıf">SINIFLAR</h2>
      </div>
      {heroData.map((hero) => (
        <div className="space-y-2 bg-slate-100 rounded-md" key={hero.name}>
          <Image
            className="rounded-t-md"
            alt={hero.name}
            src={hero.image}
            layout="responsive"
          />
          <div className="px-3 py-1">
            <h3 className="font-semibold text-3xl underline">
              {hero.name.toUpperCase()}
            </h3>
            <p className="py-2">{hero.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Heroes;
