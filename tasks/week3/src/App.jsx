import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Do homework", complete: false },
    { id: 2, title: "Clean room", complete: true },
    { id: 3, title: "Read a book", complete: true }
  ]);

  return (
    <div>
      <h1>My Tasks</h1>
      {tasks.length === 0 && <p>No tasks for today!</p>}
{tasks.length > 0 && tasks.every(task => task.complete) && (
  <p>Keep up the good work!</p>
)}
      <ul>
  {tasks.map((task) => (
    <li key={task.id}>
      {task.title} {task.complete ? "(Done)" : "(Pending)"}
    </li>
  ))}
</ul>
    </div>
  );
}

export default App;