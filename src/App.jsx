import { useState } from 'react'
import './App.css'
import ToDoApp from "./Components/ToDoApp"

function App() {
  const [count, setCount] = useState(0)

  return (
  <ToDoApp></ToDoApp>
  )
}

export default App;
