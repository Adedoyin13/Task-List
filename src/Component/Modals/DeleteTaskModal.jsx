import React from 'react';
import './Modal.css'

const DeleteTaskModal = () => {
  return (
    <div className='modal'>
        <div className='modalContent'>
            <p>Are you sure you want to delete this task?</p>
            <div className='buttons'>
                <button className='deleteBtn'>Delete</button>
                <button className='cancelBtn'>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default DeleteTaskModal;