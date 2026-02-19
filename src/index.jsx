import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk as reduxThunk } from "redux-thunk";
import { model } from "./reducers/model";
import { App } from "./app";
import "./app.scss";

const middleware = [reduxThunk];

const store = legacy_createStore(
  combineReducers({ model: model }),
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
