import AddTaskButton from "./AddTaskButton";
import Task from "./Task";
import { useState } from "react";
import { Reorder } from "framer-motion";

const dummyTask = [
  { id: 3, text: "Create Dark mode feature", isChecked: false },
  { id: 2, text: "Create add task feature", isChecked: false },
  { id: 1, text: "Create search feature", isChecked: false },
];

export default function TaskManager() {
  const [taskList, setTaskList] = useState([...dummyTask]);

  function handleAdditon() {
    const newTask = {
      id: Date.now(),
      text: "",
      isChecked: false,
    };
    setTaskList((prevList) => [newTask, ...prevList]);
  }

  function handleChange(id, newTaskText) {
    setTaskList((prevList) =>
      prevList.map((task) =>
        task.id === id ? { ...task, text: newTaskText } : task
      )
    );
  }

  function handleDeletion(id) {
    setTaskList((prevList) => prevList.filter((task) => task.id !== id));
  }

  function handleCheckState(id) {
    setTaskList((prevList) =>
      prevList.map((task) =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  }

  return (
    <>
      <div className="flex justify-center select-none">
        <ul>
          <Reorder.Group values={taskList} onReorder={setTaskList}>
            {taskList.map((task, index) => (
              <Reorder.Item
                value={task}
                key={task.id}
                className="select-none list-none"
              >
                <Task
                  key={index}
                  id={task.id}
                  tasklist={taskList}
                  checkState={task.isChecked}
                  handleInputConfirmation={handleChange}
                  handleCheckState={handleCheckState}
                  handleDeletion={handleDeletion}
                >
                  {task.text}
                </Task>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </ul>
      </div>
      <AddTaskButton left={false} onClick={handleAdditon} />
    </>
  );
}
