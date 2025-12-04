import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Detail from './Page/Detail'
import { Routes, Route } from 'react-router-dom';
import ResortDataProvider from './Api/ResortDate';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <ResortDataProvider>
        <Routes>
          <Route path='/detail' element={<Detail />}></Route>
        </Routes>
      </ResortDataProvider>
    </>
  )
}

export default App
