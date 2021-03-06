import React, { useContext } from "react";
import Theme, {
  Container,
  AdminContainer,
  Text,
  Input,
  Button,
} from "../assets/styles/Theme";
import { Link } from "react-router-dom";
import styled from "styled-components";
import adminContext from "../contexts/context";

const LoginContainer = styled(AdminContainer)`
  padding-top: 3rem;
  width: 30rem;
  border-radius: 0.5rem;
  margin-top: 9rem;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
`;

const Span = styled.span`
  margin-left: 0.5rem;
  color: ${Theme.colorDarkBrown};
  font-weight: 600;
  &:hover {
    color: ${Theme.colorLightBrown};
    cursor: pointer;
  }
`;

export default function Admin() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = useContext(adminContext);
  return (
    <Container flex aiCenter jcCenter>
      <LoginContainer flex column jcCenter aiCenter>
        <Label htmlFor="email">Email</Label>
        <Input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Text>{emailError}</Text>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Text>{passwordError}</Text>

        <Container flex column aiCenter>
          {hasAccount ? (
            <>
              <Link to="/">
                <Button type="button" onClick={handleSignup}>
                  S'inscrire
                </Button>
              </Link>
              <Text>
                Tu as déjà un compte ?
                <Span onClick={() => setHasAccount(!hasAccount)}>
                  Se connecter
                </Span>
              </Text>
            </>
          ) : (
            <>
              <Link to="/">
                <Button type="button" onClick={handleLogin}>
                  Se connecter
                </Button>
              </Link>
              <Text>
                Tu n'as pas de compte ?
                <Span onClick={() => setHasAccount(!hasAccount)}>
                  S'inscrire
                </Span>
              </Text>
            </>
          )}
        </Container>
      </LoginContainer>
    </Container>
  );
}
