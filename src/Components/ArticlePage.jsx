import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getArticle,
  getCommentsByArticleId,
  patchArticleByArticleId,
} from "../utils/api";
import Image from "react-bootstrap/Image";
import CommentCard from "./CommentCard";
import IconButton from "@mui/material/IconButton";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import * as React from "react";
import Alert from "@mui/material/Alert";
// import Stack from '@mui/material/Stack';
import CircularIndeterminate from "./LoadingCircle";

function ArticlePage({ isLoading, setIsLoading }) {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [upvoteClicked, setUpvoteClicked] = useState(false);
  const [upvotes, setUpvotes] = useState(0);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticle(article_id).then(({ article }) => {
      setArticle(article);
      setUpvotes(article.votes);
      setIsLoading(false);
    });
  }, [article_id]);

  useEffect(() => {
    setIsLoading(true);
    getCommentsByArticleId(article_id).then(({ comments }) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, [article_id]);

  function handleClick(e) {
    e.preventDefault();
    if (!upvoteClicked) {
      setUpvoteClicked(true);
      setUpvotes((currentUpvotes) => currentUpvotes + 1);
      const patchBody = { inc_votes: 1 };
      patchArticleByArticleId(article_id, patchBody).catch((err) => {
        setUpvoteClicked(false);
        setUpvotes((currentUpvotes) => currentUpvotes - 1);
        setErr("Something went wrong, please try again.");
      });
    } else {
      setUpvoteClicked(false);
      setUpvotes((currentUpvotes) => currentUpvotes - 1 );
      const patchBody = { inc_votes: -1 };
      patchArticleByArticleId(article_id, patchBody).catch((error) => {
        setUpvoteClicked(true);
        setUpvotes((currentUpvotes) => currentUpvotes + 1);
        setErr("Something went wrong, please try again.");
      });
    }
  }

  if (isLoading) {
    return <CircularIndeterminate />;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <h4> Written by {article.author}</h4>
      <h6>{new Date(article.created_at).toLocaleDateString()}</h6>
      <Image src={article.article_img_url} className="article_img" fluid />
      <p>{article.body}</p>
      <IconButton onClick={handleClick} aria-label="Votes for this article">
        {upvoteClicked ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />} {upvotes}
      </IconButton>
      {err ? (
        <Alert variant="outlined" severity="error">
          Something went wrong. Please try again.
        </Alert>
      ) : null}
      <h5>Comments ({article.comment_count})</h5>
      {comments.map((comment) => {
        return <CommentCard comment={comment} key={comment.comment_id} />;
      })}
    </div>
  );
}

export default ArticlePage;
