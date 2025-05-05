import { useState } from "react";

export default function Task({ children, index }) {
  const [isChecked, setIsChecked] = useState(false);

  function handleChange() {
    setIsChecked((prev) => !prev);
    console.log(isChecked);
  }

  return (
    <li
      key={index}
      className="mb-5 ml-8 mr-8 lg:w-230 sm:w-150 rounded-2xl bg-neutral-900 hover:bg-neutral-800"
    >
      <label className="flex p-[1.8em] gap-7 w-full rounded-2xl cursor-pointer text-sm sm:text-1xl lg:text-2xl">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          className="appearance-none h-6 w-6 border-2 border-violet-400 rounded-lg checked:bg-violet-400 checked:border-transparent focus:outline-none"
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
