import { useState,useEffect } from 'react'
import './App.css'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'


function App() {
 
  
 

  return (
   <>
<div className='main min-h-screen w-full'>


 <Routes>

  <Route path='/' element={<Home/>}/>
  
 </Routes>
 
</div>
 
   </>
  )
}

export default App
