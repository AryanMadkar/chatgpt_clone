import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import MainScreen from './components/main/MainScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Sidebar/>
     <MainScreen/>
    </>
  )
}

export default App
