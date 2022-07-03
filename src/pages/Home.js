import React from "react";
import './Home.css';
import {Button} from "../components/Button";
import {useNavigate} from "react-router-dom";

function Home() {
    let navigate = useNavigate();
    return (
        <div className="Home">
        <h1> Type Speed Duel</h1>
        <Button buttonStyle="btn--primary--solid" buttonSize="btn--large" onClick={ () => {navigate("/singleplayer"); }}>Einzelspielermodus</Button>
        <Button buttonStyle="btn--success--solid" buttonSize="btn--large">Mehrspielermodus</Button>
         </div>
    );
}

export default Home;