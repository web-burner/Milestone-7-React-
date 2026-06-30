// import React from 'react';

import Player from "./player/Player";

const Players = ({ players, handleChosenPlayer }) => {
  return (
    <div className=" grid grid-cols-3 gap-5 ">
      {players.map((player) => (
        <Player
          player={player}
          handleChosenPlayer={handleChosenPlayer}
          key={player.id}
        ></Player>
      ))}
    </div>
  );
};

export default Players;
