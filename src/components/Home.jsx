import React from "react";
import { Sizes, Title, Container, Button } from "../assets/styles/Theme";
import { fadeInUpAnimation } from "../assets/styles/Animations";
import { Link } from "react-router-dom";
import styled from "styled-components";
import homePicture from "../assets/img/home.jpg";

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
  @media screen and (max-width: ${Sizes.mobile}) {
    font-size: 1.7rem;
  }
  @media screen and (min-width: ${Sizes.tablet}) and (max-width: ${Sizes.laptop}) {
    font-size: 4rem;
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
