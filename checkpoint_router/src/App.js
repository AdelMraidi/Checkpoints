import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Detailspage from "./pages/Detailspage";
import Notfound from "./pages/Notfound";

function App() {
  const [movies, setmovies] = useState([
    {
      title: "title1",
      description: "description1",
      posterURL:
        "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg",
      rating: 10,
    },
    {
      title: "title1",
      description: "description1",
      posterURL:
        "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg",
      rating: 10,
    },
  ]);
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage movies={movies} setmovies={setmovies} />}
      />
      <Route path="/:id" element={<Detailspage movies={movies} />} />
      <Route path="/page/notfound" element={<Notfound />} />
    </Routes>
  );
}

export default App;
