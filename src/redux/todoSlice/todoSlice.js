import { createSlice, isAsyncThunkAction } from '@reduxjs/toolkit'


const initialState={
    todolist:[
        {
            id:Math.random(),
            title:"todo item 1",
            description:"description todo item 1",
            isDone:false,
        },
        {
            id:Math.random(),
            title:"todo item 2",
            description:"description todo item 2",
            isDone:false,
        },
        {
            id:Math.random(),
            title:"todo item 3",
            description:"description todo item 3",
            isDone:true,
        },
    ]
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {

    addTask: (state, action) => {
    state.todolist.push(action.payload);
    console.log(action);
    },
    

    RemoveTask: (state, action) => {
    state.todolist=state.todolist.filter((el)=>el.id!==action.payload.id)
    },
    
doneTask: (state, action) => {
   let i=state.todolist.findIndex((el=>el.id===action.payload.id))
   state.todolist[i]={...state.todolist[i],isDone:!state.todolist[i].isDone}
    },
  
  EditTask: (state, action) => {
   let i=state.todolist.findIndex((el=>el.id===action.payload.id))
   state.todolist[i]={...state.todolist[i],title:action.payload.title?action.payload.title:state.todolist[i].title,description:action.payload.description?action.payload.description:state.todolist[i].description}
    },
}}); 

export const { addTask,RemoveTask,doneTask,EditTask} = todoSlice.actions;

export default todoSlice.reducer