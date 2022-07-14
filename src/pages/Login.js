import React from "react";
import {useNavigate} from "react-router-dom";
import {Textfield} from "../components/Textfield";
import {Button} from "../components/Button";

const url = 'https://gruppe3.toni-barth.com/';

function Login() {

    let navigate = useNavigate();
    let loggedPlayer; 
    
    return(
        <div className="Login">
        <h1>Anmeldung</h1>
        <form>
        <Textfield label="Benutzername:" type="text" id="username"/>
        <Textfield label="Passwort" type="password" id="password"/>
        </form>
        <Button buttonStyle="btn--success--solid" buttonSize="btn--small" onClick={ () => loggedPlayer = document.getElementById("username").value}>Einloggen</Button>
        </div>
    );
}


export default Login;