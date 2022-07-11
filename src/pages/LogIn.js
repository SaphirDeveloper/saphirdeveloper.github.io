import React from "react";
import { UserIDInput } from "../components/UserIDInput";

function LogIn() {
    return (
        <div className="LogIn">
            <h1> Du hast auf "Einloggen" geklickt</h1>
            <UserIDInput />
        </div>
    );
}

export default LogIn;