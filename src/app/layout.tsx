import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Footer from "../components/footer/Footer";
import Libra from "../components/libras/Page";

export const metadata: Metadata = {
  title: "Corporação Queirós Brazil",
  description: "A Queirós Brazil é uma holding com atuação em diversos setores, por meio de suas empresas subsidiárias especializadas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0000ff" />
        <meta name="google-site-verification" content="k7t4KkD6xtgZ-WbUdDuXm0ddlgjsNmHCbzI7P4SrMJAv" />
        <meta name="google-site-verification" content="BIXglvpT96AWwlhL53tBgFwZzmQMoacyNw61XziyWU8" />
        <link rel="canonical" href="https://groupqueiros.com/brazil/" />
        <meta name="author" content="Time Global Queirós Corporation" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="copyright" content="Copyright (c) Global Queirós Corporation" />
        <meta property="og:title" content="Corporação Queirós Brazil" />
        <meta property="og:description" content="A Queirós Brazil é uma holding com atuação em diversos setores, por meio de suas empresas subsidiárias especializadas." />
        <meta property="og:url" content="https://groupqueiros.com/brazil/" />
        <meta property="og:site_name" content="Corporação Queirós Brazil" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:image" content="https://groupqueiros.com/brazil/img/facebook.png" />
        <link rel="dns-prefetch" href="www.groupqueiros.com" />
        <link rel="dns-prefetch" href="//ssl.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.youtube.com" />
        <link rel="dns-prefetch" href="//v2.zopim.com" />
        <link rel="dns-prefetch" href="//www.facebook.com" />
        <link rel="dns-prefetch" href="www.googletagmanager.com" />
        <link rel="dns-prefetch" href="fonts.googleapis.com" />
        <link rel="dns-prefetch" href="www.google-analytics.com" />
      </head>
      <body>
        <Libra />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-BWSTKW4R42" />
    </html>
  );
}
