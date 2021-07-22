import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import adminContext from "./contexts/context";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work/Work";
import Recommendations from "./components/Recommendations/Recommendations";
import Burger from "./components/Nav/Burger";
import Contact from "./components/Contact";
import Login from "./components/Login";
import styled from "styled-components";
import { Sizes, DeleteButton } from "./assets/styles/Theme";

const Nav = styled.nav`
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  @media (max-width: ${Sizes.tablet}) {
    flex-direction: row;
  }
`;

const LogOutButton = styled(DeleteButton)`
  width: 2.2rem;
  height: 2.2rem;
  font-size: 0.9rem;
`;

export default function RouterApp() {
  const { admin, handleLogout } = useContext(adminContext);
  return (
    <Router>
      <Nav>
        {admin && (
          <LogOutButton type="button" onClick={handleLogout}>
            <i class="fas fa-sign-out-alt"></i>
          </LogOutButton>
        )}
        <Burger />
      </Nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/mywork" component={Work} />
        <Route path="/recommendations" component={Recommendations} />
        <Route path="/contact" component={Contact} />
        <Route path="/admin" component={Login} />
      </Switch>
    </Router>
  );
}
