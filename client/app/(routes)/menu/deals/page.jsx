import Deals from "./Deals";

export const metadata = {
  title: 'Top Pizza Deals | The Pizza Inno | Order online now',
  description: 'Discover the best pizza takeaway in Watford at The Pizza Inno, Convenient online ordering, quick service, and unbeatable taste. Order now',
}

const page = () => {
  return (
    <div>
      <Deals />
    </div>
  );
};

export default page;
