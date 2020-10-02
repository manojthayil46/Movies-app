import React from "react";
import "./Nav.css";
import Request from "./Request";

function Nav({ setselectedOption }) {
  return (
    <div className="Nav">
      <h2 onClick={() => setselectedOption(Request.fetchTrending)}>Trending</h2>
      <h2 onClick={() => setselectedOption(Request.fetchTopRated)}>
        Top Rated
      </h2>

      <h2 onClick={() => setselectedOption(Request.fetchActionMovies)}>
        Action
      </h2>
      <h2 onClick={() => setselectedOption(Request.fetchComedyMovies)}>
        Comedy
      </h2>
      <h2 onClick={() => setselectedOption(Request.fetchHorrorMovies)}>
        Horror
      </h2>
      <h2 onClick={() => setselectedOption(Request.fetchRomanticMovies)}>
        Romance
      </h2>
      <h2 onClick={() => setselectedOption(Request.fetchMystery)}>Mystery</h2>
      <h2 onClick={() => setselectedOption(Request.fetchSciFi)}>Sci-Fi</h2>
      <h2 onClick={() => setselectedOption(Request.fetchWestern)}>Western</h2>
      <h2 onClick={() => setselectedOption(Request.fetchAnimation)}>
        Animation
      </h2>
      <h2 onClick={() => setselectedOption(Request.fetchTV)}>TV Movie</h2>
    </div>
  );
}

export default Nav;
