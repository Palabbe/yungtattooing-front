import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work/Work";
import Recommendations from "./components/Recommendations/Recommendations";
import Burger from "./components/Nav/Burger";
import Contact from "./components/Contact";
import LoginFeatures from "./components/Authentification/LoginFeatures";
import styled from "styled-components";

const Nav = styled.nav`
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
`;

export default function RouterApp() {
  return (
    <Router>
      <Nav>
        <Burger />
      </Nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/mywork" component={Work} />
        <Route path="/recommendations" component={Recommendations} />
        <Route path="/contact" component={Contact} />
        <Route path="/admin" component={LoginFeatures} />
      </Switch>
    </Router>
  );
}
