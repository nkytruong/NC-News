import {Routes, Route} from "react-router-dom"
import {useState, useEffect} from "react"
import Home from "./Home";
import ArticlePage from "./ArticlePage";
import { getArticles } from "../utils/api";

function Container() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles().then(({articles}) => {
            setArticles(articles)
        })
    }, [])

    return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Home articles={articles} setArticles={setArticles}/>} /> */}
        <Route path="/home" element={<Home articles={articles} setArticles={setArticles}/>} />
        <Route path="/articles/:article_id" element={<ArticlePage articles={articles}/>} />
      </Routes>
    </div>
  );
}

export default Container;
