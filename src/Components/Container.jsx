import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Home from "./Home";
import ArticlePage from "./ArticlePage";
import Login from "./Login";
import MyAccount from "./MyAccount";
import CreateAccount from "./CreateAccount";
import { getArticles } from "../utils/api";
import { UserContext } from "../Components/UserContext";
import TopicPages from "./TopicPages";
import AllTopicsPage from "./AllTopicsPage";

function Container({ isLoading, setIsLoading, topics, setTopics }) {
  const [articles, setArticles] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticles().then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              articles={articles}
              setArticles={setArticles}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          }
        />
        <Route
          path="/home"
          element={
            <Home
              articles={articles}
              setArticles={setArticles}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          }
        />
        <Route
          path="/articles/:article_id"
          element={
            <ArticlePage
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              user={user}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route
          path="/my-account"
          element={
            <MyAccount isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route
          path="/topics/:topic"
          element={
            <TopicPages
              topic={topics}
              articles={articles}
              setArticles={setArticles}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          }
        />
        <Route path="/topics" element={<AllTopicsPage topics={topics} />} />
      </Routes>
    </div>
  );
}

export default Container;
