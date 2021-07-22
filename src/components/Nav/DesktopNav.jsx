import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Theme, { Sizes, Container } from "../../assets/styles/Theme";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
    color: black;
    &:hover {
      color: ${Theme.colorOchre};
      font-weight: 600;
    }
  }

  @media (max-width: ${Sizes.tablet}) {
    flex-flow: column nowrap;
    background-color: ${Theme.colorOchre};
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100%;
    width: 15rem;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: black;
      &:hover {
        color: ${Theme.colorLightBlue};
        font-weight: 600;
      }
    }
  }
`;

const DesktopNav = ({ open }) => {
  return (
    <Container>
      <Ul open={open}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li>HOME</li>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <li>ABOUT ME</li>
        </Link>
        <Link to="/mywork" style={{ textDecoration: "none" }}>
          <li>MY WORK</li>
        </Link>
        <Link to="/recommendations" style={{ textDecoration: "none" }}>
          <li>PEOPLE SAY</li>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <li>CONTACT</li>
        </Link>
      </Ul>
    </Container>
  );
};

export default DesktopNav;
