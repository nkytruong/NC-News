import * as React from "react";
import Button from '@mui/material/Button';
import { UserContext } from "./UserContext";
import { useContext } from "react";

function MyAccount({isLoggedIn, setIsLoggedIn}) {
    const { user, setUser } = useContext(UserContext);

    function handleSignOutClick(e) {
        setUser("")
        setIsLoggedIn(false)
        }

    return (
    <div>
        <h1>My Account</h1>
        <h2>Welcome {user}</h2>
        <Button variant="outlined" onClick={handleSignOutClick}>Sign Out</Button>
    </div>
    )
}

export default MyAccount