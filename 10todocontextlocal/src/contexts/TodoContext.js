import {createContext, useContext} from 'react';

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Msg",
            completed: false
        }
    ],
    // functionality will be defined in the app.jsx
    addTodo : (todo) => {},
    updateTodo : (id, todo) => {},
    deleteTod : (id) => {},
    toggleCompleted: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;