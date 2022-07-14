import React from "react";
import {useNavigate} from "react-router-dom";
import { setCookie } from "../extras/cookies";
import './highscoreTable.css';

const url = 'https://gruppe3.toni-barth.com/';

export function UserIDInput() {
    let navigate = useNavigate();

    const inputValues = {
        id: ""
    };

    function handleChange(event) {
        inputValues.id = event.target.value;
    }

    function handleSubmit(event) {
        let playerID = inputValues.id;
            
        fetch(url + 'players/' + playerID + '/')
            .then(response => response.json())
            .then(result => {
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
