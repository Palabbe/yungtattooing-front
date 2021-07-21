import React from "react";
import { Sizes, Title, Container, Button } from "../assets/styles/Theme";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import homePicture from "../assets/img/home.jpg";
import { fadeInUp } from "react-animations";

const fadeInUpAnimation = keyframes`${fadeInUp}`;

const Picture = styled.img`
  width: 50rem;
  animation: 1s ${fadeInUpAnimation};
  @media (max-width: ${Sizes.tablet}) {
    width: 80%;
    animation: none;
  }
`;

const HomeTitle = styled(Title)`
  font-size: 5rem;
  margin: 0;
  padding: 0;
  border-bottom: none;
  @media (max-width: ${Sizes.tablet}) {
    font-size: 2rem;
  }
`;

export default function Home() {
  return (
    <Container flex column aiCenter jcCenter>
      <Picture src={homePicture} />
      <HomeTitle>YUNG TATTOOING</HomeTitle>
      <Link to="/mywork">
        <Button>See my work</Button>
      </Link>
    </Container>
  );
}
