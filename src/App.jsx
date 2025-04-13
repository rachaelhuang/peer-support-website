import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import GetInvolved from "./pages/getinvolved.jsx";
import MentalHealthResources from './pages/mentalhealthresources.jsx';
import './App.css'
import Layout from './layouts/Layout.jsx';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/getinvolved" element={<GetInvolved />} />
          <Route path="/mentalhealthresources" element={<MentalHealthResources />} />
        </Route>
      </Routes>
    </Router>
    
  )
}

export default App
