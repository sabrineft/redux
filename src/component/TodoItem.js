import React from 'react'
import { useDispatch } from 'react-redux'
import { doneTask, RemoveTask } from '../redux/todoSlice/todoSlice';
import Edit from './Edit';


export const TodoItem = ({todo}) => {
  const dispatch=useDispatch();
  return (
    <div className={`todo-item ${todo.isDone?  "done":"undone"}`}>
      <div className='text'><h2>{todo.title}</h2>
      <p>{todo.description}</p></div>
      <span  onClick={()=>dispatch(doneTask({id:todo.id}))}>{todo.isDone?"Done":"Not Done"}</span>
<Edit id={todo.id} /> 


      <button onClick={()=>dispatch(RemoveTask({id:todo.id}))}>Remove</button>
      
    </div>
  )
}

export default TodoItem