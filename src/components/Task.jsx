import { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import TrashCanIcon from "../assets/trashcan.svg";

export default function Task({
  children,
  id,
  handleInputConfirmation,
  checkState,
  handleCheckState,
  handleDeletion,
}) {
  const [taskText, setTaskText] = useState(null);

  const controls = useAnimation();

  useEffect(() => {
    setTaskText(children ?? "");
  }, [children]);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  });

  function handleOnBlur(e) {
    handleInputConfirmation(id, e.target.value);
  }

  async function handleKeyDown(e) {
    if (e.key === "Enter" || e.key === "Escape") {
      await controls.start({
        scale: [1, 1.05, 1],
        transition: { duration: 0.3, ease: "easeInOut" },
      });

      e.target.blur();
    }
  }

  async function handleCheck() {
    handleCheckState(id);
    if (!checkState) {
      await controls.start({
        x: [-5, 5, -5, 5, 0],
        transition: { duration: 0.4, ease: "easeInOut" },
      });
    }
  }

  return (
    <motion.li
      key={id}
      initial={{ opacity: 0, y: -20 }}
      animate={controls}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="flex mb-5 ml-8 mr-8 lg:w-230 sm:w-150 rounded-2xl bg-neutral-900 hover:bg-neutral-800"
    >
      <label className="flex p-[1.8em] gap-7 w-full rounded-2xl cursor-pointer text-sm sm:text-1xl lg:text-2xl">
        <input
          type="checkbox"
          checked={checkState}
          onChange={handleCheck}
          className="appearance-none h-6 w-6 border-2 border-violet-400 rounded-lg checked:bg-violet-400 checked:border-transparent focus:outline-none"
        />
        <span
          className={`select-none ${
            checkState ? "line-through text-gray-500" : ""
          }`}
        >
          {taskText != "" ? (
            taskText
          ) : (
            <input
              autoFocus
              onBlur={handleOnBlur}
              onKeyDown={handleKeyDown}
              placeholder="Please insert a task"
              className="border-none bg-transparent focus:outline-none caret-violet-400"
            />
          )}
        </span>
      </label>
      <div className="flex">
        {/* <button className="border w-20">edit</button> */}
        <button
          onClick={() => handleDeletion(id)}
          className="flex items-center justify-center w-20 cursor-pointer"
        >
          <img src={TrashCanIcon} className="w-6 h-6" />
        </button>
      </div>
    </motion.li>
  );
}
