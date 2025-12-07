import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import ResortDate from './Api/ResortDate'
import Room from './Page/Room'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Room />
    </>
  )
}

export default App
