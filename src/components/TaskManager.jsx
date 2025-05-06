import AddTaskButton from "./AddTaskButton";
import Task from "./Task";
import { useState } from "react";

const dummyTask = [
  { id: 1, text: "Create Dark mode feature" },
  { id: 2, text: "Create add task feature" },
  { id: 3, text: "Create search feature" },
];

export default function TaskManager() {
  const [taskList, setTaskList] = useState([...dummyTask]);

  function handleClick() {
    const newTask = { id: Date.now(), text: "" };
    setTaskList((prevList) => [newTask, ...prevList]);
  }

  function handleChange(id, newTaskText) {
    setTaskList((prevList) =>
      prevList.map((task) =>
        task.id === id ? { ...task, text: newTaskText } : task
      )
    );
  }

  return (
    <>
      <div className="flex justify-center">
        <ul>
          {taskList.map((task) => (
            <Task
              id={task.id}
              taskList={taskList}
              handleInputConfirmation={handleChange}
            >
              {task.text}
            </Task>
          ))}
        </ul>
      </div>
      <AddTaskButton onClick={handleClick} />
    </>
  );
}
