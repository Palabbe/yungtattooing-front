import React, { useState, useEffect } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import {
  Sizes,
  Title,
  BorderBottom,
  Container,
  Input,
  Button,
} from "../assets/styles/Theme";
import { toast } from "react-toastify";
import { zoomIn } from "react-animations";

const zoomInAnimation = keyframes`${zoomIn}`;

const TattoosContainer = styled(Container)`
  flex-wrap: wrap;
`;

const Picture = styled.img`
  height: 30rem;
  margin-top: 5rem;
  animation: 1s ${zoomInAnimation};
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: ${Sizes.tablet}) {
    width: 80%;
    margin-top: 2rem;
`;

const SmallInput = styled(Input)`
  width: 20rem;
  height: 1rem;
`;

export default function Work() {
  const [workInfos, setWorkInfos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [picture, setPicture] = useState("");
  const [newChange, setNewChange] = useState(true);

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

  const postNewPicture = async () => {
    try {
      await axios.post("http://localhost:4040/work", {
        picture,
      });
      setNewChange(!newChange);
      toast.success("Ce dessin a bien été ajouté");
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      toast.error(`${error.message}`);
    } finally {
      setPicture();
    }
  };

  return (
    <Container flex column aiCenter jcCenter>
      <Title>MY WORK</Title>
      <BorderBottom />
      <TattoosContainer flex aiCenter jcCenter>
        {workInfos.map((tattoo) => (
          <Picture src={tattoo.picture} />
        ))}
      </TattoosContainer>
      <SmallInput
        placeholder="Insérer le lien direct vers l'image"
        value={picture}
        onChange={(e) => setPicture(e.target.value)}
      />
      <Button onClick={postNewPicture}>Ajouter un dessin</Button>
    </Container>
  );
}
