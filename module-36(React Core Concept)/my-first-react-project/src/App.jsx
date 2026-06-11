import Actors from "./Actors";
import "./App.css";
import Singers from "./Singers";

function App() {
  const actors = ['Shaon','Sajjat','Rahim','Anas','Soyeb']
  const singers = [
    {id:1,name:'Dr. Mahfuz', age:68},
    {id:2,name:'Tahsan', age:45},
    {id:3,name:'Shuvro Dev', age:57}
  ]
  return (
    <>
    <h2>React Core Concept</h2>
    {
      actors.map((actor, ind) => <Actors key={ind} actor= {actor}></Actors>)
    }
    {
      singers.map(singer => <Singers key={singer.id} singer = {singer}></Singers>)
    }
      
    </>
  );
}


// function App() {
//   return (
//     <>
//       {/* <h2>Welcome to React JS</h2>
//       <ToDo task="Learn React" isDone={true}></ToDo>
//       <ToDo task="revise JS" isDone={false}></ToDo>
//       <ToDo task="Take a Shower" isDone={true}></ToDo> */}
//       {/* <Developer name="Shaon" age="24"></Developer>
//       <Developer name="Sajjat" age="16"></Developer>
//       <Student name="Sajjat" age="15" classes="10"></Student>
//       <Player name="Rahim" age="15"></Player> */}
//     </>
//   );
// }
// function Student({ name, age, classes }) {
//   return (
//     <p>
//       {name} {age} {classes}{" "}
//     </p>
//   );
// }

// function Developer({ name, age }) {
//   return (
//     <div
//       style={{
//         border: "2px solid tomato",
//         borderRadius: "20px",
//       }}
//     >
//       <p>Name : {name}</p>
//       <p>age : {age}</p>
//     </div>
//   );
// }

// function Player({ name, age }) {
//   return (
//     <p className="student">
//       {name} : Age {age}
//     </p>
//   );
// }
export default App;
