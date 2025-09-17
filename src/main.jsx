import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from "./context/AppContext.jsx";
import Navbar from './components/Navbar';
import Footer from './components/Footer.jsx';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import "./styles/theme.css";
import "./styles/global.css";   // je globale body styles (gebruik var(--bg-color))
import "./styles/Navbar.css";   // overige component css

createRoot(document.getElementById('root')).render(
  <AppProvider>
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
    </Router>
  </AppProvider>
);
