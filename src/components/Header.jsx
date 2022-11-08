import Logo from "../images/logo.jpg";
import { CartWidget } from "./CartWidget";
import NavOptions from "./NavOptions";
import Search from "./SearchBar";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="index.html">
          <img src={Logo} alt="Logo del Local" />
        </a>
        <Search/>
        <CartWidget />
        <NavOptions />
      </div>
    </nav>
  );
};
