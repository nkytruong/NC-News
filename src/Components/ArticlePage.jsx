import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticle } from "../utils/api";
import Image from 'react-bootstrap/Image';

function ArticlePage() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticle(article_id).then(({article}) => {
        setArticle(article)
    })
  },[article_id]);

  return (
    <div>
        <h1>{article.title}</h1>
        <h4> Written by {article.author}</h4>
        <h6>{article.created_at}</h6>
        <Image src={article.article_img_url} className="article_img" fluid />
        <p>{article.body}</p>
        <p>Likes: {article.votes}</p>
        <h4>Comments ({article.comment_count})</h4>



    </div>
);
}

export default ArticlePage;
