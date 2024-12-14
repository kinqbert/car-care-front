import { Link } from "react-router-dom";

export const HomePageContent = () => {
  return (
    <>
      <h1>hello</h1>
      <Link to="/garage">Garage</Link>
      <Link to="/vehicles">Vehicles</Link>
    </>
  );
};
