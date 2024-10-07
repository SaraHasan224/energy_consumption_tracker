// @flow

import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./store";
import App from "./App";
import {
  internetConnectionHandler,
} from "./hooks";
import { Detector } from "react-detect-offline";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);
  root.render(
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <Detector
                render={({ online }) => {
                  internetConnectionHandler(online)
                  return <App />;
                }}
              />
          </PersistGate>
       </Provider>
  );
