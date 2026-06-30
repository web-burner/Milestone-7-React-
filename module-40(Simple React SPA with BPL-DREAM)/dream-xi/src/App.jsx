import { useState } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import AvailablePlayers from "./components/availablePlayers/AvailablePlayers";
import { addToLS, removeFromLS } from "./localStorage";

const allPlayers = async () => {
  const res = await fetch("./dream-team-players.json");
  return res.json();
};

const playersPromise = allPlayers()

function App() {
  
  const [stateStatus, setStateStatus] = useState("available");
  // state handle available players and selected players state
  const handleAvailablePlayerState = (status) => {
    setStateStatus(status);
  };
  const INITIAL_BALANCE = 12000000;

  const MAX_PLAYERS = 6;
  const [balance, setBalance] = useState(INITIAL_BALANCE);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  // choose player button
  const handleChosenPlayer = (player) => {
    const { price, id } = player;
    const exist = selectedPlayers.find((p) => p.id === id);

    if (balance < price) {
      alert("Not Enough Coin!");
      return;
    }
    if (selectedPlayers.length === MAX_PLAYERS) {
      alert("Maximum Capacity Reached!");
      return;
    }
    if (exist) {
      alert("Player Already Selected");
      return;
    }
    const newBalance = balance - price;
    setBalance(newBalance);
    setSelectedPlayers((prev) => [...prev, player]);
    addToLS(id, newBalance);
  };

  // remove player from cart & here add function to remove ls
  const handlePlayersCart = (id, price) => {
    const newBalance = balance + price;
    setBalance(newBalance);
    const updateCart = selectedPlayers.filter((player) => player.id !== id);
    setSelectedPlayers(updateCart);
    removeFromLS(id, newBalance);
  };

  return (
    <div className="bg-white text-black p-20">
      <Navbar balance={balance}></Navbar>
      <Banner></Banner>
      <AvailablePlayers
        handleAvailablePlayerState={handleAvailablePlayerState}
        stateStatus={stateStatus}
        selectedPlayers={selectedPlayers}
        handleChosenPlayer={handleChosenPlayer}
        handlePlayersCart={handlePlayersCart}
        playersPromise = {playersPromise}
        setSelectedPlayers={setSelectedPlayers}
        setBalance={setBalance}
      ></AvailablePlayers>
    </div>
  );
}

export default App;
