import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { LuLoader2 } from "react-icons/lu";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import './TaskList.css'
import DeleteTaskModal from './Modals/DeleteTaskModal';

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
    const [task, setTask] = useState(taskData)
    const [filteredTask, setFiltetedTask] = useState(taskData);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedModal, setSelectedModal] = useState("");
    const [selectedTask, setSelectedTask] = useState(null);

    const handleModalOpen = (task) => {
        setSelectedTask(task);
        setIsModalOpen(true);
    };
    
    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedModal("");
        setSelectedTask(null);
    };

    const handleDelete = (taskId) => {
        const updatedTask = task.filter((task) => task.id !== taskId);
        setTask(updatedTask);
        const updatedFilterTask = filteredTask.filter((task) => task.id !== taskId);
        setFiltetedTask(updatedFilterTask);
    };

    
  return (
    <div className='taskPage'>
       <div className='taskCon'>
       <div className="taskHeader">
            <h1>Task List</h1>
            <button className='addTaskBtn'><IoMdAdd color='white' size={25}/> Add Task</button>
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
                    <div class="loader"></div>
                    {/* <LuLoader2 size={25} color='#723eff' className='icon'/> */}
                    </div>
                    <div className="modalIcons">
                    <BiEdit size={25} className='icon'/>
                    <RiDeleteBinLine color='red' size={25} className='icon'/>
                    </div>
                </div>
            ))}
        </div>
       </div>
    </div>
  )
}

export default TaskList