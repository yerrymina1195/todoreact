import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
export default function Conteiner({taskDisplay,deleteTask,completedTask,id,completed}) {
  return (
    
          
      <div className={completed ? "  bg-success fez my-3 d-flex justify-content-around" :"  bg-secondary my-3 d-flex flex-wrap justify-content-around"}>
        <h1 className=''>{taskDisplay}</h1>
      <div className='my-auto'>
      <button onClick={() => completedTask(id)}  className={completed ? 'btn btn-light disabled btn-sm me-3' : 'btn btn-success btn-sm me-3'}>complete</button>
      <button onClick={() => deleteTask(id)} className='btn btn-danger rounded-pill btn-sm'>delete</button>
      </div>
      </div>
   

    
  )
}
