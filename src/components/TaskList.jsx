import { useState } from "react";

const dummyTask = [
  "Create Dark mode feature",
  "create add task feature",
  "Create search feature",
];

export default function TaskList() {
  const [taskList, setTaskList] = useState([...dummyTask]);

  return (
    <div>
      <ul></ul>
    </div>
  );
}
