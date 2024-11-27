import { Route, Routes } from 'react-router-dom'
import './App.css'
import AddTaskModal from './Component/Modals/AddTaskModal'
import DeleteTaskModal from './Component/Modals/DeleteTaskModal'
import EditTaskModal from './Component/Modals/EditTaskModal'
import TaskList from './Component/TaskList'

function App() {
  return (
    <>
      <TaskList/>
    </>
  )
}

export default App
