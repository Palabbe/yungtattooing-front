import React, { useState, useEffect, useContext } from "react";
import adminContext from "../../contexts/context";
import axios from "axios";
import styled from "styled-components";
import {
  Sizes,
  Title,
  BorderBottom,
  Container,
  AdminContainer,
  Text,
  Input,
  Button,
} from "../../assets/styles/Theme";
import Loader from "../Loader";
import Card from "./Card";
import { toast } from "react-toastify";

const CardsContainer = styled(Container)`
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0;
  @media (max-width: ${Sizes.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`;

export default function Recommendations() {
  const { admin } = useContext(adminContext);
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
      toast.success(
        "Cet avis a bien été ajouté ! Actualisez la page pour le voir"
      );
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

  if (loading) return <Loader />;

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
      {admin && (
        <AdminContainer flex column aiCenter>
          <Text>Ajouter un avis</Text>
          <Input
            placeholder="Nom du client"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
          <Input
            placeholder="Insérer le lien direct vers la photo"
            value={clientPicture}
            onChange={(e) => setClientPicture(e.target.value)}
          />
          <Input
            placeholder="Avis"
            value={clientOpinion}
            onChange={(e) => setClientOpinion(e.target.value)}
          />
          <Button onClick={postNewRecommendation}>Ajouter un avis</Button>
        </AdminContainer>
      )}
    </Container>
  );
}
