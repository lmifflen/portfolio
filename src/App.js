import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Introduction from './components/Introduction';
import Landing from './pages/Landing';

function App() {
  return (
    <div className="App">
     Luke's portfolio website
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Landing />} />
      </Routes>
     </BrowserRouter>
  
    </div>
  );
}

export default App;
