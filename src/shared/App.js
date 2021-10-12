import "./App.css";
import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";

import { Grid } from "../elements";

function App() {
  return (
    <React.Fragment>
      <Grid>
        <BrowserRouter>
          <Route path="/login" exact component={LogIn} />
          <Route path="/signup" exact component={SignUp} />
        </BrowserRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;
