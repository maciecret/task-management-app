import React from 'react'

export default function TaskItem({task}) {
  return (
    <div>
       
        <p class="card-text">{task.taskName}</p>
    
    </div>
  )
}
