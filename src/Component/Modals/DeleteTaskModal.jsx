import React, { useState } from 'react';
import './Modal.css'

const DeleteTaskModal = ({tasks, onClose, onDeleteTask, taskData}) => {
  // const [task, setTask] = useState(taskData)
  
  
  return (
    <div className='modal'>
        <div className='modalContent'>
            <p>Are you sure you want to delete this task?</p>
            <div className='buttons'>
                <button className='deleteBtn' onClick={onDeleteTask()}>Delete</button>
                <button className='cancelBtn'  onClick={onClose}>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default DeleteTaskModal;