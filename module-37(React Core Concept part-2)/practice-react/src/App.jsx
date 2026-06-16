import { Suspense } from "react";
import "./App.css";
// import User from './User'
import Users from "./Users";

const userPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json(),
);
function App() {
  return (
    <>
      <h2>Welcome to React Mini Project</h2>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Users userPromise={userPromise}></Users>
      </Suspense>
    </>
  );
}

export default App;
