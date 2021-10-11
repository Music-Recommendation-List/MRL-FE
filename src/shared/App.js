import logo from "../logo.svg";
import "./App.css";
import { Route, Link } from "react-router-dom";
import React from "react";
import LogIn from "../pages/LogIn";

function App() {
  return (
    <React.Fragment>
      <Route path="/login" exact component={LogIn} />
    </React.Fragment>
  );
}

export default App;
