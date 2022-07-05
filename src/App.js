
import './App.css';
import {Button} from "./components/Button";
import Singleplayer from './pages/Singleplayer';
import Multiplayer from './pages/Multiplayer';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/singleplayer" element={<Singleplayer />} />
      <Route path="/multiplayer" element={<Multiplayer />} />
     </Routes>
     </Router>
    </div>
  );
}

export default App;
