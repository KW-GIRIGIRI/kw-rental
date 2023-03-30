import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyle";
import { theme } from "./styles/theme";
import Router from "./router/Router";
import { AuthStore } from "./context/Context";

function App() {
  return (
    <AuthStore>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </AuthStore>
  );
}

export default App;
