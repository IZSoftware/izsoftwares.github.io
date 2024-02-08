import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './pages/construction/Home';
import Live from './pages/construction/Live';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/live" element={<Live />} />
      </Routes>
      
    </div>
  );
}

export default App;
