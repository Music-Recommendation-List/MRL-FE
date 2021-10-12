import logo from '../logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';
import React from 'react';
import Main from '../pages/Main';

function App() {
  return <Route path="/" exact component={Main} />;
}

export default App;
