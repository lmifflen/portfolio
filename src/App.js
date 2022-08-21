import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.scss';
import About from './components/About/About';
import Intro from './components/Intro/Intro';


function App() {
  return (
    <div className="App">
    
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Intro />} />
     <Route path="/about" element={<About />} />
      </Routes>
     </BrowserRouter>
  
    </div>
  );
}

export default App;
