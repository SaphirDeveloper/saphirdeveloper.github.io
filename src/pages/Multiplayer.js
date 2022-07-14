import React from "react";
import {Button} from "../components/Button";
import {useNavigate} from "react-router-dom";
import {GamesTable} from "../components/GamesTable"
import { getCookie } from "../extras/cookies";

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

async function createGame(navigate) {
    let owner = getCookie("id");
    if (owner != "") {
        await fetch(url + 'games/', {method: 'POST', headers: {'Content-Type':'application/json',}, body: JSON.stringify({owner: owner})})
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    navigate("../gamelobby/" + data.id)
                })
                .catch(ex => console.error(ex));
    } else {
        navigate("../login");
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
            <h1>Multiplayer</h1>
            <Button buttonStyle="btn--success--solid" buttonSize="btn--medium" onClick={ () => {navigate("../home"); }}>Home</Button>
            <Button buttonStyle="btn--primary--solid" buttonSize="btn--medium" onClick={ async () => {createGame(navigate)}}>Raum erstellen</Button>
            <GamesTable />
        </div>
    );
}

export default Multiplayer;