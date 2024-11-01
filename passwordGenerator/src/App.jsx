import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberallowed, setNumberallowed] = useState(false);
  const [charallowed, setCharallowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGen = useCallback(() => {
    // used memoization to cache using useCallback hook
    // useCallback is a React Hook that lets you cache a function definition between re-renders.
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopwxyz"

    if(numberallowed) str += "0123456789"
    if(charallowed) str += "~!@#$%^&*"

    for(let j=1;j <= length; j++){
      let charIdx = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(charIdx)
    }
    setPassword(pass)//update state

  }, [length, numberallowed, charallowed, setPassword]) // callback, [dependency array]

  useEffect(() => { //runs on page load and run again when any value of dependency is changed
    passwordGen()
  } , [length, numberallowed, charallowed, passwordGen])

  //useRef is used when we want a refernece
  const passwordRef = useRef(null)

  const copyPasswordtoClipboard = useCallback(() => {
    //nextjs me ssr k wjh se window object nhi hota hain
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(password)
  },[password, length])

  return (
    <>
    
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg my-8 px-4 bg-gray-500'>
     <h4 className='text-2xl text-center text-white my-3'>Password Generator</h4>
        <div className='flex overflow-hidden mb-4 pb-4'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3 rounded-xl mx-2'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button 
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-lg hover:bg-blue-900'
          onClick={copyPasswordtoClipboard}
          >Copy</button>
        </div>
        <div className='flex text-sm gap-2 pb-4'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>length : {length}</label>
          </div>
          <div>
            <input 
            type="checkbox"
            value={numberallowed}
            onChange={() => setNumberallowed((prev) => !prev  )} 
            className='mx-2'
            />
            <label> Numbers</label>
          </div>
          <div>
            <input 
            type="checkbox"
            value={charallowed}
            onChange={() => setCharallowed((prev) => !prev)} // to change the next event to opposite of prev event on click
            className='mx-2'
            />
            <label> Characters</label>
          </div>
        </div>
    </div>
    </>
  )
}

export default App
