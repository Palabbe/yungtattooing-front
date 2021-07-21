import React from "react";
import {
  Sizes,
  Title,
  BorderBottom,
  Text,
  Container,
} from "../assets/styles/Theme";
import styled, { keyframes } from "styled-components";
import juliette from "../assets/img/juliette.jpeg";
import { fadeInLeft } from "react-animations";

const fadeInLeftAnimation = keyframes`${fadeInLeft}`;

const ComponentContainer = styled(Container)`
  @media (max-width: ${Sizes.tablet}) {
    flex-direction: column;
  }
`;

const TextContainer = styled(Container)`
  width: 30rem;
  margin-right: 10rem;
  animation: 1s ${fadeInLeftAnimation};
  @media (max-width: ${Sizes.tablet}) {
    width: 80%;
    margin: 0;
    animation: none;
  }
`;

const Picture = styled.img`
  width: 30rem;
  margin-top: 5rem;
  @media (max-width: ${Sizes.tablet}) {
    width: 80%;
    margin-top: 2rem;
`;

export default function About() {
  return (
    <ComponentContainer flex aiCenter jcCenter>
      <TextContainer>
        <Title>ABOUT ME</Title>
        <BorderBottom />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
          numquam. Voluptate nam nostrum dolorum, ipsum consequatur eveniet ab
          qui beatae vitae obcaecati mollitia, quo magni odio recusandae ea amet
          tempora!
        </Text>
      </TextContainer>
      <Picture src={juliette} />
    </ComponentContainer>
  );
}
