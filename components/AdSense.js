import React, { useEffect } from "react";

export default function Adsense() {
  const loadAds = () => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.log("adsense error", error.message);
    }
  };

  useEffect(() => {
    loadAds();
  }, []);

  return (
    <ins className="adsbygoogle"
     style="display:block"
     data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}
     data-ad-slot="5233948525"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
  );
}