import { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import Filter from "./components/Filter";

function App() {
  const [movies, setmovies] = useState([
    {
      title: "title1",
      description: "description1",
      posterURL:
        "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg",
      rating: 10,
    },
  ]);
  return (
    <>
      <Filter movies={movies} setmovies={setmovies} />
      <MovieList movies={movies} />
      <AddMovie movies={movies} setmovies={setmovies} />
    </>
  );
}

export default App;
