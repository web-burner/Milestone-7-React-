# React Practice Tasks

Tasks are grouped to match your topic list and get progressively harder. Don't look up full solutions — try first, get stuck, then debug. Each task says what to build and which concepts it forces you to use.

---

## 1. Components & JSX basics
*(Topics: what is React, component, capital first letter, JSX, XML, JSX rules, fragment, camelCase, curly braces, parentheses, style in JSX)* 

**Task 1 — `ProfileCard` component**
Create a functional component `ProfileCard` (capital letter required) that returns JSX wrapped in parentheses, contains more than one top-level element (so you're forced to use a Fragment `<>...</>`), and:
- Displays a name, age, and bio using `{}` for dynamic values stored in JS variables above the return.
- Applies inline styling via the JSX `style` attribute (remember: it's an object, and CSS properties are camelCase — `backgroundColor`, not `background-color`).
- Uses a camelCase attribute somewhere else too (e.g. `className`, `tabIndex`).

**Task 2 — Break the rules on purpose**
Write a component that *fails* to compile because of common JSX mistakes, run it, read the error, then fix it:
- Return two sibling elements with no wrapper.
- Use `class` instead of `className`.
- Forget to wrap a multi-line return in parentheses.

---

## 2. Props
*(Topics: what is props, reading props, destructuring, read-only props)*

**Task 3 — `Greeting` component**
- Create `Greeting` that accepts `name` and `language` props.
- First write it accessing props the long way: `props.name`.
- Then rewrite it using destructuring in the function signature: `({ name, language })`.
- Try mutating a prop inside the component (e.g. `name = name + "!"`) and observe/explain the warning or behavior — this is the "read-only" part.

**Task 4 — `ProductCard`**
Build `ProductCard` that takes `title`, `price`, and `inStock` (boolean) as props, rendered from a parent component that passes hardcoded values.

---

## 3. Conditional Rendering
*(Topic: 6 ways to conditionally render)*

**Task 5 — One badge, six techniques**
Build a `StatusBadge` component that receives a `status` prop (`"online"`, `"offline"`, or `"away"`) and renders different text/colors. Implement the **same** logic six different ways (in six separate component variants or branches), using:
1. `if / else` before the `return`
2. Ternary operator inline in JSX
3. `&&` short-circuit (for a single conditional piece, e.g. only show a "new" tag if `isNew`)
4. `switch` statement before the `return`
5. An immediately-invoked function or a helper function that returns JSX
6. Early `return` (return `null` or a different JSX block before the main return if a condition is met)

---

## 4. Lists & the `map` method
*(Topics: map method, returning a component via map, passing values via map)*

**Task 6 — Render a list of cards**
- Create an array of 5 product objects (`id`, `title`, `price`).
- Use `.map()` to render a `ProductCard` for each one, passing each object's fields as props.
- Don't forget a unique `key` (use `id`, not the array index).

**Task 7 — Filtered list**
Combine `.map()` with conditional rendering: render only products where `price < 50`, using `.filter()` before `.map()`.

---

## 5. Project anatomy
*(Topics: vite.config, package.json, index.html, ESLint, src folder)*

**Task 8 — Scavenger hunt**
In a fresh `npm create vite@latest` React project, answer these by actually opening the files (don't guess):
- In `vite.config.js`, what does the `@vitejs/plugin-react` plugin do? Remove it and see what breaks.
- In `package.json`, what's the difference between the versions listed under `dependencies` vs `devDependencies`? What does the `^` before a version number mean?
- In `index.html`, find the single `<div id="root">` — trace how `main.jsx` connects to it.
- Intentionally leave an unused variable in a component. Run the lint script (check `package.json` for the script name) and read the warning.
- List everything currently inside `src/`.

---

## 6. Events & `useState`
*(Topics: event handling, useState)*

**Task 9 — Counter**
Build a counter with `+`, `-`, and `reset` buttons using `useState`. Use an `onClick` event handler for each button — define the handler functions separately (don't inline complex logic).

**Task 10 — Controlled input**
Build a text input where the typed value is stored in state via `onChange`, and a paragraph below shows the live value. This forces you to handle an event that passes an event object (`e.target.value`).

---

## 7. State + handlers organization, lifting state up, unidirectional data flow
*(Topics: state and handler declared together, lifting up, uni-directional flow)*

**Task 11 — Parent-controlled toggle**
- Build a `Light` component that's just visual (no state) — it receives `isOn` and an `onToggle` prop.
- The actual `isOn` state and the handler that flips it live in the **parent** component (state and handler declared together).
- Pass `isOn` down as a prop, and `onToggle` down as a prop, demonstrating lifting state up + unidirectional data flow: data flows down via props, events flow up via callbacks.

**Task 12 — Two children, one shared state**
Build a parent with two child components: one is a `+`/`-` button pair, the other just displays the count. Lift the count state into the parent so both children stay in sync — this proves why lifting state up matters (two siblings can't share state directly).

---

## 8. Updating arrays/objects immutably with spread
*(Topic: spread operator to copy state before updating)*

**Task 13 — Todo list**
Build a todo list where:
- Adding a todo does `setTodos([...todos, newTodo])` (never `todos.push(...)`).
- Removing a todo uses `.filter()` to create a new array.
- Toggling "done" on one todo uses `.map()` + spread to create a new object for the changed item: `{ ...todo, done: !todo.done }`.

**Task 14 — Update one field in an object**
Given a single state object `user = { name, email, age }`, build a form that updates just `email` using `setUser({ ...user, email: newEmail })`, and explain out loud (in a comment) why `setUser({ email: newEmail })` alone would be wrong.

---

## 9. `useEffect`
*(Topic: useEffect)*

**Task 15 — Document title sync**
Use `useEffect` to update `document.title` every time a counter state changes. Add a console log inside the effect to see exactly when it fires.

**Task 16 — Interval with cleanup**
Build a stopwatch using `setInterval` inside `useEffect`, and return a cleanup function that calls `clearInterval` — this forces you to handle the cleanup pattern correctly.

---

## 10. Async data fetching: `async/await`, `useEffect`, `use()`, `Suspense`, fallback
*(Topics: use() hook, async/await, suspense, fallback)*

**Task 17 — Classic fetch with `useEffect`**
Fetch a list of users from `https://jsonplaceholder.typicode.com/users` inside `useEffect` using an `async` function declared inside the effect (since the effect callback itself can't be async). Store the result in state and render it. Handle a loading state manually with a boolean.

**Task 18 — Same thing, with `use()` + `Suspense`**
Rewrite Task 17's fetch using the `use()` hook instead of `useEffect` + state:
- Write a function that returns a promise (fetch + `.json()`).
- Pass that promise into a child component and read it with `use(promise)`.
- Wrap the child in `<Suspense fallback={<p>Loading...</p>}>` so you don't need a manual loading boolean anymore.
- Compare: what got simpler? What do you lose control over?

---

## 11. Build & deploy
*(Topic: npm run build)*

**Task 19 — Ship it**
- Run `npm run build` and inspect what appears in the generated `dist/` folder.
- Run `npm run preview` to serve the production build locally and confirm it works.
- Deploy the `dist/` folder to a static host (Netlify, Vercel, or GitHub Pages) and get a live URL.

---

## Capstone: Mini "Task Tracker" App

Combine almost everything above into one small app:

1. Parent component holds `tasks` state (array of `{ id, title, done }`) — **state + handlers in the same component**.
2. On mount, `useEffect` fetches an initial task list from a fake API (or a local JSON file) using `async/await`.
3. While loading, show a fallback message (basic version) or use `Suspense` + `use()` (stretch version).
4. Render tasks with `.map()`, each as a `TaskItem` component receiving props (`title`, `done`, `onToggle`, `onDelete`) — **lifting state up**, **unidirectional flow**.
5. `TaskItem` uses **conditional rendering** to style done vs not-done tasks differently (pick any 2 of the 6 techniques).
6. Adding/toggling/deleting tasks must use the **spread operator** to update state immutably.
7. Add a small inline `style` object somewhere for visual polish.
8. Run `npm run build` and deploy the finished app.

Good luck — build each task in its own component file inside `src/`, and don't move to the next section until the current one runs without console warnings.