import { useState} from "react";
import Conteiner from "./Conteiner";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
export const Display = ()=>{
    
const [todoTask, setTodoTask]= useState([]);
const [newTask, setNewTask]= useState("");

const changemet= (event)=>{
 
  setNewTask(event.target.value)
}
const ajout=()=>{
  // const newData=[...todoTask,newTask];
  if (newTask === "") return
    

  const task ={
    id: todoTask.length === 0 ? 1: todoTask[todoTask.length - 1].id + 1,
    taskName: newTask,
    completed:false
  }
setTodoTask([...todoTask,task]);

}
const deleteTask=(taskname)=>{
   const newTodoList = todoTask.filter(({id})=> id !== taskname);
   setTodoTask(newTodoList)
}
const completedTask =(id)=>{
const newTodolistWithCompletedTask= todoTask.map((task)=>{
  if(task.id === id){
    return { ...task, completed:true}
  }else{
    return task
  }
})
setTodoTask(newTodolistWithCompletedTask)
}
return(
  <>
    <InputGroup className="mt-3 w-50 mx-auto"   onChange={changemet}>
    <Form.Control
      placeholder="New Task"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <Button variant="outline-secondary" className='btn btn-success text-white' onClick={ajout} id="button-addon2">
      ajouter
    </Button>
  </InputGroup>
    {todoTask.map(({taskName ,id,completed})=>{
     return  <Conteiner taskDisplay={taskName} deleteTask={deleteTask} completedTask={completedTask} completed={completed} id={id}/>
    })}
  
  </>

)
}