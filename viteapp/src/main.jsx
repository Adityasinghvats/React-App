import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// function Myapp(){
//   return (
//     <>
//     <p>Hi from Myapp</p>
//     </>
//   )
// }

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://www.google.com',
//       target: '_blank'
//   },
//   children: 'Click to visit google'
// }


const anotheruser = " aditya"
const ReactElement = React.createElement(
  'a',
  {href: 'https://www.google.com', target: '_blank'},
  'click me to go to google',
  anotheruser
)

// const AnotherEle = (
//   <a href="https://www.google.com" target='_blank'>Google</a>
// )

createRoot(document.getElementById('root')).render(

  ReactElement
  // < App />
  // <Myapp/>
  // Myapp()
  // ReactElement it wont work as it is defined to work with my custom method not
  // something react can understand
  //AnotherEle //it is rendered as its syntax is compatible with react method

)
