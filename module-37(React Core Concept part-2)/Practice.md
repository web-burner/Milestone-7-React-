Theory Questions

1. React Basics

1. What is React and why is it popular?
   => React is component based JavaScript library . It is popular cause it fast and easy to build UI compare to others
2. What problem does React solve?
   => React solves several problems:

- Updating the UI manually is difficult in large applications.
- Managing changing data becomes messy with vanilla JavaScript.
- React uses a component-based architecture so code is reusable.
- React uses a Virtual DOM to efficiently update only changed parts of the page.

3. What is a component?
   => A peaces of element of UI
   => A component is a reusable and independent piece of UI that returns JSX.

4. Why should component names start with a capital letter?
   => React uses capitalization to distinguish components from HTML tags.

5. What is JSX?
   => JavaScript XML

6. Is JSX HTML? Explain.
   => No, it is looks like HTML but it is XML in JavaScript

7. What is XML and how is JSX related to it?
   => XML = eXtensible Markup Language
   => JSX uses XML-like syntax.
   => JSX is not XML, but its syntax is inspired by XML.

⸻

2. JSX Rules

8. Why can’t we return multiple sibling elements directly?
   => cause we can return one thing from a function and component is function so it return one single thing

9. What is a Fragment and why is it used?
   => A Fragment lets us group multiple elements without adding an extra DOM element.

10. Write three ways to use Fragment.
   =>
    1. <>
      <h1>Hello</h1>
    </>
    2. <React.Fragment>
      <h1>Hello</h1>
    </React.Fragment>
    3. import { Fragment } from "react";
    <Fragment>
      <h1>Hello</h1>
    </Fragment>

11. Why do we use className instead of class?
   => JavaScript has it own class keyword so we use className like camel case to use css class

12. Why are JSX attributes written in camelCase?
    => JSX is JavaScript.
    JavaScript object properties usually use camelCase.

13. How do you display a JavaScript variable inside JSX?
    => to display js variable we have to use curly brace and inside it placed the variable

14. What can be written inside {} in JSX?
    => here we can do multiple things like array methods , conditional rendering etc. js things

15. Can you use an if statement inside JSX? Why?
    => no , inside jsx if statement is invalid

⸻

3. Styling

16. How do you apply inline styles in JSX?
   => <h1 style={{ color: "red" }}>Hello</h1>

17. Why is the style attribute written as an object?
   => Because React expects a JavaScript object.

18. Fix this code: <h1 style="color:red">Hello</h1>
   => <h1 style={{color:"red"}}>Hello</h1>

4. Props

19. What are props?
   => props the value that pass from parent component to receive in child component

20. Why are props called read-only?
   => it is only because it cannot change from child component . like you can use it , do something with this but you cannot change its value

21. How do you pass props from parent to child?
    =>from parent component inside a child component i will set a name to put the value and from child i will destructure it.
    like this ,
    function App() {
        const player = "Shaon";
        return (<>
        <div>
          <p>Hello JSX</p>
          <Players player={player}></Players>
        </div>
        </>);
    }

    child component
    function User({player}) {
      return <h1>{player}</h1>;
    }


22. How do you receive props in a component?
    const Players = (props) => {
    const {player}= props
    return (
    <div className="users">
    <p>{player}</p>
    </div>
    );
    };
23. What is destructuring?
    => destructuring is a technique that i can get value like a variable from object and array
    object follow by key name and array follow its index number
    const {name,age} = {name:'Shaon',age:23}
    const [one,two,three] =[1,2,3]

24. Rewrite this using destructuring:
    function User(props){
    return <h1>{props.name}</h1>
    }

    => function User(props){
    const {name} = props;
    return <h1>{name}</h1>
    }

25. Can a child component modify props?
    => no cannot , from child props are read only

6. Conditional Rendering

27. What is conditional rendering?
    => conditionally change something

28. Name six ways to perform conditional rendering in React.
    1. ternary operator
    2. if statement
    3. OR operator
    4. AND operator
    5. if/else statement
    6. variable assignment

29. When would you use && instead of a ternary operator?
    => when the condition must have to be true then i use && instead of ternary

30. What is wrong with this code?
    {
    if(isLoggedIn){
    return <h1>Welcome</h1>
    }
    }
    => here have to use && operator instead of if statement and another things is when i use curly brace for if statement inside {} this and outside {} is conflict

31. Convert it into valid JSX.
    function App() {
      const isLoggedIn = true;

      return (<>
      <div>
        <p>Hello JSX</p>
        <div>{isLoggedIn && <h1>Welcome</h1>}</div>
      </div>
      </>);
    }

7. Code Prediction Questions

32. JSX Output

What will be displayed?
  const name = "Shaon";

  function App(){
  return <h1>Hello {name}</h1>;
  }
=> Hello Shaon

33. JSX Expression
   const age = 20;

    function App(){
    return <h1>{age > 18 ? "Adult" : "Child"}</h1>
    }
    Output?
=> Adult

34. Conditional Rendering
   const isAdmin = false;

    function App(){
    return (<>
    {isAdmin && <h1>Admin Panel</h1>}
    </>);
    }
Output?
=> won't display anything

Map Method Questions

8. Theory

35. What does the map() method return?
=> returns a new array.

36. Why is map commonly used in React?
    => to display array element in UI

