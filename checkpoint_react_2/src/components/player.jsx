import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Player = ({ player }) => {
  console.log(player);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={player.imageUrl} />
      <Card.Body>
        <Card.Title>Player's name: {player.name}</Card.Title>
        <Card.Text>Nationality: {player.nationality}</Card.Text>
        <Card.Text>Jersey: {player.jerseyNumber}</Card.Text>
        <Card.Text>Team: {player.team}</Card.Text>
        <Card.Text>Age: {player.age}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Player;
