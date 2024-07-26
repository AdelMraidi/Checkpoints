import React, { useState } from "react";

const AddMovie = ({ movies, setmovies }) => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [posterURL, setposterURL] = useState("");
  const [rating, setrating] = useState("");

  const add = (e) => {
    e.preventDefault(); // prevent refresh
    const movie = {
      title,
      description,
      posterURL,
      rating,
    };
    setmovies([...movies, movie]);
  };

  return (
    <div>
      <form onSubmit={add}>
        <input
          type="text"
          value={title}
          onChange={(e) => settitle(e.target.value)}
          required={true}
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
          required={true}
        />
        <input
          type="text"
          value={posterURL}
          onChange={(e) => setposterURL(e.target.value)}
          required={true}
        />
        <input
          type="number"
          value={rating}
          onChange={(e) => setrating(e.target.value)}
          required={true}
          min={0}
          max={10}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddMovie;
