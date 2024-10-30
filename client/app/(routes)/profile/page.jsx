import Profile from "./Profile";

export const metadata = {
    title: 'My Profile | The Pizza Inno',
    description: 'Discover the best pizza takeaway in Watford at The Pizza Inno, Convenient online ordering, quick service, and unbeatable taste. Order now',
  }

const page = ({ searchParams }) => {
    return (
      <div>
        <Profile searchParams={searchParams}/>
      </div>
    );
  };
  
  export default page;
  