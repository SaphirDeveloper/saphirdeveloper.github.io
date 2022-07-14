import React from "react";
import {Button} from "../components/Button";
import {useNavigate} from "react-router-dom";

const url = 'https://gruppe3.toni-barth.com/';




function Singleplayer() {
    let navigate = useNavigate();
    return (
        <div className="Singleplayer">
        <h1>Singleplayer</h1>
        <Button buttonStyle="btn--success--solid" buttonSize="btn--medium" onClick={ () => {navigate("../home"); }}>Home</Button>
         </div>
    );
}

export default Singleplayer;