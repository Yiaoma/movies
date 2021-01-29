import React from "react";
import ReactDOM from "react-dom";
import "core-js/stable";
import "regenerator-runtime/runtime";

import App from "./App";
import {GlobalStyle} from "./globalStyle";

ReactDOM.render(
    <>
        <GlobalStyle/>
        <App/>
    </>
, document.getElementById("root"));