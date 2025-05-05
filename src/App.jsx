import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <Header />
      <main className="flex justify-center">
        <TaskList />
      </main>
    </>
  );
}

export default App;
