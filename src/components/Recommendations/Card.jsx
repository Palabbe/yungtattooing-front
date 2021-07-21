import React from "react";
import styled from "styled-components";
import { Sizes, Container, Text } from "../../assets/styles/Theme";

const CardContainer = styled(Container)`
  margin: 3%;
  padding: 3%;
  width: 25%;
  height: auto;
  border: solid 1px #dfd7d0;
`;

const Picture = styled.img`
  height: 30rem;
  margin-top: 5rem;
  @media (max-width: ${Sizes.tablet}) {
    width: 80%;
    margin-top: 2rem;
`;

const ClientName = styled.h1`
  font-size: 1.5rem;
`;

export default function Card({ name, picture, opinion }) {
  return (
    <CardContainer flex column aiCenter>
      <Picture src={picture} />
      <ClientName>{name}</ClientName>
      <Text>{opinion}</Text>
    </CardContainer>
  );
}
