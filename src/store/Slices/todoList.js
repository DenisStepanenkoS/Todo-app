import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid';
const initialState = {tasks:[]};

const sliceTaskList = createSlice({
    initialState,
    name: 'tasksList',
    reducers:{
        addTask: (state, {payload})=>{
            console.log(payload);
            state.tasks = [...state.tasks, {...payload, id:uuidv4()}] 
        },
        deleteTask: (state, {payload})=>{
            state.tasks = state.tasks.filter(task => task.id !== payload);
        },
        updateTask: (state, {payload:{data, id}})=>{
            const indexId = state.tasks.findIndex(task => task.id === id);
            state.tasks[indexId] = {...state.tasks[indexId], ...data};
        }
    }
})
const {reducer, actions} = sliceTaskList;

export const {addTask, deleteTask, updateTask} = actions;

export default reducer;
