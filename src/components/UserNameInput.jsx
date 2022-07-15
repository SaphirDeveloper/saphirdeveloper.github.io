import {useNavigate} from "react-router-dom";
import { setCookie } from "../extras/cookies";
import './highscoreTable.css';

// API-URL
const url = 'https://gruppe3.toni-barth.com/';

// A formular to create a new player
export function UserNameInput() {
    let navigate = useNavigate();

    // Container to store input value (player name)
    const inputData = {
        name: ""
    };

    function handleChange(event) {
        // Store input value (player name)
        inputData.name = event.target.value;
    };

    function handleSubmit(event) {
        // Get current input value (player name)
        let player = inputData.name;

        // Create player with the name from input
        if (player != null && player != "") {
            fetch(url + 'players/', {method: 'POST', headers: {'Content-Type':'application/json',}, body: JSON.stringify({name: player})})
                .then(response => response.json())
                .then(data => {
                    // Create cookies
                    setCookie("id", data.id);
                    setCookie("name", data.name);
                })
                .catch(ex => console.error(ex)); 
            
            // Navigate home
            navigate("../home");
        };

        event.preventDefault();
    }

    
    return (
        <form onSubmit={handleSubmit}>
             <label>
                Username:
                <input type="text" onChange={handleChange} />
            </label>
            <input type="submit" value="Bestätigen" />
        </form>
    );
    
}
