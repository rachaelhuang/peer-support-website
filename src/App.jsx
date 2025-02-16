import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar.jsx";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/getinvolved" element={<h1>Get Involved</h1>} />
        <Route path="/mentalhealthresources" element={<h1>Mental Health Resources</h1>} />
      </Routes>
    </Router>
    
  )
}

export default App
