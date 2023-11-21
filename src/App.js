import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Router from "./router/Router";
import { AuthStore } from "./context/Context";
import ReactGA from "react-ga4";

function App() {
  if (process.env.NODE_ENV === "production") {
    console.log = function no_console() {};
    console.warn = function no_console() {};
    console.error = function no_console() {};
    ReactGA.initialize(process.env.REACT_APP_GA_ID);
  }

  return (
    <AuthStore>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </AuthStore>
  );
}

export default App;
