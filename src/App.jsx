import { useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./Components/Container";
import "./index.css";
import { UserContext, UserProvider } from "./Components/UserContext";

function App() {
  const { user } = useContext(UserContext);
  console.log(user);
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <BrowserRouter>
      <Header topics={topics} setTopics={setTopics} />
      <Routes>
        <Route
          path="/*"
          element={
            <Container isLoading={isLoading} setIsLoading={setIsLoading} topics={topics} setTopics={setTopics}/>
          }
        />
        {/* <Route path="/topics/:topic.slug" element={<TopicPages topic={topics}/>} />
          <Route path="/topics" element={<AllTopicsPage/> }/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
