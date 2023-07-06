import { Link } from 'react-router-dom';
import SwitchTheme from './SwitchTheme';

const Navbar = () => {
  return (
    <div className="container navbar">
      <Link to="/">
        <h1 className="logo">Where in the world?</h1>
      </Link>
      <SwitchTheme />
    </div>
  );
};

export default Navbar;
