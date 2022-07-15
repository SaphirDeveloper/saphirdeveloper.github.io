import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "../extras/cookies";

const url = 'https://gruppe3.toni-barth.com/';


export function GameLobby() {
    let navigate = useNavigate();
    let playerID = getCookie("id");
    const {gameID} = useParams();

    useEffect(() => {
        if (playerID != "") {
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

            setCookie("game", gameID);
        } else {
            navigate("../signin/");
        }
    });

    return (
        <div className="GameLobby">
            <p>Game Lobby ID: {gameID}</p>
        </div>
    );
}