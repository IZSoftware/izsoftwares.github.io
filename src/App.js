import './App.css';
import IzConstruction from './pages/construction/IzConstruction';
import CountdownTimer from './pages/construction/CountdownTimer';
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<IzConstruction />} />
        <Route path="/live" element={<CountdownTimer />} />
      </Routes>
      
    </div>
  );
}

export default App;
