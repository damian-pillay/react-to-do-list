import TaskList from "./TaskList";
import AddTaskButton from "./AddTaskButton";
import { useState } from "react";

const dummyTask = [
  "Create Dark mode feature",
  "Create add task feature",
  "Create search feature",
];

export default function TaskManager() {
  const [taskList, setTaskList] = useState([...dummyTask]);

  function handleClick() {
    setTaskList((prevList) => ["", ...prevList]);
  }

  return (
    <>
      <TaskList taskList={taskList} />
      <AddTaskButton onClick={handleClick} />
    </>
  );
}
