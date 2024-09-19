import ArticleCards from "./ArticleCards";
import Box from "@mui/material/Box";
import CircularIndeterminate from "./LoadingCircle";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useEffect } from "react";
import { getArticles } from "../utils/api";
// import ArticleCarousel from "./Carousel";

function Home({ articles, setArticles, isLoading, setIsLoading }) {
  const [sortBy, setSortBy] = useState("");
  const [orderBy, setOrderBy] = useState("");

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleOrderChange = (event) => {
    if (sortBy) {
      setOrderBy(event.target.value);
    }
  };

  const getSortByValue = (sortBy) => {
    switch (sortBy) {
      case "Date":
        return "created_at";
      case "Votes":
        return "votes";
      case "Comment Count":
        return "comment_count";
      default:
        return "";
    }
  };

  const getOrderValue = (orderBy) => {
    switch (orderBy) {
      case "Ascending ↑":
        return "asc";
      case "Descending ↓":
        return "desc";
      default:
        return "";
    }
  };

  useEffect(() => {
    if (sortBy) {
      const sortByValue = getSortByValue(sortBy);
      const orderValue = getOrderValue(orderBy);
      const params = orderBy
        ? { sort_by: sortByValue, order: orderValue }
        : { sort_by: sortByValue };

      setIsLoading(true);
      getArticles(params).then(({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
      });
    }
  }, [sortBy, orderBy]);

  if (isLoading) {
    return <CircularIndeterminate />;
  }

  return (
    <div>
      {/* <Box sx={{
          marginLeft: 4,
          marginRight:4,
          alignItems: "center",
        }}>
      <h1>Trending</h1>
      </Box>
      <ArticleCarousel articles={articles}/> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "space-between",
          gap: { xs: 1, md: 0 },
          marginBottom: 2,
        }}
      >
        <h1 className="title" style={{ whiteSpace: "nowrap" }}>
          All Articles
        </h1>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: { xs: "flex-start", md: "flex-end" },
            gap: 1,
            alignItems: "center",
            marginTop: { xs: 2, md: 0 },
            width: "100%"
          }}
        >
          <FormControl sx={{ minWidth: 120, maxWidth: 120}}>
            <InputLabel id="sort-by-label">Sort By</InputLabel>
            <Select
              labelId="sort-by-label"
              id="sort-by-select"
              value={sortBy}
              label="Sort By"
              onChange={handleSortByChange}
            >
              <MenuItem value="Date">Date</MenuItem>
              <MenuItem value="Votes">Votes</MenuItem>
              <MenuItem value="Comment Count">Comment Count</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 120, maxWidth: 120}}>
            <InputLabel id="order-by-label">Order</InputLabel>
            <Select
              labelId="order-by-label"
              id="order-by-select"
              value={orderBy}
              label="Order"
              onChange={handleOrderChange}
            >
              <MenuItem value="Ascending ↑">Ascending ↑</MenuItem>
              <MenuItem value="Descending ↓">Descending ↓</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
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
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              key={article.article_id}
            />
          );
        })}
      </Box>
    </div>
  );
}

export default Home;