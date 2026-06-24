import { Suspense } from "react";
import "./App.css";
import Countries from "./countries/Countries";

const countriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all",
).then((res) => res.json());

function App() {
  return (
    <>
      <section id="center"  className="">
        <h1 className="text-3xl font-bold text-center">React On The Go</h1>
        <Suspense fallback = {<h1 className="text-center font-bold text-2xl">Countries Loading...</h1>}>
          <Countries countriesPromise={countriesPromise}></Countries>
        </Suspense>
      </section>
    </>
  );
}

export default App;
