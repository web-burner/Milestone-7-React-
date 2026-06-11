// export default function ToDo({ task , isDone }) {
//   return <li>Task: {task} </li>;
// }
// export default function ToDo({ task, isDone }) {
//     return isDone ? 
//     <li>Done: {task}</li> : <li>Not Done: {task}</li>
// }
export default function ToDo({ task, isDone }) {
    return isDone ||
   <li>Not Done: {task}</li>
}
