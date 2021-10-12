import logo from '../logo.svg';
import './App.css';
import {Route,Link,} from "react-router-dom"
import React from 'react';
import PostDetail from '../pages/PostDetail';
import PostEdit from '../pages/PostEdit';
import PostAdd from '../pages/PostAdd';

function App() {
  return (
    <React.Fragment>
       <Route path="/" exact><div>메인 페이지입니다</div></Route>
       <Route path="/detail" exact component={PostDetail}/>
       <Route path="/detail/edit" exact component={PostEdit}/>
       <Route path="/addpost" exact component={PostAdd}/>
    </React.Fragment>
  );
}

export default App;
