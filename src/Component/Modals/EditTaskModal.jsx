import React from 'react'
import { IoClose } from "react-icons/io5";
import './Modal.css'
import '../TaskList.css'

const EditTaskModal = ({task, onClose, onEditTask}) => {
  return (
    <div className='modal'>
    <div className='modalheight'>
        <div className="taskEdit">
            <p>Edit Task</p>
            <IoClose size={25} className='icon'  onClick={onClose}/>
        </div>
        <div className="taskInput">
            <p className='taskText'>Task</p>
            <input type="text" className='input' placeholder='Placeholder'/>
        </div>
        <div className="taskInput">
            <p className='taskText'>Priority</p>
            <div className="taskButtons">
                <button className='high'>High</button>
                <button className='medium'>Medium</button>
                <button className='low'>Low</button>
            </div>
        </div>
        <div className="left">
            <button className='deleteBtn'>Edit</button>
        </div>
    </div>
</div>
  )
}

export default EditTaskModal