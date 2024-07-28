import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie, index }) => {
  const nav = useNavigate();
  return (
    <div>
      <h3 onClick={() => nav(`/${index}`)}>{movie.title}</h3>
      <p>{movie.description}</p>
      <img src={movie.posterURL} />
      <p>Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
