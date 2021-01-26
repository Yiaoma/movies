import React from "react";
import Home from "./pages/Home";
import {BrowserRouter as Router} from "react-router-dom";

const App = () => (
    <Router>
        <Home/>
    </Router>
);

export default App;