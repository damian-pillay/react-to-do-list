import { useState } from "react";
import { useAnimation, motion } from "framer-motion";
import DefaultButton from "../assets/addButton.svg";
import HoveredButton from "../assets/addButtonHover.svg";
import ClickedButton from "../assets/addButtonClicked.svg";

export default function AddTaskButton({ onClick }) {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  function handleMouseEnter() {
    setIsHovering(true);
  }

  function handleMouseLeave() {
    setIsHovering(false);
  }

  function handleMouseDown() {
    setIsClicked(true);
  }

  function handleMouseUp() {
    setIsClicked(false);
  }

  let buttonIcon = DefaultButton;

  if (isHovering) {
    buttonIcon = HoveredButton;
  }

  if (isClicked) {
    buttonIcon = ClickedButton;
  }

  return (
    <>
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onClick={onClick}
        className="cursor-pointer"
      >
        <motion.img
          src={buttonIcon}
          alt="Add Task"
          className="fixed bottom-10 right-10 h-23 w-23"
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        ></motion.img>
      </button>
    </>
  );
}
