import Script from "next/script";
import FoodCategory from "./FoodCategory";


// Dynamic Metadata Generation
export async function generateMetadata({ params }) {
  const category = params.foodCategoryId || "pizzas"; // Default to "pizzas" if no category is found
  let title, description;
  
  switch (category.toLowerCase()) {
    case "pizzas":
      title = "Customized Pizza in Watford | Online Orders";
      description = "Order personalized pizza with your favorite toppings in Watford. Quick online ordering and delivery!";
      break;
    case "sides":
      title = "Delicious Sides in Watford | Pizza Sides & More";
      description = "Complete your meal with tasty sides in Watford. From garlic bread to salads, explore our selection of sides and add them to your pizza order for a perfect meal.";
      break;
    case "drinks":
      title = "Refreshing Drinks in Watford | Soft Drinks & More";
      description = "Quench your thirst with a variety of refreshing drinks in Watford. Pair your pizza with soft drinks, juices, and more for a perfect meal combo!";
      break;
    case "desserts":
      title = "Delicious Desserts in Watford | Sweet Treats & More";
      description = "Indulge in mouthwatering desserts in Watford. From chocolate lava cake to cookies, satisfy your sweet tooth with our perfect dessert options after your pizza.";
      break;
    case "dips":
      title = "Tasty Dips in Watford | Perfect Pairings for Your Pizza";
      description = "Enhance your pizza experience with a variety of flavorful dips in Watford. From ranch to garlic butter, find the perfect dip to complement your meal!";
      break;
    default:
      title = "Food Category |Pizzainno Watford | Order online now";
      description = "Discover the best pizza takeaway in Watford at Pizzainno. Order now!";
      break;
  }

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.pizzainno.com/menu/${params.foodCategoryId}`,
      
    }
  };
}

const Page = ({ params }) => {
  const category = params.foodCategoryId || "pizzas";

  return (
    <>
    {category.toLowerCase()=="pizzas" &&     <Script
        strategy="beforeInteractive" // Ensures script is added to the head
      >
      {`
      {
&quot;@context&quot;: &quot;https://schema.org&quot;,
&quot;@type&quot;: &quot;Restaurant&quot;,
&quot;name&quot;: &quot;Pizzas&quot;,
&quot;url&quot;: &quot;https://www.pizzainno.com/menu/pizzas&quot;,
&quot;logo&quot;: &quot;https://www.pizzainno.com/_next/static/media/PizzaInnno_SVG.bc710c5a.svg&quot;,
&quot;address&quot;: {
&quot;@type&quot;: &quot;PostalAddress&quot;,
&quot;streetAddress&quot;: &quot;91 Joel St&quot;,
&quot;addressLocality&quot;: &quot;Pinner&quot;,
&quot;addressRegion&quot;: &quot;Northwood&quot;,
&quot;postalCode&quot;: &quot;HA6 1LW&quot;,
&quot;addressCountry&quot;: &quot;GB&quot;
},
&quot;telephone&quot;: &quot;+44 1923 510520&quot;,
&quot;menu&quot;: {
&quot;@type&quot;: &quot;Menu&quot;,
&quot;url&quot;: &quot;https://www.pizzainno.com/menu&quot;,
&quot;hasMenuSection&quot;: [
{
&quot;@type&quot;: &quot;MenuSection&quot;,
&quot;name&quot;: &quot;Vegetarian&quot;,
&quot;hasMenuItem&quot;: [
{
&quot;@type&quot;: &quot;MenuItem&quot;,
&quot;name&quot;: &quot;Margherita Pizza&quot;,
&quot;description&quot;: &quot;Fresh Tomato, Regular Cheese, Tomato Sauce&quot;,
&quot;offers&quot;: {
&quot;@type&quot;: &quot;Offer&quot;,
&quot;price&quot;: &quot;4.99&quot;,
&quot;priceCurrency&quot;: &quot;GBP&quot;,
&quot;eligibleRegion&quot;: &quot;UK&quot;,
&quot;priceValidUntil&quot;: &quot;2025-12-31&quot;
}
},
{
&quot;@type&quot;: &quot;MenuItem&quot;,
&quot;name&quot;: &quot;Vegetarian Pizza&quot;,
&quot;description&quot;: &quot;Onions, Green Peppers, Mushrooms, Sweet Corns&quot;,
&quot;offers&quot;: {
&quot;@type&quot;: &quot;Offer&quot;,
&quot;price&quot;: &quot;4.99&quot;,
&quot;priceCurrency&quot;: &quot;GBP&quot;,
&quot;eligibleRegion&quot;: &quot;UK&quot;,
&quot;priceValidUntil&quot;: &quot;2025-12-31&quot;
}
},
{
&quot;@type&quot;: &quot;MenuItem&quot;,
&quot;name&quot;: &quot;Vegetarian Hot Pizza&quot;,
&quot;description&quot;: &quot;Onions, Green Peppers, Green Chilli, Mushrooms, Jalapeno&quot;,

&quot;offers&quot;: {
&quot;@type&quot;: &quot;Offer&quot;,
&quot;price&quot;: &quot;4.99&quot;,
&quot;priceCurrency&quot;: &quot;GBP&quot;,
&quot;eligibleRegion&quot;: &quot;UK&quot;,
&quot;priceValidUntil&quot;: &quot;2025-12-31&quot;
}
},
{
&quot;@type&quot;: &quot;MenuItem&quot;,
&quot;name&quot;: &quot;Vegetarian Supreme Pizza&quot;,
&quot;description&quot;: &quot;Onions, Fresh Tomato, Green Peppers, Mushrooms, Sweet Corns, Black Olives&quot;,
&quot;offers&quot;: {
&quot;@type&quot;: &quot;Offer&quot;,
&quot;price&quot;: &quot;4.99&quot;,
&quot;priceCurrency&quot;: &quot;GBP&quot;,
&quot;eligibleRegion&quot;: &quot;UK&quot;,
&quot;priceValidUntil&quot;: &quot;2025-12-31&quot;
}
},
{
&quot;@type&quot;: &quot;MenuItem&quot;,
&quot;name&quot;: &quot;Masala Hot (Desi) Pizza&quot;,
&quot;description&quot;: &quot;Onions, Fresh Ginger, Fresh Garlic, Garam Masala, Fresh Coriander, Chilli&quot;,
&quot;offers&quot;: {
&quot;@type&quot;: &quot;Offer&quot;,
&quot;price&quot;: &quot;4.99&quot;,
&quot;priceCurrency&quot;: &quot;GBP&quot;,
&quot;eligibleRegion&quot;: &quot;UK&quot;,
&quot;priceValidUntil&quot;: &quot;2025-12-31&quot;
}
}
]
},
{
&quot;@type&quot;: &quot;MenuSection&quot;,
&quot;name&quot;: &quot;Meat&quot;,
&quot;hasMenuItem&quot;: [
{
&quot;@type&quot;: &quot;MenuItem&quot;,
&quot;name&quot;: &quot;American Hot Pizza&quot;,
&quot;description&quot;: &quot;Pepperoni, Beef, Green Peppers, Green Chilli, Jalapeno&quot;,
&quot;offers&quot;: {
&quot;@type&quot;: &quot;Offer&quot;,
&quot;price&quot;: &quot;4.99&quot;,
&quot;priceCurrency&quot;: &quot;GBP&quot;,
&quot;eligibleRegion&quot;: &quot;UK&quot;,
&quot;priceValidUntil&quot;: &quot;2025-12-31&quot;
}
},
{
&quot;@type&quot;: &quot;MenuItem&quot;,
&quot;name&quot;: &quot;BBQ Meat Feast Pizza&quot;,
&quot;description&quot;: &quot;Pepperoni, Bacon, Ham, Spicy Pork&quot;,
&quot;offers&quot;: {
&quot;@type&quot;: &quot;Offer&quot;,
&quot;price&quot;: &quot;4.99&quot;,
&quot;priceCurrency&quot;: &quot;GBP&quot;,
&quot;eligibleRegion&quot;: &quot;UK&quot;,
&quot;priceValidUntil&quot;: &quot;2025-12-31&quot;
}
},

{
&quot;@type&quot;: &quot;MenuItem&quot;,
&quot;name&quot;: &quot;BBQ Meat Lover Pizza&quot;,
&quot;description&quot;: &quot;Plain Chicken, Pepperoni, Ham, Spicy Pork, Onions&quot;,
&quot;offers&quot;: {
&quot;@type&quot;: &quot;Offer&quot;,
&quot;price&quot;: &quot;4.99&quot;,
&quot;priceCurrency&quot;: &quot;GBP&quot;,
&quot;eligibleRegion&quot;: &quot;UK&quot;,
&quot;priceValidUntil&quot;: &quot;2025-12-31&quot;
}
}
]
},
{
&quot;@type&quot;: &quot;MenuSection&quot;,
&quot;name&quot;: &quot;Halal&quot;,
&quot;hasMenuItem&quot;: [
{
&quot;@type&quot;: &quot;MenuItem&quot;,
&quot;name&quot;: &quot;BBQ Chicken Pizza (HALAL)&quot;,
&quot;description&quot;: &quot;BBQ Chicken, Green Peppers, Red Onions&quot;,
&quot;offers&quot;: {
&quot;@type&quot;: &quot;Offer&quot;,
&quot;price&quot;: &quot;4.99&quot;,
&quot;priceCurrency&quot;: &quot;GBP&quot;,
&quot;eligibleRegion&quot;: &quot;UK&quot;,
&quot;priceValidUntil&quot;: &quot;2025-12-31&quot;
}
},
{
&quot;@type&quot;: &quot;MenuItem&quot;,
&quot;name&quot;: &quot;Buffalo Chicken Pizza (HALAL)&quot;,
&quot;description&quot;: &quot;Double Buffalo Chicken, Jalapeno, Double Cheese&quot;,
&quot;offers&quot;: {
&quot;@type&quot;: &quot;Offer&quot;,
&quot;price&quot;: &quot;4.99&quot;,
&quot;priceCurrency&quot;: &quot;GBP&quot;,
&quot;eligibleRegion&quot;: &quot;UK&quot;,
&quot;priceValidUntil&quot;: &quot;2025-12-31&quot;
}
},
{
&quot;@type&quot;: &quot;MenuItem&quot;,
&quot;name&quot;: &quot;Desi Chicken Pizza (Desi) (HALAL)&quot;,
&quot;description&quot;: &quot;Tandoori Chicken, Fresh Ginger, Onions, Fresh Coriander, Green Chilli, Green Peppers&quot;,
&quot;offers&quot;: {
&quot;@type&quot;: &quot;Offer&quot;,
&quot;price&quot;: &quot;4.99&quot;,
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
&quot;telephone&quot;: &quot;+44 1923 510520&quot;,
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
        </Script>}
    <div>
      <FoodCategory />
    </div>
    </>
  );
};

export default Page;

