import { useState } from "react";
import "./App.css";
import { Suspense } from "react";
import Players from "./Players";
const userPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json(),
);
function App() {
  const [count, setCount] = useState(0);
  const handleEvent = (name) => {
    console.log("Hello " + name);
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <>
      <Suspense fallback={<h2>Players Detail is loading...</h2>}>
        <Players userPromise={userPromise}></Players>
      </Suspense>
      <button
        style={{ border: "1px solid tomato", padding: "10px" }}
        onClick={() => handleEvent("Shaon")}
      >
        Event {count}
      </button>
    </>
  );
}

export default App;
