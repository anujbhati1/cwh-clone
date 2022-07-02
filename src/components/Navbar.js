import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar position-sticky fixed-top navbar-expand-lg py-4 navbar-light bg-light border-bottom">
      <div className="container-fluid">
        <Link className="navbar-brand ms-4 text-primary fw-bold" to="/">
          CodeWithHarry
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/courses">
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <Link to="/login" className="btn btn-primary mx-2" type="submit">
              Login
            </Link>
            <Link to="/signup" className="btn btn-primary mr-4" type="submit">
              Signup
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}
