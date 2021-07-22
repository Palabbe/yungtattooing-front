import React from "react";
import {
  Sizes,
  Title,
  BorderBottom,
  Text,
  Container,
} from "../assets/styles/Theme";
import { fadeInRightAnimation } from "../assets/styles/Animations";
import styled from "styled-components";
import contactPicture from "../assets/img/contact.jpg";

const ComponentContainer = styled(Container)`
  @media (max-width: ${Sizes.tablet}) {
    flex-direction: column-reverse;
  }
`;

const TextContainer = styled(Container)`
  width: 30rem;
  animation: 1s ${fadeInRightAnimation};
  @media (max-width: ${Sizes.tablet}) {
    width: 80%;
    animation: none;
  }
`;

const Picture = styled.img`
  width: 30rem;
  margin: 5rem 10rem 0 0;
  @media (max-width: ${Sizes.tablet}) {
    width: 80%;
    margin: 0;
  }
`;

export default function Contact() {
  return (
    <ComponentContainer flex aiCenter jcCenter>
      <Picture src={contactPicture} />
      <TextContainer>
        <Title>CONTACT</Title>
        <BorderBottom />
        <Text>
          <i class="fas fa-map-pin"></i> Lille
        </Text>
        <Text>
          <a
            href="mailto:pauline.labbe7@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-envelope fa-lg" style={{ color: "black" }}></i>
          </a>{" "}
          yungtattooing@gmail.com
        </Text>
      </TextContainer>
    </ComponentContainer>
  );
}
