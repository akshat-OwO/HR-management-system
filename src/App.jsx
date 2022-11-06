import { useEffect } from "react"
import { useState } from "react"
import Navbar from "./components/Navbar"
import NewTask from "./components/NewTask"
import Sidebar from "./components/Sidebar"
import TaskList from "./components/TaskList"
import Tasks from "./components/Tasks"

function App() {

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

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
      <NewTask />
      {loading && <TaskList todos={todos} />}
    </div>
  )
}

export default App