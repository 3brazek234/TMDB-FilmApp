import React, { useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css'
export default function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Noxe
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDarkDropdown"
            aria-controls="navbarNavDarkDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
        
                <button
                  className="btn btn-dark dropdown-toggle  "
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={() => setDropdownVisible(!dropdownVisible)}
                ></button>
                     
                <li className="nav-item dropdown mb-2">
                  {dropdownVisible && (
                    <ul
                      className="dropdown-menu dropdown-menu-dark show mt-5 text-decoration-none"
                      style={{ position: "absolute" }}
                    >
                      <li className="dropdown-item">
                        {" "}
                        <Link to="/popular">Popular</Link>
                      </li>
                      <li className="dropdown-item">
                        {" "}
                        <Link to="/newplaying">Now Playing</Link>
                      </li>
                      <li className="dropdown-item">
                        {" "}
                        <Link to="/toprated">Top Rated</Link>
                      </li>
                      <li className="dropdown-item">
                        {" "}
                        <Link to="/upcoming">Upcoming</Link>
                      </li>
                    </ul>
                  )}
                </li>
                <Link
                className="nav-link active"
                aria-current="page"
                to="/movies"
              >
                Movies
                </Link>
            

              <li className="nav-item movie">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/people"
                >
                  People
                </Link>
              </li>
              <li className="nav-item movie">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/tvshow"
                >
                  Tvshow
                </Link>
              </li>
            </ul>
       
          </div>
        </div>
      </nav>
    </div>
  );
}

