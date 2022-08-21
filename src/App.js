import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.scss';
import Intro from './components/Intro';


function App() {
  return (
    <div className="App">
     Luke's portfolio website
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Intro />} />
      </Routes>
     </BrowserRouter>
  
    </div>
  );
}

export default App;
