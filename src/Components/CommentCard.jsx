import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import { UserContext } from "./UserContext";
import { useContext, useState } from "react";
import { deleteComment } from "../utils/api";
import Alert from '@mui/material/Alert';

export default function CommentCard({ comment }) {
    const { user } = useContext(UserContext);
    const [isDeleted, setIsDeleted] = useState(false)

function handleDeleteClick(e) {
    e.preventDefault()
    deleteComment(comment.comment_id).catch((err) => {
        return <Alert severity="error">This is an error Alert.</Alert>
    })
    setIsDeleted(true)
}

  return (
    <div>
        {! isDeleted ? <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography
          sx={{ mb: 1.5 }}
          color="text.secondary"
          style={{ whiteSpace: "pre-wrap" }}
        >
          {comment.author} {new Date(comment.created_at).toLocaleDateString()}
        </Typography>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          {comment.body}
        </Typography>
        {user === comment.author ? <Button variant="text" endIcon={<DeleteIcon />} onClick={handleDeleteClick} >
        Delete
      </Button> : null}
      </CardContent>
    </Card> : null
    }
    </div>
  );
}
