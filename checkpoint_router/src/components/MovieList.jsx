import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <>
      <h1>List of movies</h1>
      <div>
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} index={index} />
        ))}
      </div>
    </>
  );
};

export default MovieList;
