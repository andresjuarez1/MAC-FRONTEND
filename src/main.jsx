import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './login'
import Register from './register'
import Home from './home'
import History from './history'
import Contamination from './contamination'
import Pronostico from './pronostico'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/contamination' element={<Contamination />} />
        <Route path='/history' element={<History />} />
        <Route path='/pronostico' element={<Pronostico />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
