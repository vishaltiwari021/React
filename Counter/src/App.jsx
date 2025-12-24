import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter] = useState(5);//hook is usestate

  let addValue = ()=>{
    setCounter(prev=> (prev<20 ? prev+1 : prev));
  }
  let remValue = ()=>{
    setCounter(prev=> (prev>0 ? prev-1 : prev));
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
