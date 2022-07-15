import React from "react";
import { UserNameInput } from "../components/UserNameInput";

// A page to sign in
function SignIn() {
    return (
        <div className="SignIn">
            <h1> Registrierung</h1>
            <UserNameInput />
        </div>
    );
}

export default SignIn;