import React, { forwardRef } from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import {
  ThumbsUpDownSharp,
  ThumbUpAltSharp,
  ThumbUpSharp,
} from "@material-ui/icons";

const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie }, ref) => {
  console.log(
    `https://image.tmdb.org/t/p/original/" + ${
      movie.backdrop_path || movie.poster_path
    }`
  );
  return (
    <div ref={ref} className="videocard">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt="Manoj"
      />
      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        text={movie.overview}
      />

      <h2>{movie.title || movie.original_name}</h2>
      <p className="videocard_stat">
        {movie.media_type && `${movie.media_type} .`}
        {movie.release_date || movie.first_air_date} .
        <ThumbUpSharp />
        {movie.vote_count}
      </p>
    </div>
  );
});

export default VideoCard;
