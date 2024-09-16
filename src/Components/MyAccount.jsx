import * as React from "react";
import Button from "@mui/material/Button";
import { UserContext } from "./UserContext";
import { useContext } from "react";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";



function MyAccount({ isLoggedIn, setIsLoggedIn }) {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();


  function handleSignOutClick(e) {
    setUser("");
    setIsLoggedIn(false);
    setTimeout(() => {
      navigate(`/`);
    }, 2000);
  }

  return (
    <div className="page-container">
      <h1>My Account</h1>
      {user ? (
        <div>
          <h2>Welcome {user}</h2>
          <Button variant="outlined" onClick={handleSignOutClick}>
            Sign Out
          </Button>
        </div>
      ) : (
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          Logging out...
        </Alert>
      )}
    </div>
  );
}

export default MyAccount;
