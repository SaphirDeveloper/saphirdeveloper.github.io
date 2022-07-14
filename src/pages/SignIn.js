import React from "react";
import { UserNameInput } from "../components/UserNameInput";

function SignIn() {
    return (
        <div className="SignIn">
            <h1> Du hast auf "Neues Konto erstellen" geklickt</h1>
            <UserNameInput />
        </div>
    );
}

export default SignIn;