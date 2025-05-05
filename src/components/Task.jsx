import { useState } from "react";

export default function Task({ children, index }) {
  const [isChecked, setIsChecked] = useState(false);

  function handleChange() {
    setIsChecked((prev) => !prev);
    console.log(isChecked);
  }

  const listStyling = "mb-4 w-158 rounded-2xl bg-neutral-900";
  const labelStyling =
    "flex p-7 gap-7 w-full rounded-2xl cursor-pointer sm:text-1xl lg:text-lg";
  const checkboxStyling =
    "appearance-none h-6 w-6 border-2 border-violet-400 rounded-lg checked:bg-violet-400 checked:border-transparent focus:outline-none";

  return (
    <li key={index} className={listStyling}>
      <label className={labelStyling}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          className={checkboxStyling}
        />
        <span
          className={`select-none ${
            isChecked ? "line-through text-gray-500" : ""
          }`}
        >
          {children}
        </span>
      </label>
    </li>
  );
}
