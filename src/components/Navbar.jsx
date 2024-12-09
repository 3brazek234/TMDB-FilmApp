import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
   
        <Link className="navbar-brand" to="/">
          Noxe
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movies">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/people">
                People
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tvshow">
                TV Show
              </Link>
            </li>
        
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/popular">
                    Popular
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/newplaying">
                    Now Playing
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/toprated">
                    Top Rated
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/upcoming">
                    Upcoming
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./navbar.css";
// export default function Navbar() {
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const [menuDropdown, setMenuDropdown] = useState(false);
//   function clicking() {
//     setMenuDropdown(true);
//   }
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/">
//             Noxe
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNavDarkDropdown"
//             aria-controls="navbarNavDarkDropdown"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//             onClick={clicking}
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           {menuDropdown && (
//             <div className="menu-items">
//               <ul>
//                 <li><Link className="nav-link active" aria-current="page" to="/">
//                   Home
//                 </Link>
//                     </li>
//                     <li>
//                     <Link
//                 className="nav-link active"
//                 aria-current="page"
//                 to="/movies"
//               >
//                 Movies
//               </Link>
//               <button
//                 className="btn btn-dark dropdown-toggle  "
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//                 onClick={() => setDropdownVisible(!dropdownVisible)}
//               ></button>
//                <li className="nav-item dropdown mb-2">
//                 {dropdownVisible && (
//                   <ul
//                     className="dropdown-menu dropdown-menu-dark show mt-5 text-decoration-none"
//                     style={{ position: "absolute" }}
//                   >
//                     <li className="dropdown-item">
//                       {" "}
//                       <Link to="/popular">Popular</Link>
//                     </li>
//                     <li className="dropdown-item">
//                       {" "}
//                       <Link to="/newplaying">Now Playing</Link>
//                     </li>
//                     <li className="dropdown-item">
//                       {" "}
//                       <Link to="/toprated">Top Rated</Link>
//                     </li>
//                     <li className="dropdown-item">
//                       {" "}
//                       <Link to="/upcoming">Upcoming</Link>
//                     </li>
//                   </ul>
//                 )}
//               </li>
//                     </li>
//               </ul>
//             </div>
//           )}
//           <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to="/">
//                   Home
//                 </Link>
//               </li>

//               <button
//                 className="btn btn-dark dropdown-toggle  "
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//                 onClick={() => setDropdownVisible(!dropdownVisible)}
//               ></button>

//               <li className="nav-item dropdown mb-2">
//                 {dropdownVisible && (
//                   <ul
//                     className="dropdown-menu dropdown-menu-dark show mt-5 text-decoration-none"
//                     style={{ position: "absolute" }}
//                   >
//                     <li className="dropdown-item">
//                       {" "}
//                       <Link to="/popular">Popular</Link>
//                     </li>
//                     <li className="dropdown-item">
//                       {" "}
//                       <Link to="/newplaying">Now Playing</Link>
//                     </li>
//                     <li className="dropdown-item">
//                       {" "}
//                       <Link to="/toprated">Top Rated</Link>
//                     </li>
//                     <li className="dropdown-item">
//                       {" "}
//                       <Link to="/upcoming">Upcoming</Link>
//                     </li>
//                   </ul>
//                 )}
//               </li>
//               <Link
//                 className="nav-link active"
//                 aria-current="page"
//                 to="/movies"
//               >
//                 Movies
//               </Link>

//               <li className="nav-item movie">
//                 <Link
//                   className="nav-link active"
//                   aria-current="page"
//                   to="/people"
//                 >
//                   People
//                 </Link>
//               </li>
//               <li className="nav-item movie">
//                 <Link
//                   className="nav-link active"
//                   aria-current="page"
//                   to="/tvshow"
//                 >
//                   Tvshow
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }
