import React from 'react'

import Taskform from '../components/Taskform'
import TaskList from '../components/TaskList'

export default function Home() {
  return (
    <div style = {{marginTop: "5%", color: "white"}}>
    <div class="row">  
        <div className="col-md-10 mx-auto shadow p-5 bg-dark">
            <h2 className="text-center mb-4">My Task List</h2>
            <Taskform/>
            <TaskList/>
        </div>
    </div>
    </div>  
        
    
  )
}
