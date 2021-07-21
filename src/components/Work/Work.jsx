import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import {
  Title,
  BorderBottom,
  Container,
  Input,
  Button,
} from "../../assets/styles/Theme";
import Card from "./Card";
import { toast } from "react-toastify";

const TattoosContainer = styled(Container)`
  flex-wrap: wrap;
  margin: 0;
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
          <Container>
            <Card id={tattoo.id} picture={tattoo.picture} />
          </Container>
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