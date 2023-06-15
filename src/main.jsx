import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './login'
import Register from './register'
import Home from './home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
      </Routes>    
    </BrowserRouter>

  </React.StrictMode>,
)
