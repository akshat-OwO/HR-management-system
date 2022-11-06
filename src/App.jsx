import { useEffect } from "react"
import { useState } from "react"
import AddTask from "./components/AddTask"
import Navbar from "./components/Navbar"
import NewTask from "./components/NewTask"
import Sidebar from "./components/Sidebar"
import TaskList from "./components/TaskList"
import Tasks from "./components/Tasks"

function App() {

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://gorest.co.in/public/v2/todos');
      const json = await response.json();
      setTodos(json);
      setLoading(true);
    }
    getData();
  }, [setTodos]);

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Tasks />
      <NewTask setIsAdding={setIsAdding} />
      {loading && <TaskList todos={todos} />}
      {isAdding && <AddTask setIsAdding={setIsAdding} />}
    </div>
  )
}

export default App