import { useState } from 'react'
import './App.css'
import Card from './Component/Card'


function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>tailwind</h1>\
      <Card username="mega deal"/>
      <Card username="deal on deal"/>
    </>
  )
}

export default App
