import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './assets/components/Home';
function App() {
  return (

    <BrowserRouter>    
    {/* // <div className='text-center'>App</div> */}
     <Routes>
     <Route path='/' element={<Home /> } />


    </Routes>
    
    
    
    {/* <div>Home</div> */}
    </BrowserRouter>
  )
}

export default App