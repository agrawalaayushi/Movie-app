import React from 'react';
import {
  BrowserRouter, Route, Switch
 } from 'react-router-dom';
import Home from '../components/Home/home';
import '../App.css';

export default () => (
   <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Home {...props}/>} />
      <Route path="/upcoming" exact render={props => <Home {...props}/>} />
    </Switch>
   </BrowserRouter>
 )