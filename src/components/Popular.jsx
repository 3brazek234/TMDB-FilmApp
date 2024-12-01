import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Popular.css";
export default function Popular() {
  let pages = [1, 2, 3, 4, 5, 6, 7,8];
  const imgsrc = "https://image.tmdb.org/t/p/w500";
  let [popular, setPops] = useState([]);
  async function pops(number) {
    let pops = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${number}&api_key=4e9cb7ba8e1cd4622ec904b6930440d7`
    );
    setPops(pops.data.results);
  }
 useEffect(()=>{pops(1); },[])
  return (
    <div>
      <div className="container">
        <div className="row">
          {popular.map((item) => (
            <div className="col-md-2 p-4">
              <Link to={`details/${item.id}`}>
                <figure className="popFigure">
                  <img
                    src={imgsrc + item.poster_path}
                    alt={item.overview}
                    className="w-100"
                  />
                  <figcaption className="popCaption">
                    <h3>{item.title}</h3>
                  </figcaption>
                </figure>
              </Link>
            </div>
          ))}
        </div>
        <nav aria-label="Page navigation example mb-4">
          <ul className="pagination d-flex justify-content-center m-4">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            {pages.map((num) => (
              <li
                className="page-item"
                onClick={() => {
                  pops(num);
                }}
              >
                <a className="page-link">{num}</a>
              </li>
            ))}
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
