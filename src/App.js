import { useState, useEffect } from "react";
import fire from "./Firebase";
import adminContext from "./contexts/context";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/styles/GlobalStyle";
import RouterApp from "./Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Theme from "./assets/styles/Theme";

function App() {
  const [admin, setAdmin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const handleLogin = () => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/email-already-in-use":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
          // no default
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((admin) => {
      if (admin) {
        setAdmin(admin);
      } else {
        setAdmin("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <>
      <adminContext.Provider
        value={{
          admin,
          email,
          setEmail,
          password,
          setPassword,
          handleLogin,
          handleLogout,
          handleSignup,
          hasAccount,
          setHasAccount,
          emailError,
          passwordError,
        }}
      >
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
      </adminContext.Provider>
    </>
  );
}

export default App;
