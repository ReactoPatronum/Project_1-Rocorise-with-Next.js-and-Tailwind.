import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
    return (
      <Html>
        <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
        <script dangerouslySetInnerHTML={{
            __html: `
            (adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: ${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE},
                enable_page_level_ads: true
                });
                `,
                }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
 
