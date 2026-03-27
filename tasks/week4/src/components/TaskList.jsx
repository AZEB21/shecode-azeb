import { useEffect, useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5") 
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setLoading(false); 
      });
  }, []);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title} {task.completed ? "(completed)" : "(not completed)"}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;