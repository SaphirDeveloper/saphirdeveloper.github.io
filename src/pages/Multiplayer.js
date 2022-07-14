import React from "react";
import {Button} from "../components/Button";
import {useNavigate} from "react-router-dom";

const url = 'https://gruppe3.toni-barth.com/';

async function createPlayer() {
    let player = prompt("Bitte Spielername eingeben");

    if (player != null && player != "") {
        fetch(url + 'players/', {method: 'POST', headers: {'Content-Type':'application/json',}, body: JSON.stringify({name: player})})
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(ex => console.error(ex)); 
    }
}

async function deletePlayer() {
    let player = prompt("Bitte Spielerid des zu löschenden Spielers eingeben");

    if (player != null && player != "") {
        fetch(url + 'players/' + player + '/', {method: 'DELETE'}).catch(ex => console.error(ex));
    }
}

async function fetchPlayers() {
    fetch(url + 'players/')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(ex => console.error(ex)); 
}

function Multiplayer() {
    let navigate = useNavigate();
    return (
        <div className="Multiplayer">
        <h1> Du hast auf Multiplayer geklickt</h1>
        <Button buttonStyle="btn--success--solid" buttonSize="btn--large" onClick={ () => {navigate("../home"); }}>Home</Button>
        <Button buttonStyle="btn--primary--solid" buttonSize="btn--large" onClick={ () => {createPlayer();}}>Neuer Spieler</Button>
        <Button buttonStyle="btn--danger--solid" buttonSize="btn--large" onClick={ () => {deletePlayer();}}>Lösche Spieler</Button>
        <Button buttonStyle="btn--warning--solid" buttonSize="btn--large" onClick={ () => {fetchPlayers();}}>Spielerliste</Button>
         </div>
    );
}

export default Multiplayer;