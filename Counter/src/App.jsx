import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(5);//hook is usestate

  let addValue = ()=>{
    console.log("clicked",counter);
    setCounter(counter + 1);
  }
  let remValue = ()=>{
    console.log("clicked",counter);
    setCounter(counter - 1);
  }
  return (
    <>
     
     <h1>Counter Value: {counter}</h1>

     <button onClick={addValue}>Add value </button>
     <br />
     <button onClick={remValue}>Remove value</button>
      
    </>
  )
}

export default App
