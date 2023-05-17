import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App";
import axios from "axios";
import reducers from "./reducers";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://rem.dbwebb.se/api";

const store = createStore(reducers);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
