import AddTaskButton from "./AddTaskButton";
import Task from "./Task";
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
    console.log(taskList);
  }

  function handleChange(index, newTask) {
    setTaskList((prevList) =>
      prevList.map((task, i) => (i === index ? newTask : task))
    );
  }

  return (
    <>
      <div className="flex justify-center">
        <ul>
          {taskList.map((task, index) => (
            <Task
              index={index}
              taskList={taskList}
              handleInputConfirmation={handleChange}
            >
              {task}
            </Task>
          ))}
        </ul>
      </div>
      <AddTaskButton onClick={handleClick} />
    </>
  );
}
