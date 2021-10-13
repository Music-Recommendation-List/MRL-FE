import "./App.css";
import React from "react";

//스토어에서 만든 히스토리를 사용하기 위해 연결
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import { BrowserRouter, Route } from "react-router-dom";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import TestMain from "../pages/TestMain";

import { Grid } from "../elements";

function App() {
  return (
    <React.Fragment>
      <Grid>
        {/* 스토어에서 만든 히스토리를 사용하기 위해 브라우저라우터 대신 커넥트라우터 사용 */}
        <ConnectedRouter history={history}>
          <Route path="/" exact component={TestMain} />
          <Route path="/login" exact component={LogIn} />
          <Route path="/signup" exact component={SignUp} />
        </ConnectedRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;
