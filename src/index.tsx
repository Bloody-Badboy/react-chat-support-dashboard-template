import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import AppThemeProvider from "./AppThemeProvider";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./app/store";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppThemeProvider>
        <CssBaseline />
        <App />
      </AppThemeProvider>
    </PersistGate>
  </Provider>,
  document.querySelector("#root")
);
