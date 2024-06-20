import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CommentCard({ comment }) {
  return (
    <Card sx={{ minWidth: 275 }}>
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
      </CardContent>
    </Card>
  );
}
