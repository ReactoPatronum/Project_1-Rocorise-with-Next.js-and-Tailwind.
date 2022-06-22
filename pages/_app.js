import "../styles/globals.css";
import Layout from "/components/Layouts"
import Head from "next/head";
import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    
    <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script id='ga-analytics'>
        {
          `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `
        }
      </Script>


    <Head>
        <title>Rocorise || RO oyuncuları için.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Rise Online oyuncuları için tasarlandı.Kazan,hesapla ve kaydet." />
        <meta name="keywords" content="roco,token,rise online,rocorise,rise online coin,coin,roco hesapla,rise online etkinlik,rise online world,roco fiyat"></meta>
        <meta charSet="utf-8"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}