import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import App from "./App";
import store, { persistor } from "./store";
import GlobalFonts from "./font";
import { GlobalStyle } from "./styles/globalStyle";
import { PersistGate } from "redux-persist/integration/react";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalFonts />
      <GlobalStyle />
      <App />
    </PersistGate>
  </Provider>
);
