import { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/styles/GlobalStyle";
import RouterApp from "./Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Theme from "./assets/styles/Theme";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <RouterApp />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ThemeProvider>
    </>
  );
}

export default App;
