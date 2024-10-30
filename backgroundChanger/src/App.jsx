import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("#212121")

  return (
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-amber-400 px-3 py-2 rounded-xl">
              <button className='outline-none px-4 bg-red-500 rounded-xl'
              onClick={() => setColor('red')}>Red</button>
              {/* Here we are calling setColor function with parameters within callback function */}
              <button className='outline-none px-4 bg-blue-500 rounded-xl'
              onClick={() => setColor('blue')}>Blue</button>
              <button className='outline-none px-4 bg-green-500 rounded-xl'
              onClick={() => setColor('green')}>Green</button>
              <button className='outline-none px-4 bg-violet-500 rounded-xl'
              onClick={() => setColor('violet')}>Violet</button>
              <button className='outline-none px-4 bg-gray-500 rounded-xl'
              onClick={() => setColor('gray')}>Gray</button>
              <button className='outline-none px-4 bg-black rounded-xl text-white'
              onClick={() => setColor('black')}>Black</button>
              <button className='outline-none px-4 bg-white rounded-xl text-black'
              onClick={() => setColor('white')}>White</button>
            </div>
          </div>
      </div>
  )
}

export default App
