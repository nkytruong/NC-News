import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticle, getCommentsByArticleId } from "../utils/api";
import Image from 'react-bootstrap/Image';
import CommentCard from "./CommentCard";

function ArticlePage() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([])

  useEffect(() => {
    getArticle(article_id).then(({article}) => {
        setArticle(article)
    })
  },[article_id]);

  useEffect(() => {
    getCommentsByArticleId(article_id).then(({comments}) => {
        setComments(comments)
    }, [article_id])
  })

  return (
    <div>
        <h1>{article.title}</h1>
        <h4> Written by {article.author}</h4>
        <h6>{new Date (article.created_at).toLocaleDateString()}</h6>
        <Image src={article.article_img_url} className="article_img" fluid />
        <p>{article.body}</p>
        <h5>Likes: {article.votes}</h5>
        <h5>Comments ({article.comment_count})</h5>
        {comments.map((comment) => {
            return (
                <CommentCard comment={comment} key={comment.comment_id} />
            )
        })}

    </div>
);
}

export default ArticlePage;
