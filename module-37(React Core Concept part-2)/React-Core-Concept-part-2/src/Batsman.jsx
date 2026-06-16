import { useState } from "react";
import "./App.css";
const Batsman = ({name}) => {
  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);
  const [fours, setFours] = useState(0);
  const handleSingles = () => {
    const updatedRuns = runs + 1;
    setRuns(updatedRuns);
  };
  const handleSix = () => {
    const updatedRuns = runs + 6;
    const updatedSixes = sixes + 1;
    setSixes(updatedSixes);
    setRuns(updatedRuns);
  };
  const handleFour = () => {
    const updatedRuns = runs + 4;
    const updatedFours = fours + 1;
    setFours(updatedFours);
    setRuns(updatedRuns);
  };
  return (
    <div className="student">
      <h3>Player: {name}</h3>
      <p>{runs >= 50 && "you scored 50"}</p>
      <h1>Score: {runs}</h1>
      <p>
        Sixes: {sixes} / Fours: {fours}
      </p>
      <button onClick={handleSingles}>Singles</button>
      <button onClick={handleFour}>Four</button>
      <button onClick={handleSix}>Six</button>
    </div>
  );
};

export default Batsman;
