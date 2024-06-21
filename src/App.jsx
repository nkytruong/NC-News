import { useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./Components/Container";
import "./index.css";
import { UserContext, UserProvider } from "./Components/UserContext";
import Login from "./Components/Login";

function App() {
  const { user, setUser } = useContext(UserContext);
console.log(user)

  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/*" element={<Container />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
