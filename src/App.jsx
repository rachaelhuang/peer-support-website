import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import GetInvolved from "./pages/getinvolved.jsx";
import MentalHealthResources from './pages/mentalhealthresources.jsx';
import NotFound from './pages/notfound.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/getinvolved" element={<GetInvolved />} />
            <Route path="/mentalhealthresources" element={<MentalHealthResources />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
