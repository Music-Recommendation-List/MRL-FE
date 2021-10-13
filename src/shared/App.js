import logo from '../logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';

import React from 'react';
import Main from '../pages/Main';
import SignUp from '../pages/Signup';
import Login from '../pages/LogIn';
import Header from './Header';

function App() {
  return (
    <ConnectedRouter history={history}>
      <Header></Header>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />
    </ConnectedRouter>
  );
}

export default App;
