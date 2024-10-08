import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ArticleCards from "./ArticleCards";
import { getArticles } from "../utils/api";
import CircularIndeterminate from "./LoadingCircle";
import Box from "@mui/material/Box";

function TopicPages({
  topics,
  articles,
  setArticles,
  isLoading,
  setIsLoading,
}) {
  const { topic } = useParams();
  useEffect(() => {
    setIsLoading(true);

    const params = { topic };
    getArticles(params).then(({ articles }) => {
      setArticles(articles);
      console.log(articles);
    })
      .catch((error) => {
        console.error("Failed to fetch articles:", error);
        setArticles([]); // Clear articles if fetching fails
      })
      .finally(() => {
        setIsLoading(false);
      // setIsLoading(false);
    });
  }, [topic]);

  if (isLoading) {
    return <CircularIndeterminate />;
  }

  return (
    <div>
      <h1>Articles on: {topic.charAt(0).toUpperCase() + topic.slice(1)}</h1>
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
        {articles.map((article) => {
          return (
            <ArticleCards
              article={article}
              articles={articles}
              key={article.article_id}
            />
          );
        })}
      </Box>
    </div>
  );
}

export default TopicPages;
