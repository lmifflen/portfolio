import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './app.scss';
import './App.css';
import Contact from './components/Contact/Contact';
// import About from './components/About/About';
// import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
 
     <BrowserRouter>
     <Navbar></Navbar>
     <Routes>
     <Route path="/" element={<Home />} />
     {/* <Route path="/about" element={<About />} /> */}
     <Route path="/contact" element={<Contact />} />
      </Routes>
     </BrowserRouter>
  
    </div>
  );
}

export default App;
