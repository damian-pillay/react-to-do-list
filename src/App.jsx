import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTaskButton from "./components/AddTaskButton";

function App() {
  return (
    <>
      <Header />
      <main>
        <TaskList />
        <AddTaskButton />
      </main>
    </>
  );
}

export default App;
