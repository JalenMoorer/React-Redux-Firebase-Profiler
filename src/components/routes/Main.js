import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/profile" component={Profile} />
  </Switch>
)

export default Main;
