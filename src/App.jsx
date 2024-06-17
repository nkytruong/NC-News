import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './Components/Container';
// import NavBar from './Components/NavBar'

import './index.css'

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/*" element={<Container/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
