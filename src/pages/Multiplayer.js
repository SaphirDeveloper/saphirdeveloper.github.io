import React from "react";
import {Button} from "../components/Button";
import {useNavigate} from "react-router-dom";
import {Games} from "../components/Games"
import { getCookie, setCookie } from "../extras/cookies";

// API-URL
const url = 'https://gruppe3.toni-barth.com/';

// Try to create a new game
async function createGame(navigate) {
    let owner = getCookie("id");
    if (owner != "") {
        // Player is logged in
        // Create new lobby
        await fetch(url + 'games/', {method: 'POST', headers: {'Content-Type':'application/json',}, body: JSON.stringify({owner: owner})})
                .then(response => response.json())
                .then(data => {
                    // Create new cookie with game id and navigate to the new lobby
                    console.log(data);
                    setCookie("game", data.id);
                    navigate("../gamelobby/" + data.id);
                })
                .catch(ex => console.error(ex));
    } else {
        // Player is not logged in
        // Navigate to log in page
        navigate("../login");
    }
}

// A page to create or join a lobby
function Multiplayer() {
    let navigate = useNavigate();
    return (
        <div className="Multiplayer">
            <h1>Multiplayer</h1>
            <Button buttonStyle="btn--success--solid" buttonSize="btn--medium" onClick={ () => {navigate("../home"); }}>Home</Button>
            <Button buttonStyle="btn--primary--solid" buttonSize="btn--medium" onClick={ async () => {createGame(navigate)}}>Raum erstellen</Button>
            <Games navigate={navigate} />
        </div>
    );
}

export default Multiplayer;