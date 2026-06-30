// import React from 'react';

import SelectedPlayer from "./selectedPlayer/SelectedPlayer";

const SelectedPlayers = ({ selectedPlayers , handlePlayersCart , handleAvailablePlayerState}) => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        {selectedPlayers.map((player) => (
          <SelectedPlayer player={player} key={player.id} handlePlayersCart={handlePlayersCart}></SelectedPlayer>
        ))}
      </div>
      <div>
        <button onClick={()=>handleAvailablePlayerState('available')} className="btn bg-[#E7FE29] text-black outline outline-black outline-offset-4 rounded-lg shadow-none border-none">
          Add More Player
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayers;