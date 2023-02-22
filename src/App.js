import { ThemeProvider } from "styled-components";
import DetailImage from "./components/DetailImage";
import { GlobalStyle } from "./styles/globalStyle";
import { theme } from "./styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* <h1>test2</h1> */}
        <DetailImage />
      </ThemeProvider>
    </>
  );
}

export default App;
