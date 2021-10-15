import logo from "../logo.svg";
import "./App.css";
import { Route, Link } from "react-router-dom";
import React from "react";
import PostDetail from "../pages/PostDetail";
import PostEdit from "../pages/PostEdit";
import PostAdd from "../pages/PostAdd";
import PostList from "../pages/PostList";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import Header from "../components/Header";
// 인덱스에 더 이상 브라우저라우터를 쓰지않고 provider를 써서 store주입 한다. (store에 createBrowsr history선언)
// store에는
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Header />;
        <Route path="/login" exact component={LogIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/" exact component={PostList} />
        <Route path="/detail/:id" exact component={PostDetail} />
        <Route path="/detail/:id/edit" exact component={PostEdit} />
        <Route path="/addpost" exact component={PostAdd} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
