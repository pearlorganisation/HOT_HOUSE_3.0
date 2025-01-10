import Deals from "./Deals";

export const metadata = {
  title: 'Pizza Deals Watford | Exclusive Offers at PizzaInno',
  description: 'Save big on freshly made pizzas with PizzaInno’s deals in Watford. Enjoy special discounts on your favorites. Order online today!"',
  alternates:{
    canonical: `https://www.pizzainno.com/menu/deals`,  }
}

const page = () => {
  return (
    <div>
      <Deals />
    </div>
  );
};

export default page;
