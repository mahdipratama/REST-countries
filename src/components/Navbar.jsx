import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container navbar">
      <Link to="/">
        <h1 className="logo">Where in the world?</h1>
      </Link>
      <h2 className="mode">Dark Mode</h2>
    </div>
  );
};

export default Navbar;
