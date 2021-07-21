import React from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import { Sizes, Container, DeleteButton } from "../../assets/styles/Theme";
import { toast } from "react-toastify";
import { zoomIn } from "react-animations";

const zoomInAnimation = keyframes`${zoomIn}`;

const Picture = styled.img`
  height: 30rem;
  margin-top: 5rem;
  animation: 1s ${zoomInAnimation};
  @media (max-width: ${Sizes.tablet}) {
    width: 80%;
    margin-top: 2rem;
    animation: none;
  }
`;

export default function Tattoo({ id, picture }) {
  const deletePicture = () => {
    axios
      .delete(`http://localhost:4040/work/${id}`)
      .then(
        (res) => console.log("Status :", res.status),
        toast.success(`Ce dessin a été supprimé`)
      )
      .catch((err) => {
        console.error(err);
        toast.error(`${err.message}`);
      });
  };
  return (
    <Container>
      <Picture src={picture} />
      <DeleteButton onClick={deletePicture}>
        <i class="fas fa-trash-alt"></i>
      </DeleteButton>
    </Container>
  );
}
