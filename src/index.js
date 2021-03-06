import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./Store";
import { Provider } from "react-redux";
import Config from "./data/config.json";

//const url = "https://api.sheety.co/85d08bfc-d77b-42a5-9d36-50c7aef7dc35";

//fetch(url)
//.then(resp => resp.json())
//.then(config => {
const urlParams = new URLSearchParams(window.location.search);
const configIndex = urlParams.has("debug") ? 1 : 0;
console.log("configIndex", configIndex);
const config = Config.configs[configIndex];
config.debug = urlParams.has("debug");

console.log(config);
ReactDOM.render(
  <Provider store={configureStore(config)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
