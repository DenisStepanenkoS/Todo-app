import {configureStore} from "@reduxjs/toolkit";
import TaskReducer from './Slices/todoList';

const store = configureStore({reducer:{ 
    tasksList: TaskReducer,
}});

export default store;
