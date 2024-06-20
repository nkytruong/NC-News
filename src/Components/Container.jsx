import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Home from "./Home";
import ArticlePage from "./ArticlePage";
import Login from "./Login";
import MyAccount from "./MyAccount";
import CreateAccount from "./CreateAccount";
import { getArticles } from "../utils/api";
import { UserContext } from "../Components/UserContext";

function Container() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
      const {user, setUser} = useContext(UserContext)

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
          element={<Home articles={articles} isLoading={isLoading} />}
        />
        <Route
          path="/home"
          element={<Home articles={articles} isLoading={isLoading} />}
        />
        <Route
          path="/articles/:article_id"
          element={
            <ArticlePage isLoading={isLoading} setIsLoading={setIsLoading} user={user}/>
          }
        />
        <Route path="/login" element={<Login /> } />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </div>
  );
}

export default Container;
