import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext } from "react";

function Header({topics, setTopics}) {
  const { user, setUser } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    getTopics().then(({ topics }) => {
      setTopics(topics);
    });
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">NC News</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <NavDropdown title="Topics" id="collapsible-nav-dropdown">
              {topics.map((topic) => (
                <NavDropdown.Item href={`/topics/${topic.slug}`} key={topic.slug}>
                  {topic.slug}
                </NavDropdown.Item>
              ))}
              <NavDropdown.Divider />
              <NavDropdown.Item href="/topics">All Topics</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {/* <Nav.Link href="/create-account">Create Account</Nav.Link> */}
            {!user ? <Nav.Link eventKey={2} href="/login" >
              Login
            </Nav.Link> :
            <Nav.Link eventKey={3} href="/my-account" >
              My Account
            </Nav.Link>
}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
