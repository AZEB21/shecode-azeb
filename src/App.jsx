import React from "react";
import TaskCard from "./components/TaskCard";
import tasks from "./data/tasks";
import "./index.css";

function App() {
  return (
    <div className="app">
      <h1>My Tasks</h1>

      <div className="task-container">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            description={task.description}
            dueDate={task.dueDate}
            status={task.status}
          />
        ))}
      </div>
    </div>
  );
}

export default App;