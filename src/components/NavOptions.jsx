const NavOptions = () => {
  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              aria-current="page"
              href="./pages/joyeria.html"
            >
              Joyeria
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="./pages/merch.html">
              Merchandising
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavOptions;
