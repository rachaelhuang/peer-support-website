import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import GetInvolved from "./pages/getinvolved.jsx";
import MentalHealthResources from './pages/mentalhealthresources.jsx';
import NotFound from './pages/notfound.jsx';
import './App.css'
import Layout from './components/Layout.jsx';

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
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
    
  )
}

export default App
