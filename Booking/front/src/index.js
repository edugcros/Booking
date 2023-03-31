import ReactDOM from "react-dom";
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import App from "../src/App";
import { store } from './store';
import {persistor } from "./store/index";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/">
          <App />
        </BrowserRouter>
      </PersistGate>
    </ReduxProvider>
  </StrictMode>,
  document.getElementById("root")
);
