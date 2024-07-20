import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { GoogleAnalytics } from "@next/third-parties/google";

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
          <GoogleAnalytics gaId="G-KTEJXPYXPG" />
        </GoogleReCaptchaProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
