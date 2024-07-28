import React from "react";
import Filter from "../components/Filter";
import MovieList from "../components/MovieList";
import AddMovie from "../components/AddMovie";

const HomePage = ({ movies, setmovies }) => {
  return (
    <>
      <Filter movies={movies} setmovies={setmovies} />
      <MovieList movies={movies} />
      <AddMovie movies={movies} setmovies={setmovies} />
    </>
  );
};

export default HomePage;
