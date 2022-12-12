import { Link } from "react-router-dom";

const NavOptions = ({ children }) => {
  return (
    <>
      <button
        className="navbar-toggler toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse options" id="navbarNavDropdown">
        
        <ul className="navbar-nav">

          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/category/joyeria">
              Joyeria
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/category/merchandising">
              Merchandising
            </Link>
          </li>

        </ul>
      </div>
    </>
  );
};
 
export default NavOptions;
