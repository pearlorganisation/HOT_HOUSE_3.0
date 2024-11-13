import Profile from "./Profile";

export const metadata = {
    title: 'My Profile | Pizza Inno Watford',
    description: 'Discover the best pizza takeaway in Watford at Pizza Inno Watford, Convenient online ordering, quick service, and unbeatable taste. Order now',
  }

const page = ({ searchParams }) => {
    return (
      <div>
        <Profile searchParams={searchParams}/>
      </div>
    );
  };
  
  export default page;
  