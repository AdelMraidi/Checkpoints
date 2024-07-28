import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Detailspage = ({ movies }) => {
  const { id } = useParams();
  const nav = useNavigate();
  //mount lil component barka
  useEffect(() => {
    if (movies.length - 1 < id) {
      nav("/page/notfound");
    }
  }, []);

  return (
    <div>
      <h3>Detail page : {id}</h3>
      <h3>{movies[id]?.title}</h3>
      <p>{movies[id]?.description}</p>
      <img src={movies[id]?.posterURL} />
      <p>Rating: {movies[id]?.rating}</p>
      <button onClick={() => nav(-1)}>go back home</button>
    </div>
  );
};

export default Detailspage;
