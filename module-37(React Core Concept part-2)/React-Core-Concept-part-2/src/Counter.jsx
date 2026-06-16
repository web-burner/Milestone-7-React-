import { useState } from "react";

const Counter = () => {
  const [state, setState] = useState(0);
  const handleAdd = () => {
    const newCount = state + 1;
    setState(newCount);
  };
  return (
    <div>
      <h2>Count: {state}</h2>
      <button onClick={handleAdd}>Click me</button>
    </div>
  );
};

export default Counter;
