//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ResortDate from './Api/ResortDate'
import Room from './Page/Room'
import Main from './Page/Main'
import Detail from './Page/Detail'


function App() {
  

  return (
    <BrowserRouter>
      <ResortDate>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/detail/:id' element={<Detail />}/>
          <Route path='/room' element={<Room />}/>
        </Routes>
      </ResortDate>
    </BrowserRouter>
  )
}

export default App
