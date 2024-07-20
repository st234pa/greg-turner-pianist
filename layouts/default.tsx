import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head />
      <Navbar />
      <div className="min-h-[calc(100vh-554px)] sm:min-h-[calc(100vh-362px)]">
        {children}
      </div>
      <Footer />
    </>
  );
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-KTEJXPYXPG" />
    </html>
  );
}
