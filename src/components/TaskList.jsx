import { useState } from "react";
import Task from "./Task";

const dummyTask = [
  "Create Dark mode feature",
  "Create add task feature",
  "Create search feature",
];

export default function TaskList() {
  const [taskList, setTaskList] = useState([...dummyTask]);

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