37. What is the difference between forEach() and map()?
    => both are doing the almost same but map() return value and forEach() doesn't return

9. Coding

Convert this array into list items:
const fruits = ["Apple","Banana","Mango"];

expected:

<ul>
  <li>Apple</li>
  <li>Banana</li>
  <li>Mango</li>
</ul>

=>
function App() {
  const fruits = ["Apple", "Banana", "Mango"];

  return (<ul>
            {fruits.map((fruit, index) => (<li key={index}>{fruit}</li>))}
        </ul>);
}

11. Component Rendering with Map

Given:
const users = [
{id:1,name:"Shaon"},
{id:2,name:"John"}
];

Create:
<User />
for each user using map().

=>
function App() {
  const users = [
  { id: 1, name: "Shaon" },
  { id: 2, name: "John" },
  ];
  return (
  <>
  <div>{users.map((user,ind)=> <Userr key={ind} user={user}></Userr>)}</div>
  </>);
}

10. Key Question

Why is key important when using map() in React?
=> React uses keys to identify elements uniquely during re-rendering.
Without keys React may update the wrong element.

⸻

Event Handling

11. Theory

38. What is an event handler?
    => it is a technique to handle when user trigger any event

39. How do you attach a click event in React?
    => <button onClick={handlerName}></button>

40. Difference between:
    onClick={handleClick} => this one will wait until function not called means wait for user trigger the event
    and
    onClick={handleClick()} => when compiler read the code it will direct call will not wait for user trigger event

41. Bug fix :
    <button onclick={handleClick}>
    Click
    </button>
    =>
    <button onClick={handleClick}>
    Click
    </button>

useState Questions

12. Theory

42. What is state?
    => State is data managed by React that can change over time and trigger UI updates.

43. What does useState() return?
    => it return an array, Current value + setter function.

44. What is the purpose of the setter function?
    => a setter function to set the state value . when every time call it will set a value for as state value

45. Why should state not be modified directly?
    const [count,setCount] = useState(0);
    => count++;
    does not notify React.

    React only re-renders when setter function is called 

46. Predict Output
    <button onClick={() => setCount(count + 1)}>
    {count}
    </button>
    What happens when the button is clicked?
    count value will increase when button clicked every time

47. Bug Fix
    const [count,setCount] = useState(0);

count = count + 1;
Why is this wrong?
=> wrong is count value cannot change cause it declare with const and bypasses React’s state system. 
and also setter function is not called 

13. Suspense & Fallback

Theory

49. What is Suspense?
    => it is loading state when component wait for finish data load

50. What is the purpose of fallback?
    => to show something until data load finish

51. When does fallback appear on the screen?
    => when data start loading and not yet finish loading

⸻

52. Coding

Fill the missing code:
<Suspense fallback={______}>
<Users />
</Suspense>

=> <Suspense fallback={<h2>Data Loading</h2>}
<Users />
</Suspense>

15. use() Hook & Data Fetching

Theory

53. What does the use() hook do?
    => use() reads the resolved value of a Promise and suspends rendering while waiting.
    
54. How is use() different from useEffect()?
    => use hook direct convert the promise into data and the data is coming through component call but useEffect fetch the data into the component without calling it in parent component and it takes a dependency value depend on fetching value
    and the fetching data direct use in same component or can pass to child component

55. What type of value is usually passed into use()?
    => it is a json promise and context 
    ⸻

56. Predict Output
    const usersPromise = fetch(url)
    .then(res => res.json());

const users = use(usersPromise);

What does users contain?
=> users contain a data it would be like array.

⸻

Async/Await

16. Theory

57. What is a Promise
    => A Promise represents the eventual completion or failure of an asynchronous operation.

58. What does async do?
    => iIt simply allows await to be used inside the function.

59. What does await do?
    => pauses execution inside the async function until the Promise settles.

60. Can await be used outside an async function?
    => no

⸻

61. Convert

Convert this:
fetch(url)
.then(res => res.json())
.then(data => console.log(data));

into async/await.

⸻
const getData = async ()=>{
const res = await fetch(url)
const data = await res.json()
return data
}

useEffect

17. Theory

62. Why do we use useEffect()?
    => We use useEffect for side effects:

    * Fetching data
    * API calls
    * Timers
    * Event listeners
    * Local storage
    * DOM manipulation

63. When does useEffect() run?
    => useEffect(() => {}) Runs after every render.
    => useEffect(() => {}, []) Runs once after first render.
    => useEffect(() => {}, [count]) Runs when count changes.

64. What does an empty dependency array mean?
    useEffect(() => {
    console.log("Hello");
    }, []);
    => Run only once when the component mounts.

65. Predict Output
    useEffect(() => {
    console.log("Mounted");
    }, []);

How many times will this run?
=> output is mounted and it wil run once

⸻

66. Dependency Array

What is the difference between:
useEffect(() => {
console.log("Run");
});
and
useEffect(() => {
console.log("Run");
}, []);
=> Runs after every render.

Mini Project Challenge

Build a React app that:

- Uses a component called User
- Fetches users from an API
- Uses use() or useEffect
- Displays users using map()
- Passes data using props
- Uses conditional rendering
- Shows “Loading…” using Suspense and fallback
- Has a button that counts clicks using useState
