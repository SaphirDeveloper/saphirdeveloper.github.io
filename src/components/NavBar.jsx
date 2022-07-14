import React from "react";
import "./navBar.css";
import {useNavigate} from "react-router-dom";

export const NavBar = () => {
    let navigate = useNavigate();
    return (
    <nav>
        <h3 className="navWebsiteTitle" onClick={ () => {navigate("../home"); }}>Type Speed Duel</h3>
        <ul className="navSites">
            <li className="navListItem" onClick={ () => {navigate("../highscores"); }}>Rangliste</li>
        </ul>
        <ul className="navLogIn">
            <li className="navListItem"></li>
            <li className="navListItem" onClick={ () => {navigate("../login"); }}>Einloggen</li>
            <li className="navListItem" onClick={ () => {navigate("../signin"); }}>Neues Konto erstellen</li>
        </ul>
    </nav>
    );
}