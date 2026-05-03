import "./TaskCard.css";

// Reusable TaskCard — inspired by my-react-appp's TaskCard
function TaskCard({ task, onToggle, onDelete }) {
  return (
    <div className={`task-card ${task.complete ? "complete" : ""}`}>
      <div className="task-info">
        <h3 className="task-title">{task.title}</h3>
        <p className="task-due">Due: {task.dueDate}</p>
        <span className="task-status">
          {task.complete ? "✅ Done" : "⏳ Pending"}
        </span>
      </div>
      <div className="task-actions">
        <button
          onClick={() => onToggle(task.id)}
          className="toggle-btn"
          aria-label={task.complete ? "Mark as pending" : "Mark as done"}
        >
          {task.complete ? "Undo" : "Done"}
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="delete-btn"
          aria-label="Delete task"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
