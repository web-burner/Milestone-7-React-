// import React from 'react';

import { use } from "react";

const Players = ({ userPromise }) => {
  const player = use(userPromise);
  console.log(player)
  return (
    <div>
      <p>Players: {player.length}</p>
    </div>
  );
};

export default Players;
