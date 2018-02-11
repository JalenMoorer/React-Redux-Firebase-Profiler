import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Post from '../pages/Post';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/profile" component={Profile} />
    <Route path="/post" component={Post} />
  </Switch>
)

export default Main;
