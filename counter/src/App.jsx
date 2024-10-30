import { useState } from 'react'
import './App.css'

function App() {

  const [Counter, setCounter] = useState(0)

  // let Counter = 5

  const addValue = () => {
    console.log("Value added", Math.random())
    setCounter(Counter+1)
  }

  const decValue = () => {
    if(Counter>0){
      setCounter(Counter-1)
    }
  }

  return (
    <>
      <h1 className='bg-slate-400 p-4 rounded-lg mb-4 text-black'>Chai aur react</h1>
      <h2 className='mb-4'>Counter value: {Counter}</h2>
      <button className='mb-4' onClick={addValue}>Add value</button>
      <br />
      <button onClick={decValue}>Remove value</button>
    </>
  )
}

export default App
