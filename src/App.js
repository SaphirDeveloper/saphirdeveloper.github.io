
import './App.css';
import {NavBar} from "./components/NavBar";
import Singleplayer from './pages/Singleplayer';
import Multiplayer from './pages/Multiplayer';
import Highscores from './pages/Highscores';
import SignIn from './pages/SignIn';
import LogIn from './pages/LogIn';
import Home from './pages/Home';
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
      <Route path="/signin" element={<SignIn />} />
      <Route path="/login" element={<LogIn />} />
     </Routes>
     </Router>
    </div>
  );
}

export default App;
