import React from "react";
import { Container } from "../assets/styles/Theme";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function Loader() {
  const classes = useStyles();
  return (
    <Container className={classes.root} flex aiCenter jcCenter>
      <CircularProgress />
    </Container>
  );
}
