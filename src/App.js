import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Introduction from './components/Introduction';

function App() {
  return (
    <div className="App">
     Luke's portfolio website
     <BrowserRouter>
     <Routes>
     <Introduction path="/" />
      </Routes>
     </BrowserRouter>
  
    </div>
  );
}

export default App;
