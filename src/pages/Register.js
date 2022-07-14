import React from "react";
import {useNavigate} from "react-router-dom";
import {Textfield} from "../components/Textfield";
import {Button} from "../components/Button";

const url = 'https://gruppe3.toni-barth.com/';

async function createPlayer(playerName) {
    let player = playerName;

    if (player != null && player != "") {
        fetch(url + 'players/', {method: 'POST', headers: {'Content-Type':'application/json',}, body: JSON.stringify({name: player})})
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(ex => console.error(ex)); 
    }
}

function registerPlayer() {
    createPlayer(document.getElementById("username").value); 
}

function Register() {

    let navigate = useNavigate();

    return(
        <div className="Register">
        <h1>Neues Konto erstellen</h1>
        <form>
        <Textfield label="Benutzername:" type="text" id="username"/>
        <Textfield label="Passwort" type="password" id="password"/>
        </form>
        <Button buttonStyle="btn--success--solid" buttonSize="btn--small" onClick={ () => registerPlayer()}>Registrieren</Button>
        </div>
    );
}


export default Register;