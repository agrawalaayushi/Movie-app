import React from 'react';
import {
  BrowserRouter, Route, Switch
 } from 'react-router-dom';
import Home from '../components/Home/home';

export default () => (
   <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Home {...props}/>} />
      <Route path="/landing-page" exact render={props => <Home {...props}/>} />
    </Switch>
   </BrowserRouter>
 )