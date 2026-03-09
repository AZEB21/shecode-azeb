import TaskCard from "./TaskCard.jsx";

function App() {
  return (
    <div>
      <h1>My Tasks</h1>

      <TaskCard title="Finish React Assignment" dueDate="March 10" />
      <TaskCard title="Study Django" dueDate="March 12" />
      <TaskCard title="Push Project to GitHub" dueDate="March 13" />

    </div>
  );
}

export default App;