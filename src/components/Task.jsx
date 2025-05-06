import { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";

export default function Task({ children, id, handleInputConfirmation }) {
  const [isChecked, setIsChecked] = useState(false);
export default function Task({
  children,
  id,
  handleInputConfirmation,
  checkState,
  handleCheckState,
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

  function handleKeyDown(e) {
    if (e.key === "Enter" || e.key === "Escape") {
      e.target.blur();
    }
  }

  return (
    <motion.li
      key={id}
      initial={{ opacity: 0, y: -20 }}
      animate={controls}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="mb-5 ml-8 mr-8 lg:w-230 sm:w-150 rounded-2xl bg-neutral-900 hover:bg-neutral-800"
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
    </motion.li>
  );
}
