import Head from "next/head";
import Mainpage from "./mainpage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rocorise-Anasayfa</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Rise Online oyuncuları için tasarlandı.Kazan,hesapla ve kaydet." />
        <meta name="keywords" content="roco,token,rise online,rocorise,kripto,coin,roco hesapla,rise online etkinlik"></meta>
        <meta charSet="utf-8"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Mainpage />
    </div>
  );
}
