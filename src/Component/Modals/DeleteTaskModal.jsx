import React from 'react';
import './Modal.css'

const DeleteTaskModal = ({task, onClose, onDeleteTask}) => {
  const closeDelete = () => {

  }
  return (
    <div className='modal'>
        <div className='modalContent'>
            <p>Are you sure you want to delete this task?</p>
            <div className='buttons'>
                <button className='deleteBtn'>Delete</button>
                <button className='cancelBtn'  onClick={onClose}>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default DeleteTaskModal;