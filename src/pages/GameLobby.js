import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "../extras/cookies";

// API-URL
const url = 'https://gruppe3.toni-barth.com/';

// A page that represent the current game lobby
export function GameLobby() {
    let navigate = useNavigate();

    // Get current player id
    let playerID = getCookie("id");

    // Get game id from url param
    const {gameID} = useParams();

    useEffect(() => {
        if (playerID != "") {
            // Player is logged in
            // Get last game lobby
            let cookieGameID = getCookie("game");

            if (cookieGameID != "" && cookieGameID != gameID) {
                // Leave old lobby
                fetch(url + 'games/' + cookieGameID, {method: 'PATCH', headers: {'Content-Type':'application/json',}, body: JSON.stringify({
                    player: playerID,
                    action: "leave"
                })})
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                })
                .catch(ex => console.error(ex));
            }

            if (cookieGameID != gameID) {
                // Join new lobby
                fetch(url + 'games/' + gameID, {method: 'PATCH', headers: {'Content-Type':'application/json',}, body: JSON.stringify({
                    player: playerID,
                    action: "join"
                })})
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                })
                .catch(ex => console.error(ex));
            }

            // Create new game id cookie
            setCookie("game", gameID);
        } else {
            // Player is not logged in
            // Navigate to sign in page
            navigate("../signin/");
        }
    });

    return (
        <div className="GameLobby">
            <p>Game Lobby ID: {gameID}</p>
        </div>
    );
}