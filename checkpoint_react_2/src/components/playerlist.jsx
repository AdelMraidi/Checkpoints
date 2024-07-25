import React from "react";
import players from "../players";
import Player from "./player";

const Playerlist = () => {
  return (
    <>
      {players.map((player, index) => (
        <Player player={player} key={index} />
      ))}
    </>
  );
};

export default Playerlist;
