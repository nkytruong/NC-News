import {Routes, Route} from "react-router-dom"
import {useState, useEffect} from "react"
import Home from "./Home";
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
      </Routes>
    </div>
  );
}

export default Container;
