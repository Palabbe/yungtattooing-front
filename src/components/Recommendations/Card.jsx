import React, { useContext } from "react";
import adminContext from "../../contexts/context";
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";
import {
  Sizes,
  Container,
  Text,
  DeleteButton,
} from "../../assets/styles/Theme";
import { zoomInAnimation } from "../../assets/styles/Animations";

const CardContainer = styled(Container)`
  margin: 3%;
  padding: 3%;
  width: 20%;
  animation: 1s ${zoomInAnimation};
  @media (max-width: ${Sizes.tablet}) {
    width: 60%;
    animation: none;
  }
`;

const Picture = styled.img`
  width: 80%;
  @media (max-width: ${Sizes.tablet}) {
    width: 100%;
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

export default function Card({ id, name, picture, opinion }) {
  const { admin } = useContext(adminContext);
  const deleteRecommendation = () => {
    axios
      .delete(`http://localhost:4040/recommendations/${id}`)
      .then(
        (res) => console.log("Status :", res.status),
        toast.success(`Cet avis a été supprimé`)
      )
      .catch((err) => {
        console.error(err);
        toast.error(`${err.message}`);
      });
  };
  return (
    <CardContainer flex column>
      <Container flex aiCenter jcCenter>
        <Picture src={picture} />
      </Container>
      <ClientName>{name}</ClientName>
      <ClientOpinion>{opinion}</ClientOpinion>
      {admin && (
        <DeleteButton onClick={deleteRecommendation}>
          <i class="fas fa-trash-alt"></i>
        </DeleteButton>
      )}
    </CardContainer>
  );
}
