import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./app/store";
import AppThemeProvider from "./AppThemeProvider";

const render = () => {
  const App = require("./App").default;

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
};

render();

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./App", render);
}
