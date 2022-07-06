import React from "react";
import "./navBar.css";

let playerId = -1;

export const NavBar = () => {

    return (
    <nav>
        <h3 className="navWebsiteTitle">Type Speed Duel</h3>
        <ul className="navLogIn">
            <li className="navLogInItem">Einloggen</li>
            <li className="navLogInItem">Neues Konto erstellen</li>
        </ul>
    </nav>
    );
}