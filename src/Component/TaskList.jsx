import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import "react-confirm-alert/src/react-confirm-alert.css";
import './TaskList.css'
import DeleteTaskModal from './Modals/DeleteTaskModal';
import EditTaskModal from './Modals/EditTaskModal';
import AddTaskModal from './Modals/AddTaskModal';

const taskData = [
    {
        id: 1,
        task: 'Go to gym',
        priority: 'High',
        status: 'Todo'
    },
    {
        id: 2,
        task: 'Read a book',
        priority: 'Low',
        status: 'Done'
    },
    {
        id: 3,
        task: 'Go to market',
        priority: 'Medium',
        status: 'In Progress'
    },
    {
        id: 4,
        task: 'Restart Learnig solidworks',
        priority: 'High',
        status: 'Todo'
    },
    {
        id: 5,
        task: 'Change slider to scroll',
        priority: 'Low',
        status: 'Done'
    },
    {
        id: 6,
        task: 'To publish the article',
        priority: 'Medium',
        status: 'In Progress'
    }
]

const TaskList = () => { 
    const [task, setTask] = useState(taskData);
    const [filteredTask, setFilteredTask] = useState(taskData);
    const [isDeleteTaskModalaOpen, setIsDeleteTaskModalOpen] = useState(false);
    const [isEditTaskModalaOpen, setIsEditTaskModalOpen] = useState(false);
    const [isAddTaskModalaOpen, setIsAddTaskModalOpen] = useState(false);
    const [selectedModal, setSelectedModal] = useState('');
    const [selectedTask, setSelectedTask] = useState(null);

    
  const handleDelete = (taskId) => {
    const updatedTask = task.filter((task) => task.id !== taskId);
    setTask(updatedTask);
    const updatedFilterTask = filteredTask.filter((task) => task.id !== taskId);
    setFilteredTask(updatedFilterTask);
  };

  const handleDeleteTaskModalOpen = (task) => {
    setSelectedTask(task);
    setIsDeleteTaskModalOpen(true);
  };

  const handleDeleteTaskModalClose = () => {
    setIsDeleteTaskModalOpen(false);
    setSelectedModal("");
    setSelectedTask(null);
  };

  const handleEditTaskModalOpen = (task) => {
    setSelectedTask(task);
    setIsEditTaskModalOpen(true);
  };

  const handleEditTaskModalClose = () => {
    setIsEditTaskModalOpen(false);
    setSelectedModal("");
    setSelectedTask(null);
  };

  const handleAddTaskModalOpen = () => {
    setIsAddTaskModalOpen(true);
  };

  const handleAddTaskModalClose = () => {
    setIsAddTaskModalOpen(false);
    setSelectedModal("");
  };

  const handleModalSelect = (modalType) => {
    setSelectedModal(modalType);
  };

  const handleAddTask = (newTaskData) => {
      try {
          setTask((prevTask) => [...prevTask, newTaskData])
    } catch (error) {
        console.error('Failed to add task', error);
    }
}

const handleUpdateTask = (updatedTaskData) => {
    try {
        setTask((prevTask) => prevTask.map((task) => task._id === updatedTaskData._id ? updatedTaskData : task))
    } catch (error) {
        console.error('Failed to edit task', error);
    }
    
}

const handleDeleteTask = async (id) => {
    try {
        setTask((prevTask) => prevTask.filter((task) => task._id !== id))
    } catch (error) {
        console.error('Failed to delete task', error);
    }
}

  return (
    <div className='taskPage'>
       <div className='taskCon'>
       <div className="taskHeader">
            <h1>Task List</h1>
            <button className='addTaskBtn' onClick={() => handleAddTaskModalOpen()}><IoMdAdd color='white' size={25}/> Add Task</button>
        </div>
        <div className="taskBody">
            {taskData.map((task, index) => (
                <div key={index} className="tasks">
                    <div className="taskParagraphs">
                        <p className='task'>Task</p>
                        <p>{task.task}</p>
                    </div>
                    <div className="priority">
                        <p className='pri'>Priority</p>
                        <p className={task.priority === 'High' ? 'high' : '' || task.priority === 'Low' ? 'low' : '' || task.priority === 'Medium' ? 'medium' : ''}>{task.priority}</p>
                    </div>
                    <div className="taskButton">
                        <button>{task.status}</button>
                    </div>
                    <div className="iconLoader">
                    <div className={task.status === 'Todo' ? 'todo' : '' || task.status === 'In Progress' ? 'progress' : '' || task.status === 'Done' ? 'done' : ''}></div>
                    {/* <LuLoader2 size={25} color='#723eff' className='icon'/> */}
                    </div>
                    <div className="modalIcons">
                    <BiEdit size={25} className='icon' onClick={() => handleEditTaskModalOpen(task)}/>
                    <RiDeleteBinLine color='red' onClick={() => handleDeleteTaskModalOpen(task)} size={25} className='icon'/>
                    </div>
                </div>
            ))}
        </div>
        {isDeleteTaskModalaOpen && (<DeleteTaskModal onDeleteTask={handleDeleteTask} onClose={handleDeleteTaskModalClose} task={setSelectedTask}/>)}
        {isEditTaskModalaOpen && (<EditTaskModal onEditTask={handleUpdateTask} onClose={handleEditTaskModalClose} task={setSelectedTask}/>)}
        {isAddTaskModalaOpen && (<AddTaskModal onAddTask={handleAddTask} onClose={handleAddTaskModalClose}/>)}
       </div>
       {/* <div class="loade"></div> */}
    </div>
  )
}

export default TaskList