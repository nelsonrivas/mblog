// Internet Explorer 11 requires polyfills and partially supported by this project.
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "typeface-muli";
import "./react-chartjs-2-defaults";
import "./styles/index.css";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./i18n";
import App from "app/App";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
