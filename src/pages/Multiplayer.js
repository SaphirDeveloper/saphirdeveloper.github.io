import React from "react";
import {Button} from "../components/Button";
import {useNavigate} from "react-router-dom";

function Multiplayer() {
    let navigate = useNavigate();
    return (
        <div className="Multiplayer">
        <h1> Du hast auf Multiplayer geklickt</h1>
        <Button buttonStyle="btn--success--solid" buttonSize="btn--large" onClick={ () => {navigate("../home"); }}>Home</Button>
         </div>
    );
}

export default Multiplayer;