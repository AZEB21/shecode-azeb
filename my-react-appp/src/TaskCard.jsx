import "./TaskCard.css";
function TaskCard({ title, dueDate }) {
  return (
    <div style={{border:"1px solid gray", padding:"10px", margin:"10px"}}>
      <h3>{title}</h3>
      <p>Due: {dueDate}</p>
    </div>
  );
}

export default TaskCard;