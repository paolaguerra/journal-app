import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import reportWebVitals from "./reportWebVitals";
import { JournalApp } from "./JournalApp";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <JournalApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
