// naming convention is reason for using slice so that others know rtk is being used
// nanoid generates new id

import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1,
        text: "hello!"
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // state - values available at present 
        // action - gives value/data to act upon
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                inputType: "Add todo"
            }
            state.todos.push(todo) // acessing the state
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => {
                todo.id !== action.payload
            })
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                todo.id === action.payload.id ? todo.text = action.payload.text : todo
            })
        }
    }
})


export const {addTodo, removeTodo, updateTodo} = todoSlice.actions //we need individual ones for components

export default todoSlice.reducer //list of reducer