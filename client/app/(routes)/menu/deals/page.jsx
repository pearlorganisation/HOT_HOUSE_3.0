import Script from "next/script";
import Deals from "./Deals";
import Head from "next/head";

export const metadata = {
  title: 'Pizza Deals Watford | Exclusive Offers at PizzaInno',
  description: 'Save big on freshly made pizzas with PizzaInno’s deals in Watford. Enjoy special discounts on your favorites. Order online today!"',
  alternates:{
    canonical: `https://www.pizzainno.com/menu/deals`,  }
}


const page = () => {

  <Head>
{/* Add script to the head */}
<Script
        strategy="beforeInteractive" // Ensures script is added to the head
      >
        {`
          {
&quot;@context&quot;: &quot;https://schema.org&quot;,
&quot;@type&quot;: &quot;Restaurant&quot;,
&quot;name&quot;: &quot;Deals&quot;,
&quot;url&quot;: &quot;https://www.pizzainno.com/menu/deals&quot;,
&quot;logo&quot;: &quot;https://www.pizzainno.com/_next/static/media/PizzaInnno_SVG.bc710c5a.svg&quot;,
&quot;address&quot;: {
&quot;@type&quot;: &quot;PostalAddress&quot;,
&quot;streetAddress&quot;: &quot;167-169 The Parade High St&quot;,
&quot;addressLocality&quot;: &quot;Watford&quot;,
&quot;postalCode&quot;: &quot;WD17 1NJ&quot;,
&quot;addressCountry&quot;: &quot;GB&quot;
},
&quot;telephone&quot;: &quot;+44 1923 318913&quot;,
&quot;menu&quot;: {
&quot;@type&quot;: &quot;Menu&quot;,
&quot;url&quot;: &quot;https://www.pizzainno.com/menu&quot;,
&quot;hasMenuSection&quot;: [
{
&quot;@type&quot;: &quot;MenuSection&quot;,
&quot;name&quot;: &quot;Top Hot Deals&quot;,
&quot;hasMenuItem&quot;: [
{
&quot;@type&quot;: &quot;MenuItem&quot;,
&quot;name&quot;: &quot;The Only 4 You Deal&quot;,
&quot;description&quot;: &quot;1 pizza, 1 drink, Cheese Garlic Bread / 4 PC Grilled Chicken Wings, 1 Regular Chips&quot;,
&quot;offers&quot;: {
&quot;@type&quot;: &quot;Offer&quot;,
&quot;price&quot;: &quot;12.99&quot;,
&quot;priceCurrency&quot;: &quot;GBP&quot;,
&quot;eligibleRegion&quot;: &quot;UK&quot;,
&quot;priceValidUntil&quot;: &quot;2025-12-31&quot;
}
},
{
&quot;@type&quot;: &quot;MenuItem&quot;,
&quot;name&quot;: &quot;Epic Meal Deal&quot;,
&quot;description&quot;: &quot;1 pizza, 1 drink&quot;,
&quot;offers&quot;: {
&quot;@type&quot;: &quot;Offer&quot;,
&quot;price&quot;: &quot;14.99&quot;,
&quot;priceCurrency&quot;: &quot;GBP&quot;,
&quot;eligibleRegion&quot;: &quot;UK&quot;,
&quot;priceValidUntil&quot;: &quot;2025-12-31&quot;
}
},
{
&quot;@type&quot;: &quot;MenuItem&quot;,
&quot;name&quot;: &quot;Big Value Deal&quot;,
&quot;description&quot;: &quot;1 pizza, 2 drinks, Garlic Bread, 2 PC Grilled Chicken Wings&quot;,
&quot;offers&quot;: {
&quot;@type&quot;: &quot;Offer&quot;,
&quot;price&quot;: &quot;15.99&quot;,
&quot;priceCurrency&quot;: &quot;GBP&quot;,
&quot;eligibleRegion&quot;: &quot;UK&quot;,
&quot;priceValidUntil&quot;: &quot;2025-12-31&quot;
}
},

{
&quot;@type&quot;: &quot;MenuItem&quot;,
&quot;name&quot;: &quot;The Big Bite Deal&quot;,
&quot;description&quot;: &quot;1 pizza, 2 drinks, Garlic Bread, Large Chips&quot;,
&quot;offers&quot;: {
&quot;@type&quot;: &quot;Offer&quot;,
&quot;price&quot;: &quot;17.99&quot;,
&quot;priceCurrency&quot;: &quot;GBP&quot;,
&quot;eligibleRegion&quot;: &quot;UK&quot;,
&quot;priceValidUntil&quot;: &quot;2025-12-31&quot;
}
},
{
&quot;@type&quot;: &quot;MenuItem&quot;,
&quot;name&quot;: &quot;Two for 2 Deal&quot;,
&quot;description&quot;: &quot;2 pizzas, 2 drinks, 2 Regular Fries / 2 Garlic Bread&quot;,
&quot;offers&quot;: {
&quot;@type&quot;: &quot;Offer&quot;,
&quot;price&quot;: &quot;20.99&quot;,
&quot;priceCurrency&quot;: &quot;GBP&quot;,
&quot;eligibleRegion&quot;: &quot;UK&quot;,
&quot;priceValidUntil&quot;: &quot;2025-12-31&quot;
}
},
{
&quot;@type&quot;: &quot;MenuItem&quot;,
&quot;name&quot;: &quot;Family Deal1&quot;,
&quot;description&quot;: &quot;2 pizzas, 1 drink, 2 Garlic Bread with Cheese&quot;,
&quot;offers&quot;: {
&quot;@type&quot;: &quot;Offer&quot;,
&quot;price&quot;: &quot;25.99&quot;,
&quot;priceCurrency&quot;: &quot;GBP&quot;,
&quot;eligibleRegion&quot;: &quot;UK&quot;,
&quot;priceValidUntil&quot;: &quot;2025-12-31&quot;
}
},
{
&quot;@type&quot;: &quot;MenuItem&quot;,
&quot;name&quot;: &quot;Dinner for All Deal&quot;,
&quot;description&quot;: &quot;2 pizzas, 1 drink, 2 Portions of Garlic Bread, Large Chips&quot;,
&quot;offers&quot;: {
&quot;@type&quot;: &quot;Offer&quot;,
&quot;price&quot;: &quot;25.99&quot;,
&quot;priceCurrency&quot;: &quot;GBP&quot;,
&quot;eligibleRegion&quot;: &quot;UK&quot;,
&quot;priceValidUntil&quot;: &quot;2025-12-31&quot;
}
},
{
&quot;@type&quot;: &quot;MenuItem&quot;,
&quot;name&quot;: &quot;The Big Deal&quot;,
&quot;description&quot;: &quot;3 pizzas, 1 drink, Garlic Bread, 6 Grilled Wings&quot;,
&quot;offers&quot;: {
&quot;@type&quot;: &quot;Offer&quot;,
&quot;price&quot;: &quot;29.99&quot;,
&quot;priceCurrency&quot;: &quot;GBP&quot;,
&quot;eligibleRegion&quot;: &quot;UK&quot;,
&quot;priceValidUntil&quot;: &quot;2025-12-31&quot;
}
},
{
&quot;@type&quot;: &quot;MenuItem&quot;,

&quot;name&quot;: &quot;Family Feast Deal&quot;,
&quot;description&quot;: &quot;2 pizzas, 1 drink, 1 Portion of Cheese Garlic Bread / 4 Grilled Chicken Wings, Large Chips&quot;,
&quot;offers&quot;: {
&quot;@type&quot;: &quot;Offer&quot;,
&quot;price&quot;: &quot;29.99&quot;,
&quot;priceCurrency&quot;: &quot;GBP&quot;,
&quot;eligibleRegion&quot;: &quot;UK&quot;,
&quot;priceValidUntil&quot;: &quot;2025-12-31&quot;
}
},
{
&quot;@type&quot;: &quot;MenuItem&quot;,
&quot;name&quot;: &quot;Party Deal&quot;,
&quot;description&quot;: &quot;2 pizzas, 1 drink, 2 Portions of Cheese Garlic Bread / 7 Grilled Wings&quot;,
&quot;offers&quot;: {
&quot;@type&quot;: &quot;Offer&quot;,
&quot;price&quot;: &quot;32.99&quot;,
&quot;priceCurrency&quot;: &quot;GBP&quot;,
&quot;eligibleRegion&quot;: &quot;UK&quot;,
&quot;priceValidUntil&quot;: &quot;2025-12-31&quot;
}
},
{
&quot;@type&quot;: &quot;MenuItem&quot;,
&quot;name&quot;: &quot;PizzaInno Big Party Deal&quot;,
&quot;description&quot;: &quot;3 pizzas, 1 drink, 2 Portions of Cheese Garlic Bread / 7 Grilled Wings&quot;,
&quot;offers&quot;: {
&quot;@type&quot;: &quot;Offer&quot;,
&quot;price&quot;: &quot;39.99&quot;,
&quot;priceCurrency&quot;: &quot;GBP&quot;,
&quot;eligibleRegion&quot;: &quot;UK&quot;,
&quot;priceValidUntil&quot;: &quot;2025-12-31&quot;
}
},
{
&quot;@type&quot;: &quot;MenuItem&quot;,
&quot;name&quot;: &quot;Hat-Trick Deal&quot;,
&quot;description&quot;: &quot;3 pizzas&quot;,
&quot;offers&quot;: {
&quot;@type&quot;: &quot;Offer&quot;,
&quot;price&quot;: &quot;22.99&quot;,
&quot;priceCurrency&quot;: &quot;GBP&quot;,
&quot;eligibleRegion&quot;: &quot;UK&quot;,
&quot;priceValidUntil&quot;: &quot;2025-12-31&quot;
}
}
]
}
]
},
&quot;contactPoint&quot;: {
&quot;@type&quot;: &quot;ContactPoint&quot;,
&quot;telephone&quot;: &quot;+44 1923 318913&quot;,
&quot;contactType&quot;: &quot;Customer Service&quot;,
&quot;areaServed&quot;: &quot;GB&quot;,
&quot;availableLanguage&quot;: &quot;English&quot;
},
&quot;sameAs&quot;: [
&quot;https://www.facebook.com/Pizzainnolondon&quot;,
&quot;https://www.instagram.com/pizzainnowatford&quot;
],
&quot;priceRange&quot;: &quot;£&quot;,

&quot;additionalType&quot;: &quot;http://www.productontology.org/id/Restaurant&quot;
}
        `}
      </Script>
</Head>
  return (<>

    <div>
      <Deals />
    </div>
    </>
  );
};

export default page;
