import Task from "./Task";

export default function TaskList({ taskList }) {
  return (
    <div className="flex justify-center">
      <ul>
        {taskList.map((task, index) => (
          <Task index={index}>{task}</Task>
        ))}
      </ul>
    </div>
  );
}
