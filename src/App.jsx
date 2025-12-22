import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './App.css'
import ResortDate from './Api/ResortDate'
import Header from './Common/Header'
import Login from './Common/Login'
import SignUp1 from './Page/SignUp1'
import SignUp2 from './Page/SignUp2'
import SignUp3 from './Page/SignUp3'
import Room from './Page/Room'
import Main from './Page/Main'
import Detail from './Page/Detail'
import Footer from './Common/Footer'
import Guest from './Page/Guest'
import Pay from './Page/Pay'
import HelpCenter from './Page/HelpCenter'

function App() {

  return (
   
      <ResortDate>
         <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup1' element={<SignUp1 />}/>
            <Route path='/signup2' element={<SignUp2 />}/>
            <Route path='/signup3' element={<SignUp3 />}/>
            <Route path='/' element={<Main />} />
            <Route path='/room' element={<Room  />} />
            <Route path='/detail/:id' element={<Detail />}/>  
            <Route path='/guest' element={<Guest />}/>  
            <Route path='/pay' element={<Pay />}/>  
            <Route path='/helpCenter' element={<HelpCenter />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ResortDate> 
  )
}

export default App
