import React from "react";
import styled from "styled-components";
import { Sizes, Container, Text } from "../../assets/styles/Theme";

const CardContainer = styled(Container)`
  margin: 3%;
  padding: 3%;
  width: 20%;
`;

const Picture = styled.img`
  width: 80%;
  @media (max-width: ${Sizes.tablet}) {
    width: 80%;
    margin-top: 2rem;
`;

const ClientName = styled.h1`
  font-size: 1.2em;
  margin-top: -0.5rem;
`;

const ClientOpinion = styled(Text)`
  margin-top: 0rem;
  font-size: 0.9rem;
`;

export default function Card({ name, picture, opinion }) {
  return (
    <CardContainer flex column>
      <Container flex aiCenter jcCenter>
        <Picture src={picture} />
      </Container>
      <ClientName>{name}</ClientName>
      <ClientOpinion>{opinion}</ClientOpinion>
    </CardContainer>
  );
}
