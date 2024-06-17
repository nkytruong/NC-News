import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";

function ArticleCards({ articles }) {
    return (
        <div>
      <Box
        sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-around",
            alignContent: "space-around",
            gap: 2,
        }}
        >
        {articles.map((article) => (
            <Card
            sx={{
              minWidth: 345,
              maxWidth: 345,
              minHeight: 300,
              maxHeight: 300,
            }}
            key={article.title}
            className="article-cards"
          >
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
                <Typography variant="body2" color="text.secondary">
                  {article.author} {article.created_at}
                 
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </div>
  );
}

export default ArticleCards;
