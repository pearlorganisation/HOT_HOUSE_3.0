import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/layout/Header/Header";
import Footer from "./_components/layout/Footer/Footer";
import StoreProvider from "./StoreProvider";
import { Toaster } from "sonner";
import Script from "next/script";
import { usePathname } from "next/navigation";


export const metadata = {
  title: 'Order Freshly Made Pizza Online in Watford – Customize Your Perfect Pie',
  description: 'Discover the best Watford pizza deals online! Enjoy freshly made pizzas tailored to your taste. Order now and savor your customized pizza experience.',
}


export default function RootLayout({ children }) {
  const baseURL = "https://www.pizzainno.com"; // Replace with your website's base URL
  const pathname = usePathname();
  const canonicalURL = `${baseURL}${pathname}`;
  
  return (
    <html lang="en">
  
      <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/PizzaInno_Icon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="google-site-verification" content="Bz01Gv2fFGRJUq4xSR8-LxGv4YKazMAhIdQTLNadTjQ" />
    <link rel="canonical" href={canonicalURL} />
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

<Script >
          {`
 (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TJQPHK3Z');
          `}
        </Script>

      <body>
      <noscript
  dangerouslySetInnerHTML={{
    __html: `
      <img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1102230718220488&ev=PageView&noscript=1"/>
    `,
  }}
/>
<noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TJQPHK3Z"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
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
