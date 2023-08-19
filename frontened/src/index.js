import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import { Provider } from "react-redux";
import AlertTemplate from "react-alert-template-basic";
import { store } from "./store";
const root = ReactDOM.createRoot(document.getElementById("root"));
const options = {
  timeout: 4000,
  position: positions.MIDDLE,
  transition: transitions.SCALE,
};

root.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Provider>
);
