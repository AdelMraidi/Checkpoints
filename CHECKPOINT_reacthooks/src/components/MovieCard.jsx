import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <img src={movie.posterURL} />
      <p>Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
