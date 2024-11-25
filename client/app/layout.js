import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/layout/Header/Header";
import Footer from "./_components/layout/Footer/Footer";
import StoreProvider from "./StoreProvider";
import { Toaster } from "sonner";
import Script from "next/script";


export const metadata = {
  title: 'Pizza Inno Watford | Best Pizza in Watford | Order online now',
  description: 'Discover the best pizza takeaway in Watford at Pizza Inno, Convenient online ordering, quick service, and unbeatable taste. Order now',
}


export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
  
      <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.jpg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="google-site-verification" content="Bz01Gv2fFGRJUq4xSR8-LxGv4YKazMAhIdQTLNadTjQ" />
    {/* <meta name="google-site-verification" content="KNX-3vWjShPJyzrqVlhnyfiZYNUxUOWcaupO2aREIcE" />
    <meta name="msvalidate.01" content="23983C217832B5C4AAC786882981CDA6" />
    <meta name="p:domain_verify" content="0251c9ad8f0e5ddccd4f306b6f6fc871"/> */}

{/* Adding noscript using dangerouslySetInnerHTML */}
{/* <noscript
  dangerouslySetInnerHTML={{
    __html: `
      <img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=406823858532963&ev=PageView&noscript=1" />
    `,
  }}
/> */}

  </head>

      {/* Google Analytics Script */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-0EQFCMDCVK"/>

        <Script id="google-analytics">
          {`
   window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-0EQFCMDCVK');
          `}
        </Script>

        <Script id="google-tag-event">
  {`
  gtag('event', 'ads_conversion_Shopping_Cart_2', {
    // <event_parameters>
  });
  `}
</Script>
        <Script id="google-tag-event">
  {`
 gtag('event', 'ads_conversion_Sign_Up_Page_1', {
    // <event_parameters>
  });
  `}
</Script>
        <Script id="google-tag-event">
  {`
  gtag('event', 'ads_conversion_Begin_checkout_1', {
    // <event_parameters>
  });
  `}
</Script>

      <body>
      <StoreProvider>
          <Header />
          <div className="pt-44">{children}</div>
          <Toaster position="top-right" richColors duration={1000} />
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
