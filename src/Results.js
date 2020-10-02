import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Results.css";
import VideoCard from "./VideoCard";
import FlipMove from "react-flip-move";

function Results({ selectedOption }) {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption);
      console.log(request);
      setmovies(request.data.results);
      return request;
    }
    fetchData();
  }, [selectedOption]);

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;
