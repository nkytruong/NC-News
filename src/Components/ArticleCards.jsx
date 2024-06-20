import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom"

function ArticleCards({ article }) {
    return (
        <div>
            <Card
            sx={{
              minWidth: 345,
              maxWidth: 345,
              minHeight: 300,
              maxHeight: 300,
            }}
        
            // key={article.article_id}
            className="article-cards"
          >
            <Link to={`/articles/${article.article_id}`}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={article.article_img_url}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{whiteSpace: 'pre-wrap'}}>
                  {article.author}   {new Date (article.created_at).toLocaleDateString()}
                 
                </Typography>
              </CardContent>
            </CardActionArea>
           </Link>
          </Card>
    </div>
  );
}

export default ArticleCards;
