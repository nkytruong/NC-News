import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Alert from "@mui/material/Alert";
import { useState, useContext } from "react";
import { postComment } from "../utils/api";
import { UserContext } from "./UserContext";
import Login from "./Login";

function CommentAdder({ setComments, article_id }) {
  const { user, setUser } = useContext(UserContext);
  const [newComment, setNewComment] = useState("");

  function handleChange(e) {
    setNewComment(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const postBody = { username: user, body: newComment };

    postComment(article_id, postBody)
      .then((newCommentFromApi) => {
        setNewComment("");

        setComments((currentComments) => {
          return [newCommentFromApi.postedComment, ...currentComments];
        });
      })
      .catch((err) => {
        console.log("Error posting comment:", err);
        return (
          <Alert severity="error">
            Error posting comment. Please try again
          </Alert>
        );
      });
  }

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "99%" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
        <TextField
          id="filled-multiline-static"
          label="Comment"
          multiline
          rows={4}
          variant="filled"
          value={newComment}
          onChange={handleChange}
        />
      </div>
      {user && newComment.length ? (
        <Button variant="outlined" type="submit" endIcon={<SendIcon />}>
          Comment
        </Button>
      ) : (
        <div>
          <Button variant="outlined" disabled endIcon={<SendIcon />}>
            Comment
          </Button>
        </div>
      )}
      {!user ? <Alert severity="info">Please log in to comment</Alert> : null}
    </Box>
  );
}

export default CommentAdder;
