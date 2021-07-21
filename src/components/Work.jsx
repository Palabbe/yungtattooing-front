import React, { useState, useEffect } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import {
  Sizes,
  Title,
  BorderBottom,
  Container,
  Button,
} from "../assets/styles/Theme";
import { zoomIn } from "react-animations";

const zoomInAnimation = keyframes`${zoomIn}`;

const Picture = styled.img`
  width: 25rem;
  margin-top: 5rem;
  animation: 1s ${zoomInAnimation};
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: ${Sizes.tablet}) {
    width: 80%;
    margin-top: 2rem;
`;

export default function Work() {
  const [workInfos, setWorkInfos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getWorkData = async () => {
      try {
        const workData = await axios.get("http://localhost:4040/work");
        setWorkInfos(workData.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getWorkData();
  }, [loading]);

  return (
    <Container flex column aiCenter jcCenter>
      <Title>MY WORK</Title>
      <BorderBottom />
      <Container>
        {workInfos.map((tattoo) => (
          <Picture src={tattoo.picture} />
        ))}
      </Container>
      <Button>Ajouter un dessin</Button>
    </Container>
  );
}
