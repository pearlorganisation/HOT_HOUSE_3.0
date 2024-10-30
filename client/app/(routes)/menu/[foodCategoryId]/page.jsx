import FoodCategory from "./FoodCategory";


// Dynamic Metadata Generation
export async function generateMetadata({ params }) {
  const category = params.foodCategoryId || "pizzas"; // Default to "pizzas" if no category is found
  let title, description;
  
  switch (category.toLowerCase()) {
    case "pizzas":
      title = "Pizzas | The Pizza Inno | Order online now";
      description = "Order delicious pizzas from The Pizza Inno in Watford. Try our wide variety of pizzas and enjoy unbeatable taste.";
      break;
    case "sides":
      title = "Sides | The Pizza Inno | Order online now";
      description = "Complement your meal with a wide range of sides from The Pizza Inno in Watford. Order online now!";
      break;
    case "drinks":
      title = "Drinks | The Pizza Inno | Order online now";
      description = "Quench your thirst with our refreshing drinks at The Pizza Inno in Watford. Order online!";
      break;
    case "desserts":
      title = "Desserts | The Pizza Inno | Order online now";
      description = "Indulge in our mouth-watering desserts at The Pizza Inno in Watford. Order now!";
      break;
    case "dips":
      title = "Dips | The Pizza Inno | Order online now";
      description = "Add extra flavor with our delicious dips from The Pizza Inno in Watford. Order online now!";
      break;
    default:
      title = "Food Category | The Pizza Inno | Order online now";
      description = "Discover the best pizza takeaway in Watford at The Pizza Inno. Order now!";
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

