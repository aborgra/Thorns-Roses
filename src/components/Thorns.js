import React from "react"
import { Route } from "react-router-dom"
import ApplicationViews from "./ApplicationViews"
// import NavBar from "./nav/NavBar"
// import Login from "./auth/Login"
// import Register from "./auth/Register"
import "./Thorns.css"
import NurseryList from "./nurseries/NurseryList"

export default () => (
    <>
        <Route path="/" render={props => <NurseryList {...props} />} />
    </>
)
