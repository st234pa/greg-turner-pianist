import React from "react";
import NextHead from "next/head";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";

export const Head = () => {
  const currentNav = usePathname();
  const navItem = siteConfig.navItems.find((item) => currentNav === item.href);
  const title = navItem?.name || "";
  const description = navItem?.description || "";
  return (
    <NextHead>
      <title>{title}</title>
      <meta key="title" content={title} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content={description} name="description" />
      <meta
        key="viewport"
        content="viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        name="viewport"
      />
      <link href="/favicon.ico" rel="icon" />
    </NextHead>
  );
};
