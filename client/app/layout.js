import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/layout/Header/Header";
import Footer from "./_components/layout/Footer/Footer";
import StoreProvider from "./StoreProvider";
import { Toaster } from "sonner";
import Script from "next/script";


export const metadata = {
  title: 'Pizzainno Watford | Best Pizza in Watford | Order online now',
  description: 'Discover the best pizza takeaway in Watford at Pizzainno, Convenient online ordering, quick service, and unbeatable taste. Order now',
}


export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
  
      <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/PizzaInno_Icon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="google-site-verification" content="Bz01Gv2fFGRJUq4xSR8-LxGv4YKazMAhIdQTLNadTjQ" />
    <noscript
  dangerouslySetInnerHTML={{
    __html: `
      <img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1102230718220488&ev=PageView&noscript=1"/>
    `,
  }}
/>
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

{/* Meta Pixel Code */}
  <Script id="meta-pixel">
  {`
   !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1102230718220488');
fbq('track', 'PageView');
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
