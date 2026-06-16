// import Batsman from './Batsman';
// import Counter from './Counter';
import { Suspense } from "react";
import "./App.css";
import Users from "./Users";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json(),
);
// console.log(fetchUsers)
function App() {
  return (
    <>
      <div>
        <h1>API Loding</h1>
        <Suspense fallback={<h3>Data Loading...</h3>}>
          <Users fetchUsers = {fetchUsers}></Users>
        </Suspense>
        {/* <Counter></Counter> */}
        {/* <Batsman name = 'Tamim'></Batsman>
      <Batsman name = 'Sakib'></Batsman> */}
      </div>
    </>
  );
}

export default App;
