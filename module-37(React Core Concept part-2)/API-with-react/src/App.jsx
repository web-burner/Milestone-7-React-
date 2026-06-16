import { Suspense, useEffect } from "react";
import "./App.css";
import Users from "./Users";
import Players from "../Players";

const usersPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json(),
);
function App() {
  useEffect(() => {
    console.log("Mounted");
  }, []);
  useEffect(() => {
    console.log("Run");
  });

  useEffect(() => {
    console.log("Run");
  }, []);
  const userPromise = usersPromise;
  return (
    <>
      <div>
        <h2>API with Use Hook</h2>

        <Players></Players>
        <Suspense fallback={<h2 className="users">Data Loading...</h2>}>
          <Users usersPromise={userPromise}></Users>
        </Suspense>
      </div>
    </>
  );
}

export default App;
