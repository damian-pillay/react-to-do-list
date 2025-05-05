import ButtonIcon from "../assets/addButton.svg";

export default function AddTaskButton() {
  return (
    <>
      <button className>
        <img
          src={ButtonIcon}
          alt="Add Task"
          className="fixed bottom-10 right-10 h-20 w-20"
        ></img>
      </button>
    </>
  );
}
