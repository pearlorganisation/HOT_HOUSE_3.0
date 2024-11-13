import FoodCategory from "./FoodCategory";


// Dynamic Metadata Generation
export async function generateMetadata({ params }) {
  const category = params.foodCategoryId || "pizzas"; // Default to "pizzas" if no category is found
  let title, description;
  
  switch (category.toLowerCase()) {
    case "pizzas":
      title = "Pizzas | Pizza Inno Watford | Order online now";
      description = "Order delicious pizzas from Pizza Inno Watford in Watford. Try our wide variety of pizzas and enjoy unbeatable taste.";
      break;
    case "sides":
      title = "Sides | Pizza Inno Watford | Order online now";
      description = "Complement your meal with a wide range of sides from Pizza Inno Watford in Watford. Order online now!";
      break;
    case "drinks":
      title = "Drinks | Pizza Inno Watford | Order online now";
      description = "Quench your thirst with our refreshing drinks at Pizza Inno Watford in Watford. Order online!";
      break;
    case "desserts":
      title = "Desserts | Pizza Inno Watford | Order online now";
      description = "Indulge in our mouth-watering desserts at Pizza Inno Watford in Watford. Order now!";
      break;
    case "dips":
      title = "Dips | Pizza Inno Watford | Order online now";
      description = "Add extra flavor with our delicious dips from Pizza Inno Watford in Watford. Order online now!";
      break;
    default:
      title = "Food Category | Pizza Inno Watford | Order online now";
      description = "Discover the best pizza takeaway in Watford at Pizza Inno Watford. Order now!";
      break;
  }

  return {
    title,
    description,
  };
}

const Page = () => {
  return (
    <div>
      <FoodCategory />
    </div>
  );
};

export default Page;

