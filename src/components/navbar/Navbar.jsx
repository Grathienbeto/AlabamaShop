import NavOptions from "./NavOptions";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="navigation nav-container container-fluid ">

        <Link className="brand" to="/">
          ALABAMA
        </Link>

        <NavOptions />
        
        <CartWidget />

      </div>
    </nav>
  );
};

export default Navbar;
