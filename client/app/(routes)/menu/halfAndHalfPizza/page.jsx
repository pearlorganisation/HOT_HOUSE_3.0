import HalfAndHalfPizza from "./halfAndHalfPizza";


export const metadata = {
  title: 'Half & Half Pizza Watford | Customize & Order Online',
  description: 'Create your perfect pizza in Watford with Half & Half options. Choose fresh toppings and enjoy personalized pizza delivery. Order online now',
  alternates:{
    canonical: `https://pizzainno.com/menu/halfAndHalfPizza?calledBy=half`,  }
}

const page = () => {
  return (
    <div>
      <HalfAndHalfPizza />
    </div>
  );
};

export default page;
