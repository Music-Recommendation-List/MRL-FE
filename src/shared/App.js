import logo from "../logo.svg";
import "./App.css";
import { Route, Link } from "react-router-dom";
import React from "react";
import PostDetail from "../pages/PostDetail";
import PostEdit from "../pages/PostEdit";
import PostAdd from "../pages/PostAdd";

// 인덱스에 더 이상 브라우저라우터를 쓰지않고 provider를 써서 store주입 한다. (store에 createBrowsr history선언)
// store에는
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/" exact>
          <div>메인 페이지입니다</div>
        </Route>
        <Route path="/detail" exact component={PostDetail} />
        <Route path="/detail/edit" exact component={PostEdit} />
        <Route path="/addpost" exact component={PostAdd} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
