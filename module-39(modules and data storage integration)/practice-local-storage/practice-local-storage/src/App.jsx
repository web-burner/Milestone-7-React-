import { Suspense } from "react";
import "./App.css";
import Bottles from "./Bottles";

const bottlesPromise = fetch("bottles.json").then((res) => res.json());

function App() {
  return (
    <>
      <div>
        <Suspense fallback={<h1>Bottles Are Loading...</h1>}>
          <Bottles bottlesPromise={bottlesPromise}></Bottles>
        </Suspense>
      </div>
    </>
  );
}

export default App;
