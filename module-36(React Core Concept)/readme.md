1. react is component based library
2. what is component ?
   1. components are the foundation upon which you build user interfaces (ui)
   2. In a react app , every piece of ui is a component
   3. their name is always begin with capital letter
   4. they return JSX markup
3. how to build a component ?
   function ComponentName (){
   return (
   <>
   {/_ html _/}
   </>
   )
   }

4. what is jsx ?
   1. JavaScript XML
   2. jsx rule (only one things can return from jsx component)
   3. fragment (empty tag)
   4. must use camelCase
   5. carly brace for dynamic variable
   6. use bracket when return something

5. how to use style in jsx? 1. using className in app.css file
   function Student() {
   const name = "Shaon";
   const age = 24;
   return (
   <div className="student">
   <p>Name : {name}</p>
   <p>age : {age}</p>
   </div>
   );
   } 2. using variable object in style attribute
   function Person() {
   const personStyle = {
   color : 'red',
   border : '2px solid tomato',
   borderRadius : '20px'
   }
   const name = "Sajjat";
   const age = 15;
   return (
   <div style={personStyle}>
   <p>Name : {name}</p>
   <p>age : {age}</p>
   </div>
   );
   } 3. direct in style attribute dynamically
   <!-- function Developer (){
           const name = 'Shaon';
           const age = 24;
           return(
             <div style={{
               border : '2px solid tomato',
               borderRadius: '20px'
             }}>
               <p>Name : {name}</p>
               <p>age : {age}</p>
             </div>
           )
       }; -->

6. how set parameter in jsx? 1. when the component called then inside the component write parameter name and set value; 2. to get the parameter in side set name as parameter then can get by props
 function App() {
   return (
   <>
   <h2>Welcome to React JS</h2>
   <Developer name="Shaon" age="24"></Developer>
   </>
   );
   }

        function Developer(props) {
            return (
            const { name, age } = props;
            <div
            style={{
                    border: "2px solid tomato",
                    borderRadius: "20px",
                  }} >
            <p>Name : {name}</p>
            <p>age : {age}</p>
            </div>
            );
        }

7. props type and how to pass and read a prop
using destructuring (here i will destructure the object direct using object key name)

    function Developer({ name, age }) {
      return (
        <div
          style={{
            border: "2px solid tomato",
            borderRadius: "20px",
          }}
        >
          <p>Name : {name}</p>
          <p>age : {age}</p>
        </div>
      );
    }

8. read only props two ways of conditional rendering 
here if i want to take something from another file i have to export the component from the file and i have to import the file where i want to show the component and then if i want to send some value to the component it can possible and to receive the value i have to use props or destructuring and this props are read only cannot change the value and i can set a default value from props when destructuring 

<!-- app.jsx  -->
import ToDo from "./todo";

function App() {
  return (
    <>
      <h2>Welcome to React JS</h2>
      <ToDo task="Learn React" isDone={true}></ToDo>
      <ToDo task="revise JS" isDone={false}></ToDo>
      <ToDo task="Take a Shower" isDone={true}></ToDo>
    </>
  );
}

<!-- child component -->
export default function ToDo({ task, isDone }) {
  if (isDone === true) {
    return <li>Done: {task}</li>;
  } else {
    return <li>Pending: {task}</li>;
  }
}



9. 6 ways to do conditional rendering : if/else, ternary and AND , OR   
    1. ternary (if true or false)
    2. OR (only false)
    3. if else (using variable and return it)
    4. if else (direct return)
    5. And (only true)
    6. if


10. rendering list of users using map 
    here when i used map i call a component inside and can send the map call of iteration as a props and should have to pass key value like id or index number . 

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

