import ArticleCards from "./ArticleCards";
import Box from "@mui/material/Box";
import CircularIndeterminate from "./LoadingCircle";

function Home({ articles, isLoading }) {
    if(isLoading) {
        return <CircularIndeterminate />
      }

    return (
    <div>
      <h1>Latest News</h1>
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

export default Home;
