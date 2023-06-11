import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Router from "./router/Router";
import { AuthStore } from "./context/Context";

function App() {
  if (process.env.NODE_ENV === "production") {
    console.log = function no_console() {};
    console.warn = function no_console() {};
    console.error = function no_console() {};
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
