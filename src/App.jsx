import Navbar from "./components/Navbar"
import NewTask from "./components/NewTask"
import Sidebar from "./components/Sidebar"
import Tasks from "./components/Tasks"

function App() {

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Tasks />
      <NewTask />
    </div>
  )
}

export default App