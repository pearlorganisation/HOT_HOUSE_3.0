import Cart from "./Cart";

export const metadata = {
  title: 'Your Basket | The Pizza Inno | Best Pizza in Watford ',
  description: 'Discover the best pizza takeaway in Watford at The Pizza Inno, Convenient online ordering, quick service, and unbeatable taste. Order now',
}

const page = () => {
  return (
    <div>
      <Cart />
    </div>
  );
};

export default page;
