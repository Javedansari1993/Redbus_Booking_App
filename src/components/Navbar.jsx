import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light border border-3">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold text-warning mx-4" to="/">
            RESERVE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active fw-bold" aria-current="page" to="/">
                  Ticket
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fw-bold" to="/">
                  Contact us
                </Link>
              </li>
            </ul>
            <div className="d-flex" role="search">
              <button className="btn btn-warning mx-4 px-4" type="submit">
                Login
              </button>
              <button className="mx-4 px-4 rounded" type="submit">
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
