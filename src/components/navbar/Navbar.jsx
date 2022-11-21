import NavOptions from "./NavOptions";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="navigation nav-container container-fluid ">

        <a className="brand" href="index.html">
          ALABAMA
        </a>

        <NavOptions />
        
        <CartWidget />

      </div>
    </nav>
  );
};

export default Navbar;
