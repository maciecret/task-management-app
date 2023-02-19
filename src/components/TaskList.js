// LIST TASK ADDED THROUGH MAPPING

import React from 'react'
import TaskItem from './TaskItem';

export default function TaskList() {

    let tasks = [{id: 1, taskName: "cook dinner", status: false}];
  return (
    <>
        <div className='row justify-content-center'>
            {tasks.map((task, index) =>{
                return(
                    <TaskItem
                    key = {index}
                    task = {task}
                    taskName = {task.taskName}
                    status = {task.status}></TaskItem>


                )
            }
            )}
        </div>
        
    </>
  )
}
