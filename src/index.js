import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import App from "./App";
import store from "./store";
import GlobalFonts from "./font";
import { GlobalStyle } from "./styles/globalStyle";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <GlobalFonts />
    <GlobalStyle />
    <App />
  </Provider>
);
