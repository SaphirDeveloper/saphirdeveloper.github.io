import React from "react";
import { HighscoreTable } from "../components/HighscoreTable";

// A page to show global highscores
function Highscores() {
    return (
        <div className="Highscores">
        <HighscoreTable />
        </div>
    );
}

export default Highscores;