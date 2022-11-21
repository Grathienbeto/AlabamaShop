const NavOptions = ({children}) => {
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
            <a
              className="nav-link"
              aria-current="page"
              href="./joyeria.html"
            >
              Joyeria
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="./merch.html">
              Merchandising
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavOptions;
