// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import LoginSelector from './LoginSelector';
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useEffect, useContext } from "react";
import { getUsers } from "../utils/api";
import { UserContext } from "./UserContext";
import CircularIndeterminate from "./LoadingCircle";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Login({isLoggedIn, setIsLoggedIn}) {
  const { user, setUser } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [usersLoading, setUsersLoading] = useState(true);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // function handleChange(e) {
  //   setUsernameInput(e.target.value)
  // }

  // function handleSubmit(e) {
  //     e.preventDefault()

  // }
  useEffect(() => {
    getUsers().then(({ users }) => {
      setUsers(users);
      setUsersLoading(false);
      // console.log(users)
    });
  }, []);

  function handleClick(e) {
    e.preventDefault();
    setUser(e.target.innerText);
    setIsLoggedIn(true);
    setTimeout(() => {
      navigate(`/`);
    }, 2000);
  }

// function handleSignOutClick(e) {
// setUser("")
// setIsLoggedIn(false)
// }

  return (
    <div className="page-container">
      <h1>Login</h1>
      {user ? (
        <div>
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            Successfully logged in. Redirecting...
          </Alert>
          {/* <Button variant="outlined" onClick={handleSignOutClick}>Sign Out</Button> */}
        </div>
      ) : (
        <div>
          <p>Select a User</p>

          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="username-select-label">Select User</InputLabel>
              <Select
                labelId="username-select-label"
                id="username-select"
                label="User"
                onClick={handleClick}
              >
                {usersLoading ? (
                  <CircularIndeterminate />
                ) : (
                  users.map((userData) => {
                    return (
                      <MenuItem value={user.username} key={userData.username}>
                        {userData.username}
                      </MenuItem>
                    );
                  })
                )}
              </Select>
            </FormControl>
          </Box>
          <br/>
          <p>Don't have an account yet? Sign up <Link to="/create-account">here</Link></p>
        </div>
      )}
    </div>
  );
}

export default Login;
