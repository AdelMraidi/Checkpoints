import React, { useState } from "react";

const Filter = ({ movies, setmovies }) => {
  const [title, settitle] = useState("");
  const [rating, setrating] = useState("");

  const filterage = () => {
    const filtered = movies.filter(
      (movie) => movie.title.includes(title) && movie.rating >= rating
    );
    setmovies(filtered);
  };
  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => settitle(e.target.value)}
      />
      <input
        type="text"
        value={rating}
        onChange={(e) => setrating(e.target.value)}
      />
      <button onClick={filterage}>Filter</button>
    </div>
  );
};

export default Filter;
