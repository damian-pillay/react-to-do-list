import { useState } from "react";

const dummyTask = [
  "Create Dark mode feature",
  "Create add task feature",
  "Create search feature",
];

export default function TaskList() {
  const [taskList, setTaskList] = useState([...dummyTask]);

  return (
    <div>
      <ul>
        {taskList.map((task, index) => (
          <li key={index} className="mb-2">
            <label>
              <input type="checkbox" />
              <span className="select-none">{task}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
