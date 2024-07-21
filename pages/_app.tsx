import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Script from "next/script";

import "@/styles/globals.css";
import "@/styles/about.css";
import "@/styles/about-summary.css";
import "@/styles/services-summary.css";
import "@/styles/brahms-video.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider forcedTheme="light">
        <GoogleReCaptchaProvider reCaptchaKey="6LcClgQqAAAAACAEkhusFmItV5nv66CPXVXGncqg">
          <Component {...pageProps} />
          <Script
            id="gtm-script"
            strategy="afterInteractive"
          >{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-5MK2H9TX');`}</Script>
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-KTEJXPYXPG"
          ></Script>
          <Script>
            {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-KTEJXPYXPG');`}
          </Script>
        </GoogleReCaptchaProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
