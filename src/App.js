
import './App.css';
import {NavBar} from "./components/NavBar";
import Singleplayer from './pages/Singleplayer';
import Multiplayer from './pages/Multiplayer';
import Highscores from './pages/Highscores';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignIn from './pages/SignIn';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { GameLobby } from './pages/GameLobby';

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
      <Route path="/login" element={<LogIn />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/gamelobby/:gameID" element={<GameLobby />} />
     </Routes>
     </Router>
    </div>
  );
}

export default App;
