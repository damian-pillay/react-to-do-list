import { useEffect, useState, useRef } from "react";
import { useAnimation, motion } from "framer-motion";
import TrashCanIcon from "../assets/trashcan.svg";
import ActionButton from "./ActionButton";
import EditIcon from "../assets/edit.svg";
import ConfirmIcon from "../assets/confirm.svg";

export default function Task({
  children,
  id,
  handleInputConfirmation,
  checkState,
  handleCheckState,
  handleDeletion,
}) {
  const [taskText, setTaskText] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const controls = useAnimation();

  const inputRef = useRef(null);

  useEffect(() => {
    setTaskText(children ?? "");
    setIsEditing(children ? false : true);
  }, [children]);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  });

  async function handleOnBlur(e) {
    setTimeout(async () => {
      handleInputConfirmation(id, e.target.value);
      setTaskText(e.target.value);
      setIsEditing(false);

      await controls.start({
        scale: [1, 1.05, 1],
        transition: { duration: 0.3, ease: "easeInOut" },
      });
    }, 150);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" || e.key === "Escape") {
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
      <label className="flex p-[1.8em] gap-7 w-full rounded-2xl cursor-pointer text-sm sm:text-1xl lg:text-2xl relative">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={checkState}
            onChange={handleCheck}
            className="appearance-none h-6 w-6 border-2 border-violet-400 rounded-lg checked:bg-violet-400 checked:border-transparent focus:outline-none"
          />
        </div>

        <span
          className={`w-full ${checkState ? "line-through text-gray-500" : ""}`}
        >
          {!isEditing ? (
            taskText
          ) : (
            <input
              ref={inputRef}
              autoFocus
              defaultValue={taskText}
              onBlur={handleOnBlur}
              onKeyDown={handleKeyDown}
              placeholder="Please insert a task"
              className="border-none bg-transparent focus:outline-none w-full caret-violet-400"
            />
          )}
        </span>
      </label>
      <div className="flex">
        {isEditing ? (
          <ActionButton
            icon={ConfirmIcon}
            handleClick={() => inputRef.current.blur()}
          />
        ) : (
          <ActionButton
            icon={EditIcon}
            handleClick={() => setIsEditing(true)}
          />
        )}
        <ActionButton
          icon={TrashCanIcon}
          handleClick={() => handleDeletion(id)}
        />
      </div>
    </motion.li>
  );
}
