import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import Thorns from "./components/Thorns"

ReactDOM.render(
    <Router>
        <Thorns />
    </Router>
    , document.getElementById("root"))