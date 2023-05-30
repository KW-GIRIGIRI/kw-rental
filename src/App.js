import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Router from "./router/Router";
import { AuthStore } from "./context/Context";

function App() {
  return (
    <AuthStore>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </AuthStore>
  );
}

export default App;
