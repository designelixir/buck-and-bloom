import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import GlobalAnimations from "@/utils/GlobalAnimations";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Nav from "./components/Nav";

export const metadata: Metadata = {
  title: "Buck & Bloom Cheese Co.",
  description: "Buck and Bloom Cheese Company is a small but mighty team of cheesemakers offering artisan goat cheeses from our creamery in Buena Vista, Colorado.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/mlw6hvs.css" />
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="nw0+SqP3HhOqWpda4kWy1g" async></script>
      </head>
      <Analytics></Analytics>
      <SpeedInsights></SpeedInsights>
      <body className="flex-center-center flex-column">
        <GlobalAnimations></GlobalAnimations>
        <Nav></Nav>
        
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
