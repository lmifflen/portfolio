import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.scss';
// import About from './components/About/About';
// import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home />} />
     {/* <Route path="/about" element={<About />} /> */}
      </Routes>
     </BrowserRouter>
  
    </div>
  );
}

export default App;
