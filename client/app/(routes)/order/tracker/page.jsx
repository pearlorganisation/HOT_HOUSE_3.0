import Tracker from "./Tracker";
import Head from "next/head";
import Script from "next/script";

export const metadata = {
  title: "Pizza Deals Watford | Exclusive Offers at PizzaInno",
  description:
    "Save big on freshly made pizzas with PizzaInno’s deals in Watford. Enjoy special discounts on your favorites. Order online today!",
  alternates: {
    canonical: `https://www.pizzainno.com/order/tracker`,
  },
};

const page = () => {
  return (
    <>
      {/* Head content */}
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={metadata.alternates.canonical} />
      {/* Add script to the head */}
      <Script
        id="google-conversion-tracking"
        strategy="beforeInteractive" // Ensures script is added to the head
      >
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-16577048939/9s2XCNbW7oIaEOvixuA9',
            'transaction_id': ''
          });
        `}
      </Script>
      </Head>


      <div>
        <Tracker />
      </div>
    </>
  );
};

export default page;
