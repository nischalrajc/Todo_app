import React,{useState} from 'react'
import './Todo.css'


function Todo() {

const [values,setValues]=useState("")
const [todos,setTodos]=useState([])

// useEffect(()=>{

// },[todos])

const addItems=(event)=>{
  event.preventDefault()
  setTodos([...todos,values])
  setValues("");
}

const removeItems=(index)=>{
  const newTodo=[...todos]
  newTodo.splice(index,1)
  console.log(newTodo)
  setTodos(newTodo)
}

  return (
    <div className='todo-container'>

      <form className='input-section' onSubmit={addItems}>
       <h1>Todo App</h1>
        <input type='text' value={values} placeholder='Enter Items...' onChange={
          (e)=>{
            setValues(e.target.value)
          }
        } ></input>
      </form>

      <ul>
        {
          todos.map((data,index)=>(

           <li key={index}>{data} <i className="fa-solid fa-trash-can" onClick={()=>removeItems(index)}></i>
           {console.log(data)}
           </li>
          ))
        }
      </ul>

    </div>
  )
}

export default Todo
