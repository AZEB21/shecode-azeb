import React from "react";

function TaskCard({ title, description, dueDate, status }) {
  return (
    <div className="task-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Due:</strong> {dueDate}</p>
      <p><strong>Status:</strong> {status}</p>
    </div>
  );
}

export default TaskCard;