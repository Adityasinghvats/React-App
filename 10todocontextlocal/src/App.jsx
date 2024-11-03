import { useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'

function App() {
  const [todos, setTodo] = useState([])

  const addTodo = (todo) =>{
    // as we dont want to dlt the previous added value 
    setTodo((prev) => [{id: Date.now(),...todo},...prev])//adding the new todo acc to req from start
  }

  const updateTodo = (id, todo) => {
    setTodo((prev)=> prev.map((prevTodo) => (
      prevTodo.id === id ? todo : prevTodo
    )))
  }

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((prevTodo) => prevTodo.id !== id))//keep all except one that matches the id
  }
  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                        {/* Todo form goes here */} 
              </div>
              <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
              </div>
        </div>
      </div> 
    </TodoProvider>
  )
}

export default App
