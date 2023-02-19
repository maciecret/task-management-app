import React, { useState } from 'react'

export default function Taskform() {

    const[inputs, setInputs] = useState([])

    // -- ADD TASK FUNCTION -- //

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(inputs);
    }

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values,[name]: value}))
        
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div style={{display: "flex", justifyContent: "space-between", gap: "2%"}}>
          <input
            type="text"
            className="form-control form-control-sm"
            name= "task"
            value= {inputs.task || ""}
            onChange={handleChange}
          />
          <button className="btn btn-primary btn-block"  
          style = {{backgroundColor: "#86a4ba", border: "none"}}>+</button>
        </div>
        </form>
    </div>


  )
}
