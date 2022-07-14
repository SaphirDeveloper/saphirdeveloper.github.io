
import './App.css';
import {NavBar} from "./components/NavBar";
import Singleplayer from './pages/Singleplayer';
import Multiplayer from './pages/Multiplayer';
import Highscores from './pages/Highscores';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/singleplayer" element={<Singleplayer />} />
      <Route path="/multiplayer" element={<Multiplayer />} />
      <Route path="/highscores" element={<Highscores />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
     </Routes>
     </Router>
    </div>
  );
}

export default App;
