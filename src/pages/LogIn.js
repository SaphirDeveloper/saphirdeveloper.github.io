import React from "react";
import { UserIDInput } from "../components/UserIDInput";

// A page to log in
function LogIn() {
    return (
        <div className="LogIn">
            <h1>Login</h1>
            <UserIDInput />
        </div>
    );
}

export default LogIn;