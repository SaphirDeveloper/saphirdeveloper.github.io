import {useNavigate} from "react-router-dom";
import { setCookie } from "../extras/cookies";
import './highscoreTable.css';

const url = 'https://gruppe3.toni-barth.com/';

export function UserNameInput() {
    let navigate = useNavigate();

    const inputData = {
        name: ""
    };

    function handleChange(event) {
        inputData.name = event.target.value;
    };

    function handleSubmit(event) {
        let player = inputData.name;

        if (player != null && player != "") {
            fetch(url + 'players/', {method: 'POST', headers: {'Content-Type':'application/json',}, body: JSON.stringify({name: player})})
                .then(response => response.json())
                .then(data => {
                    setCookie("id", data.id);
                    setCookie("name", data.name);
                })
                .catch(ex => console.error(ex)); 
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
