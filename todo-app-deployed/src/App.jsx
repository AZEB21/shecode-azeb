import { useState, useEffect } from "react";
import TaskCard from "./components/TaskCard";
import "./App.css";

function App() {
  // ── STATE ──────────────────────────────────────────────
  // Load tasks from localStorage on first render (useEffect)
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [filter, setFilter] = useState("all"); // all | pending | done

  // useEffect: runs once on mount — loads saved tasks from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);

  // useEffect: runs every time tasks change — saves to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // ── FORM HANDLER ───────────────────────────────────────
  function handleAddTask(e) {
    e.preventDefault(); // stop page reload on form submit
    if (!input.trim()) return;

    const newTask = {
      id: Date.now(),
      title: input,
      dueDate: dueDate || "No due date",
      complete: false,
    };

    setTasks([...tasks, newTask]);
    setInput("");
    setDueDate("");
  }

  // ── TOGGLE COMPLETE ────────────────────────────────────
  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, complete: !task.complete } : task
      )
    );
  }

  // ── DELETE TASK ────────────────────────────────────────
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // ── FILTER LOGIC ───────────────────────────────────────
  const filteredTasks = tasks.filter((task) => {
    if (filter === "pending") return !task.complete;
    if (filter === "done") return task.complete;
    return true;
  });

  // ── RENDER ─────────────────────────────────────────────
  return (
    <div className="app">
      <h1 className="app-title">My To-Do App</h1>

      {/* FORM — user input */}
      <form className="task-form" onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="task-input"
          aria-label="Task title"
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="date-input"
          aria-label="Due date"
        />
        <button type="submit" className="add-btn">Add Task</button>
      </form>

      {/* FILTER BUTTONS */}
      <div className="filters" role="group" aria-label="Filter tasks">
        {["all", "pending", "done"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`filter-btn ${filter === f ? "active" : ""}`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* TASK COUNT */}
      <p className="task-count">
        {tasks.filter((t) => !t.complete).length} task(s) remaining
      </p>

      {/* CONDITIONAL RENDERING — from week3 */}
      {tasks.length === 0 && <p className="empty-msg">No tasks yet. Add one above!</p>}
      {tasks.length > 0 && tasks.every((t) => t.complete) && (
        <p className="done-msg">Keep up the good work! All done 🎉</p>
      )}

      {/* TASK LIST — reusable TaskCard like my-react-appp */}
      <div className="task-list">
        {filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
