import React from "react";
import {Button} from "../components/Button";
import {useNavigate} from "react-router-dom";

function Singleplayer() {
    let navigate = useNavigate();
    return (
        <div className="Singleplayer">
        <h1> Du hast auf Singleplayer geklickt</h1>
        <Button buttonStyle="btn--success--solid" buttonSize="btn--large" onClick={ () => {navigate("../home"); }}>Home</Button>
         </div>
    );
}

export default Singleplayer;