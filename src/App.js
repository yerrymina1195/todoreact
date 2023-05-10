import { useState, useEffect} from "react";
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

const [todoTask, setTodoTask]= useState([]);
const [newTask, setNewTask]= useState("");
const changemet= (event)=>{
  setNewTask(event.target.value)
}
const ajout=()=>{
  const newData=[...todoTask,newTask];
setTodoTask(newData);

}

  return (
    <div className="App">
      <h1 className='bg-primary text-white'>TODO AVEC REACT</h1>
      <InputGroup className="mt-3 w-50 mx-auto" onChange={changemet}>
        <Form.Control
          placeholder="New Task"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" className='btn btn-success text-white' onClick={ajout} id="button-addon2">
          ajouter
        </Button>
      </InputGroup>
      <div>
        {todoTask.map((element)=>{
         return  <div className=" bg-warning my-3"><h1>{element}</h1></div>
        })}
      </div>
    </div>

  );
}

export default App;
