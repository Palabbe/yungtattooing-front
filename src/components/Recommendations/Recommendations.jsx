import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import {
  Title,
  BorderBottom,
  Container,
  Text,
  Input,
  Button,
} from "../../assets/styles/Theme";
import Card from "./Card";
import { toast } from "react-toastify";

const CardsContainer = styled(Container)`
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0;
`;

const SmallInput = styled(Input)`
  width: 20rem;
  height: 1rem;
  margin-bottom: 1rem;
`;

export default function Recommendations() {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [clientName, setClientName] = useState("");
  const [clientPicture, setClientPicture] = useState("");
  const [clientOpinion, setClientOpinion] = useState("");
  const [newChange, setNewChange] = useState(true);

  useEffect(() => {
    const getRecommendationsData = async () => {
      try {
        const recommendationsData = await axios.get(
          "http://localhost:4040/recommendations"
        );
        setRecommendations(recommendationsData.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getRecommendationsData();
  }, [loading]);

  const postNewRecommendation = async () => {
    try {
      await axios.post("http://localhost:4040/recommendations", {
        client_name: clientName,
        client_picture: clientPicture,
        client_opinion: clientOpinion,
      });
      setNewChange(!newChange);
      toast.success("Cette recommandation a bien été ajoutée");
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      toast.error(`${error.message}`);
    } finally {
      setClientName();
      setClientPicture();
      setClientOpinion();
    }
  };

  return (
    <Container flex column aiCenter jcCenter>
      <Title>PEOPLE SAY</Title>
      <BorderBottom />
      <CardsContainer flex>
        {recommendations.map((recommendation) => (
          <Card
            id={recommendation.id}
            name={recommendation.client_name}
            picture={recommendation.client_picture}
            opinion={recommendation.client_opinion}
          />
        ))}
      </CardsContainer>
      <Text>Ajouter un avis</Text>
      <SmallInput
        placeholder="Nom du client"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
      />
      <SmallInput
        placeholder="Insérer le lien direct vers l'image"
        value={clientPicture}
        onChange={(e) => setClientPicture(e.target.value)}
      />
      <SmallInput
        placeholder="Avis"
        value={clientOpinion}
        onChange={(e) => setClientOpinion(e.target.value)}
      />
      <Button onClick={postNewRecommendation}>Ajouter un avis</Button>
    </Container>
  );
}
