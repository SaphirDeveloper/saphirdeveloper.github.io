import React from "react";
import {useNavigate} from "react-router-dom";
import { setCookie } from "../extras/cookies";
import './highscoreTable.css';

// API-URL
const url = 'https://gruppe3.toni-barth.com/';

// A formular to log in
export function UserIDInput() {
    let navigate = useNavigate();

    // Container to store input value (id)
    const inputValues = {
        id: ""
    };

    function handleChange(event) {
        // Store input value (id)
        inputValues.id = event.target.value;
    }

    function handleSubmit(event) {
        // Get current input value (id)
        let playerID = inputValues.id;
            
        // Get player with the id from input
        fetch(url + 'players/' + playerID + '/')
            .then(response => response.json())
            .then(result => {
                // Create cookies and navigate home
                setCookie("id", result.id);
                setCookie("name", result.name);
                navigate("../home")
            })
            .catch(error => {
                console.log(error)
        });

        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                User ID:
                <input type="text" onChange={handleChange} />
            </label>
            <input type="submit" value="Bestätigen" />
        </form>
    )
    
}
