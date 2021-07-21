import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  Sizes,
  Title,
  BorderBottom,
  Text,
  Container,
  Input,
  Button,
} from "../assets/styles/Theme";
import juliette from "../assets/img/juliette.jpeg";
import styled, { keyframes } from "styled-components";
import { fadeInLeft } from "react-animations";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const fadeInLeftAnimation = keyframes`${fadeInLeft}`;

const ComponentContainer = styled(Container)`
  @media (max-width: ${Sizes.tablet}) {
    flex-direction: column;
  }
`;

const TextContainer = styled(Container)`
  width: 30rem;
  margin-right: 10rem;
  animation: 1s ${fadeInLeftAnimation};
  @media (max-width: ${Sizes.tablet}) {
    width: 80%;
    margin: 0;
    animation: none;
  }
`;

const Picture = styled.img`
  width: 30rem;
  margin-top: 5rem;
  @media (max-width: ${Sizes.tablet}) {
    width: 80%;
    margin-top: 2rem;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function About() {
  const classes = useStyles();
  const [aboutInfos, setAboutInfos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  const [newChange, setNewChange] = useState(true);

  useEffect(() => {
    const getAboutData = async () => {
      try {
        const aboutData = await axios.get("http://localhost:4040/about");
        setAboutInfos(aboutData.data[0]);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getAboutData();
  }, [loading]);

  const updateText = async () => {
    try {
      await axios.put("http://localhost:4040/about", {
        text,
      });
      setNewChange(!newChange);
      toast.success("Votre modification a été prise en compte");
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      toast.error(`${error.message}`);
    } finally {
      setText();
    }
  };

  if (loading)
    return (
      <Container className={classes.root} flex aiCenter jcCenter>
        <CircularProgress />
      </Container>
    );

  return (
    <ComponentContainer flex aiCenter jcCenter>
      <TextContainer>
        <Title>ABOUT ME</Title>
        <BorderBottom />
        <Text>{aboutInfos.text}</Text>
        <Input value={text} onChange={(e) => setText(e.target.value)} />
        <Button onClick={updateText}>Modifier la description</Button>
      </TextContainer>
      <Picture src={juliette} />
    </ComponentContainer>
  );
}
