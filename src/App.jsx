import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./pages/home/home";
import About from "./pages/about/about";
import Email from "./pages/email/email";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Email" element={<Email />} />
          <Route  />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
