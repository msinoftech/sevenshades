import type { Metadata } from "next";
import Script from "next/script";
import { Roboto } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageJsonLd from "@/components/PageJsonLd";
import "./globals.css";
import { BASE_URL } from "@/lib/config";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});


export const metadata: Metadata = {
  title: "Seven Shades | Premium Epoxy Solutions",
  description: "Premium epoxy flooring in Surrey, BC — durable, beautiful garage, residential, and commercial floors installed by local experts. Free quotes.",
  keywords: [ "epoxy flooring Surrey", "garage epoxy flooring", "commercial epoxy floors", "residential epoxy flooring", "premium epoxy solutions", "metallic epoxy flooring", ],
  alternates: { 
    canonical: BASE_URL
  },

  openGraph: {
    title: "Seven Shades | Premium Epoxy Solutions",
    description: "Transform your garage, basement, or commercial space with high-performance epoxy flooring installed by local experts in Surrey, BC.",
    type: "website",
    images: [
      {
        url: BASE_URL + "/images/hero-epoxy-floor-1.2.1.webp",
        alt: "Premium epoxy garage floor with reflective flake finish",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Epoxy Flooring Services | Seven Shades",
    description: "Browse Seven Shades epoxy systems for every space — garage, commercial, residential, metallic, solid, stone epoxy, and rubber surfacing. Precision install, built to last.",
    images: [BASE_URL + "/images/hero-epoxy-floor-1.2.1.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} h-full antialiased`}>
      <head>
         {/* Google Tag Manager */}
         <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({
                'gtm.start': new Date().getTime(),
                event:'gtm.js'
              });
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PLLTP9C2');
          `}
        </Script>
        {/* End Google Tag Manager */}
        <PageJsonLd />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PLLTP9C2"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
