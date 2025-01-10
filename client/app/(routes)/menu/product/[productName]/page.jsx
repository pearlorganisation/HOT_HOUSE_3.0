
import Product from "./Product";

export const metadata = {
  title: 'Create Your Own Pizza in Watford | Custom Pizza Delivery',
  description: 'Use our Pizza Builder to create your tailored pizza in Watford. Enjoy custom toppings and fast pizza delivery right to your door. Order now!',
  alternates:{
    canonical: `https://www.pizzainno.com/menu/product/customisePizza?calledBy=createYourOwnPizza`,  }
}

const page = () => {
  return (
    <div>
      <Product />
    </div>
  );
};

export default page;

