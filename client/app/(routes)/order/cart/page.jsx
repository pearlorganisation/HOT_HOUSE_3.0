import Cart from "./Cart";

export const metadata = {
  title: 'Your Basket | Pizza Inno Watford | Best Pizza in Watford ',
  description: 'Discover the best pizza takeaway in Watford at Pizza Inno Watford, Convenient online ordering, quick service, and unbeatable taste. Order now',
}

const page = () => {
  return (
    <div>
      <Cart />
    </div>
  );
};

export default page;
