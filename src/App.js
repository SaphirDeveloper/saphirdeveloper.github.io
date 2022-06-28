
import './App.css';
import {Button} from "./components/Button";

function App() {
  return (
    <div className="App">
     <h1> Type Speed Duel</h1>
     <Button buttonStyle="btn--primary--solid" buttonSize="btn--large">Einzelspielermodus</Button>
     <Button buttonStyle="btn--success--solid" buttonSize="btn--large">Mehrspielermodus</Button>
    </div>
  );
}

export default App;
