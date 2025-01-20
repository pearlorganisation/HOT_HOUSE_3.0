import Script from "next/script";
import Deals from "./Deals";
import Head from "next/head";

export const metadata = {
  title: 'Pizza Deals Watford | Exclusive Offers at PizzaInno',
  description: 'Save big on freshly made pizzas with PizzaInno’s deals in Watford. Enjoy special discounts on your favorites. Order online today!',
  alternates: {
    canonical: `https://www.pizzainno.com/menu/deals`,
  },
};

const Page = () => {
  return (
    <>
      <Head>
        {/* Add the schema.org structured data as a JSON-LD script */}
        <Script
          id="restaurant-schema"
          type="application/ld+json"
          strategy="beforeInteractive" // Ensures script is added to the head
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Deals",
              "url": "https://www.pizzainno.com/menu/deals",
              "logo": "https://www.pizzainno.com/_next/static/media/PizzaInnno_SVG.bc710c5a.svg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "167-169 The Parade High St",
                "addressLocality": "Watford",
                "postalCode": "WD17 1NJ",
                "addressCountry": "GB"
              },
              "telephone": "+44 1923 318913",
              "menu": {
                "@type": "Menu",
                "url": "https://www.pizzainno.com/menu",
                "hasMenuSection": [
                  {
                    "@type": "MenuSection",
                    "name": "Top Hot Deals",
                    "hasMenuItem": [
                      {
                        "@type": "MenuItem",
                        "name": "The Only 4 You Deal",
                        "description": "1 pizza, 1 drink, Cheese Garlic Bread / 4 PC Grilled Chicken Wings, 1 Regular Chips",
                        "offers": {
                          "@type": "Offer",
                          "price": "12.99",
                          "priceCurrency": "GBP",
                          "eligibleRegion": "UK",
                          "priceValidUntil": "2025-12-31"
                        }
                      },
                      {
                        "@type": "MenuItem",
                        "name": "Epic Meal Deal",
                        "description": "1 pizza, 1 drink",
                        "offers": {
                          "@type": "Offer",
                          "price": "14.99",
                          "priceCurrency": "GBP",
                          "eligibleRegion": "UK",
                          "priceValidUntil": "2025-12-31"
                        }
                      }
                    ]
                  }
                ]
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+44 1923 318913",
                "contactType": "Customer Service",
                "areaServed": "GB",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.facebook.com/Pizzainnolondon",
                "https://www.instagram.com/pizzainnowatford"
              ],
              "priceRange": "£",
              "additionalType": "http://www.productontology.org/id/Restaurant"
            }
          `}
        </Script>
      </Head>
      <div>
        <Deals />
      </div>
    </>
  );
};

export default Page;
