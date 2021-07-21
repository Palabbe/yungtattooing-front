import styled from "styled-components";

export const Sizes = {
  mobile: "425px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "2560px",
};

export const Container = styled.div`
  display: ${(props) => (props.flex ? "flex" : "block")};
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  ${(props) => props.aiCenter && "align-items:center"};
  ${(props) => props.acCenter && "align-content:center"};
  ${(props) => props.jcCenter && "justify-content:center"};
  margin-bottom: 2rem;
`;

const Theme = {
  colorLightBlue: "#e5e7e6",
  colorBeige: "#EEE6D8",
  colorOchre: "#DAAB3A",
  colorLightBrown: "#B67332",
  colorDarkBrown: "#93441A",
};

export const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: bolder;
  font-size: 3rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const BorderBottom = styled.div`
  width: 6rem;
  height: 0.2rem;
  background-color: ${Theme.colorOchre};
  margin-top: -2rem;
  @media (max-width: ${Sizes.tablet}) {
    width: 3.5rem;
    margin-top: -1rem;
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.2rem;
  @media (max-width: ${Sizes.tablet}) {
    font-size: 0.9rem;
  }
`;

export const Input = styled.input`
  padding: 0.5rem;
  width: 100%;
  height: 2.5rem;
  border: none;
  box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.3);
  &:hover {
    border: 1px solid ${Theme.colorBeige};
  }
  &:focus {
    outline: none;
    border: 1px solid ${Theme.colorOchre};
  }
`;

export const Button = styled.button`
  font-family: "Poppins", sans-serif;
  background-color: ${Theme.colorDarkBrown};
  color: white;
  padding: 0.7rem;
  border: none;
  border-radius: 0.5rem;
  width: 7rem;
  margin-top: 1rem;
  font-family: "Poppins", sans-serif;
  &:hover {
    background-color: ${Theme.colorLightBrown};
  }
`;

export default Theme;
