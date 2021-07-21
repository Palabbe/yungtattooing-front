import { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/styles/GlobalStyle";
import RouterApp from "./Router";
import Theme from "./assets/styles/Theme";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <RouterApp />
      </ThemeProvider>
    </>
  );
}

export default App;
