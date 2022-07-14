import React from "react";
import { useParams } from "react-router-dom";


export function GameLobby() {
    const {gameID} = useParams();
    return (
        <div className="GameLobby">
            <p>Game Lobby ID: {gameID}</p>
        </div>
    );
}