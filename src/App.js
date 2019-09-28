import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './components/loginScreen';
import Doctor from './components/doctor';
import User from './components/user';

function App() {
  return (
     <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/doctor" component={Doctor} />
        <Route exact path="/user" component={User} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
