import { Container, Button } from "../../assets/styles/Theme";

export default function Logout({ handleLogout }) {
  return (
    <Container>
      <Button type="button" onClick={handleLogout}>
        Log out
      </Button>
    </Container>
  );
}
