import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {


  return (
    <UserContextProvider>
     <h1>hello in the world of context api</h1>
     <Login />
     <Profile />
    </UserContextProvider>
  )
}

export default App
