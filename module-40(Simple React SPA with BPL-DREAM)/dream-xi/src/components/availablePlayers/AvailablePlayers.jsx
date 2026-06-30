import { use, useEffect } from "react";
import Players from "../Players/Players";
import SelectedPlayers from "../selectedPlayers/SelectedPlayers";
import { getBalanceLS, getCartToLS } from "../../localStorage";

const AvailablePlayers = ({
  handleChosenPlayer,
  selectedPlayers,
  handleAvailablePlayerState,
  stateStatus,
  handlePlayersCart,
  playersPromise,
  setSelectedPlayers,
  setBalance,
}) => {
  const players = use(playersPromise);
  
  useEffect(() => {
    const cart = [];
    const storedCart = getCartToLS();
    if (storedCart) {
      storedCart.forEach((id) => {
        const finding = players.find((player) => player.id === id);
        if (finding) {
          cart.push(finding);
        }
      });

      setSelectedPlayers(cart);
    }
    const balance = getBalanceLS();
    setBalance(balance);
  }, [players]);
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex justify-between mb-7">
        <div className=" text-xl font-bold">
          <h2>
            {stateStatus === "available" ? (
              <p>Available Players</p>
            ) : (
              <p>Selected Players ({selectedPlayers.length}/6)</p>
            )}
          </h2>
        </div>
        <div>
          <button
            onClick={() => handleAvailablePlayerState("available")}
            className={`${stateStatus === "available" && "bg-[#E7FE29]"} font-bold border border-gray-200 rounded-l-lg px-3 py-1`}
          >
            Available
          </button>
          <button
            onClick={() => handleAvailablePlayerState("selected")}
            className={` ${stateStatus === "selected" && "bg-[#E7FE29]"} font-bold px-3 py-1  border border-l-0 border-gray-200 rounded-r-lg`}
          >
            Selected({selectedPlayers.length})
          </button>
        </div>
      </div>
      <div>
        {stateStatus === "available" ? (
          <Players
            handleChosenPlayer={handleChosenPlayer}
            players={players}
          ></Players>
        ) : (
          <SelectedPlayers
            handleAvailablePlayerState={handleAvailablePlayerState}
            selectedPlayers={selectedPlayers}
            handlePlayersCart={handlePlayersCart}
          ></SelectedPlayers>
        )}
      </div>
    </div>
  );
};

export default AvailablePlayers;
