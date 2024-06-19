import {Routes, Route} from "react-router-dom"
import {useState, useEffect, useContext} from "react"
import Home from "./Home";
import ArticlePage from "./ArticlePage";
import Login from "./Login";
import MyAccount from "./MyAccount";
import CreateAccount from "./CreateAccount";
import { getArticles } from "../utils/api";
import { UserContext } from '../Components/UserContext';

function Container() {
    const [articles, setArticles] = useState([])
//     const {user, setUser} = useContext(UserContext)

// if(!user){
//   return <Login setUser={setUser}/>
// }


    useEffect(() => {
        getArticles().then(({articles}) => {
            setArticles(articles)
        })
    }, [])

    return (
    <div>
      <Routes>
        <Route path="/" element={<Home articles={articles} setArticles={setArticles}/>} />
        <Route path="/home" element={<Home articles={articles} setArticles={setArticles}/>} />
        <Route path="/articles/:article_id" element={<ArticlePage articles={articles}/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/my-account" element={<MyAccount/>} />
        <Route path="/create-account" element={<CreateAccount/>} />
      </Routes>
    </div>
  );
}

export default Container;
