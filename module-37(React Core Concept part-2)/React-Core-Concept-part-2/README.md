1. component 
2. component name first letter will be uppercase 
3. everything will write in jsx 
4. props 
5. dynamic use of variable 
6. conditional rendering 
7. array of string 
8. array of object 
9. map method 
10. vite config (for plagin react)
11. package.json (for different version handle )
12. index.html (this is the main html file or starting point)
13. eslint (this is for observe the file where have syntax error or unuse thing to give warning)
14. src folder (it is for all site source of the project)
15. event handle without passing parameter 
    1. declare a function for event inside main component 
    2. declare onClick inside button 
    3. dynamically put the function inside onclick but cannot use () bracket if use it will automatic call 2 times because of strick mode 
    4. otherwise can use function direct the button 
    5. otherwise direct use of arrow function inside onclick 
    
16. event handle with parameter 
    1. if i want send a parameter then i have to use the event handler inside arrow function inside of onclick its called wrap with arrow function 
    function App() {
          function handleClick() {
            alert("Button Clicked");
          }
          function handleClick2(val) {
            alert("Button 2 Clicked" + val);
          }

          return (
            <>
              <h2>React Core Concept Part 2</h2>
              <button onClick={handleClick}>Click Me</button>
              <button onClick={() => handleClick2(" from arrow function")}>
                Click Me 2
              </button>
            </>
          );
        }

        export default App;

17. state change in react using useState hook
 
how its works its a function take a parameter and set the parameter as value of state and inside the function has another function with a parameter . inside function it change the value of state when it calls and from the main function it return an array of state and setState 
like this ,

function useState (value){
    let state = value;
    function setState (newValue){
      state = newValue;
    }
    return [state,setState]
  }

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

    5 use case of useState()
    1. state management 
    2. conditional rendering 
    3. toggle flags (true/false)
    4. counter
    5. store api data in state

18. suspense used for loading (means before data load what will show in UI)
19. fallback ()
20. use()
21. async await to return promise